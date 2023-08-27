import { useGetPopularMovies } from "@/hooks/useGetPopularMovies";
import React, { useEffect } from "react";
import { MovieCard } from "./MovieCard";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

export const MovieList = () => {
  const popularMoviesQuery = useGetPopularMovies();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    popularMoviesQuery;
  useInfiniteScroll(popularMoviesQuery);

  if (popularMoviesQuery.isLoading) {
    return <div>Loading...</div>;
  }
  if (popularMoviesQuery.isError) {
    const message = popularMoviesQuery.error.response?.data.status_message;
    return <div className="mt-4">{message}</div>;
  }
  if (data?.pages[0].total_pages === 0) {
    return <div className="mt-4">There is no movies</div>;
  }
  return (
    <section className="mt-4 mx-3">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-1">
        {data?.pages?.map((page) =>
          page.results.map((movieResult) => (
            <MovieCard movieResult={movieResult} key={movieResult.id} />
          ))
        )}
      </div>
    </section>
  );
};
