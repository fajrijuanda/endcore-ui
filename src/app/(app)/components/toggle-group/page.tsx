"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group";
import { Monitor, Phone, Tablet } from "lucide-react";

export default function ToggleGroupPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">SEGMENTED_CONTROLS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Coordinate sets of toggles for exclusive or multi-selection inputs.</p>
            </div>

            <EndcoreCard title="Terminal_View_Selection" status="active">
                <div className="p-12 flex flex-col items-center justify-center gap-8">
                    <ToggleGroup type="single" defaultValue="monitor" className="bg-white/5 p-2 rounded-[2rem] border border-white/10">
                        <ToggleGroupItem value="phone" aria-label="Toggle phone" className="rounded-2xl px-6 h-12 data-[state=on]:bg-primary data-[state=on]:text-black uppercase font-black text-[10px] tracking-widest gap-2">
                            <Phone size={16} /> MOBILE
                        </ToggleGroupItem>
                        <ToggleGroupItem value="tablet" aria-label="Toggle tablet" className="rounded-2xl px-6 h-12 data-[state=on]:bg-primary data-[state=on]:text-black uppercase font-black text-[10px] tracking-widest gap-2">
                            <Tablet size={16} /> TABLET
                        </ToggleGroupItem>
                        <ToggleGroupItem value="monitor" aria-label="Toggle monitor" className="rounded-2xl px-6 h-12 data-[state=on]:bg-primary data-[state=on]:text-black uppercase font-black text-[10px] tracking-widest gap-2">
                            <Monitor size={16} /> DESKTOP
                        </ToggleGroupItem>
                    </ToggleGroup>

                    <div className="flex flex-col items-center gap-2">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase">Input_Type_Single_Exclusive</span>
                        <div className="h-1 w-20 bg-primary/20 rounded-full" />
                    </div>
                </div>
            </EndcoreCard>
        </div>
    )
}
