import GlobalLayout from "@/components/global-layout";
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
  /* prefetching : 컴포넌트가 렌더링 된 직후 해당 컴포넌트에서 이동하는 페이지들을 미리 서버에서 받아오는 것
     - 개발 환경에서는 동작 안하고 프로덕트 환경으로 배포 (build & run) 했을 떄에만 적용 가능
     - Link 컴포넌트는 기본적으로 prefetching 대상. 안하고 싶으면 컴포넌트에 prefetch={false} 옵션 부여.
  */
  useEffect(() => {
    /* App 컴포넌트가 최초로 렌더링 될 때 search 페이지 pre-fetching 하기 */
    router.prefetch("/search");
  }, []);


  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return <>
    <GlobalLayout>
      {getLayout(<Component {...pageProps} />)}
      </GlobalLayout>
  </>
}