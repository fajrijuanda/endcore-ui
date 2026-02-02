"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { Input } from "@/components/ui/input";
import { Search, Lock, Mail, User } from "lucide-react";

export default function InputPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">DATA_INPUT_CHANNELS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Standard field modules for manual data entry and operational queries.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <EndcoreCard title="Text_Fields" status="active">
                    <div className="p-10 space-y-6">
                        <div className="relative group">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 group-focus-within:text-primary transition-colors" />
                            <Input placeholder="OPERATIVE_ID" className="pl-10 h-11 bg-white/5 border-white/10 rounded-xl focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all font-mono text-xs uppercase" />
                        </div>
                        <div className="relative group">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 group-focus-within:text-primary transition-colors" />
                            <Input placeholder="COMS_ADDRESS" className="pl-10 h-11 bg-white/5 border-white/10 rounded-xl focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all font-mono text-xs" />
                        </div>
                        <div className="relative group">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 group-focus-within:text-primary transition-colors" />
                            <Input type="password" placeholder="********" className="pl-10 h-11 bg-white/5 border-white/10 rounded-xl focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all font-mono text-xs" />
                        </div>
                    </div>
                </EndcoreCard>

                <EndcoreCard title="Operational_Search" status="active">
                    <div className="p-10">
                        <div className="relative group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500 group-focus-within:text-primary transition-colors" />
                            <Input
                                placeholder="QUERY_SECTOR_DATA..."
                                className="pl-11 h-14 bg-black/40 border-primary/20 rounded-2xl focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all font-bold tracking-wider placeholder:text-zinc-600"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1">
                                <span className="text-[10px] font-mono text-zinc-500 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">⌘</span>
                                <span className="text-[10px] font-mono text-zinc-500 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">K</span>
                            </div>
                        </div>
                        <p className="mt-4 text-[10px] font-mono text-muted-foreground uppercase text-center italic">Global satellite triangulation currently offline</p>
                    </div>
                </EndcoreCard>
            </div>
        </div>
    )
}
