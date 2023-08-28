import { TregisterUserBody, registerUser } from "@/services/registerUser";
import { useMutation } from "@tanstack/react-query";

export const useRegisterMutation = () => {
  const registerUserMutation = useMutation({
    mutationFn: (registerUserBody: TregisterUserBody) =>
      registerUser(registerUserBody),
  });
  return registerUserMutation;
};
