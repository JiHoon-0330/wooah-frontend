import { Method } from "axios";
import { useInfiniteQuery, UseInfiniteQueryResult } from "react-query";
import apiAxios from "../services/api/axios";
import getValidUrl from "../services/api/url";
import { WEVERSE_API } from "../types/weverse/weverseApi";
import { isStorybook } from "../utils/env";

export interface API extends WEVERSE_API {}

const VALID: { [key in keyof API]: [keyof API[key]["query"]] | [] } = {
  "GET WEVERSE_POST /weverse": [],
};

interface Params<T extends keyof API> {
  api: T;
  query?: API[T]["query"];
  isLazyLoading?: boolean;
  initialData?: any;
}

const useCustomQuery = <T extends keyof API>({
  api,
  query,
  isLazyLoading = false,
  initialData,
}: Params<T>): UseInfiniteQueryResult<API[T]["return"]> => {
  const [method, , uri] = api.split(" ") as [Method, string, string];
  const url = getValidUrl(uri, query, VALID[api]);

  if (!url || isLazyLoading) {
    return useInfiniteQuery("", () => undefined, {});
  }

  return useInfiniteQuery(
    api,
    async ({ pageParam = "" }) => {
      const { data } = await apiAxios({
        url: `${url}${pageParam ? `?from=${pageParam}` : ""}`,
        method,
      });
      return data;
    },
    {
      getNextPageParam: (lastPage) => lastPage.lastId ?? false,
      cacheTime: isStorybook ? 0 : 3000,
      retry: false,
      refetchInterval: false,
      refetchOnWindowFocus: false,
      initialData,
    },
  );
};

export default useCustomQuery;
