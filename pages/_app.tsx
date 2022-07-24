import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Layout from "../components/Layout/Layout";
import useSetHeight from "../hooks/useSetHeight";
import apiAxios from "../services/api/axios";
import "../styles/globals.css";

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

  useSetHeight();

  useEffect(() => {
    if (!window) return;
    const { userAgent = "" } = window.navigator;
    const user = JSON.parse(localStorage.getItem("USER") ?? "null");
    const hash = [...Array(3)]
      .map(() => Math.random().toString(36).slice(2))
      .join("");
    const userId = user?.userId ?? hash;
    const count = user?.count ? user?.count + 1 : 1;

    if (!user) {
      localStorage.setItem("USER", JSON.stringify({ userId, count }));
    }

    apiAxios({
      url: "/user",
      params: {
        userAgent,
        count,
        userId,
      },
    });
  }, []);

  return (
    <>
      <QueryClientProvider client={client}>
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
