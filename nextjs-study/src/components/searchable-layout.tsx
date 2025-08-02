import { useRouter } from "next/router";
import { ReactNode } from "react";
import {useState} from "react";


export default function SearchableLayout ({children}: {children: ReactNode}) {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    const onSubmitSearchInput = () => {
        if (!search) return;
        router.push(`/search?q=${search}`);
    };
    const onKeyPreesed = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onSubmitSearchInput();
        }
    };
    return (<div>
        <input placeholder="검색어를 입력하세요" onKeyDown={onKeyPreesed} onChange={onChangeSearchInput} value={search}/>
        <button onClick={onSubmitSearchInput}>검색</button>
        {children}
    </div>);
}