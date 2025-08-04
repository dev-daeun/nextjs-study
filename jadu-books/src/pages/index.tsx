import { ReactNode } from "react";
import style from "../styles/index.module.css";
import SearchableLayout from "@/layouts/search-layout";
import BookLayout from "@/layouts/book-layout"
import { InferGetServerSidePropsType } from "next";
import fetchAllBooks from "@/api/fetch-all-books";
import fetchRecommendedBooks from "@/api/fetch-recommend-books";


export const getServerSideProps = async () => {
  /* SSR (server-side rendering) 에 필요한 data fetching 담당
     컴포넌트 함수보다 먼저 실행됨
     nexjs 서버에서만 실행됨 (브라우저에서 실행 x)

    index 페이지 요청 
     -> nextjs 서버에서 getServerSideProps() 1회 호출 (= SSR 수행)
     -> getServerSideProps() 호출 결과를 매개변수로 컴포넌트 함수 호출
     -> 브라우저는 컴포넌트 함수 호출결과 및 js 번들 수신
     
    * 컴포넌트 함수는 nextjs 서버에서 1회(SSR), 브라우저에서 1회(Hydration) 실행됨
      => 컴포넌트 함수 내에서는 기본적으로 브라우저와 관련된 객체/속성 접근 불가
         (접근하려면 useEffect() 내부에서 접근 가능)
  */
  const [allBooks, recommendedBooks] = await Promise.all([fetchAllBooks(), fetchRecommendedBooks()])
  return {
    props: {
      allBooks,
      recommendedBooks,
    }
  }
};


export default function Home({ allBooks, recommendedBooks }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {recommendedBooks.map((book) => <BookLayout key={book.id} {...book}/>)}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {allBooks.map((book) => <BookLayout key={book.id} {...book}/>)}
      </section>
      
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
};