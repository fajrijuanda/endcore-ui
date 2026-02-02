"use client"

import * as React from "react"
import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { Calendar } from "@/components/ui/calendar";

export default function CalendarPage() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">CHRONO_SCHEDULER</h1>
                </div>
                <p className="text-muted-foreground font-medium">Temporal mapping interface for mission planning and event logging.</p>
            </div>

            <EndcoreCard title="Temporal_Operational_Window" status="active">
                <div className="p-12 flex flex-col md:flex-row gap-12 items-center justify-center">
                    <div className="bg-white/5 border border-white/10 p-4 rounded-[2.5rem]">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border-none"
                        />
                    </div>

                    <div className="flex flex-col gap-4 max-w-xs">
                        <div className="p-6 border border-primary/20 bg-primary/5 rounded-[2rem] space-y-2">
                            <h4 className="text-xs font-black uppercase text-primary">SELECTED_TIMESTAMP</h4>
                            <p className="text-2xl font-black tracking-tighter">
                                {date?.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase()}
                            </p>
                            <p className="text-[10px] font-mono text-zinc-500 uppercase">Status: Scheduled_for_execution</p>
                        </div>
                        <p className="text-[10px] font-mono text-muted-foreground uppercase px-4 italic">
                            Warning: Modifying operational dates requires Command Level 3 clearance.
                        </p>
                    </div>
                </div>
            </EndcoreCard>
        </div>
    )
}
