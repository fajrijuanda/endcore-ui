"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Image from "next/image";

export default function RegisterPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col items-center space-y-4 text-center">
                <Image src="/logo.png" alt="Logo" width={80} height={80} className="opacity-80" />
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold tracking-tight text-foreground">Join Endcore</h1>
                    <p className="text-sm text-muted-foreground">Create a new operative account.</p>
                </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-zinc-500 font-bold" htmlFor="name">Operative Name</label>
                    <input
                        id="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full bg-white/50 dark:bg-black/50 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-black/50 dark:focus:border-primary/50 transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-700"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-zinc-500 font-bold" htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        required
                        placeholder="name@example.com"
                        className="w-full bg-white/50 dark:bg-black/50 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-black/50 dark:focus:border-primary/50 transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-700"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-zinc-500 font-bold" htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        required
                        placeholder="••••••••"
                        className="w-full bg-white/50 dark:bg-black/50 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-black/50 dark:focus:border-primary/50 transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-700"
                    />
                </div>

                <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-black font-bold py-3 rounded-xl transition-all shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_25px_rgba(255,215,0,0.5)]">
                    Initialize
                </button>
            </form>

            <div className="text-center text-sm text-muted-foreground">
                Already verified? <Link href="/auth/login" className="text-foreground font-bold hover:underline">Sign In</Link>
            </div>

            <div className="pt-4 flex justify-center">
                <Link href="/" className="flex items-center gap-2 text-xs text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
                    <ArrowLeft size={12} /> Return to Global
                </Link>
            </div>
        </div>
    );
}
