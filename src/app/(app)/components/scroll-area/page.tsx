"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function ScrollAreaPage() {
    const logs = Array.from({ length: 50 }).map(
        (_, i, a) => `TAC_LOG_STREAM_ENTRY_${50 - i}_[SECURE_CHANNEL_ALPHA]`
    )

    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">BUFFERED_STREAMS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Tactical view-ports for managing overflow-dense data feeds.</p>
            </div>

            <EndcoreCard title="Raw_System_Output_Buffer" status="active">
                <ScrollArea className="h-[400px] w-full rounded-none">
                    <div className="p-8 font-mono text-[10px] space-y-3">
                        {logs.map((log, index) => (
                            <div key={index}>
                                <div className="flex items-center gap-4 text-zinc-500 group cursor-pointer hover:text-primary transition-colors">
                                    <span className="opacity-30">[{String(index).padStart(4, '0')}]</span>
                                    <span className="group-hover:translate-x-1 transition-transform">{log}</span>
                                    <span className="ml-auto opacity-20 text-[8px]">0x{Math.random().toString(16).slice(2, 8).toUpperCase()}</span>
                                </div>
                                <Separator className="my-2 bg-white/5" />
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </EndcoreCard>
        </div>
    )
}
