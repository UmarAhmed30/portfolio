export default function Container({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="py-12" style={{ width: 'calc(69vw - 7rem)' }}>
            {children}
        </main>
    );
}
