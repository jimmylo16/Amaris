import { AxiosInstance } from "axios";
import { moviesAxiosInstance } from "./moviesInstance";

export type AxiosMethods = "get" | "post" | "put" | "delete";
type IAxiosCall = {
  axiosInstance?: AxiosInstance;
  method: AxiosMethods;
  endpoint: string;
  id?: string;
  body?: any;
};

export const axiosCall = async <T>({
  axiosInstance = moviesAxiosInstance,
  method,
  endpoint,
  id,
  body,
}: IAxiosCall): Promise<T> => {
  let url = `${endpoint}`;
  if (id) {
    url = url.concat(`/${id}`);
  }
  try {
    const response = await axiosInstance({ method, url, data: body });
    return response.data;
  } catch (error: any) {
    return Promise.reject(error);
  }
};
