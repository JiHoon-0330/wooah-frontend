import { GetStaticProps } from "next";
import Reels from "../components/Templates/Reels/Reels";
import withTitle from "../hocs/withTitle";
import { ssrReactQuery } from "../services/data-fetch/staticProps";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      dehydratedState: await ssrReactQuery("GET REELS_POST /instagram/reels"),
    },
    revalidate: 60,
  };
};

const ReelsPage = () => {
  return <Reels />;
};

export default withTitle(ReelsPage, "릴스");
