import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { Image } from "@heroui/image";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DisorderedGallery from "@/components/disorderedGallery";

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-xl text-center justify-center">
                <span className={title()}>Search&nbsp;</span>
                <span className={title({ color: "blue" })}>books</span>
                <span className={title()}>,&nbsp;</span>
                <br />
                <span className={title()}>
                    keep track of reading, create book lists and more!
                </span>
                <div className={subtitle({ class: "mt-4" })}>
                    <span>BookLeaf,&nbsp;</span>
                    <span>a beautiful, fast and modern App.</span>
                </div>
            </div>

            <div className="flex gap-3">
                <Link
                    className={buttonStyles({
                        color: "primary",
                        radius: "full",
                        variant: "shadow",
                    })}
                    href={"/search"}
                >
                    Start searching!
                </Link>
                <Link
                    isExternal
                    className={buttonStyles({
                        variant: "bordered",
                        radius: "full",
                    })}
                    href={siteConfig.links.github}
                >
                    <GithubIcon size={20} />
                    GitHub
                </Link>
            </div>

            {/*<div className="mt-8 flex flex-col items-center">
                <Snippet hideCopyButton hideSymbol variant="bordered">
                    <span>Lets begin...</span>
                </Snippet>
                <Image
                    isBlurred
                    src="/images/lofi-ghibli-vide-book.png"
                    alt="BookLeaf Image"
                    width={600}
                    height="auto"
                    className="rounded-lg mt-8"
                />
            </div>*/}
            <div className="mt-8 mb-10 flex flex-col items-center w-full">
                <span className={title({ class: "mb-4" })}>Let's begin...</span>
                <DisorderedGallery />
            </div>
        </section>
    );
}
