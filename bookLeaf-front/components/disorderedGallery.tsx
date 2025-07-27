import { Image } from "@heroui/image";
import React from "react";

export default function DisorderedGallery() {
    return (
        <div className="relative flex justify-center items-center w-full max-w-[800px] h-[220px] sm:h-[400px] mx-auto">
            {/* Image 1 */}
            <div
                className="
                    absolute
                    left-[80%] top-[5%]
                    sm:left-[53%] sm:top-[10%]
                    -translate-x-1/2 sm:translate-x-0
                    "
                style={{
                    transform: "translateX(-50%) rotate(8deg)",
                    width: "44vw",
                    maxWidth: "260px",
                    height: "28vw",
                    maxHeight: "160px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
            >
                <Image
                    isBlurred
                    src="/images/lofi-ghibli-vide-book.png"
                    alt="BookLeaf Image"
                    width="100%"
                    height="100%"
                    className="rounded-lg w-full h-full object-cover"
                />
            </div>

            {/* Image 2 */}
            <div
                className="
                    absolute
                    left-[0%] top-[50%]
                    sm:left-[10%] sm:top-[60%]
                    "
                style={{
                    transform: "rotate(3deg)",
                    width: "44vw",
                    maxWidth: "260px",
                    height: "28vw",
                    maxHeight: "160px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
            >
                <Image
                    isBlurred
                    src="/images/lofi-ghibli-vide-book.png"
                    alt="BookLeaf Image"
                    width="100%"
                    height="100%"
                    className="rounded-lg w-full h-full object-cover"
                />
            </div>

            {/* Image 3 */}
            <div
                className="
                    absolute
                    left-[50%] top-[65%]
                    sm:left-[55%] sm:top-[70%]
                    "
                style={{
                    transform: "rotate(-10deg)",
                    width: "44vw",
                    maxWidth: "260px",
                    height: "28vw",
                    maxHeight: "160px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
            >
                <Image
                    isBlurred
                    src="/images/lofi-ghibli-vide-book.png"
                    alt="BookLeaf Image"
                    width="100%"
                    height="100%"
                    className="rounded-lg w-full h-full object-cover"
                />
            </div>
        </div>
    );
}
