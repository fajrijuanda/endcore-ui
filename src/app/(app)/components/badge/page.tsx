"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { Badge } from "@/components/ui/badge";

export default function BadgePage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">STATUS_BADGES</h1>
                </div>
                <p className="text-muted-foreground font-medium">Visual indicators for categorization and status tracking.</p>
            </div>

            <EndcoreCard title="Operational_States" status="active">
                <div className="p-12 flex flex-wrap gap-4 items-center justify-center">
                    <Badge className="bg-primary text-black font-black uppercase tracking-widest px-3 py-1">ACTIVE</Badge>
                    <Badge variant="secondary" className="font-black uppercase tracking-widest px-3 py-1">STANDEBY</Badge>
                    <Badge variant="destructive" className="font-black uppercase tracking-widest px-3 py-1">COMPROMISED</Badge>
                    <Badge variant="outline" className="border-primary/50 text-primary font-black uppercase tracking-widest px-3 py-1 font-mono">ENCRYPTED</Badge>
                </div>
            </EndcoreCard>

            <EndcoreCard title="Tactical_Variants" status="neutral">
                <div className="p-12 flex flex-wrap gap-8 items-center justify-center">
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-[10px] font-mono text-muted-foreground uppercase">Clearance_L1</span>
                        <Badge className="rounded-none border-l-4 border-l-blue-500 bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">BLUE_SEC</Badge>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-[10px] font-mono text-muted-foreground uppercase">Clearance_L2</span>
                        <Badge className="rounded-none border-l-4 border-l-yellow-500 bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20">YELLOW_SEC</Badge>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-[10px] font-mono text-muted-foreground uppercase">Clearance_L3</span>
                        <Badge className="rounded-none border-l-4 border-l-red-500 bg-red-500/10 text-red-500 hover:bg-red-500/20">RED_SEC</Badge>
                    </div>
                </div>
            </EndcoreCard>
        </div>
    )
}
