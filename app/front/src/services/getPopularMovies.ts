import { axiosCall } from "@/infraestructure/axios";
import { Movies } from "@/interfaces/Movies";

export const getPopularMovies = () => {
  return axiosCall<Movies.PopularMovies>({
    method: "get",
    endpoint: "/movie/popular",
  });
};
