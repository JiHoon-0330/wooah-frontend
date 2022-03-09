import "../styles/globals.css";
import { useRef } from "react";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Layout from "../components/Layout/Layout";
import useSetHeight from "../hooks/useSetHeight";

function MyApp({ Component, pageProps }: AppProps) {
  // if (typeof window === "undefined") {
  //   (async () => {
  //     const { server } = await import("../mocks/server");
  //     server.listen();
  //     console.log(`server`);
  //   })();
  // } else {
  //   (async () => {
  //     const { worker } = await import("../mocks/browser");
  //     worker.start();
  //     console.log(`worker`);
  //   })();
  // }

  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  useSetHeight();

  return (
    <>
      <QueryClientProvider client={queryClientRef.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
