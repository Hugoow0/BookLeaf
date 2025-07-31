import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { ArrowBigUpDash } from "lucide-react";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Banner from "@/components/banner";

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico",
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html suppressHydrationWarning lang="en">
            <head />
            <body
                className={clsx(
                    "min-h-screen text-foreground bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
                <Providers
                    themeProps={{ attribute: "class", defaultTheme: "dark" }}
                >
                    <div className="relative flex flex-col h-screen">
                        <span id="#" />
                        <Navbar />
                        <Banner />
                        <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                            {children}
                        </main>
                        <footer className="w-full flex flex-col items-center justify-center py-3">
                            <div className="flex items-center justify-center gap-2">
                                <Button
                                    startContent={<ArrowBigUpDash />}
                                    isIconOnly
                                    radius="full"
                                    variant="ghost"
                                    href="#"
                                    as="a"
                                />
                                <span className="mx-2 text-muted-foreground">
                                    © {new Date().getFullYear()} BookLeaf
                                </span>
                            </div>
                        </footer>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
