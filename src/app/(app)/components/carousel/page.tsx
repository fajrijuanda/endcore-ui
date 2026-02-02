"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">SEQUENTIAL_VIEWPORTS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Cyclic slide modules for rotating through high-resolution tactical buffers.</p>
            </div>

            <EndcoreCard title="Asset_Visual_Carousel" status="active">
                <div className="p-20 flex items-center justify-center">
                    <Carousel className="w-full max-w-sm">
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <div className="flex aspect-square items-center justify-center rounded-[3rem] border-2 border-dashed border-white/10 bg-white/5 p-6 hover:border-primary/30 transition-all group">
                                            <div className="text-center space-y-2">
                                                <span className="text-6xl font-black text-zinc-800 group-hover:text-primary/10 transition-colors">0{index + 1}</span>
                                                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">BUFFER_NODE_{index + 1}</p>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="bg-popover border-border rounded-xl text-primary -left-12" />
                        <CarouselNext className="bg-popover border-border rounded-xl text-primary -right-12" />
                    </Carousel>
                </div>
            </EndcoreCard>
        </div>
    )
}
