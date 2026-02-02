"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DialogPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">OPERATIONAL_MODALS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Overlaid windows for focused task execution and data submission.</p>
            </div>

            <EndcoreCard title="Asset_Update_Interface" status="active">
                <div className="p-20 flex items-center justify-center">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="h-12 px-8 rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-primary/10">
                                EDIT_MISSION_PARAMETERS
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] bg-popover/80 backdrop-blur-xl border-border rounded-[3rem] p-8">
                            <DialogHeader>
                                <DialogTitle className="text-xl font-black uppercase tracking-tight">ENCRYPTION_OVERRIDE</DialogTitle>
                                <DialogDescription className="text-xs font-mono uppercase text-muted-foreground pt-1">
                                    Update your tactical profile credentials below.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-6 py-8">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-zinc-500">OPERATIVE_HANDLE</Label>
                                    <Input id="name" defaultValue="Shadow_Walker" className="bg-black/20 border-white/10 rounded-xl" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="username" className="text-[10px] font-black uppercase tracking-widest text-zinc-500">SECTOR_ASSIGNMENT</Label>
                                    <Input id="username" defaultValue="S7-EUROPA" className="bg-black/20 border-white/10 rounded-xl" />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit" className="w-full h-12 rounded-2xl font-black uppercase tracking-widest">SAVE_CHANGES</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </EndcoreCard>
        </div>
    )
}
