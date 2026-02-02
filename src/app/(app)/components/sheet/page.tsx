"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
    SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Database, Shield, Globe } from "lucide-react";

export default function SheetPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">SIDE_HUD_SHEETS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Off-canvas overlays that slide in from any screen edge, typically for navigation or sub-system management.</p>
            </div>

            <EndcoreCard title="Auxiliary_Command_Buffer" status="active">
                <div className="p-20 flex items-center justify-center gap-8">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="h-12 px-8 rounded-2xl font-black uppercase tracking-widest border-primary/30 text-primary hover:bg-primary/5">
                                OPEN_LEFT_BUFFER
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-popover border-r-2 border-primary/20 p-8 shadow-2xl">
                            <SheetHeader className="pb-8">
                                <SheetTitle className="text-2xl font-black uppercase tracking-tighter">PRIMARY_SYS_LOG</SheetTitle>
                                <SheetDescription className="text-[10px] font-mono uppercase text-muted-foreground">Historical command execution logs for Sector 1.</SheetDescription>
                            </SheetHeader>
                            <div className="space-y-4 font-mono text-[10px] text-zinc-500">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/5">{" >"} [04:22] SYNC_W_ORBITAL_V2... SUCCESS</div>
                                <div className="p-3 bg-white/5 rounded-xl border border-white/5">{" >"} [04:25] REFRESH_FIREWALL_P... DONE</div>
                                <div className="p-3 bg-red-500/10 text-red-500 rounded-xl border border-red-500/20">{" >"} [04:28] INTRUSION_DET_S7... ALERT</div>
                            </div>
                        </SheetContent>
                    </Sheet>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button className="h-12 px-8 rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-primary/20">
                                OPEN_RIGHT_DASH
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-popover border-l-2 border-primary/20 p-8 shadow-2xl">
                            <SheetHeader className="pb-8">
                                <SheetTitle className="text-2xl font-black uppercase tracking-tighter">SECURE_DASHBOARD</SheetTitle>
                                <SheetDescription className="text-[10px] font-mono uppercase text-muted-foreground">Real-time system health and security status.</SheetDescription>
                            </SheetHeader>
                            <div className="grid grid-cols-1 gap-4">
                                <div className="flex items-center justify-between p-6 bg-white/5 rounded-[2rem] border border-white/5">
                                    <Shield className="text-primary" size={24} />
                                    <div className="text-right">
                                        <span className="block text-[10px] font-black uppercase text-zinc-500">SHIELD</span>
                                        <span className="text-lg font-black font-mono">100%</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-6 bg-white/5 rounded-[2rem] border border-white/5">
                                    <Globe className="text-blue-500" size={24} />
                                    <div className="text-right">
                                        <span className="block text-[10px] font-black uppercase text-zinc-500">UPLINK</span>
                                        <span className="text-lg font-black font-mono">ACTIVE</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-6 bg-white/5 rounded-[2rem] border border-white/5">
                                    <Database className="text-yellow-500" size={24} />
                                    <div className="text-right">
                                        <span className="block text-[10px] font-black uppercase text-zinc-500">BUFF</span>
                                        <span className="text-lg font-black font-mono">OK</span>
                                    </div>
                                </div>
                            </div>
                            <SheetFooter className="absolute bottom-8 left-8 right-8">
                                <SheetClose asChild>
                                    <Button variant="destructive" className="w-full h-12 rounded-2xl uppercase font-black tracking-widest">CLOSE_DASHBOARD</Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </EndcoreCard>
        </div>
    )
}
