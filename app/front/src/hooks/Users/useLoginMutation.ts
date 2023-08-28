import { TloginUserBody, loginUser } from "@/services/useLoginUser";
import { useMutation } from "@tanstack/react-query";

export const useLoginMutation = () => {
  const loginMutation = useMutation({
    mutationFn: (registerUserBody: TloginUserBody) =>
      loginUser(registerUserBody),
  });
  return loginMutation;
};
