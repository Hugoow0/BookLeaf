import { title } from "@/components/primitives";
import { Suspense } from "react";
import { fetchBookDetailsFromIdVolume } from "@/lib/fetch-books";
import BookDetails from "@/components/bookDetails";

export default async function BookPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const bookDetails = await fetchBookDetailsFromIdVolume(id);

    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className={title()}>Book</h1>
                <p className="text-muted-foreground text-center max-w-lg">
                    This is a book detail page. You can view details about a
                    book below. {id ? `Book ID: ${id}` : "No book selected."}
                </p>
                <br />
            </div>
            <Suspense fallback={<p>Loading...</p>}>
                <div className="flex justify-center w-full mt-4">
                    <pre className="whitespace-pre-wrap break-words bg-transparent p-0">
                        {bookDetails.error ? (
                            bookDetails.error.message === "Missing query." ? (
                                "Start searching a book title."
                            ) : (
                                bookDetails.error.message
                            )
                        ) : bookDetails.totalItems === 0 ? (
                            "No results found."
                        ) : (
                            <BookDetails bookDetails={bookDetails || []} />
                        )}
                    </pre>
                </div>
            </Suspense>
        </>
    );
}
