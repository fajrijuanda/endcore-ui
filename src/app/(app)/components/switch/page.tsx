"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ShieldAlert, Zap, Radio } from "lucide-react";

export default function SwitchPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">TACKTICAL_TOGGLES</h1>
                </div>
                <p className="text-muted-foreground font-medium">Bistable power relays for enabling/disabling critical system modules.</p>
            </div>

            <EndcoreCard title="Power_Management_Matrix" status="warning">
                <div className="p-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center gap-6 p-8 border border-white/5 bg-white/5 rounded-[3rem] hover:border-red-500/30 transition-all group">
                        <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center group-hover:bg-red-500 group-hover:text-black transition-all">
                            <ShieldAlert size={24} />
                        </div>
                        <div className="text-center">
                            <Label className="text-xs font-black uppercase tracking-widest block mb-2">FIREWALL_BYPASS</Label>
                            <p className="text-[9px] font-mono text-muted-foreground uppercase max-w-[120px]">USE_WITH_CAUTION_SIGNAL_VULNERABLE</p>
                        </div>
                        <Switch className="data-[state=checked]:bg-red-500" />
                    </div>

                    <div className="flex flex-col items-center gap-6 p-8 border border-white/5 bg-white/5 rounded-[3rem] hover:border-primary/30 transition-all group">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                            <Zap size={24} />
                        </div>
                        <div className="text-center">
                            <Label className="text-xs font-black uppercase tracking-widest block mb-2">ACCELERATION_DRIVE</Label>
                            <p className="text-[9px] font-mono text-muted-foreground uppercase max-w-[120px]">PEAK_PROCESSING_SYNC_ACTIVE</p>
                        </div>
                        <Switch defaultChecked className="data-[state=checked]:bg-primary" />
                    </div>

                    <div className="flex flex-col items-center gap-6 p-8 border border-white/5 bg-white/5 rounded-[3rem] hover:border-blue-500/30 transition-all group">
                        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-black transition-all">
                            <Radio size={24} />
                        </div>
                        <div className="text-center">
                            <Label className="text-xs font-black uppercase tracking-widest block mb-2">SATELLITE_UPLINK</Label>
                            <p className="text-[9px] font-mono text-muted-foreground uppercase max-w-[120px]">CONNECTING_TO_ORBITAL_V2</p>
                        </div>
                        <Switch className="data-[state=checked]:bg-blue-500" />
                    </div>
                </div>
            </EndcoreCard>
        </div>
    )
}
