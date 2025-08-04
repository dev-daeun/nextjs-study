import fetchBook from "@/api/fetch-book";
import style from "@/styles/[id].module.css";
import { BookItem } from "@/types/BookItem";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const id = context.params!.id
  const book: BookItem | null = await fetchBook(Number(id));
  return {
    props: {
      book
    }
  }
}

export default function BookDetail ({ book }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!book) {
    return <>
      <h3>404 NOT FOUND</h3>
    </>
  }  
  const {
        id,
        title,
        subTitle,
        description,
        author,
        publisher,
        coverImgUrl
    } = book
    return (
      <div className={style.container}>
          <div className={style.cover_img_container} style={{ backgroundImage: `url('${coverImgUrl}')` }}>
              <img src={coverImgUrl}/>
          </div>
          <div className={style.title}>{title}</div>
          <div className={style.subTitle}>{subTitle}</div>
          <div className={style.author}>{author} | {publisher}</div>
          <div className={style.description}>{description}</div>
      </div>
    )

}