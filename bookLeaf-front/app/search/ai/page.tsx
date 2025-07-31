import { title } from "@/components/primitives";
import AiSearch from "@/components/search-ai";

export default function SearchPage() {
    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className={title()}>AI Search</h1>
                <p className="text-muted-foreground text-center max-w-lg">
                    With AI Search, you can search books with a totally new
                    approach ! Describe what you are looking for, and let the AI
                    find the best matches for you. You can also use it to find
                    books based on your interests or preferences.
                </p>
                <br />
                <AiSearch />
                <br />
            </div>
        </>
    );
}
