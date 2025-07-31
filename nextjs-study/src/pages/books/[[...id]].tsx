import { useRouter } from "next/router"

export default function BookDetail () {
    const router = useRouter();
    const { id } = router.query;  // path paramter 도 router.query 으로 접근;
    const idArray = id as string[] | undefined;

    if (idArray == undefined) {
            return <>
            <h3>Optional Catch-All Segment</h3>
            <p>path parameter not specified. Redirect to book list.</p>
        </>
    }
    
    return <>
        <h3>Optional Catch-All Segment</h3>
        <p>your path parameter input : { idArray[0] }</p>
    </>
}

/* 파일명에 따라 sub url 에 대한 처리가 달라짐 
1. id.tsx -> /books/1/2, /books 와 같이 /books/{id} 형태가 아닌 url 에 대해서는 404 응답
2. [...id].tsx -> /books/1/2, /books/1/2/3 과 같이 /books/{id} 하위에 url 이 더 붙는 경우 처리 (aka. Catch-All Segment) 
3. [[...id]].tsx -> 2번 + /books 와 같이 path param 없는 경우도 처리 (aka. Optional Catch-All Segment)
*/
