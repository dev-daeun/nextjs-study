import { ReactNode } from "react";
import SearchableLayout from "@/layouts/search-layout";
import BookLayout from "@/layouts/book-layout";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchAllBooks from "@/api/fetch-all-books";


export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const { q } = context.query;
    const searchedBooks = await fetchAllBooks(q as string);
    return {
        props: {
            searchedBooks
        }
    }
}


export default function Search ({searchedBooks}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return <>
        {searchedBooks.map((book) => <BookLayout key={book.id} {...book}/>)}
    </>
}

Search.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>
  };