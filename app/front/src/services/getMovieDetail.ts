import { axiosCall } from "@/infraestructure/axios";
import { Movies } from "@/interfaces";

export const getMovieDetail = (movieId: string) => {
  return axiosCall<Movies.MovieDetail>({
    method: "get",
    endpoint: `/movie/${movieId}`,
  });
};
