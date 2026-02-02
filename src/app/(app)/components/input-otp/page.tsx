"use client"

import * as React from "react"
import { EndcoreCard } from "@/components/ui/EndcoreCard";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";

export default function InputOTPPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">CRYPTO_TOKENS</h1>
                </div>
                <p className="text-muted-foreground font-medium">One-time password input modules for high-clearance authentication sequences.</p>
            </div>

            <EndcoreCard title="Biometric_Override_Auth" status="warning">
                <div className="p-20 flex flex-col items-center justify-center gap-12">
                    <div className="space-y-4 text-center">
                        <p className="text-[10px] font-mono uppercase text-zinc-500">ENTER_6_DIGIT_PASSPHRASE</p>
                        <InputOTP maxLength={6}>
                            <InputOTPGroup className="gap-2">
                                <InputOTPSlot index={0} className="w-14 h-16 rounded-2xl bg-white/5 border-white/10 text-xl font-black focus:ring-primary/20" />
                                <InputOTPSlot index={1} className="w-14 h-16 rounded-2xl bg-white/5 border-white/10 text-xl font-black focus:ring-primary/20" />
                                <InputOTPSlot index={2} className="w-14 h-16 rounded-2xl bg-white/5 border-white/10 text-xl font-black focus:ring-primary/20" />
                            </InputOTPGroup>
                            <InputOTPSeparator className="text-primary" />
                            <InputOTPGroup className="gap-2">
                                <InputOTPSlot index={3} className="w-14 h-16 rounded-2xl bg-white/5 border-white/10 text-xl font-black focus:ring-primary/20" />
                                <InputOTPSlot index={4} className="w-14 h-16 rounded-2xl bg-white/5 border-white/10 text-xl font-black focus:ring-primary/20" />
                                <InputOTPSlot index={5} className="w-14 h-16 rounded-2xl bg-white/5 border-white/10 text-xl font-black focus:ring-primary/20" />
                            </InputOTPGroup>
                        </InputOTP>
                    </div>

                    <Button className="h-12 px-12 rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-primary/10">
                        AUTHORIZE_OVERRIDE
                    </Button>
                </div>
            </EndcoreCard>
        </div>
    )
}
