"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { SearchIcon } from "@/components/icons";
import { Input, Button } from "@heroui/react";
import Link from "next/link";

export default function Search() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set("q", term);
        } else {
            params.delete("q");
        }
        params.delete("page"); // Clear page when search term changes
        replace(`${pathname}?${params.toString()}`);
    }, 500);
    return (
        <div className="relative flex flex-1 flex-shrink-0">
            <Input
                aria-label="Search"
                classNames={{
                    inputWrapper: "bg-default-100",
                    input: "text-sm",
                }}
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                radius="full"
                defaultValue={searchParams.get("q")?.toString()}
                labelPlacement="outside"
                placeholder="Search..."
                startContent={
                    <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
                }
                type="search"
            />
            <Button
                className="ml-2 sm:w-auto pl-8 pr-8"
                radius="full"
                style={{
                    border: "solid 2px transparent",
                    backgroundImage: `linear-gradient(hsl(var(--heroui-background)), hsl(var(--heroui-background))), linear-gradient(to right, #ffffffff, #512d75ff)`,
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box",
                }}
                variant="bordered"
                as={Link}
                href="/search/ai"
            >
                Or try AI Search now
            </Button>
        </div>
    );
}
