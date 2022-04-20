import Weverse from "../components/Templates/Weverse/Weverse";
import apiAxios from '../services/api/axios';
import { dehydrate, QueryClient } from "react-query";

export async function getStaticProps() {
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
    props:{dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),}
  }
}

const HomePage = () => {
  return <Weverse />;
};

export default HomePage;
