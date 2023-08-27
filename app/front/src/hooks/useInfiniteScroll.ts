import { UseInfiniteQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect } from "react";

export const useInfiniteScroll = (
  query: UseInfiniteQueryResult<any, AxiosError<any>>
) => {
  const { hasNextPage, fetchNextPage } = query;
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
};
