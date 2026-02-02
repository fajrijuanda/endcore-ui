"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings2 } from "lucide-react";

export default function PopoverPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">FLOATING_HUD_PANELS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Context-aware floating panels for managing specific operational parameters without losing global focus.</p>
            </div>

            <EndcoreCard title="Asset_Tweak_Panel" status="active">
                <div className="p-20 flex items-center justify-center">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline" size="icon" className="w-14 h-14 rounded-2xl border-white/10 hover:bg-primary hover:text-black transition-all">
                                <Settings2 className="h-6 w-6" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80 bg-popover/80 backdrop-blur-xl border-border rounded-[2.5rem] p-6">
                            <div className="grid gap-6">
                                <div className="space-y-1">
                                    <h4 className="font-black uppercase tracking-tight text-foreground">HUD_Dimensions</h4>
                                    <p className="text-[10px] font-mono text-muted-foreground uppercase">Adjust the spatial scale of the current HUD layer.</p>
                                </div>
                                <div className="grid gap-4">
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label htmlFor="width" className="text-[9px] font-black uppercase text-zinc-500">WIDTH</Label>
                                        <Input
                                            id="width"
                                            defaultValue="100%"
                                            className="col-span-2 h-8 bg-black/20 border-white/10 rounded-lg text-[10px] font-mono"
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label htmlFor="height" className="text-[9px] font-black uppercase text-zinc-500">HEIGHT</Label>
                                        <Input
                                            id="height"
                                            defaultValue="auto"
                                            className="col-span-2 h-8 bg-black/20 border-white/10 rounded-lg text-[10px] font-mono"
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label htmlFor="maxHeight" className="text-[9px] font-black uppercase text-zinc-500">OPACITY</Label>
                                        <Input
                                            id="maxHeight"
                                            defaultValue="0.8"
                                            className="col-span-2 h-8 bg-black/20 border-white/10 rounded-lg text-[10px] font-mono"
                                        />
                                    </div>
                                </div>
                                <Button className="h-10 rounded-xl font-black uppercase tracking-widest text-[10px]">APPLY_DIMENSIONS</Button>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </EndcoreCard>
        </div>
    )
}
