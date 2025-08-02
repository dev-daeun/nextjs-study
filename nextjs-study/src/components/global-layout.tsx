import { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import style from "../styles/global-layout.module.css";

export default function GlobalLayout ({children}: {children: ReactNode}) {
    const router = useRouter();
    const onClickButton = () => {
       router.push("/search");
    };
    return (
        <div className={style.container}>

            <header className={style.header}>
                <h1>This is Header</h1>
                <Link href="/">index</Link>
                &nbsp;
                <Link href="/search">search</Link>
                &nbsp;
                <Link href="/books/1" prefetch={false}>book 1</Link> 
                <div>
                    <button onClick={onClickButton}>test 페이지로 이동</button>
                </div>
            </header>
            
            <main className={style.main}>{children}</main>
            <footer className={style.footer}><h1>This is Footer</h1></footer>
        </div>
    )
}