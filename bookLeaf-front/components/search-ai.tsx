"use client";

import { useState } from "react";
import { SearchIcon } from "@/components/icons";
import { Input, Button, Alert } from "@heroui/react";
import BooksCardsListAI from "@/components/BooksCardList-ai";

export default function AiSearch() {
    const [query, setQuery] = useState("");
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async () => {
        if (!query.trim()) {
            setResult(null);
            setError("Start searching with AI Search.");
            return;
        }
        setLoading(true);
        setError(null);
        setResult(null);
        try {
            const res = await fetch(
                "/api/ai-search?q=" + encodeURIComponent(query)
            );
            const data = await res.json();
            if (data.error) {
                setError(data.error.message || "Error searching.");
            } else if (data.books.length == 0) {
                setError("No results found.");
            } else {
                console.log("AI Search Result:", data);
                setResult(data);
            }
        } catch (e: any) {
            setError("Error searching.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full flex flex-col items-center">
            <div className="relative flex flex-1 flex-shrink-0 w-full max-w-xl">
                <Input
                    id="search-input"
                    aria-label="Search"
                    classNames={{
                        inputWrapper: "bg-default-100",
                        input: "text-sm",
                    }}
                    radius="full"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    labelPlacement="outside"
                    placeholder="Search..."
                    startContent={
                        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
                    }
                />
                <Button
                    className="ml-2 sm:w-auto"
                    onPress={handleSearch}
                    disabled={loading}
                    isLoading={loading}
                    radius="full"
                    style={{
                        border: "solid 2px transparent",
                        backgroundImage: `linear-gradient(hsl(var(--heroui-background)), hsl(var(--heroui-background))), linear-gradient(to right, #ffffffff, #512d75ff)`,
                        backgroundOrigin: "border-box",
                        backgroundClip: "padding-box, border-box",
                    }}
                    variant="bordered"
                >
                    AI Search
                </Button>
            </div>
            <div className="flex center-items flex-col items-center pb-10 mt-10">
                <Alert
                    color="warning"
                    description="AI Search is an experimental feature. Results may vary. Errors may happen. Please report any issues."
                    variant="faded"
                />
            </div>
            <div className="flex justify-center w-full mt-4">
                <pre className="whitespace-pre-wrap break-words bg-transparent p-0">
                    {error ? (
                        error
                    ) : result ? (
                        <BooksCardsListAI bookList={result.books || []} />
                    ) : (
                        "Start searching with AI Search."
                    )}
                </pre>
            </div>
        </div>
    );
}
