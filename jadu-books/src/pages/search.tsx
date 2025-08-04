import { ReactNode } from "react";
import SearchableLayout from "@/layouts/search-layout";

export default function Search () {
    return <>
    <p>this is search result page</p>
    </>
}

Search.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>
  };