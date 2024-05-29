import React from "react";

function useEscapeKey(callback) {
  React.useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        callback();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [callback]);
}

export default useEscapeKey;
