import { Movies } from "@/interfaces/Movies";
import { getPopularMovies } from "@/services/getPopularMovies";
import { useInfiniteQuery } from "@tanstack/react-query";

const PERPAGE = 10;
export const useGetPopularMovies = () => {
  const usersQuery = useInfiniteQuery<
    Movies.PopularMovies,
    Movies.PopularMoviesFailed
  >(["getPopularMovies"], ({ pageParam = 1 }) => getPopularMovies(pageParam), {
    getNextPageParam: (lastPage, allPages) => {
      const total = lastPage.total_results;
      return total > allPages.length * PERPAGE ? allPages.length + 1 : null;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
  });

  return usersQuery;
};
