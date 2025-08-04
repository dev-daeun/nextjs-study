import { ReactNode } from "react";
import style from "../styles/index.module.css";
import SearchableLayout from "@/layouts/search-layout";
import BookLayout from "@/layouts/book-layout"
import books from "@/mock/books.json"

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => <BookLayout key={book.id} {...book}/>)}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => <BookLayout key={book.id} {...book}/>)}
      </section>
      
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
};