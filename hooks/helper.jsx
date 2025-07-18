// hooks/useMutationSuccessEffect.js
import { useEffect } from "react";

export const useMutationSuccessEffect = (isSuccess, callback) => {
  useEffect(() => {
    if (isSuccess) {
      callback();
    }
  }, [isSuccess]);
};
