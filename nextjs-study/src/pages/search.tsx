import { useRouter } from "next/router";

export default function Search () {
    const router = useRouter();
    const { author, publisher } = router.query;
    return <>
        <p>this is search page</p>
        <p>you searched author by : { author }</p>
        <p>you searched publisher by : { publisher }</p>
    </>
}
