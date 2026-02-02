"use client"

import { Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <header className="sticky top-0 z-30 flex h-20 items-center gap-4 px-6 bg-transparent">
            <div className="w-full flex-1 md:w-auto md:flex-none">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                        placeholder="Search..."
                        className="pl-9 pr-4 w-full md:w-[300px] h-10 bg-white/5 border-white/10 focus:bg-white/10 focus:border-primary/50 transition-all rounded-full"
                    />
                </div>
            </div>
            <div className="flex-1" />
            <div className="flex items-center gap-3">
                <ThemeToggle />
                <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 text-muted-foreground hover:bg-white/10 relative">
                    <Bell size={20} />
                    <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-background" />
                </Button>

                {/* User Profile */}
                <div className="flex items-center gap-3 pl-3 border-l border-white/10">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-bold leading-none">Admin User</p>
                        <p className="text-xs text-muted-foreground">admin@endcore.com</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold border border-white/10">
                        A
                    </div>
                </div>
            </div>
        </header>
    );
}
