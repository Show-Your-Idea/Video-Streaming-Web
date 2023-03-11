import { useEffect } from "react";

export const useKeyDown = (onKeyDown: () => any, targetKeys: string | string[]) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (typeof targetKeys === "string" && event.key === targetKeys) {
      onKeyDown();
    } else if (targetKeys.includes(event.key)) {
      onKeyDown();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};
