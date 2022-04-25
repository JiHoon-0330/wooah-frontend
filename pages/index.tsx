import Weverse from "../components/Templates/Weverse/Weverse";
import { GetStaticProps } from "next";
import { ssrReactQuery } from "../services/data-fetch/staticProps";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      dehydratedState: await ssrReactQuery("GET WEVERSE_POST /weverse"),
    },
    revalidate: 60,
  };
};

const HomePage = () => {
  return <Weverse />;
};

export default HomePage;
