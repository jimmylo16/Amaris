import { axiosCall } from "@/infraestructure/axios";
import { backendInstance } from "@/infraestructure/backendInstance";
import { Movies } from "@/interfaces";

export const addToFav = (movieBody: Movies.Result) => {
  return axiosCall<any>({
    method: "post",
    endpoint: `/fav/`,
    body: movieBody,
    axiosInstance: backendInstance,
  });
};
