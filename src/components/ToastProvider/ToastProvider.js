import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback((message, variant) => {
    const newToast = {
      id: crypto.randomUUID(),
      message,
      variant,
    };
    setToasts((toasts) => [...toasts, newToast]);
  }, []);

  const removeToast = React.useCallback((id) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  }, []);

  const removeAllToasts = React.useCallback((id) => {
    setToasts([]);
  }, []);

  const value = React.useMemo(() => {
    return {
      toasts,
      addToast,
      removeToast,
      removeAllToasts,
    };
  }, [toasts, addToast, removeToast, removeAllToasts]);

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
