"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { Button } from "@/components/ui/button";
import { Power, Terminal, Shield, Zap } from "lucide-react";

export default function ButtonPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">COMMAND_TRIGGERS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Interactive tactical inputs for system executions.</p>
            </div>

            <EndcoreCard title="Tactical_Standard" status="active">
                <div className="p-12 flex flex-wrap gap-6 items-center justify-center">
                    <Button className="font-black uppercase tracking-widest px-8 rounded-none h-12">
                        EXECUTE_CMD
                    </Button>
                    <Button variant="secondary" className="font-black uppercase tracking-widest px-8 rounded-none h-12">
                        STABILITY_CHECK
                    </Button>
                    <Button variant="outline" className="font-black uppercase tracking-widest px-8 rounded-none h-12 border-primary/50 text-primary hover:bg-primary/10">
                        AUDIT_LOGS
                    </Button>
                </div>
            </EndcoreCard>

            <EndcoreCard title="Functional_Variants" status="warning">
                <div className="p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <Button variant="ghost" className="flex flex-col gap-2 h-20 hover:bg-primary/5">
                        <Power size={24} />
                        <span className="text-[10px] font-bold">SYSTEM_PWR</span>
                    </Button>
                    <Button variant="ghost" className="flex flex-col gap-2 h-20 hover:bg-blue-500/5">
                        <Terminal size={24} className="text-blue-500" />
                        <span className="text-[10px] font-bold">TERMINAL_UX</span>
                    </Button>
                    <Button variant="ghost" className="flex flex-col gap-2 h-20 hover:bg-red-500/5">
                        <Shield size={24} className="text-red-500" />
                        <span className="text-[10px] font-bold">SECURITY_WLL</span>
                    </Button>
                    <Button variant="ghost" className="flex flex-col gap-2 h-20 hover:bg-yellow-500/5">
                        <Zap size={24} className="text-yellow-500" />
                        <span className="text-[10px] font-bold">CORE_SPD</span>
                    </Button>
                </div>
            </EndcoreCard>
        </div>
    )
}
