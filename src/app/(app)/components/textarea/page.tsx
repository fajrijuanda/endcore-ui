"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function TextareaPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">NARRATIVE_STREAMS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Multi-line text modules for mission reports and long-form operational documentation.</p>
            </div>

            <EndcoreCard title="Post_Operation_Debrief" status="active">
                <div className="p-12 max-w-2xl mx-auto space-y-8">
                    <div className="space-y-3">
                        <Label htmlFor="debrief" className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">OPERATIONAL_SUMMARY_FIELD</Label>
                        <Textarea
                            id="debrief"
                            placeholder="Type operational summary here..."
                            className="min-h-[200px] bg-white/5 border-white/10 rounded-[2rem] p-6 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 font-mono text-xs leading-relaxed"
                        />
                    </div>

                    <div className="flex justify-between items-center text-[10px] font-mono text-zinc-600 uppercase">
                        <span>Char_Limit: 5000/5000</span>
                        <span>Autosave_Active</span>
                    </div>
                </div>
            </EndcoreCard>
        </div>
    )
}
