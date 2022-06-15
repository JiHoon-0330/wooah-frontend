import { GetStaticProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import Schedule, {
  fetchSchedule,
} from "../components/Templates/Schedule/Schedule";
import withTitle from "../hocs/withTitle";

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

export default withTitle(SchedulePage, "일정");
