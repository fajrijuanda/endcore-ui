"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const missions = [
    {
        id: "OP-9211",
        sector: "EUROPA-01",
        priority: "CRITICAL",
        status: "ACTIVE",
        operatives: 4,
    },
    {
        id: "OP-4482",
        sector: "MARS-CENTRAL",
        priority: "STANDARD",
        status: "STANDEBY",
        operatives: 2,
    },
    {
        id: "OP-7731",
        sector: "VOID-12",
        priority: "HIGH",
        status: "ARCHIVED",
        operatives: 12,
    },
    {
        id: "OP-1102",
        sector: "LUNA-DARK",
        priority: "LOW",
        status: "STANDEBY",
        operatives: 1,
    },
]

export default function TableDemoPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">TABULAR_DATA_MATRICES</h1>
                </div>
                <p className="text-muted-foreground font-medium">Standard grid modules for organizing high-density linear data sets.</p>
            </div>

            <EndcoreCard title="Active_Mission_Registry" status="active">
                <div className="p-8">
                    <div className="rounded-[2.5rem] border border-white/5 bg-white/5 overflow-hidden">
                        <Table>
                            <TableCaption className="text-[9px] font-mono uppercase pb-4">End_of_Mission_Log_v4.2</TableCaption>
                            <TableHeader className="bg-white/5 border-b border-white/5">
                                <TableRow className="hover:bg-transparent border-none">
                                    <TableHead className="w-[100px] font-black uppercase text-[10px] tracking-widest text-zinc-500 h-14 px-8">MISSION_ID</TableHead>
                                    <TableHead className="font-black uppercase text-[10px] tracking-widest text-zinc-500 h-14">SECTOR</TableHead>
                                    <TableHead className="font-black uppercase text-[10px] tracking-widest text-zinc-500 h-14">PRIORITY</TableHead>
                                    <TableHead className="text-right font-black uppercase text-[10px] tracking-widest text-zinc-500 h-14 px-8">STATUS</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {missions.map((mission) => (
                                    <TableRow key={mission.id} className="border-b border-white/5 last:border-none hover:bg-primary/5 transition-colors group">
                                        <TableCell className="font-black h-14 px-8 group-hover:text-primary transition-colors">{mission.id}</TableCell>
                                        <TableCell className="font-mono text-xs text-zinc-400">{mission.sector}</TableCell>
                                        <TableCell>
                                            <span className={`text-[9px] font-black px-2 py-0.5 rounded border ${mission.priority === 'CRITICAL' ? 'border-red-500 text-red-500 bg-red-500/10' :
                                                    mission.priority === 'HIGH' ? 'border-yellow-500 text-yellow-500 bg-yellow-500/10' :
                                                        'border-zinc-700 text-zinc-500 bg-white/5'
                                                }`}>
                                                {mission.priority}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-right h-14 px-8 font-mono text-[10px] text-zinc-500 uppercase">{mission.status}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </EndcoreCard>
        </div>
    )
}
