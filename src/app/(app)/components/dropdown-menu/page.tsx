"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
    DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreVertical, Settings, User, Mail, PlusCircle, Github } from "lucide-react";

export default function DropdownMenuPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">TRIGGER_ARRAYS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Vertical action menus for consolidating complex operational choices into a single interface node.</p>
            </div>

            <EndcoreCard title="Asset_Administrative_Menu" status="active">
                <div className="p-20 flex items-center justify-center">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon" className="w-14 h-14 rounded-2xl border-white/10 hover:bg-primary hover:text-black transition-all">
                                <MoreVertical className="h-6 w-6" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 bg-popover/80 backdrop-blur-xl border-border rounded-[2.5rem] p-4 shadow-2xl">
                            <DropdownMenuLabel className="px-4 py-2 text-[9px] font-black uppercase text-zinc-500 tracking-[0.2em]">My_Account</DropdownMenuLabel>
                            <DropdownMenuSeparator className="bg-white/5 my-1" />
                            <DropdownMenuItem className="rounded-xl px-4 py-2 hover:bg-primary hover:text-black cursor-pointer uppercase font-black text-[10px] tracking-widest gap-3">
                                <User size={14} /> Profile
                                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="rounded-xl px-4 py-2 hover:bg-primary hover:text-black cursor-pointer uppercase font-black text-[10px] tracking-widest gap-3">
                                <Settings size={14} /> Settings
                                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-white/5 my-1" />
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger className="rounded-xl px-4 py-2 hover:bg-primary/20 cursor-pointer uppercase font-black text-[10px] tracking-widest gap-3">
                                    <PlusCircle size={14} /> Invite_Users
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent className="bg-popover border-border rounded-2xl p-2 ml-1">
                                        <DropdownMenuItem className="rounded-lg px-4 py-2 hover:bg-primary hover:text-black cursor-pointer uppercase font-black text-[10px] tracking-widest gap-3">
                                            <Mail size={14} /> Email
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="rounded-lg px-4 py-2 hover:bg-primary hover:text-black cursor-pointer uppercase font-black text-[10px] tracking-widest gap-3">
                                            <Github size={14} /> Github
                                        </DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>
                            <DropdownMenuSeparator className="bg-white/5 my-1" />
                            <DropdownMenuItem className="rounded-xl px-4 py-2 hover:bg-red-500/20 text-red-500 cursor-pointer uppercase font-black text-[10px] tracking-widest">
                                Log_Out
                                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </EndcoreCard>
        </div>
    )
}
