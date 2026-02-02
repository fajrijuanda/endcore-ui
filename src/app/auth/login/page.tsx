import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="flex min-h-[80vh] items-center justify-center">
            <div className="w-full max-w-md space-y-8 p-8 bg-[#1A1A1A] border border-white/10 rounded-3xl relative overflow-hidden">

                {/* Background glow */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

                <div className="flex flex-col space-y-2 text-center z-10 relative">
                    <h1 className="text-2xl font-bold tracking-tight text-white">Access Verification</h1>
                    <p className="text-sm text-muted-foreground">Enter your credentials to access the Endcore Hub.</p>
                </div>

                <form className="space-y-4 z-10 relative">
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-zinc-500 font-bold" htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="admin@endcore.ui"
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-zinc-700"
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <label className="text-xs uppercase tracking-wider text-zinc-500 font-bold" htmlFor="password">Password</label>
                            <Link href="#" className="text-xs text-primary hover:text-white transition-colors">Forgot?</Link>
                        </div>
                        <input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-zinc-700"
                        />
                    </div>

                    <button type="button" className="w-full bg-primary hover:bg-yellow-400 text-black font-bold py-3 rounded-xl transition-all shadow-[0_0_15px_rgba(255,255,0,0.3)] hover:shadow-[0_0_25px_rgba(255,255,0,0.5)]">
                        Authenticate
                    </button>
                </form>

                <div className="text-center text-sm text-muted-foreground z-10 relative">
                    Don&apos;t have code clearance? <Link href="/auth/register" className="text-white font-bold hover:underline">Request Access</Link>
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
