import { getTvSeriesDetail } from "@/services/getTvSeriesDetail";
import { useQuery } from "@tanstack/react-query";

export const useGetTvSeriesDetail = (tvSerieId: string) => {
  const tvSeriesQuery = useQuery(
    ["tvSeries", tvSerieId],
    () => getTvSeriesDetail(tvSerieId),
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
  return tvSeriesQuery;
};
