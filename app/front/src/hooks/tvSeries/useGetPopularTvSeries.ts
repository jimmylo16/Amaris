import { PopularTvSeriesFailed, TvSeries } from "@/interfaces";
import { getPopularMovies } from "@/services/getPopularMovies";
import { getPopularTvSeries } from "@/services/getPopularTvSeries";
import { useInfiniteQuery } from "@tanstack/react-query";

const PERPAGE = 10;
export const useGetPopularTvSeries = () => {
  const popularTvSeriesQuery = useInfiniteQuery<
    TvSeries.PopularTvSeries,
    PopularTvSeriesFailed
  >(
    ["getPopularTvSeries"],
    ({ pageParam = 1 }) => getPopularTvSeries(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const total = lastPage.total_results;
        return total > allPages.length * PERPAGE ? allPages.length + 1 : null;
      },
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: false,
    }
  );

  return popularTvSeriesQuery;
};
