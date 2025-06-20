import { GetStaticProps } from "next";
import Twitter from "../components/Templates/Twitter/Twitter";
import withTitle from "../hocs/withTitle";
import { ssrReactQuery } from "../services/data-fetch/staticProps";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      dehydratedState: await ssrReactQuery("GET TWITTER_POST /twitter"),
    },
    revalidate: 60,
  };
};

const TwitterPage = () => {
  return <Twitter />;
};

export default withTitle(TwitterPage, "트위터");
