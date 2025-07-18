// hooks/useMutationSuccessEffect.js
import { useEffect } from "react";

export const useMutationSuccessEffect = (isSuccess, callback) => {
  useEffect(() => {
    if (isSuccess) {
      callback();
    }
  }, [isSuccess]);
};

export const useMutationEffect = ({
  isSuccess,
  isError,
  onSuccess,
  onError,
}) => {
  useEffect(() => {
    if (isSuccess && onSuccess) {
      onSuccess();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError && onError) {
      onError();
    }
  }, [isError]);
};
