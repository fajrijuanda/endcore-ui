"use client"

import { Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <header className="sticky top-0 z-30 flex h-20 items-center gap-4 border-b border-border bg-background/80 px-6 backdrop-blur-xl">
            <div className="w-full flex-1 md:w-auto md:flex-none">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                        placeholder="Search..."
                        className="pl-9 pr-4 w-full md:w-[300px] h-10 bg-muted/50 border-transparent focus:bg-background focus:border-primary/50 transition-all rounded-full"
                    />
                </div>
            </div>
            <div className="flex-1" />
            <div className="flex items-center gap-2">
                <ThemeToggle />
                <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 text-muted-foreground hover:bg-muted relative">
                    <Bell size={20} />
                    <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-background" />
                </Button>
            </div>
        </header>
    );
}
