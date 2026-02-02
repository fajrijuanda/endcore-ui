"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, AlertTriangle, ShieldCheck, Info } from "lucide-react";

export default function AlertPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">OPERATIONAL_ALERTS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Inline messaging for providing immediate feedback, warnings, or system confirmations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <EndcoreCard title="Standard_Readouts" status="active">
                    <div className="p-8 space-y-4">
                        <Alert className="bg-primary/10 border-primary/20 rounded-2xl">
                            <Terminal className="h-4 w-4 text-primary" />
                            <AlertTitle className="text-primary font-black uppercase tracking-widest text-[10px]">SYSTEM_STABLE</AlertTitle>
                            <AlertDescription className="font-mono text-[10px] text-zinc-400">
                                Operational integrity at 100%. No anomalies detected.
                            </AlertDescription>
                        </Alert>

                        <Alert className="bg-blue-500/10 border-blue-500/20 rounded-2xl">
                            <Info className="h-4 w-4 text-blue-500" />
                            <AlertTitle className="text-blue-500 font-black uppercase tracking-widest text-[10px]">SYNC_IN_PROGRESS</AlertTitle>
                            <AlertDescription className="font-mono text-[10px] text-zinc-400">
                                Uplink to Sector 4 is currently re-routing through terrestrial backups.
                            </AlertDescription>
                        </Alert>
                    </div>
                </EndcoreCard>

                <EndcoreCard title="Critical_Warnings" status="critical">
                    <div className="p-8 space-y-4">
                        <Alert variant="destructive" className="rounded-2xl bg-red-500/10 border-red-500/20">
                            <AlertTriangle className="h-4 w-4" />
                            <AlertTitle className="font-black uppercase tracking-widest text-[10px]">VULNERABILITY_DETECTED</AlertTitle>
                            <AlertDescription className="font-mono text-[10px]">
                                Unauthorized script execution attempt blocked at Sector 7 firewall.
                            </AlertDescription>
                        </Alert>

                        <Alert className="bg-yellow-500/10 border-yellow-500/20 rounded-2xl">
                            <AlertTriangle className="h-4 w-4 text-yellow-500" />
                            <AlertTitle className="text-yellow-500 font-black uppercase tracking-widest text-[10px]">THERMAL_THRESHOLD</AlertTitle>
                            <AlertDescription className="font-mono text-[10px] text-zinc-400">
                                Core temperature at 85% of rated capacity. Cooling cycles authorized.
                            </AlertDescription>
                        </Alert>
                    </div>
                </EndcoreCard>
            </div>
        </div>
    )
}
