import Weverse from "../components/Templates/Weverse/Weverse";
import apiAxios from "../services/api/axios";
import { dehydrate, QueryClient } from "react-query";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery(
    "GET WEVERSE_POST /weverse",
    async () => {
      const { data } = await apiAxios({
        url: "/weverse",
      });
      return data;
    },
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
    revalidate: 5,
  };
};

const HomePage = () => {
  return <Weverse />;
};

export default HomePage;
