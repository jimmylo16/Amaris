import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { useGetPopularTvSeries } from "@/hooks/useGetPopularTvSeries";
import { TvSeriesCard } from "./TvSeriesCard";

export const TvSeriesList = () => {
  const popularTvQuery = useGetPopularTvSeries();

  const { data } = popularTvQuery;
  useInfiniteScroll(popularTvQuery);

  if (popularTvQuery.isLoading) {
    return <div>Loading...</div>;
  }
  if (popularTvQuery.isError) {
    const message = popularTvQuery.error.response?.data.status_message;
    return <div className="mt-4">{message}</div>;
  }
  if (data?.pages[0].total_pages === 0) {
    return <div className="mt-4">There is no movies</div>;
  }
  return (
    <section className="mt-4 mx-3">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-1">
        {data?.pages?.map((page) =>
          page.results.map((tvResult) => <TvSeriesCard tvResult={tvResult} />)
        )}
      </div>
    </section>
  );
};
