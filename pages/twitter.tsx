import { dehydrate, QueryClient } from "react-query";
import Twitter from "../components/Templates/Twitter/Twitter";
import apiAxios from "../services/api/axios";

const TwitterPage = () => {
  return <Twitter />;
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery(
    "GET TWITTER_POST /twitter",
    async () => {
      const { data } = await apiAxios({
        url: "/twitter",
      });
      return data;
    },
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

export default TwitterPage;
