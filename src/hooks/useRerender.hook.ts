import { useState } from "react";

export const useRerender = () => {
  const setState = useState(true)[1];
  const handleState = () => {
    setState((prev) => !prev);
  };
  return handleState;
};
