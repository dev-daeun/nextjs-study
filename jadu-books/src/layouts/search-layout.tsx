import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import {useState} from "react";
import style from "@/styles/search-layout.module.css";


export default function SearchableLayout ({children}: {children: ReactNode}) {
    const [search, setSearch] = useState("");
    const router = useRouter();
    const { q } = router.query;

    useEffect(() => {
        setSearch(q as string || "");
    }, [q]);

    const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    const onSubmitSearchInput = () => {
        if (!search || q == search) return;
        console.log("search pushed ", search);
        router.push(`/search?q=${search}`);
    };
    const onKeyPreesed = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onSubmitSearchInput();
        }
    };
    return (
    <div>
        <div className={style.searchbar_container}>
            <input placeholder="검색어를 입력하세요" onKeyDown={onKeyPreesed} onChange={onChangeSearchInput} value={search}/>
            <button onClick={onSubmitSearchInput}>검색</button>
        </div>
        {children}
    </div>);
}