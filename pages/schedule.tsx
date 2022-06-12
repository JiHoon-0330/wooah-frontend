import { GetStaticProps } from "next";
import { QueryClient } from "react-query";
import Schedule, {
  fetchSchedule,
} from "../components/Templates/Schedule/Schedule";

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  return {
    props: {
      dehydratedState: await queryClient.prefetchQuery(
        "/schedule",
        fetchSchedule,
      ),
    },
    revalidate: 60,
  };
};

const SchedulePage = () => {
  return <Schedule />;
};

export default SchedulePage;
