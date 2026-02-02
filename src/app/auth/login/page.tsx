import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-bold tracking-tight text-foreground">Access Verification</h1>
                <p className="text-sm text-muted-foreground">Enter your credentials to access the Endcore Hub.</p>
            </div>

            <form className="space-y-4">
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-zinc-500 font-bold" htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="admin@endcore.ui"
                        className="w-full bg-white/50 dark:bg-black/50 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-black/50 dark:focus:border-primary/50 transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-700"
                    />
                </div>

                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <label className="text-xs uppercase tracking-wider text-zinc-500 font-bold" htmlFor="password">Password</label>
                        <Link href="/auth/forgot-password" className="text-xs text-zinc-500 hover:text-black dark:hover:text-primary transition-colors">Forgot?</Link>
                    </div>
                    <input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="w-full bg-white/50 dark:bg-black/50 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-black/50 dark:focus:border-primary/50 transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-700"
                    />
                </div>

                <button type="button" className="w-full bg-primary hover:bg-primary/90 text-black font-bold py-3 rounded-xl transition-all shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_25px_rgba(255,215,0,0.5)]">
                    Authenticate
                </button>
            </form>

            <div className="text-center text-sm text-muted-foreground">
                Don&apos;t have code clearance? <Link href="/auth/register" className="text-foreground font-bold hover:underline">Request Access</Link>
            </div>

            <div className="pt-4 flex justify-center">
                <Link href="/" className="flex items-center gap-2 text-xs text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
                    <ArrowLeft size={12} /> Return to Global
                </Link>
            </div>
        </div>
    );
}
