import GlobalLayout from "@/layouts/global-layout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ReactNode } from "react";


type PageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
}

export default function App({ Component, pageProps }: AppProps & {Component: PageWithLayout}) {

  const router = useRouter();
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  useEffect(() => {
    router.prefetch("/search");
  }, []);

  return <>
    <GlobalLayout>
      {getLayout(<Component {...pageProps} />)}
      </GlobalLayout>
  </>
}