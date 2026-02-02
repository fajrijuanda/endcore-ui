"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">BINARY_SWITCHES</h1>
                </div>
                <p className="text-muted-foreground font-medium">Toggle modules for dual-state system parameters and authorization flags.</p>
            </div>

            <EndcoreCard title="System_Configuration" status="active">
                <div className="p-12 max-w-xl mx-auto space-y-8">
                    <div className="flex items-start gap-4 p-4 border border-white/5 bg-white/5 rounded-[2rem] hover:bg-white/10 transition-colors group">
                        <Checkbox id="terms" className="mt-1 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                        <div className="grid gap-1.5 leading-none">
                            <Label
                                htmlFor="terms"
                                className="text-sm font-black uppercase tracking-tight group-hover:text-primary transition-colors cursor-pointer"
                            >
                                Terms_of_Engagement
                            </Label>
                            <p className="text-[10px] font-mono text-muted-foreground uppercase">
                                I verify that all tactical operations conducted through this terminal are authorized under Protocol 4.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
                        <div className="flex items-center space-x-3">
                            <Checkbox id="c1" className="bg-white/5 border-white/20 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500" />
                            <Label htmlFor="c1" className="text-xs font-bold font-mono">ENCRYPT_LOCAL</Label>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Checkbox id="c2" defaultChecked className="bg-white/5 border-white/20 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                            <Label htmlFor="c2" className="text-xs font-bold font-mono">AUTO_SYNC_HQ</Label>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Checkbox id="c3" className="bg-white/5 border-white/20 data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500" />
                            <Label htmlFor="c3" className="text-xs font-bold font-mono">DEBUG_OVERRIDE</Label>
                        </div>
                        <div className="flex items-center space-x-3 opacity-50">
                            <Checkbox id="c4" disabled className="bg-white/5 border-white/20" />
                            <Label htmlFor="c4" className="text-xs font-bold font-mono italic">TERMINATE_LINK</Label>
                        </div>
                    </div>
                </div>
            </EndcoreCard>
        </div>
    )
}
