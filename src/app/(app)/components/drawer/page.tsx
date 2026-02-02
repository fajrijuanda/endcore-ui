"use client"

import * as React from "react"
import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { BarChart, Activity, Zap } from "lucide-react"

export default function DrawerPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">MOBILE_HUD_DRAWERS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Bottom-anchored sheets primarily optimized for high-density mobile tactical views.</p>
            </div>

            <EndcoreCard title="System_Diagnostics_Tray" status="active">
                <div className="p-20 flex items-center justify-center">
                    <Drawer>
                        <DrawerTrigger asChild>
                            <Button variant="outline" className="h-12 px-8 rounded-2xl font-black uppercase tracking-widest border-primary/20 text-primary hover:bg-primary/5">
                                OPEN_DIAGNOSTICS
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent className="bg-popover border-t-2 border-primary/20 rounded-t-[3rem]">
                            <div className="mx-auto w-full max-w-sm">
                                <DrawerHeader className="pt-10">
                                    <DrawerTitle className="text-2xl font-black uppercase tracking-tighter text-center">CORE_HEALTH_READOUT</DrawerTitle>
                                    <DrawerDescription className="text-center font-mono text-[10px] uppercase text-muted-foreground">Real-time telemetry stream from Sector 4.</DrawerDescription>
                                </DrawerHeader>
                                <div className="p-10 space-y-8">
                                    <div className="flex items-center justify-between border-b border-white/5 pb-4">
                                        <div className="flex items-center gap-3">
                                            <Zap className="text-yellow-500" size={18} />
                                            <span className="text-xs font-bold uppercase tracking-widest">POWER_LEVEL</span>
                                        </div>
                                        <span className="text-sm font-black font-mono">98.4%</span>
                                    </div>
                                    <div className="flex items-center justify-between border-b border-white/5 pb-4">
                                        <div className="flex items-center gap-3">
                                            <Activity className="text-primary" size={18} />
                                            <span className="text-xs font-bold uppercase tracking-widest">NETWORK_LATENCY</span>
                                        </div>
                                        <span className="text-sm font-black font-mono">12ms</span>
                                    </div>
                                    <div className="flex items-center justify-center pt-4">
                                        <div className="w-full h-24 bg-black/40 rounded-3xl border border-white/5 flex items-center justify-center">
                                            <BarChart className="text-zinc-700 animate-pulse" size={40} />
                                        </div>
                                    </div>
                                </div>
                                <DrawerFooter className="pb-10">
                                    <Button className="h-12 rounded-2xl font-black uppercase tracking-widest">RUN_FULL_SCRUB</Button>
                                    <DrawerClose asChild>
                                        <Button variant="ghost" className="h-12 rounded-2xl uppercase font-bold text-xs">DISMISS_HUD</Button>
                                    </DrawerClose>
                                </DrawerFooter>
                            </div>
                        </DrawerContent>
                    </Drawer>
                </div>
            </EndcoreCard>
        </div>
    )
}
