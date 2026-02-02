"use client"

import * as React from "react"
import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { Progress } from "@/components/ui/progress";

export default function ProgressPage() {
    const [progress, setProgress] = React.useState(13)

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">PROCESS_METERS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Visual representations of operational completion states and resource depletion.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <EndcoreCard title="Core_Data_Migration" status="active">
                    <div className="p-12 space-y-8">
                        <div className="space-y-3">
                            <div className="flex justify-between items-end">
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary">UPLOAD_STREAM_01</span>
                                <span className="text-[10px] font-mono text-muted-foreground">{progress}%</span>
                            </div>
                            <Progress value={progress} className="h-1 bg-white/5" />
                        </div>

                        <div className="space-y-3 opacity-50">
                            <div className="flex justify-between items-end">
                                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">CACHE_INITIALIZATION</span>
                                <span className="text-[10px] font-mono">100%</span>
                            </div>
                            <Progress value={100} className="h-1 bg-white/5" />
                        </div>
                    </div>
                </EndcoreCard>

                <EndcoreCard title="Resource_Allocations" status="warning">
                    <div className="p-12 space-y-8">
                        <div className="space-y-3">
                            <div className="flex justify-between items-end">
                                <span className="text-[10px] font-black uppercase tracking-widest text-blue-500">THERMAL_OPTIMIZATION</span>
                                <span className="text-[10px] font-mono">82%</span>
                            </div>
                            <Progress value={82} className="h-1 bg-white/5 [&>div]:bg-blue-500" />
                        </div>

                        <div className="space-y-3">
                            <div className="flex justify-between items-end">
                                <span className="text-[10px] font-black uppercase tracking-widest text-red-500">INTEGRITY_RISK</span>
                                <span className="text-[10px] font-mono">14%</span>
                            </div>
                            <Progress value={14} className="h-1 bg-white/5 [&>div]:bg-red-500" />
                        </div>
                    </div>
                </EndcoreCard>
            </div>
        </div>
    )
}
