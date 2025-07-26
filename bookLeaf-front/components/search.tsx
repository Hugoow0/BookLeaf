"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { SearchIcon } from "@/components/icons";
import { Input } from "@heroui/input";

export default function Search() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set("query", term);
        } else {
            params.delete("query");
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
                defaultValue={searchParams.get("query")?.toString()}
                labelPlacement="outside"
                placeholder="Search..."
                startContent={
                    <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
                }
                type="search"
            />
        </div>
    );
}
