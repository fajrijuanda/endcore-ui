"use client"

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav
            className="w-full rounded-[2.5rem] border transition-all duration-300"
            style={{
                backgroundColor: 'var(--background-glass)',
                backdropFilter: 'var(--backdrop-filter)',
                WebkitBackdropFilter: 'var(--backdrop-filter)',
                borderColor: 'var(--border-glass)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
            }}
        >
            <div className="flex items-center justify-between px-6 py-3">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-12 h-12">
                        <Image
                            src="/logo.png"
                            alt="Endcore"
                            fill
                            className="object-contain drop-shadow-[0_0_8px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]"
                        />
                    </div>
                    <span className="font-bold text-lg tracking-tight text-foreground">Endcore</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-sm font-medium text-zinc-600 dark:text-muted-foreground hover:text-black dark:hover:text-primary transition-colors">
                        Features
                    </Link>
                    <Link href="#showcase" className="text-sm font-medium text-zinc-600 dark:text-muted-foreground hover:text-black dark:hover:text-primary transition-colors">
                        Showcase
                    </Link>
                    <Link href="#pricing" className="text-sm font-medium text-zinc-600 dark:text-muted-foreground hover:text-black dark:hover:text-primary transition-colors">
                        Pricing
                    </Link>
                    <Link href="#reports" className="text-sm font-medium text-zinc-600 dark:text-muted-foreground hover:text-black dark:hover:text-primary transition-colors">
                        Reports
                    </Link>
                    <Link href="#uplink" className="text-sm font-medium text-zinc-600 dark:text-muted-foreground hover:text-black dark:hover:text-primary transition-colors">
                        Uplink
                    </Link>
                </div>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <ThemeToggle />
                    <Link href="/auth/login">
                        <Button className="rounded-full bg-primary hover:bg-primary/90 text-black font-bold px-6">
                            Login
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-foreground p-1"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t overflow-hidden"
                        style={{ borderColor: 'var(--border-glass)' }}
                    >
                        <div className="flex flex-col gap-4 p-6">
                            <Link href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                                Features
                            </Link>
                            <Link href="#showcase" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                                Showcase
                            </Link>
                            <Link href="#pricing" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                                Pricing
                            </Link>
                            <Link href="#reports" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                                Reports
                            </Link>
                            <Link href="#uplink" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                                Uplink
                            </Link>
                            <div className="pt-4 border-t border-dashed border-zinc-200 dark:border-zinc-800">
                                <Link href="/auth/login" className="w-full">
                                    <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-black font-bold">
                                        Login
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
