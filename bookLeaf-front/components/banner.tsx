"use client";

import React, { useState } from "react";
import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function Banner() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) {
        return null;
    }

    return (
        <div className="flex w-full items-center gap-x-3 border-b-1 border-divider bg-background/[0.15] px-6 py-2 backdrop-blur-xl sm:px-3.5 sm:before:flex-1">
            <p className="text-small text-foreground">
                <Link className="text-inherit" href="/search/ai">
                    New experimental functionality out now.&nbsp;
                    <u>AI Search</u>&nbsp;!
                </Link>
            </p>
            <Button
                as={Link}
                className="group relative h-9 overflow-hidden bg-transparent text-small font-normal"
                color="default"
                endContent={
                    <Icon
                        className="flex-none outline-none transition-transform group-data-[hover=true]:translate-x-0.5 [&>path]:stroke-[2]"
                        icon="solar:arrow-right-linear"
                        width={16}
                    />
                }
                href="/search/ai"
                radius="full"
                style={{
                    border: "solid 2px transparent",
                    backgroundImage: `linear-gradient(hsl(var(--heroui-background)), hsl(var(--heroui-background))), linear-gradient(to right, #ffffffff, #512d75ff)`,
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box",
                }}
                variant="bordered"
            >
                Try it now
            </Button>
            <div className="flex flex-1 justify-end">
                <Button
                    isIconOnly
                    className="-m-1"
                    size="sm"
                    variant="light"
                    onPress={() => setIsVisible(false)}
                >
                    <span className="sr-only">Close Banner</span>
                    <Icon
                        className="text-default-500"
                        icon="lucide:x"
                        width={20}
                    />
                </Button>
            </div>
        </div>
    );
}
