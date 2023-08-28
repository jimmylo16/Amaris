import { axiosCall } from "@/infraestructure/axios";
import { backendInstance } from "@/infraestructure/backendInstance";
import { User } from "@/interfaces/User";

export type TregisterUserBody = {
  email: string;
  fullName: string;
  password: string;
};
export const registerUser = (registerUserBody: TregisterUserBody) => {
  return axiosCall<User.RegisterResponse>({
    method: "post",
    endpoint: `/auth/register`,
    body: registerUserBody,
    axiosInstance: backendInstance,
  });
};
