import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Tabs, Tab } from "@heroui/tabs";

export default function BlogPage() {
    return (
        <div>
            <h1 className={title()}>Blog</h1>
            <br />
            <br />
            <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">Daily Mix</p>
                    <small className="text-default-500">12 Tracks</small>
                    <h4 className="font-bold text-large">Frontend Radio</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="https://heroui.com/images/hero-card-complete.jpeg"
                        width={270}
                    />
                </CardBody>
            </Card>
            <Image
                isBlurred
                alt="HeroUI Album Cover"
                className="m-5"
                src="https://heroui.com/images/album-cover.png"
                width={240}
            />
            <Image
                alt="HeroUI hero Image with delay"
                height={200}
                src="https://app.requestly.io/delay/5000/https://heroui.com/images/hero-card-complete.jpeg"
                width={300}
            />
        </div>
    );
}
