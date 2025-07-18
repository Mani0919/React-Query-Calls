// useCustomMutation.js
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCustomMutation = (mutationFn, queryKey, message) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries([queryKey]);
      if (message) console.log(message);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
