import { GetStaticProps } from "next";
import Twitter from "../components/Templates/Twitter/Twitter";
import { ssrReactQuery } from "../services/data-fetch/staticProps";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      dehydratedState: await ssrReactQuery("GET TWITTER_POST /twitter"),
    },
  };
};

const TwitterPage = () => {
  return <Twitter />;
};

export default TwitterPage;
