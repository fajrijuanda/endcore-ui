"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar";

export default function MenubarPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">SYSTEM_MENU_ARRAYS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Horizontal navigational bars for top-level system orchestration and configuration management.</p>
            </div>

            <EndcoreCard title="Root_Terminal_Configuration" status="active">
                <div className="p-20 flex items-center justify-center">
                    <Menubar className="bg-white/5 border border-white/10 rounded-[2rem] px-2 h-14 w-full max-w-lg">
                        <MenubarMenu>
                            <MenubarTrigger className="rounded-2xl px-6 data-[state=open]:bg-primary data-[state=open]:text-black uppercase font-black text-[10px] tracking-widest cursor-pointer transition-all">SYSTEM</MenubarTrigger>
                            <MenubarContent className="bg-popover border-border rounded-xl p-2 shadow-2xl">
                                <MenubarItem className="rounded-lg px-4 py-2 hover:bg-primary hover:text-black cursor-pointer uppercase font-black text-[10px] tracking-widest">
                                    New_Tab <MenubarShortcut>⌘T</MenubarShortcut>
                                </MenubarItem>
                                <MenubarItem className="rounded-lg px-4 py-2 hover:bg-primary hover:text-black cursor-pointer uppercase font-black text-[10px] tracking-widest">
                                    New_Window <MenubarShortcut>⌘N</MenubarShortcut>
                                </MenubarItem>
                                <MenubarSeparator className="bg-white/5 my-1" />
                                <MenubarItem disabled className="rounded-lg px-4 py-2 opacity-30 uppercase font-black text-[10px] tracking-widest">Share</MenubarItem>
                                <MenubarSeparator className="bg-white/5 my-1" />
                                <MenubarItem className="rounded-lg px-4 py-2 hover:bg-red-500/20 text-red-500 cursor-pointer uppercase font-black text-[10px] tracking-widest">Exit</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger className="rounded-2xl px-6 data-[state=open]:bg-primary data-[state=open]:text-black uppercase font-black text-[10px] tracking-widest cursor-pointer transition-all">EDIT</MenubarTrigger>
                            <MenubarContent className="bg-popover border-border rounded-xl p-2 shadow-2xl">
                                <MenubarItem className="rounded-lg px-4 py-2 hover:bg-primary hover:text-black cursor-pointer uppercase font-black text-[10px] tracking-widest">
                                    Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                                </MenubarItem>
                                <MenubarItem className="rounded-lg px-4 py-2 hover:bg-primary hover:text-black cursor-pointer uppercase font-black text-[10px] tracking-widest">
                                    Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger className="rounded-2xl px-6 data-[state=open]:bg-primary data-[state=open]:text-black uppercase font-black text-[10px] tracking-widest cursor-pointer transition-all">VIEW</MenubarTrigger>
                            <MenubarContent className="bg-popover border-border rounded-xl p-2 shadow-2xl">
                                <MenubarCheckboxItem className="rounded-lg px-4 py-2 hover:bg-primary/20 cursor-pointer uppercase font-black text-[10px] tracking-widest">Show_Status_Bar</MenubarCheckboxItem>
                                <MenubarCheckboxItem checked className="rounded-lg px-4 py-2 hover:bg-primary/20 cursor-pointer uppercase font-black text-[10px] tracking-widest">Show_Full_Path</MenubarCheckboxItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                </div>
            </EndcoreCard>
        </div>
    )
}
