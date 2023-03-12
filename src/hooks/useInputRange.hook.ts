import React, { useState } from "react";

export const useInputRange = (initialValue: number, callback?: ($: number) => any) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (callback) callback(Number(e.target.value));
    setValue(Number(e.target.value));
  };
  return { value, onChange };
};
