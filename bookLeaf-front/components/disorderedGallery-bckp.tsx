import { Image } from "@heroui/image";
import React from "react";

export default function DisorderedGallery() {
    return (
        <div
            className="relative flex justify-center items-center"
            style={{
                position: "relative",
                height: "500px",
                width: "800px",
            }}
        >
            {/* Image 1 */}
            <div
                style={{
                    position: "absolute",
                    top: "60px",
                    left: "45%",
                    transform: "rotate(8deg)",
                    width: "300px",
                    height: "180px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
            >
                <Image
                    isBlurred
                    src="/images/lofi-ghibli-vide-book.png"
                    alt="BookLeaf Image"
                    width={600}
                    height="auto"
                    className="rounded-lg"
                />
            </div>

            {/* Image 2 */}
            <div
                style={{
                    position: "absolute",
                    top: "250px",
                    left: "10%",
                    transform: "rotate(3deg)",
                    width: "300px",
                    height: "180px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
            >
                <Image
                    isBlurred
                    src="/images/lofi-ghibli-vide-book.png"
                    alt="BookLeaf Image"
                    width={600}
                    height="auto"
                    className="rounded-lg"
                />
            </div>

            {/* Image 3 */}
            <div
                style={{
                    position: "absolute",
                    top: "330px",
                    left: "55%",
                    transform: "rotate(-10deg)",
                    width: "300px",
                    height: "180px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
            >
                <Image
                    isBlurred
                    src="/images/lofi-ghibli-vide-book.png"
                    alt="BookLeaf Image"
                    width={600}
                    height="auto"
                    className="rounded-lg"
                />
            </div>
        </div>
    );
}
