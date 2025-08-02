import { useRouter } from "next/router";
import { ReactNode } from "react";
import SearchableLayout from "@/components/searchable-layout";

export default function Search () {
    const router = useRouter();
    const { author, publisher } = router.query;
    return <>
        <p>this is search page</p>
        <p>you searched author by : { author }</p>
        <p>you searched publisher by : { publisher }</p>
    </>
}

Search.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>
  };