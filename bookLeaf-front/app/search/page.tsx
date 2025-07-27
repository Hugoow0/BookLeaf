import { title } from "@/components/primitives";
import Search from "@/components/search";
import { Suspense } from "react";
import { fetchSearchBooks } from "@/lib/fetch-books";
import BooksCardsList from "@/components/booksCardList";

export default async function SearchPage(props: {
    searchParams?: Promise<{
        q?: string;
        page?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.q || "";
    const booksList = await fetchSearchBooks(query, searchParams?.page || "1");

    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className={title()}>Search</h1>
                <p className="text-muted-foreground text-center max-w-lg">
                    This is a search page. You can use the search input below to
                    find content.
                </p>
                <br />
                <Search />
                <br />
            </div>
            <Suspense fallback={<p>Loading...</p>}>
                <div className="flex justify-center w-full mt-4">
                    <pre className="whitespace-pre-wrap break-words bg-transparent p-0">
                        {booksList.error ? (
                            booksList.error.message === "Missing query." ? (
                                "Start searching a book title."
                            ) : (
                                booksList.error.message
                            )
                        ) : booksList.totalItems === 0 ? (
                            "No results found."
                        ) : (
                            <BooksCardsList bookList={booksList.items || []} />
                        )}
                    </pre>
                </div>
            </Suspense>
        </>
    );
}
