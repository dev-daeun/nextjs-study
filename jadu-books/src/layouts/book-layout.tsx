import type {BookItem} from "@/types/BookItem";
import Link from "next/link";
import style from "@/styles/book-layout.module.css"


export default function BookLayout({
    id,
    title,
    subTitle,
    description, // eslint-disable-line @typescript-eslint/no-unused-vars
    author,
    publisher,
    coverImgUrl}: BookItem,
) {
    return (
        <Link href={`/books/${id}`} className={style.container}>
            <img src={coverImgUrl}/>
            <div>
                <div className={style.title}>{title}</div>
                <div className={style.subTitle}>{subTitle}</div>
                <br/>
                <div className={style.author}>{author} | {publisher}</div>
            </div>
        </Link>
    )
}