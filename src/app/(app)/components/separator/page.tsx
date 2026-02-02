"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { Separator } from "@/components/ui/separator";

export default function SeparatorPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">HIERARCHY_DIVIDERS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Visual delimiters for establishing categorical and structural organization.</p>
            </div>

            <EndcoreCard title="Structural_Segmentation" status="active">
                <div className="p-12 max-w-md mx-auto space-y-6">
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-tight mb-1">Sector_Control_Panel</h4>
                        <p className="text-xs text-muted-foreground font-mono">Industrial orchestration interface.</p>
                    </div>

                    <Separator className="bg-white/10" />

                    <div className="flex h-5 items-center space-x-4 text-xs font-mono uppercase text-zinc-500">
                        <div>Alpha</div>
                        <Separator orientation="vertical" className="bg-white/10" />
                        <div>Beta</div>
                        <Separator orientation="vertical" className="bg-white/10" />
                        <div>Gamma</div>
                    </div>

                    <Separator className="bg-white/10" />

                    <div className="pt-2 text-[10px] text-muted-foreground italic leading-relaxed">
                        Note: All structural dividers utilize the 1px tactical standard. Orientation shifts are supported for complex grid orchestration.
                    </div>
                </div>
            </EndcoreCard>
        </div>
    )
}
