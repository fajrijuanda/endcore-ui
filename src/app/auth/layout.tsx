import { Navbar } from "@/components/layout/Navbar";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen w-full relative bg-[#f0f0f3] dark:bg-zinc-900 transition-colors duration-300 overflow-hidden flex flex-col p-4 gap-4">
            {/* Abstract Background (Fixed) */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-screen" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 dark:opacity-10" />
            </div>

            {/* Header / Navbar Wrapper */}
            <header className="relative z-50 shrink-0">
                <Navbar />
            </header>

            {/* Main Floating Content Wrapper (Card) */}
            <main className="relative z-10 flex-1 min-h-0 w-full rounded-[2.5rem] overflow-hidden border transition-all duration-300 shadow-xl flex items-center justify-center"
                style={{
                    backgroundColor: 'var(--background-glass)',
                    backdropFilter: 'var(--backdrop-filter)',
                    WebkitBackdropFilter: 'var(--backdrop-filter)',
                    borderColor: 'var(--border-glass)',
                }}
            >
                <div className="w-full max-w-md p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
