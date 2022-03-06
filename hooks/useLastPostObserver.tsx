import { useCallback, useRef } from "react";
import { FetchNextPageOptions, InfiniteQueryObserverResult } from "react-query";
import { WeverseReturn } from "../types/weverse/weverseType";

const useLastPostObserver = (
  isLoading: boolean,
  pageParams: any[],
  hasNextPage: boolean,
  fetchNextPage: (options?: FetchNextPageOptions | undefined) => Promise<
    InfiniteQueryObserverResult<
      {
        data: WeverseReturn[];
        lastId: number;
        hasMore: boolean;
      },
      unknown
    >
  >,
) => {
  const observer = useRef<IntersectionObserver>();
  const ref = useCallback(
    (post) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      if (post) observer.current.observe(post);
    },
    [isLoading, hasNextPage, pageParams],
  );

  return { ref };
};

export default useLastPostObserver;
