"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command";
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from "lucide-react";

export default function CommandPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">ACTION_TERMINAL</h1>
                </div>
                <p className="text-muted-foreground font-medium">Fast-action command pallet for immediate system orchestration.</p>
            </div>

            <EndcoreCard title="System_Omnisearch" status="active">
                <div className="p-8 max-w-2xl mx-auto">
                    <Command className="rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
                        <CommandInput placeholder="Type a command or search..." className="font-mono text-sm h-12 border-none ring-0 focus:ring-0" />
                        <CommandList className="max-h-[300px]">
                            <CommandEmpty className="py-6 text-center text-xs text-muted-foreground uppercase font-mono">No tactical matches found.</CommandEmpty>
                            <CommandGroup heading="Operational_Shortcuts" className="px-4 text-[10px] font-black uppercase text-zinc-500 tracking-widest">
                                <CommandItem className="rounded-xl px-4 py-3 my-1 data-[selected=true]:bg-primary data-[selected=true]:text-black cursor-pointer">
                                    <Calendar className="mr-3 h-4 w-4" />
                                    <span>SCHEDULE_MISSION</span>
                                    <CommandShortcut className="font-mono">⌘M</CommandShortcut>
                                </CommandItem>
                                <CommandItem className="rounded-xl px-4 py-3 my-1 data-[selected=true]:bg-primary data-[selected=true]:text-black cursor-pointer">
                                    <Smile className="mr-3 h-4 w-4" />
                                    <span>OPERATIVE_EMOJI_HUD</span>
                                    <CommandShortcut className="font-mono">⌘E</CommandShortcut>
                                </CommandItem>
                                <CommandItem className="rounded-xl px-4 py-3 my-1 data-[selected=true]:bg-primary data-[selected=true]:text-black cursor-pointer">
                                    <Calculator className="mr-3 h-4 w-4" />
                                    <span>RESOURCE_CALCULATOR</span>
                                </CommandItem>
                            </CommandGroup>
                            <CommandSeparator className="bg-white/10 mx-4" />
                            <CommandGroup heading="Settings_&_Auth" className="px-4 text-[10px] font-black uppercase text-zinc-500 tracking-widest">
                                <CommandItem className="rounded-xl px-4 py-3 my-1 data-[selected=true]:bg-primary data-[selected=true]:text-black cursor-pointer">
                                    <User className="mr-3 h-4 w-4" />
                                    <span>PROFILE_CLEARANCE</span>
                                    <CommandShortcut className="font-mono">⌘P</CommandShortcut>
                                </CommandItem>
                                <CommandItem className="rounded-xl px-4 py-3 my-1 data-[selected=true]:bg-primary data-[selected=true]:text-black cursor-pointer">
                                    <CreditCard className="mr-3 h-4 w-4" />
                                    <span>BUDGET_ALLOCATION</span>
                                    <CommandShortcut className="font-mono">⌘B</CommandShortcut>
                                </CommandItem>
                                <CommandItem className="rounded-xl px-4 py-3 my-1 data-[selected=true]:bg-primary data-[selected=true]:text-black cursor-pointer">
                                    <Settings className="mr-3 h-4 w-4" />
                                    <span>TERMINAL_CONFIG</span>
                                    <CommandShortcut className="font-mono">⌘S</CommandShortcut>
                                </CommandItem>
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </div>
            </EndcoreCard>
        </div>
    )
}
