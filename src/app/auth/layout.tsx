

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen w-full relative bg-[#f0f0f3] dark:bg-zinc-900 transition-colors duration-300 overflow-hidden flex items-center justify-center p-4">
            {/* Abstract Background (Fixed) */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-screen" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 dark:opacity-10" />
            </div>

            {/* Main Centered Content Wrapper (Card) */}
            <main className="relative z-10 w-full max-w-md rounded-3xl overflow-hidden border transition-all duration-300 shadow-xl"
                style={{
                    backgroundColor: 'var(--background-glass)',
                    backdropFilter: 'var(--backdrop-filter)',
                    WebkitBackdropFilter: 'var(--backdrop-filter)',
                    borderColor: 'var(--border-glass)',
                }}
            >
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
