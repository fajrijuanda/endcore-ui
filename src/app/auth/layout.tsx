
import { BackgroundPattern } from "@/components/layout/BackgroundPattern";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen w-full relative bg-[#f0f0f3] dark:bg-zinc-900 transition-colors duration-300 overflow-hidden flex items-center justify-center p-4">
            {/* Abstract Background (Fixed) */}
            <div className="absolute inset-0 z-0">
                <BackgroundPattern />
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
                <div className="px-8 pt-6 pb-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
