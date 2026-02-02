"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Terminal, Database, Activity } from "lucide-react";

export default function TabsPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">VIEW_SEGMENTATION</h1>
                </div>
                <p className="text-muted-foreground font-medium">Modular view switching for complex analytical data.</p>
            </div>

            <EndcoreCard title="Operational_Contexts" status="active">
                <Tabs defaultValue="console" className="w-full">
                    <TabsList className="bg-white/5 border border-white/10 mx-6 mt-6">
                        <TabsTrigger value="console" className="flex gap-2 items-center uppercase font-black text-[10px] tracking-widest px-6 data-[state=active]:bg-primary data-[state=active]:text-black">
                            <Terminal size={14} /> CONSOLE
                        </TabsTrigger>
                        <TabsTrigger value="db" className="flex gap-2 items-center uppercase font-black text-[10px] tracking-widest px-6 data-[state=active]:bg-primary data-[state=active]:text-black">
                            <Database size={14} /> STORAGE
                        </TabsTrigger>
                        <TabsTrigger value="perf" className="flex gap-2 items-center uppercase font-black text-[10px] tracking-widest px-6 data-[state=active]:bg-primary data-[state=active]:text-black">
                            <Activity size={14} /> ANALYTICS
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="console" className="p-8 mt-0">
                        <div className="bg-black/40 rounded-3xl border border-white/5 p-6 font-mono text-[11px] space-y-2 text-zinc-400">
                            <div className="space-y-2 font-mono text-[10px] text-zinc-500 uppercase leading-relaxed">
                                <p>{" >"} [04:22] SYNC_ORBITAL_V2... SUCCESS</p>
                                <p>{" >"} [04:25] DATA_ENCRYPTION_COMPLETE...</p>
                                <p className="text-primary/50">{" >"} [04:44] REFRESH_SAT_RELAY...</p>
                                <p>{" >"} [04:55] CACHE_INITIALIZED...</p>
                                <p>{" >"} [05:00] MISSION_SYNC_READY.</p>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="db" className="p-8 mt-0 grid grid-cols-2 gap-4">
                        <div className="border border-white/5 bg-white/5 p-4 rounded-2xl">
                            <h4 className="text-[10px] font-black uppercase text-zinc-500 mb-2">SECTOR_ALPHA</h4>
                            <div className="h-1.5 w-full bg-white/10 rounded-full"><div className="w-4/5 h-full bg-primary" /></div>
                        </div>
                        <div className="border border-white/5 bg-white/5 p-4 rounded-2xl">
                            <h4 className="text-[10px] font-black uppercase text-zinc-500 mb-2">SECTOR_BETA</h4>
                            <div className="h-1.5 w-full bg-white/10 rounded-full"><div className="w-1/3 h-full bg-yellow-500" /></div>
                        </div>
                    </TabsContent>

                    <TabsContent value="perf" className="p-8 mt-0">
                        <div className="flex items-center justify-center h-40 border border-white/5 bg-white/5 rounded-3xl">
                            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.3em]">Visualizer_Offline_Signal_Blocked</span>
                        </div>
                    </TabsContent>
                </Tabs>
            </EndcoreCard>
        </div>
    )
}
