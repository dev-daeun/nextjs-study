import { ReactNode } from "react";
import style from "../styles/global-layout.module.css";

export default function GlobalLayout ({children}: {children: ReactNode}) {
    return (
        <div className={style.container}>

            <header className={style.header}>
                <h1>This is Header</h1>
            </header>
            
            <main className={style.main}>{children}</main>
            <footer className={style.footer}><h1>This is Footer</h1></footer>
        </div>
    )
}