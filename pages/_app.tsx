import "../styles/globals.css";
import { useMemo, useState } from "react";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Layout from "../components/Layout/Layout";
import useSetHeight from "../hooks/useSetHeight";
import { SWRConfig } from "swr";

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
  const [client] = useState(() => new QueryClient());

  const swrConfig = useMemo(
    () => ({
      fallback: pageProps.fallback,
    }),
    [pageProps.fallback],
  );

  useSetHeight();

  return (
    <>
      <QueryClientProvider client={client}>
        <Hydrate state={pageProps.dehydratedState}>
          <SWRConfig value={swrConfig}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SWRConfig>
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
