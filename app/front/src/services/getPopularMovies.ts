import { axiosCall } from "@/infraestructure/axios";
import { Movies } from "@/interfaces/Movies";

export const getPopularMovies = (page = 1) => {
  return axiosCall<Movies.PopularMovies>({
    method: "get",
    endpoint: `/movie/popular?page=${page}`,
  });
};
