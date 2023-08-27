import { useGetPopularMovies } from "@/hooks/useGetPopularMovies";
import React, { useEffect } from "react";

export const MovieList = () => {
  const popularMoviesQuery = useGetPopularMovies();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    popularMoviesQuery;
  useEffect(() => {
    let fetching = false;
    const handleScroll = async (e: any) => {
      const { scrollHeight, scrollTop, clientHeight } =
        e.target.scrollingElement;
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();
        fetching = false;
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPage, hasNextPage]);

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
      <div className="grid grid-cols-2 gap-4  md:grid-cols-3 lg:grid-cols-4">
        {data?.pages?.map((page) => page.results.map((item) => <></>))}
      </div>
    </section>
  );
};
