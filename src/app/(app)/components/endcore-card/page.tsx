"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";

export default function EndcoreCardPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">ENDCORE_CARD_MODULE</h1>
                </div>
                <p className="text-muted-foreground font-medium">The proprietary primary container unit for all tactical data and operational visualizations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <EndcoreCard title="Status_Indicators" status="active">
                    <div className="p-8 text-sm text-muted-foreground italic">
                        The 'status' prop determines the top-left indicator color.
                        <div className="mt-4 flex flex-wrap gap-4 uppercase font-bold text-[10px]">
                            <span className="text-primary border-b border-primary">Status="active"</span>
                            <span className="text-yellow-500 border-b border-yellow-500/50">Status="warning"</span>
                            <span className="text-zinc-500 border-b border-zinc-500/50">Status="neutral"</span>
                        </div>
                    </div>
                </EndcoreCard>

                <EndcoreCard title="Card_Capabilities" status="neutral">
                    <ul className="p-8 space-y-3 font-mono text-xs text-zinc-400">
                        <li>• Glassmorphism backdrop filter</li>
                        <li>• Sub-grid header orchestration</li>
                        <li>• Dynamic hover state interactions</li>
                        <li>• High-contrast industrial borders</li>
                    </ul>
                </EndcoreCard>
            </div>

            <EndcoreCard title="Full_Width_Example" status="warning">
                <div className="p-20 flex items-center justify-center font-black text-2xl tracking-[0.5em] text-white/5 select-none">
                    ENDCORE_INDUSTRIAL_SYSTEMS
                </div>
            </EndcoreCard>
        </div>
    )
}
