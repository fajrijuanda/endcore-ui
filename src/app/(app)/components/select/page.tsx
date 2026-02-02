"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function SelectPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">PARAMETER_SELECTORS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Dropdown modules for picking single values from a predefined operational list.</p>
            </div>

            <EndcoreCard title="Deployment_Sector_Selector" status="active">
                <div className="p-12 max-w-md mx-auto space-y-8">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">TARGET_REGION</label>
                        <Select>
                            <SelectTrigger className="w-full bg-white/5 border-white/10 rounded-2xl h-12 font-bold uppercase tracking-tight focus:ring-primary/20">
                                <SelectValue placeholder="SELECT_SECTOR" />
                            </SelectTrigger>
                            <SelectContent className="bg-popover border-border rounded-2xl font-mono uppercase text-xs">
                                <SelectItem value="alpha">Sector_Alpha_01</SelectItem>
                                <SelectItem value="beta">Sector_Beta_02</SelectItem>
                                <SelectItem value="gamma">Sector_Gamma_03</SelectItem>
                                <SelectItem value="delta" disabled>Sector_Delta_04 (LOCKED)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="pt-4 border-t border-white/5 space-y-4">
                        <p className="text-[10px] text-muted-foreground font-mono leading-relaxed uppercase">
                            Note: Regional selection triggers automatic satellite re-alignment. Expected downtime: {"<"} 2s.
                        </p>
                    </div>
                </div>
            </EndcoreCard>
        </div>
    )
}
