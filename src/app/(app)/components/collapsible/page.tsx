"use client"

import * as React from "react"
import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { Button } from "@/components/ui/button";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown, Plus, X } from "lucide-react"

export default function CollapsiblePage() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">INTEL_REVEALERS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Interactive containers for toggling secondary operational information and supplemental mission data.</p>
            </div>

            <EndcoreCard title="Raw_Telemetry_Stream" status="active">
                <div className="p-8">
                    <Collapsible
                        open={isOpen}
                        onOpenChange={setIsOpen}
                        className="w-full space-y-4"
                    >
                        <div className="flex items-center justify-between space-x-4">
                            <h4 className="text-sm font-black uppercase tracking-tight">
                                Uplink_Logs_01
                            </h4>
                            <CollapsibleTrigger asChild>
                                <Button variant="ghost" size="sm" className="w-9 h-9 p-0 rounded-xl hover:bg-primary/20 hover:text-primary transition-colors">
                                    <ChevronsUpDown className="h-4 w-4" />
                                    <span className="sr-only">Toggle</span>
                                </Button>
                            </CollapsibleTrigger>
                        </div>
                        <div className="rounded-2xl border border-white/10 px-4 py-3 font-mono text-xs bg-black/20 text-zinc-400">
                            {" >"} SIGNAL_INTERCEPTED FROM SECTOR_12
                        </div>
                        <CollapsibleContent className="space-y-2">
                            <div className="rounded-2xl border border-primary/20 px-4 py-3 font-mono text-[10px] bg-primary/5 text-primary">
                                {" >"} DECRYPTING... [DONE]
                            </div>
                            <div className="rounded-2xl border border-white/10 px-4 py-3 font-mono text-[10px] bg-white/5 text-zinc-500 uppercase">
                                {" >"} CONTENT: MISSION_OBJ_ALPHA_ACKNOWLEDGED.
                            </div>
                            <div className="rounded-2xl border border-white/10 px-4 py-3 font-mono text-[10px] bg-white/5 text-zinc-500 uppercase">
                                {" >"} STATUS: BUFFER_READY_FOR_EXTRACTION.
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                </div>
            </EndcoreCard>
        </div>
    )
}
