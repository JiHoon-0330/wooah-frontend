import { GetStaticProps } from "next";
import Reels from "../components/Templates/Reels/Reels";
import { ssrReactQuery } from "../services/data-fetch/staticProps";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      dehydratedState: await ssrReactQuery("GET REELS_POST /instagram/reels"),
    },
  };
};

const ReelsPage = () => {
  return <Reels />;
};

export default ReelsPage;
