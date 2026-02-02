"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">IDENTITY_AVATARS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Visual identifiers for system users and secondary operatives.</p>
            </div>

            <EndcoreCard title="Personnel_Logins" status="active">
                <div className="p-12 flex flex-wrap gap-12 items-center justify-center">
                    <div className="flex flex-col items-center gap-4 group">
                        <Avatar className="w-20 h-20 border-2 border-primary/30 group-hover:border-primary transition-all p-1">
                            <AvatarImage src="https://github.com/shadcn.png" className="rounded-full" />
                            <AvatarFallback>HQ</AvatarFallback>
                        </Avatar>
                        <span className="text-[10px] font-black font-mono tracking-widest uppercase">Admin_Root</span>
                    </div>

                    <div className="flex flex-col items-center gap-4 group">
                        <Avatar className="w-16 h-16 border-2 border-blue-500/30 group-hover:border-blue-500 transition-all p-1">
                            <AvatarFallback className="bg-blue-500/10 text-blue-500 font-black">OP</AvatarFallback>
                        </Avatar>
                        <span className="text-[10px] font-black font-mono tracking-widest uppercase">Operative_K</span>
                    </div>

                    <div className="flex flex-col items-center gap-4 group">
                        <Avatar className="w-12 h-12 border-2 border-red-500/30 group-hover:border-red-500 transition-all p-1">
                            <AvatarFallback className="bg-red-500/10 text-red-500 font-black text-xs">A1</AvatarFallback>
                        </Avatar>
                        <span className="text-[10px] font-black font-mono tracking-widest uppercase">Analyst_8</span>
                    </div>
                </div>
            </EndcoreCard>
        </div>
    )
}
