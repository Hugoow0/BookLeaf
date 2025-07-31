"use client";

import {
    Card,
    CardFooter,
    CardBody,
    Image,
    Button,
    Link,
    Pagination,
    Alert,
} from "@heroui/react";
import type { GoogleBooksVolume } from "@/types";

export default function BooksCardsListAI({
    bookList,
}: {
    bookList: GoogleBooksVolume[];
}) {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 w-full">
                {bookList.map((book: any) => (
                    <Card
                        key={book.id}
                        isFooterBlurred
                        className="border-none flex flex-col h-full"
                        radius="lg"
                    >
                        <CardBody className="overflow-visible p-0 flex flex-col">
                            <Image
                                alt={
                                    book.volumeInfo?.title ||
                                    book.title ||
                                    "Book cover"
                                }
                                className="w-full object-cover h-[350px] sm:h-[350px]"
                                radius="lg"
                                shadow="sm"
                                src={
                                    book.volumeInfo?.imageLinks?.thumbnail ||
                                    book.thumbnail ||
                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019"
                                }
                                width="100%"
                                height="auto"
                            />
                            <div className="flex flex-col gap-1 mt-3 px-4">
                                <p className="font-semibold text-base text-black dark:text-white">
                                    {book.volumeInfo?.title ||
                                        book.title ||
                                        "No title"}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {book.volumeInfo?.authors?.join(", ") ||
                                        book.author ||
                                        "Unknown author"}
                                </p>
                            </div>
                        </CardBody>
                        <CardFooter className="mt-auto flex items-end p-4">
                            <Button
                                className="w-full text-tiny text-white bg-black/80"
                                color="default"
                                radius="lg"
                                size="sm"
                                variant="flat"
                                as={Link}
                                href={`/book/${book.id}`}
                            >
                                View Details
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
