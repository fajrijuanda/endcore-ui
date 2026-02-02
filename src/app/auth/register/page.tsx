import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RegisterPage() {
    return (
        <div className="flex min-h-[80vh] items-center justify-center">
            <div className="w-full max-w-md space-y-8 p-8 bg-[#1A1A1A] border border-white/10 rounded-3xl relative overflow-hidden">

                {/* Background glow */}
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

                <div className="flex flex-col space-y-2 text-center z-10 relative">
                    <h1 className="text-2xl font-bold tracking-tight text-white">Join Endcore</h1>
                    <p className="text-sm text-muted-foreground">Create a new operative account.</p>
                </div>

                <form className="space-y-4 z-10 relative">
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-zinc-500 font-bold" htmlFor="name">Operative Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-zinc-700"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-zinc-500 font-bold" htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-zinc-700"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-zinc-500 font-bold" htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-zinc-700"
                        />
                    </div>

                    <button type="button" className="w-full bg-white hover:bg-zinc-200 text-black font-bold py-3 rounded-xl transition-all border border-transparent hover:border-white/50">
                        Initialize
                    </button>
                </form>

                <div className="text-center text-sm text-muted-foreground z-10 relative">
                    Already verified? <Link href="/auth/login" className="text-primary font-bold hover:underline">Sign In</Link>
                </div>

                <div className="pt-4 flex justify-center z-10 relative">
                    <Link href="/" className="flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors">
                        <ArrowLeft size={12} /> Return to Global
                    </Link>
                </div>
            </div>
        </div>
    );
}
