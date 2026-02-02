"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Cpu, HelpCircle, AlertCircle } from "lucide-react";

export default function TooltipPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">MICRO_NARRATIVES</h1>
                </div>
                <p className="text-muted-foreground font-medium">Brief, high-context informational overlays for ambiguous tactical symbols and actions.</p>
            </div>

            <EndcoreCard title="Icon_Standardization_Reference" status="active">
                <div className="p-20 flex flex-wrap gap-12 items-center justify-center">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl cursor-help hover:border-primary/50 transition-all group">
                                    <Cpu className="text-primary group-hover:scale-110 transition-transform" size={32} />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent className="bg-popover border-border rounded-xl font-mono uppercase text-[9px] px-3 py-2">
                                <p>Hardware_Acceleration_Active</p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl cursor-help hover:border-blue-500/50 transition-all group">
                                    <HelpCircle className="text-blue-500 group-hover:scale-110 transition-transform" size={32} />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent className="bg-popover border-border rounded-xl font-mono uppercase text-[9px] px-3 py-2">
                                <p>Request_Operational_Support</p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl cursor-help hover:border-red-500/50 transition-all group">
                                    <AlertCircle className="text-red-500 group-hover:scale-110 transition-transform" size={32} />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent className="bg-popover border-border rounded-xl font-mono uppercase text-[9px] px-3 py-2">
                                <p>Critical_Buffer_Overflow_Risk</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </EndcoreCard>
        </div>
    )
}
