"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { Toggle } from "@/components/ui/toggle";
import { Bold, Italic, Underline, Lock, Shield } from "lucide-react";

export default function TogglePage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">STATE_SWITCHERS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Two-state buttons for toggling individual parameters and interface features.</p>
            </div>

            <EndcoreCard title="Operational_Flags" status="active">
                <div className="p-12 flex flex-wrap gap-8 items-center justify-center">
                    <Toggle aria-label="Toggle bold" className="w-[120px] h-12 bg-white/5 border border-white/10 rounded-xl data-[state=on]:bg-primary data-[state=on]:text-black uppercase font-black text-[10px] tracking-widest gap-2">
                        <Shield size={16} /> SECURE
                    </Toggle>

                    <Toggle aria-label="Toggle italic" className="w-[120px] h-12 bg-white/5 border border-white/10 rounded-xl data-[state=on]:bg-blue-500 data-[state=on]:text-black uppercase font-black text-[10px] tracking-widest gap-2">
                        <Lock size={16} /> PRIVATE
                    </Toggle>

                    <div className="flex items-center gap-2 p-2 px-3 bg-white/5 border border-white/10 rounded-2xl">
                        <Toggle size="sm" className="data-[state=on]:bg-primary/20 data-[state=on]:text-primary"><Bold size={16} /></Toggle>
                        <Toggle size="sm" className="data-[state=on]:bg-primary/20 data-[state=on]:text-primary"><Italic size={16} /></Toggle>
                        <Toggle size="sm" className="data-[state=on]:bg-primary/20 data-[state=on]:text-primary"><Underline size={16} /></Toggle>
                    </div>
                </div>
            </EndcoreCard>
        </div>
    )
}
