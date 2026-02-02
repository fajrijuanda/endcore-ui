"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ShieldCheck, Cpu, Wifi } from "lucide-react";

export default function CardPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">DATA_CONTAINERS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Modular assets for information density and categorization.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-white/5 border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all group">
                    <CardHeader className="pb-2">
                        <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                            <ShieldCheck className="text-primary group-hover:text-black" size={20} />
                        </div>
                        <CardTitle className="text-lg font-black uppercase tracking-tight">Security_Core</CardTitle>
                        <CardDescription className="text-xs font-mono uppercase">V4.2.1 ACTIVE</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                        Firewall protocols are currently running at peak efficiency. No unauthorized intrusion attempts detected in the last 24h.
                    </CardContent>
                    <CardFooter className="pt-0 justify-between items-center">
                        <span className="text-[10px] font-mono text-primary animate-pulse">STATUS_NOMINAL</span>
                        <div className="h-1.5 w-16 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-3/4 bg-primary" />
                        </div>
                    </CardFooter>
                </Card>

                <Card className="bg-white/5 border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all group">
                    <CardHeader className="pb-2">
                        <div className="w-10 h-10 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
                            <Cpu className="text-blue-500 group-hover:text-black" size={20} />
                        </div>
                        <CardTitle className="text-lg font-black uppercase tracking-tight">Processing_Unit</CardTitle>
                        <CardDescription className="text-xs font-mono uppercase">TEMP: 42°C</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                        Quantum cores are distributed across redundant sectors. Load balancing currently at 12% capacity.
                    </CardContent>
                    <CardFooter className="pt-0 justify-between items-center">
                        <span className="text-[10px] font-mono text-blue-500">OPTIMIZED_LOAD</span>
                        <div className="h-1.5 w-16 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-1/4 bg-blue-500" />
                        </div>
                    </CardFooter>
                </Card>

                <Card className="bg-white/5 border-white/10 rounded-3xl overflow-hidden hover:border-red-500/50 transition-all group">
                    <CardHeader className="pb-2">
                        <div className="w-10 h-10 rounded-2xl bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500 transition-colors">
                            <Wifi className="text-red-500 group-hover:text-black" size={20} />
                        </div>
                        <CardTitle className="text-lg font-black uppercase tracking-tight">Uplink_Relay</CardTitle>
                        <CardDescription className="text-xs font-mono uppercase">SIG_STRENGTH: LOW</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                        Satellite relay in Sector 7 is experiencing atmospheric interference. Re-routing through terrestrial backups.
                    </CardContent>
                    <CardFooter className="pt-0 justify-between items-center">
                        <span className="text-[10px] font-mono text-red-500">CONN_DEGRADED</span>
                        <div className="h-1.5 w-16 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-full bg-red-500" />
                        </div>
                    </CardFooter>
                </Card>
            </div>

            <EndcoreCard title="Unified_Dashboard_Preview" status="active">
                <div className="p-8">
                    <p className="text-center text-muted-foreground font-mono italic text-xs">This section demonstrates the standard EndcoreCard used throughout the platform.</p>
                </div>
            </EndcoreCard>
        </div>
    )
}
