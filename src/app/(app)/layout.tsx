import Sidebar from "@/components/layout/Sidebar";
import { BackgroundPattern } from "@/components/layout/BackgroundPattern";
import Header from "@/components/layout/Header";

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen w-full overflow-hidden bg-[#f0f0f3] dark:bg-zinc-900 p-4 gap-4 relative transition-colors duration-300">
            {/* Abstract Background */}
            <div className="absolute inset-0 z-0">
                <BackgroundPattern />
            </div>

            <div className="relative z-10 h-full">
                <Sidebar />
            </div>

            <div
                className="relative z-10 flex-1 flex flex-col h-full rounded-[2rem] border shadow-xl overflow-hidden transition-all"
                style={{
                    backgroundColor: 'var(--background-glass)',
                    backdropFilter: 'var(--backdrop-filter)',
                    WebkitBackdropFilter: 'var(--backdrop-filter)',
                    borderColor: 'var(--border-glass)',
                }}
            >
                <Header />
                <main className="flex-1 p-6 md:p-8 overflow-auto no-scrollbar">
                    {children}
                </main>
            </div>
        </div>
    );
}
