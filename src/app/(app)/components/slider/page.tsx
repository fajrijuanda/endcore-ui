"use client"

import * as React from "react"
import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { Slider } from "@/components/ui/slider";

export default function SliderPage() {
    const [value, setValue] = React.useState([50])

    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">ANALOG_CONTROLS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Fine-grained input sliders for frequency modulation and resource scaling.</p>
            </div>

            <EndcoreCard title="Modular_Frequency_Control" status="active">
                <div className="p-12 max-w-2xl mx-auto space-y-12">
                    <div className="space-y-6">
                        <div className="flex justify-between items-center text-[10px] font-black font-mono">
                            <span className="text-zinc-500 uppercase tracking-widest">SIGNAL_THRESHOLD</span>
                            <span className="text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">{value[0]}%</span>
                        </div>
                        <Slider
                            defaultValue={[50]}
                            max={100}
                            step={1}
                            onValueChange={setValue}
                            className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-black [&_.relative]:bg-white/10"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                        <div className="space-y-4">
                            <span className="text-[9px] font-black font-mono text-blue-500 uppercase tracking-widest">COOLING_FAN_RPM</span>
                            <Slider defaultValue={[20]} max={100} step={5} className="[&_[role=slider]]:bg-blue-500 [&_.relative]:bg-white/10" />
                        </div>
                        <div className="space-y-4">
                            <span className="text-[9px] font-black font-mono text-red-500 uppercase tracking-widest">CORE_VOLTAGE_OR</span>
                            <Slider defaultValue={[85]} max={100} step={5} className="[&_[role=slider]]:bg-red-500 [&_.relative]:bg-white/10" />
                        </div>
                    </div>
                </div>
            </EndcoreCard>
        </div>
    )
}
