import { axiosCall } from "@/infraestructure/axios";
import { backendInstance } from "@/infraestructure/backendInstance";
import { Movies } from "@/interfaces";

export const addToFav = (userId: string, movieBody: Movies.Result) => {
  return axiosCall<any>({
    method: "post",
    endpoint: `/favMovies/${userId}`,
    body: movieBody,
    axiosInstance: backendInstance,
  });
};
