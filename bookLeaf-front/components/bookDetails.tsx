"use client";

import React from "react";
import {
    CalendarFold,
    UserPen,
    Languages,
    BookOpenText,
    Tag,
} from "lucide-react";
import {
    Image,
    Button,
    Avatar,
    Chip,
    ScrollShadow,
    Spacer,
} from "@heroui/react";
import { addToast } from "@heroui/toast";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/react";
import type { GoogleBooksVolume } from "@/types";

export const HeartIcon = ({
    size = 24,
    strokeWidth = 1.5,
    fill = "none",
    ...props
}) => {
    return (
        <svg
            aria-hidden="true"
            fill={fill}
            focusable="false"
            height={size}
            role="presentation"
            viewBox="0 0 24 24"
            width={size}
            color="red"
            {...props}
        >
            <path
                d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
            />
        </svg>
    );
};

export default function BookDetails({
    bookDetails,
}: {
    bookDetails: GoogleBooksVolume;
}) {
    const [liked, setLiked] = React.useState(false);

    return (
        <div>
            <h1 className="text-4xl font-bold">
                {bookDetails.volumeInfo?.title || "No title"}
            </h1>
            <h3 className="text-xl font-bold">
                {bookDetails.volumeInfo?.subtitle || "No subtitle"}
            </h3>
            <br />
            {/* Two Column */}
            <div className="grid lg:grid-cols-3 gap-12">
                {/* Left Column - Scrollable Content */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Large Icon/Image */}
                    <div className="rounded-lg p-8 flex items-center justify-center">
                        <Image
                            alt="Album cover"
                            className="object-cover"
                            height={600}
                            width={400}
                            src={
                                bookDetails.volumeInfo?.imageLinks?.thumbnail ||
                                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019"
                            }
                        />
                    </div>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">
                                Description
                            </h2>
                            <ScrollShadow
                                hideScrollBar
                                size={100}
                                className="h-[400px]"
                            >
                                <p className="text-muted-foreground leading-relaxed">
                                    {bookDetails.volumeInfo?.description ||
                                        "No description available."}
                                </p>
                            </ScrollShadow>
                        </section>
                    </div>
                </div>

                {/* Right Column - Fixed Sidebar */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 space-y-8">
                        <div className="flex items-center space-x-3 py-4">
                            <Avatar className="w-10 h-10" />
                            <div>
                                <p className="font-medium text-sm">Author(s)</p>
                                <p className="text-xs text-muted-foreground">
                                    {bookDetails.volumeInfo?.authors?.join(
                                        ", "
                                    ) || "Unknown author"}
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="flex gap-4 items-center">
                                <Popover placement="bottom" showArrow={true}>
                                    <PopoverTrigger>
                                        <Button
                                            className="w-full"
                                            radius="full"
                                            variant="ghost"
                                        >
                                            Find the book
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <div className="px-1 py-2">
                                            <Button
                                                className="w-full"
                                                radius="full"
                                                variant="ghost"
                                                color="warning"
                                                onPress={() => {
                                                    window.open(
                                                        `https://www.amazon.com/s?k=${bookDetails.volumeInfo?.industryIdentifiers?.[1]?.identifier}` ||
                                                            `https://www.amazon.com/s?k=${bookDetails.volumeInfo?.industryIdentifiers?.[0]?.identifier}`,
                                                        "_blank"
                                                    );
                                                }}
                                            >
                                                Amazon
                                            </Button>
                                        </div>
                                    </PopoverContent>
                                </Popover>

                                <Button
                                    isIconOnly
                                    className="text-default-900/60 data-hover:bg-foreground/10!"
                                    radius="full"
                                    variant="ghost"
                                    onPress={
                                        () => {
                                            setLiked((v) => !v),
                                                addToast({
                                                    icon: (
                                                        <HeartIcon
                                                            size={16}
                                                            strokeWidth={2}
                                                        />
                                                    ),
                                                    title: liked
                                                        ? "Book removed from Liked"
                                                        : "Book added to Liked",
                                                });
                                        }
                                        // TODO: This is where you would handle the like functionality, e.g., updating a database or state
                                    }
                                >
                                    <HeartIcon
                                        className={
                                            liked
                                                ? "[&>path]:stroke-transparent"
                                                : ""
                                        }
                                        fill={liked ? "currentColor" : "none"}
                                        color={liked ? "red" : "currentColor"}
                                    />
                                </Button>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">
                                Informations about the book
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <CalendarFold size={16} />
                                    <span className="text-sm">
                                        Publish date :{" "}
                                        {bookDetails.volumeInfo
                                            ?.publishedDate ||
                                            "No publish date available."}
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <UserPen size={16} />
                                    <span className="text-sm">
                                        Publisher :{" "}
                                        {bookDetails.volumeInfo?.publisher ||
                                            "No publish date available."}
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Languages size={16} />
                                    <span className="text-sm">
                                        Language :{" "}
                                        {bookDetails.volumeInfo?.language ||
                                            "No language available."}
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <BookOpenText size={16} />
                                    <span className="text-sm">
                                        Page count :{" "}
                                        {bookDetails.volumeInfo?.pageCount ||
                                            "No language available."}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Tags</h3>
                            <div className="text-sm text-muted-foreground leading-relaxed mb-6">
                                {bookDetails.volumeInfo?.categories?.map(
                                    (categorie: any) => (
                                        <Chip
                                            variant="bordered"
                                            size="sm"
                                            className="mr-2 mb-2"
                                            startContent={<Tag size={12} />}
                                            key={categorie}
                                        >
                                            {categorie}
                                        </Chip>
                                    )
                                ) || "No categories available."}
                            </div>
                        </div>

                        {/* Share Section */}
                        {/* 
                        <div>
                            <h3 className="text-sm font-medium mb-4 text-muted-foreground">Share this template</h3>
                            <div className="flex items-center space-x-3">
                                <Button variant="ghost" size="md" className="w-8 h-8">
                                    <Facebook className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="md" className="w-8 h-8">
                                    <Twitter className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="md" className="w-8 h-8">
                                    <Linkedin className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="md" className="w-8 h-8">
                                    <Instagram className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                        */}
                    </div>
                </div>
            </div>
        </div>
    );
}
