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
        <div className="space-y-8">
            <div className="flex flex-col items-center space-y-4 text-center">
                <Image src="/logo.png" alt="Logo" width={80} height={80} className="opacity-80" />
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold tracking-tight text-foreground">Login</h1>
                    <p className="text-sm text-muted-foreground">Enter your credentials to access the Endcore Hub.</p>
                </div>
            </div>

            {/* Credential Hint for Demo */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-xs text-center text-zinc-600 dark:text-zinc-400">
                <p className="font-bold mb-1 text-black dark:text-primary">DEMO CREDENTIALS</p>
                <div className="flex flex-col gap-1">
                    <span className="select-all cursor-pointer">Email: <span className="font-mono">admin@endcore.ui</span></span>
                    <span className="select-all cursor-pointer">Pass: <span className="font-mono">12345678</span></span>
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
