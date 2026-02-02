import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen w-full overflow-hidden bg-[#f0f0f3] dark:bg-zinc-900 p-4 gap-4 relative transition-colors duration-300">
            {/* Abstract Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-screen" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 dark:opacity-10" />
            </div>

            <div className="relative z-10 h-full">
                <Sidebar />
            </div>

            <div className="relative z-10 flex-1 flex flex-col h-full rounded-[2rem] border border-white/20 dark:border-white/10 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-2xl shadow-xl overflow-hidden transition-all">
                <Header />
                <main className="flex-1 p-6 md:p-8 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
