import { ReactNode } from "react";
import style from "../styles/index.module.css";
import SearchableLayout from "@/layouts/search-layout";

export default function Home() {
  return (
    <>
    <h1 className={style.h1}>this is index page</h1>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
};