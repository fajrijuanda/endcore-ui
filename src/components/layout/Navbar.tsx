"use client"

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { User, Settings, LogOut } from "lucide-react";

const UserProfile = ({ isLogoutDialogOpen, setIsLogoutDialogOpen, setIsAuthenticated }: {
    isLogoutDialogOpen: boolean;
    setIsLogoutDialogOpen: (open: boolean) => void;
    setIsAuthenticated: (auth: boolean) => void;
}) => (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors focus:outline-none group">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold border border-zinc-200 dark:border-white/10 group-hover:border-primary/50 transition-all">
                    A
                </div>
            </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-white/10 rounded-2xl p-2 shadow-2xl">
            <DropdownMenuLabel className="px-3 py-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Operative_Identity</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-zinc-100 dark:bg-white/5" />
            <DropdownMenuItem className="flex items-center gap-2 rounded-xl focus:bg-primary focus:text-black cursor-pointer px-3 py-2 text-xs font-bold uppercase transition-all">
                <User size={14} /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 rounded-xl focus:bg-primary focus:text-black cursor-pointer px-3 py-2 text-xs font-bold uppercase transition-all">
                <Settings size={14} /> Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-zinc-100 dark:bg-white/5" />

            <AlertDialog open={isLogoutDialogOpen} onOpenChange={setIsLogoutDialogOpen}>
                <AlertDialogTrigger asChild>
                    <div className="flex items-center gap-2 rounded-xl focus:bg-red-500 focus:text-white cursor-pointer px-3 py-2 text-xs font-bold uppercase transition-all group/logout hover:bg-red-500/10 hover:text-red-500">
                        <LogOut size={14} /> Terminate
                    </div>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-white/10 rounded-[2.5rem] p-8">
                    <AlertDialogHeader>
                        <div className="w-16 h-16 rounded-[1.5rem] bg-red-500/10 flex items-center justify-center text-red-500 mb-4 mx-auto border border-red-500/20">
                            <LogOut size={32} />
                        </div>
                        <AlertDialogTitle className="text-xl font-black text-center uppercase tracking-tight">TERMINATE_SESSION?</AlertDialogTitle>
                        <AlertDialogDescription className="text-center text-zinc-500 dark:text-zinc-400 text-sm">
                            You are about to disconnect from the secure Endcore neural uplink.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="flex-col sm:flex-row gap-3 mt-6">
                        <AlertDialogCancel className="flex-1 rounded-full border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 text-foreground font-bold uppercase text-xs h-12">
                            Abort
                        </AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => setIsAuthenticated(false)}
                            className="flex-1 rounded-full bg-red-600 hover:bg-red-700 text-white font-black uppercase text-xs h-12 shadow-lg shadow-red-600/20"
                        >
                            Confirm
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </DropdownMenuContent>
    </DropdownMenu>
);

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Simulated auth state
    const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

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
                    {isAuthenticated ? (
                        <UserProfile
                            isLogoutDialogOpen={isLogoutDialogOpen}
                            setIsLogoutDialogOpen={setIsLogoutDialogOpen}
                            setIsAuthenticated={setIsAuthenticated}
                        />
                    ) : (
                        <Link href="/auth/login">
                            <Button className="rounded-full bg-primary hover:bg-primary/90 text-black font-bold px-6 h-10">
                                Login
                            </Button>
                        </Link>
                    )}
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
                            <div className="pt-4 border-t border-dashed border-zinc-200 dark:border-zinc-800 flex flex-col gap-4">
                                {isAuthenticated ? (
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold border border-zinc-200 dark:border-white/10">
                                                A
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold leading-none">Admin User</p>
                                                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Clearance_L5</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setIsLogoutDialogOpen(true)}
                                            className="p-2 text-zinc-400 hover:text-red-500 transition-colors"
                                        >
                                            <LogOut size={20} />
                                        </button>
                                    </div>
                                ) : (
                                    <Link href="/auth/login" className="w-full">
                                        <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-black font-bold h-12">
                                            Login_To_System
                                        </Button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
