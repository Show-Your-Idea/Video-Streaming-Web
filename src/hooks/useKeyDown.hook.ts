import { useEffect } from "react";

export const useKeyDown = (targetKey: string, onKeyDown: () => any) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === targetKey) {
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
