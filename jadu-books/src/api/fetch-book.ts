import { BookItem } from "@/types/BookItem";

export default async function fetchBook (id: number): Promise<BookItem | null> {
    const url = `http://localhost:12345/book/${id}`
    try {
        const response = await fetch(url)
        console.log("#########", response.status)
        if (!response.ok) {
            throw new Error()
        }
        return await response.json()
    }
    catch (err) {
        console.error(err);
        return null;
    }
}