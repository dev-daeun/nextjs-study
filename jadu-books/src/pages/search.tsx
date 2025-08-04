import { ReactNode } from "react";
import SearchableLayout from "@/layouts/search-layout";
import BookLayout from "@/layouts/book-layout";
import books from "@/mock/books.json";

export default function Search () {
    return <>
        {books.map((book) => <BookLayout key={book.id} {...book}/>)}
    </>
}

Search.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>
  };