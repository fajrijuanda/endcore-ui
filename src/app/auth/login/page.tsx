"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // Mock Login Logic
        if (email === "admin@endcore.ui" && password === "12345678") {
            router.push("/dashboard");
        } else {
            setError("Invalid operative credentials.");
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col items-center space-y-2 text-center">
                <Image src="/logo.png" alt="Logo" width={140} height={140} className="opacity-80" />
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold tracking-tight text-foreground">Login</h1>
                    <p className="text-sm text-muted-foreground">Enter your credentials to access the Endcore Hub.</p>
                </div>
            </div>

            {/* Credential Hint for Demo */}
            <div className="bg-black/5 dark:bg-black/20 border border-dashed border-zinc-300 dark:border-primary/20 rounded-xl p-4 relative overflow-hidden group">
                {/* Decorative corners */}
                <div className="absolute top-0 right-0 w-8 h-8">
                    <div className="absolute top-0 right-0 w-full h-[1px] bg-primary/30" />
                    <div className="absolute top-0 right-0 w-[1px] h-full bg-primary/30" />
                </div>
                <div className="absolute bottom-0 left-0 w-8 h-8">
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary/30" />
                    <div className="absolute bottom-0 left-0 w-[1px] h-full bg-primary/30" />
                </div>

                <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">ACCESS_PROTOCOL: ACTIVE</span>
                </div>

                <div className="space-y-2.5">
                    <div className="flex items-center justify-between border-b border-zinc-200 dark:border-white/5 pb-2 cursor-pointer group/line" onClick={() => setEmail("admin@endcore.ui")}>
                        <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-tighter">Email</span>
                        <code className="text-[11px] font-mono text-black dark:text-primary select-all font-bold group-hover/line:text-yellow-600 transition-colors">admin@endcore.ui</code>
                    </div>
                    <div className="flex items-center justify-between cursor-pointer group/line" onClick={() => setPassword("12345678")}>
                        <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-tighter">Password</span>
                        <code className="text-[11px] font-mono text-black dark:text-primary select-all font-bold group-hover/line:text-yellow-600 transition-colors">12345678</code>
                    </div>
                </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-zinc-500 font-bold" htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full bg-white/50 dark:bg-black/50 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-black/50 dark:focus:border-primary/50 transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-700"
                    />
                </div>

                {error && (
                    <p className="text-xs text-red-500 font-bold text-center">{error}</p>
                )}

                <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-black font-bold py-3 rounded-xl transition-all shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_25px_rgba(255,215,0,0.5)]">
                    Authenticate
                </button>
            </form>

            <div className="text-center text-sm text-muted-foreground">
                Don&apos;t have code clearance? <Link href="/auth/register" className="text-foreground font-bold hover:underline">Register</Link>
            </div>

            <div className="pt-4 flex justify-center">
                <Link href="/" className="flex items-center gap-2 text-xs text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
                    <ArrowLeft size={12} /> Return to Global
                </Link>
            </div>
        </div>
    );
}
