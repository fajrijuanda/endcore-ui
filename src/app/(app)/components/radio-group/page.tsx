"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RadioGroupPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">SELECTION_MATRIX</h1>
                </div>
                <p className="text-muted-foreground font-medium">Exclusive multi-option selectors for mutually independent operational states.</p>
            </div>

            <EndcoreCard title="Deployment_Priority_Level" status="active">
                <div className="p-12 flex items-center justify-center">
                    <RadioGroup defaultValue="standard" className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-center space-x-4 border border-white/5 bg-white/5 p-6 rounded-[2rem] hover:border-primary/30 transition-all cursor-pointer group">
                            <RadioGroupItem value="standard" id="r1" className="border-zinc-700 text-primary focus:ring-primary/20" />
                            <Label htmlFor="r1" className="text-xs font-black uppercase tracking-widest cursor-pointer group-hover:text-primary transition-colors">LVL_01_STD</Label>
                        </div>
                        <div className="flex items-center space-x-4 border border-white/5 bg-white/5 p-6 rounded-[2rem] hover:border-yellow-500/30 transition-all cursor-pointer group">
                            <RadioGroupItem value="high" id="r2" className="border-zinc-700 text-yellow-500 focus:ring-yellow-500/20" />
                            <Label htmlFor="r2" className="text-xs font-black uppercase tracking-widest cursor-pointer group-hover:text-yellow-500 transition-colors">LVL_02_MED</Label>
                        </div>
                        <div className="flex items-center space-x-4 border border-white/5 bg-white/5 p-6 rounded-[2rem] hover:border-red-500/30 transition-all cursor-pointer group">
                            <RadioGroupItem value="critical" id="r3" className="border-zinc-700 text-red-500 focus:ring-red-500/20" />
                            <Label htmlFor="r3" className="text-xs font-black uppercase tracking-widest cursor-pointer group-hover:text-red-500 transition-colors">LVL_03_CRI</Label>
                        </div>
                    </RadioGroup>
                </div>
            </EndcoreCard>
        </div>
    )
}
