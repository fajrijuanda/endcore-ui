"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function ContextMenuPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">PROXIMITY_COMMANDS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Right-click interfaces for contextual system executions and asset management.</p>
            </div>

            <EndcoreCard title="Asset_Interaction_Terminal" status="active">
                <div className="p-24 flex items-center justify-center">
                    <ContextMenu>
                        <ContextMenuTrigger className="flex h-[200px] w-full max-w-[400px] items-center justify-center rounded-[3rem] border border-dashed border-white/20 bg-white/5 font-mono text-sm uppercase text-zinc-500 select-none hover:bg-white/10 transition-colors">
                            RIGHT_CLICK_FOR_CONTEXT
                        </ContextMenuTrigger>
                        <ContextMenuContent className="w-64 bg-popover/90 backdrop-blur-xl border-border rounded-[2.5rem] p-4 shadow-2xl">
                            <ContextMenuItem className="rounded-xl px-4 py-2 hover:bg-primary hover:text-black cursor-pointer uppercase font-black text-[10px] tracking-widest">
                                Back
                                <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                            </ContextMenuItem>
                            <ContextMenuItem disabled className="rounded-xl px-4 py-2 opacity-30 uppercase font-black text-[10px] tracking-widest">
                                Forward
                                <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                            </ContextMenuItem>
                            <ContextMenuItem className="rounded-xl px-4 py-2 hover:bg-primary hover:text-black cursor-pointer uppercase font-black text-[10px] tracking-widest">
                                Reload
                                <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                            </ContextMenuItem>
                            <ContextMenuSub>
                                <ContextMenuSubTrigger className="rounded-xl px-4 py-2 hover:bg-primary/20 cursor-pointer uppercase font-black text-[10px] tracking-widest">More Tools</ContextMenuSubTrigger>
                                <ContextMenuSubContent className="w-48 bg-popover border-border rounded-2xl p-2 ml-1">
                                    <ContextMenuItem className="rounded-lg px-4 py-2 hover:bg-primary hover:text-black cursor-pointer uppercase font-black text-[10px] tracking-widest">Save As...</ContextMenuItem>
                                    <ContextMenuItem className="rounded-lg px-4 py-2 hover:bg-primary hover:text-black cursor-pointer uppercase font-black text-[10px] tracking-widest">Print...</ContextMenuItem>
                                </ContextMenuSubContent>
                            </ContextMenuSub>
                            <ContextMenuSeparator className="bg-white/5 my-2" />
                            <ContextMenuCheckboxItem checked className="rounded-xl px-4 py-2 hover:bg-primary/20 cursor-pointer uppercase font-black text-[10px] tracking-widest">
                                Show_Tactical_Grid
                            </ContextMenuCheckboxItem>
                            <ContextMenuCheckboxItem className="rounded-xl px-4 py-2 hover:bg-primary/20 cursor-pointer uppercase font-black text-[10px] tracking-widest">
                                Multi_Source_Sync
                            </ContextMenuCheckboxItem>
                            <ContextMenuSeparator className="bg-white/5 my-2" />
                            <ContextMenuLabel className="px-4 py-2 text-[8px] font-black uppercase text-zinc-500 tracking-[0.2em]">Priority_Level</ContextMenuLabel>
                            <ContextMenuRadioGroup value="critical">
                                <ContextMenuRadioItem value="standard" className="rounded-xl px-4 py-2 hover:bg-primary/20 cursor-pointer uppercase font-black text-[10px] tracking-widest">
                                    Standard_P
                                </ContextMenuRadioItem>
                                <ContextMenuRadioItem value="critical" className="rounded-xl px-4 py-2 hover:bg-red-500/20 text-red-500 cursor-pointer uppercase font-black text-[10px] tracking-widest">
                                    Critical_P
                                </ContextMenuRadioItem>
                            </ContextMenuRadioGroup>
                        </ContextMenuContent>
                    </ContextMenu>
                </div>
            </EndcoreCard>
        </div>
    )
}
