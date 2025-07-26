export default function LoginLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl justify-center">
                {children}
            </div>
        </section>
    );
}
