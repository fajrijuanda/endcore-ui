"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays, Info } from "lucide-react";

export default function HoverCardPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">CONTEXT_POPOVERS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Informational modules triggered by cursor proximity for rapid data ingestion.</p>
            </div>

            <EndcoreCard title="Intelligent_Insight_Feeds" status="active">
                <div className="p-20 flex items-center justify-center">
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <Button variant="link" className="text-primary font-black uppercase tracking-widest h-auto p-0 border-b border-primary/30 rounded-none hover:text-black hover:bg-primary transition-all px-2 py-1">
                                @ROOT_DEVELOPER_ID
                            </Button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80 bg-popover/90 backdrop-blur-md border-border rounded-[2.5rem] p-6 shadow-2xl">
                            <div className="flex justify-between space-x-4">
                                <Avatar className="w-12 h-12 border border-primary/20 p-0.5">
                                    <AvatarImage src="https://github.com/vercel.png" className="rounded-full" />
                                    <AvatarFallback>VC</AvatarFallback>
                                </Avatar>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-black uppercase tracking-tight">System_Architect</h4>
                                    <p className="text-[10px] font-mono leading-relaxed text-muted-foreground uppercase">
                                        Primary developer of the EndcoreUI tactical design system. Current focus: High-density modularity.
                                    </p>
                                    <div className="flex items-center pt-2">
                                        <CalendarDays className="mr-2 h-3 w-3 opacity-70" />{" "}
                                        <span className="text-[9px] font-mono text-zinc-500 uppercase">
                                            Commissioned January 2026
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                </div>
            </EndcoreCard>
        </div>
    )
}
