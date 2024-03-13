import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiUsers";

export const useLogin = () => {
  const { mutate: login, status } = useMutation({
    mutationFn: (data) => loginApi(data),
  });
  const isLoading = status === "pending";

  return { login, isLoading };
};
