import { axiosCall } from "@/infraestructure/axios";
import { TvSeries } from "@/interfaces/TvSeries";

export const getTvSeriesDetail = (tvSerieId: string) => {
  return axiosCall<TvSeries.TvSeriesDetail>({
    method: "get",
    endpoint: `/tv/${tvSerieId}`,
  });
};
