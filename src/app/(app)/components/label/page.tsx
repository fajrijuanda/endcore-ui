"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function LabelPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">SEMANTIC_LABELS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Accessible taxonomic descriptors for interactive user interface modules.</p>
            </div>

            <EndcoreCard title="Field_Documentation" status="active">
                <div className="p-12 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="operative-id" className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">OPERATIVE_SERIAL_ID</Label>
                            <Input id="operative-id" placeholder="UID-0000-X" className="bg-transparent border-white/10 focus:border-primary/50 text-xs font-mono" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="bio-key" className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">BIOMETRIC_ENCRYPTION_KEY</Label>
                            <Input id="bio-key" type="password" placeholder="********" className="bg-transparent border-white/10 focus:border-primary/50 text-xs font-mono" />
                        </div>
                    </div>

                    <div className="space-y-6 pt-4">
                        <div className="flex items-start gap-4 p-4 border border-white/5 bg-white/5 rounded-2xl group hover:border-primary/30 transition-all">
                            <div className="w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors rounded-full" />
                            <div>
                                <Label className="block mb-1 text-xs font-bold uppercase transition-colors group-hover:text-primary">Operational_Priority_Alpha</Label>
                                <p className="text-[10px] text-muted-foreground font-mono">Mission critical objectives only. Requires direct commander approval for modification.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </EndcoreCard>
        </div>
    )
}
