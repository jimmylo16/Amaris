import { axiosCall } from "@/infraestructure/axios";
import { TvSeries } from "@/interfaces/TvSeries";

export const getPopularTvSeries = (page = 1) => {
  return axiosCall<TvSeries.PopularTvSeries>({
    method: "get",
    endpoint: `/tv/popular?page=${page}`,
  });
};
