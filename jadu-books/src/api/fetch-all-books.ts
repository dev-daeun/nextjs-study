import { BookItem } from "@/types/BookItem";

export default async function fetchAllBooks(q?: string): Promise<BookItem[]> {
    let url = `http://localhost:12345/book`
    if (q) {
        url += `/search?q=${q}`
    }
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error()
        }
        return await response.json()
    }
    catch (err) {
        console.error(err);
        return [];
    }
}