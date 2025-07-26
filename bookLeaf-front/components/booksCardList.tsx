"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import {
    Card,
    CardFooter,
    CardBody,
    Image,
    Button,
    Link,
    Pagination,
} from "@heroui/react";

export default function BooksCardsList({
    bookList,
}: {
    bookList: Object[] | any;
}) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(searchParams);
        if (page > 1 && page <= 10) {
            params.set("page", page.toString());
        } else {
            params.delete("page");
        }
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div>
            <div className="flex center-items flex-col items-center pb-10">
                <Pagination
                    isCompact
                    showControls
                    initialPage={1}
                    total={10}
                    variant="flat"
                    color="default"
                    onChange={(page) => handlePageChange(page)}
                    page={parseInt(searchParams.get("page") || "1")}
                />
            </div>
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
                                alt={book.volumeInfo?.title || "Book cover"}
                                className="w-full object-cover h-[350px] sm:h-[350px]"
                                radius="lg"
                                shadow="sm"
                                src={
                                    book.volumeInfo?.imageLinks?.thumbnail ||
                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019"
                                }
                                width="100%"
                                height="auto"
                            />
                            <div className="flex flex-col gap-1 mt-3 px-4">
                                <p className="font-semibold text-base text-black dark:text-white">
                                    {book.volumeInfo?.title || "No title"}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {book.volumeInfo?.authors?.join(", ") ||
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
                                onPress={() => {
                                    window.location.href = `/book/${book.id}`;
                                }}
                            >
                                View Details
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <div className="flex center-items flex-col items-center pt-10">
                <Pagination
                    isCompact
                    showControls
                    initialPage={1}
                    total={10}
                    variant="flat"
                    color="default"
                    onChange={(page) => handlePageChange(page)}
                    page={parseInt(searchParams.get("page") || "1")}
                />
            </div>
        </div>
    );
}
