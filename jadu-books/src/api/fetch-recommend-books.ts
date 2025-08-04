import { BookItem } from "@/types/BookItem";

export default async function fetchRecommendedBooks (): Promise<BookItem[]> {
    const url = "http://localhost:12345/book/random"
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error();
        }
        return await response.json()
    }
    catch (err) {
        console.log(err);
        return []
    }
}