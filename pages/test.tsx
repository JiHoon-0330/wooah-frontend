import apiAxios from "../services/api/axios";
import useSWR from "swr";

const getData = async () => {
  const { data } = await apiAxios({
    url: "/",
    method: "GET",
  });
  return data;
};

export async function getStaticProps() {
  const data = await getData();

  return {
    props: {
      fallback: {
        "/": data,
      },
    },
  };
}

export default () => {
  const { data } = useSWR("/", getData);
  return <span>{data}</span>;
};
