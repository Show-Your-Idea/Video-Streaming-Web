import React, { useEffect } from "react";

export const useDocumentEvent = (
  e: string,
  callback: (parameter: React.MouseEvent | MouseEvent) => any,
) => {
  useEffect(() => {
    document.addEventListener(e, callback as (e: Event) => any);
  }, []);
};
