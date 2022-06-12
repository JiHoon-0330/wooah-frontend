import { GetStaticProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import Schedule, {
  fetchSchedule,
} from "../components/Templates/Schedule/Schedule";

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("/schedule", fetchSchedule);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60,
  };
};

const SchedulePage = () => {
  return <Schedule />;
};

export default SchedulePage;
