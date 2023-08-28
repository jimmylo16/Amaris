import { getMovieDetail } from "@/services/getMovieDetail";
import { useQuery } from "@tanstack/react-query";

export const useGetMovieDetail = (movieId: string) => {
  const movieQuery = useQuery(
    ["movie", movieId],
    () => getMovieDetail(movieId),
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
  return movieQuery;
};
