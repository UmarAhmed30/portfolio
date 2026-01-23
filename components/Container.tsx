export default function Container({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="py-6 sm:py-8 md:py-10 lg:py-12 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-0 w-full xl:max-w-[calc(69vw-10rem)]">
            {children}
        </main>
    );
}
