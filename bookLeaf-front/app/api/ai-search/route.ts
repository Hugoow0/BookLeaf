import { NextRequest } from "next/server";
import { fetchAiSearchBooks, fetchBookDetailsFromUrl } from "@/lib/fetch-books";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q");
    if (!q || !q.trim()) {
        return Response.json(
            { error: { message: "Missing query." } },
            { status: 400 }
        );
    }
    try {
        let data = await fetchAiSearchBooks(q);
        if (typeof data !== "string") {
            return Response.json(
                {
                    error: {
                        message:
                            "Internal error: Unexpected response from our AI Search Tool.",
                    },
                },
                { status: 500 }
            );
        }

        const cleanedData = data
            .replace("```json", "")
            .replace("```", "")
            .trim();
        const parsedData = JSON.parse(cleanedData);

        // Fetch all book details from URLs
        const books = parsedData.books || [];
        const details = await Promise.all(
            books.map(async (book: any) => {
                if (book.url) {
                    try {
                        const bookData = await fetchBookDetailsFromUrl(
                            book.url
                        );
                        // If Google Books API returns items array, get first item
                        if (bookData.items && bookData.items.length > 0) {
                            return bookData.items[0];
                        }
                        // If it's a single volume, return as is
                        return bookData;
                    } catch (e) {
                        return null;
                    }
                }
                return null;
            })
        );

        // Filter out failed/null fetches
        const validDetails = details.filter(Boolean);

        // Remove duplicates based on Book ID
        const uniqueBooks = Object.values(
            validDetails.reduce((acc: any, book: any) => {
                acc[book.id] = book;
                return acc;
            }, {})
        );

        console.log("AI Search Unique Details:", uniqueBooks);

        return Response.json({ books: uniqueBooks });
    } catch (error: any) {
        console.error("AISearch Books Fetch Error:", error.message);
        return Response.json(
            { error: { message: "Internal error." } },
            { status: 500 }
        );
    }
}

//TODO: Add needed token to call the AI Search API ??
