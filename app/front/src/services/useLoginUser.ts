import { axiosCall } from "@/infraestructure/axios";
import { backendInstance } from "@/infraestructure/backendInstance";
import { User } from "@/interfaces/User";

export type TloginUserBody = {
  email: string;
  password: string;
};
export const loginUser = (loginrUserBody: TloginUserBody) => {
  return axiosCall<User.Response>({
    method: "post",
    endpoint: `/auth/login`,
    body: loginrUserBody,
    axiosInstance: backendInstance,
  });
};
