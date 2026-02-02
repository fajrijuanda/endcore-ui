"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">BUFFER_SEGMENTATION</h1>
                </div>
                <p className="text-muted-foreground font-medium">Pagination controls for navigating through chunked data streams and expansive record sets.</p>
            </div>

            <EndcoreCard title="Query_Result_Navigation" status="active">
                <div className="p-20 flex items-center justify-center">
                    <Pagination className="bg-white/5 border border-white/10 p-2 rounded-[2rem]">
                        <PaginationContent className="gap-2">
                            <PaginationItem>
                                <PaginationPrevious href="#" className="rounded-2xl h-10 px-4 hover:bg-primary/20 uppercase font-black text-[10px]" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" className="rounded-xl w-10 h-10 hover:bg-primary/20 uppercase font-black text-[10px]">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" isActive className="rounded-xl w-10 h-10 bg-primary text-black hover:bg-primary uppercase font-black text-[10px]">2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" className="rounded-xl w-10 h-10 hover:bg-primary/20 uppercase font-black text-[10px]">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis className="text-zinc-600" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#" className="rounded-2xl h-10 px-4 hover:bg-primary/20 uppercase font-black text-[10px]" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </EndcoreCard>
        </div>
    )
}
