import { ReactNode } from "react";
import style from "../styles/global-layout.module.css";

export default function GlobalLayout ({children}: {children: ReactNode}) {
    return (
        <div className={style.container}>

            <header className={style.header}>
                <h3>자두북스</h3>
            </header>
            
            <main className={style.main}>{children}</main>
            <footer className={style.footer}><p>made by @dev-daeun</p></footer>
        </div>
    )
}