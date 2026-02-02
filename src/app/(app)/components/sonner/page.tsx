"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Bell, ShieldCheck, AlertTriangle, Terminal } from "lucide-react";

export default function SonnerPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">HAPTIC_NOTIFICATIONS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Ephemeral notification toasts for non-interruptive real-time system feedback.</p>
            </div>

            <EndcoreCard title="Toast_Execution_Panel" status="active">
                <div className="p-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <Button
                        variant="outline"
                        onClick={() => toast("SYSTEM_STATUS_NOMINAL", {
                            description: "All core modules operating within standard parameters.",
                            icon: <Terminal size={16} className="text-primary" />
                        })}
                        className="h-20 flex flex-col gap-2 rounded-3xl border-white/10 hover:border-primary transition-all font-black text-[10px] uppercase"
                    >
                        <Terminal size={24} /> NORMAL
                    </Button>

                    <Button
                        variant="outline"
                        onClick={() => toast.success("AUTHENTICATION_SUCCESS", {
                            description: "Operational credentials verified. Session established.",
                        })}
                        className="h-20 flex flex-col gap-2 rounded-3xl border-white/10 hover:border-green-500 transition-all font-black text-[10px] uppercase"
                    >
                        <ShieldCheck size={24} className="text-green-500" /> SUCCESS
                    </Button>

                    <Button
                        variant="outline"
                        onClick={() => toast.error("ACCESS_DENIED", {
                            description: "Invalid authorization level for targeted sector.",
                        })}
                        className="h-20 flex flex-col gap-2 rounded-3xl border-white/10 hover:border-red-500 transition-all font-black text-[10px] uppercase"
                    >
                        <AlertTriangle size={24} className="text-red-500" /> ERROR
                    </Button>

                    <Button
                        variant="outline"
                        onClick={() => toast("NOTIFICATION_INCOMING", {
                            description: "New command received from central command.",
                            action: {
                                label: "REPLY",
                                onClick: () => console.log("Reply clicked")
                            }
                        })}
                        className="h-20 flex flex-col gap-2 rounded-3xl border-white/10 hover:border-blue-500 transition-all font-black text-[10px] uppercase"
                    >
                        <Bell size={24} className="text-blue-500" /> ACTION
                    </Button>
                </div>
                <div className="pb-8 text-center text-[8px] font-mono text-muted-foreground uppercase tracking-widest">
                    Toast_Position: TOP_RIGHT (Default_HUD_Configuration)
                </div>
            </EndcoreCard>
        </div>
    )
}
