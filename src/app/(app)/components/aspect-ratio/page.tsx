"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

export default function AspectRatioPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">SPATIAL_RATIOS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Fixed-ratio containers for visual consistency in multimedia tactical feeds.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <EndcoreCard title="Ratio_16_9 (Surveillance)" status="active">
                    <div className="w-full">
                        <AspectRatio ratio={16 / 9} className="bg-muted rounded-2xl overflow-hidden border border-white/10 relative">
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-10 border border-primary/20">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                                    <span className="text-[10px] font-mono text-primary font-black tracking-widest uppercase">REC_CAM_01_FEED</span>
                                </div>
                            </div>
                            <Image
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop"
                                alt="Satellite imagery"
                                fill
                                className="object-cover opacity-60"
                            />
                        </AspectRatio>
                    </div>
                </EndcoreCard>

                <EndcoreCard title="Ratio_1_1 (Identity)" status="active">
                    <div className="w-[300px] mx-auto">
                        <AspectRatio ratio={1 / 1} className="bg-muted rounded-[2rem] overflow-hidden border border-white/10 relative">
                            <div className="absolute inset-x-0 top-4 flex justify-center z-10">
                                <span className="text-[8px] font-mono text-zinc-500 bg-black/60 px-2 py-0.5 rounded uppercase tracking-tighter">Biometric_Profile_V4</span>
                            </div>
                            <Image
                                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
                                alt="Tactical circuit"
                                fill
                                className="object-cover opacity-40 grayscale"
                            />
                            <div className="absolute inset-0 border-[2px] border-primary/20 pointer-events-none" />
                        </AspectRatio>
                    </div>
                </EndcoreCard>
            </div>
        </div>
    )
}
