import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ForgotPasswordPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-bold tracking-tight text-foreground">Recovery Protocol</h1>
                <p className="text-sm text-muted-foreground">Enter your registered email to receive access recovery instructions.</p>
            </div>

            <form className="space-y-4">
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-zinc-500 font-bold" htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="admin@endcore.ui"
                        className="w-full bg-white/50 dark:bg-black/50 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-black/50 dark:focus:border-primary/50 transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-700"
                    />
                </div>

                <button type="button" className="w-full bg-primary hover:bg-primary/90 text-black font-bold py-3 rounded-xl transition-all shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] flex items-center justify-center gap-2">
                    Send Recovery Link <ArrowRight size={18} />
                </button>
            </form>

            <div className="pt-4 flex justify-center">
                <Link href="/auth/login" className="flex items-center gap-2 text-xs text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
                    <ArrowLeft size={12} /> Return to Login
                </Link>
            </div>
        </div>
    );
}
