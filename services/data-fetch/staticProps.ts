import { Method } from "axios";
import { dehydrate, QueryClient } from "react-query";
import { API } from "../../hooks/useCustomQuery";
import apiAxios from "../api/axios";

export const ssrReactQuery = async (type: keyof API) => {
  const queryClient = new QueryClient();
  const [method, , uri] = type.split(" ") as [Method, string, string];

  await queryClient.prefetchInfiniteQuery(type, async () => {
    const { data } = await apiAxios({
      url: uri,
      method,
    });
    return data;
  });

  return JSON.parse(JSON.stringify(dehydrate(queryClient)));
};
