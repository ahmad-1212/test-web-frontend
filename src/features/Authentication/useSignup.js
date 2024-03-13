import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiUsers";

export const useSignup = () => {
  const { mutate: signup, status } = useMutation({
    mutationFn: (data) => signupApi(data),
  });

  const isLoading = status === "pending";

  return { isLoading, signup };
};
