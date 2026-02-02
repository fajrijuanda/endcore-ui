"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function AlertDialogPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">CRITICAL_INTERRUPTS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Modal dialogs that interrupt the user with urgent information and require a definitive action.</p>
            </div>

            <EndcoreCard title="Emergency_Override_Terminal" status="critical">
                <div className="p-20 flex items-center justify-center">
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="destructive" className="h-16 px-12 rounded-[2rem] font-black uppercase tracking-[0.2em] shadow-lg shadow-red-500/20 hover:scale-105 transition-transform">
                                TERMINATE_ALL_PROCESSES
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="bg-popover border-border rounded-[3rem] p-10">
                            <AlertDialogHeader>
                                <AlertDialogTitle className="text-2xl font-black uppercase tracking-tight text-red-500">ABSOLUTE_CONFIRMATION_REQUIRED</AlertDialogTitle>
                                <AlertDialogDescription className="text-muted-foreground font-mono leading-relaxed pt-2">
                                    This action is irreversible. All current operational data streams will be purged and satellite links severed.
                                    Are you sure you want to initialize the scorched-earth protocol?
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter className="mt-8 gap-4">
                                <AlertDialogCancel className="rounded-2xl h-12 px-8 uppercase font-bold tracking-widest border-white/10 hover:bg-white/5">ABORT_PURGE</AlertDialogCancel>
                                <AlertDialogAction className="rounded-2xl h-12 px-8 uppercase font-bold tracking-widest bg-red-500 text-white hover:bg-red-600">CONFIRM_DELETION</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </EndcoreCard>
        </div>
    )
}
