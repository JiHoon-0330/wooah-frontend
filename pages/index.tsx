import Weverse from "../components/Templates/Weverse/Weverse";
import apiAxios from '../services/api/axios';
import { WeverseReturn } from '../types/weverse/weverseType';
// import { dehydrate, QueryClient } from "react-query";
// import apiAxios from "../services/api/axios";

export async function getStaticProps() {
  const {data}=  await apiAxios({
    url:"/weverse",
    method:"GET"
  })

  return {
    props: {initialData:data}, 
  }
}

interface Props{
  initialData:{ data: WeverseReturn[]; lastId: number; hasMore: boolean }
}


const HomePage = ({initialData}:Props) => {
  return <Weverse initialData={initialData}/>;
};

// export async function getServerSideProps() {
//   const queryClient = new QueryClient();
//   await queryClient.prefetchInfiniteQuery(
//     "GET WEVERSE_POST /weverse",
//     async () => {
//       const { data } = await apiAxios({
//         url: "/weverse",
//       });
//       return data;
//     },
//   );

//   return {
//     props: {
//       dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
//     },
//   };
// }

export default HomePage;
