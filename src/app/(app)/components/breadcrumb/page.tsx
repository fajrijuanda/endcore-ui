"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function BreadcrumbPageDemo() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">PATH_TRACERS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Navigational breadcrumbs for mapping current operational depth within system hierarchies.</p>
            </div>

            <EndcoreCard title="Temporal_Navigation_Path" status="active">
                <div className="p-20 flex items-center justify-center">
                    <Breadcrumb>
                        <BreadcrumbList className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl">
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className="text-[10px] font-black uppercase text-zinc-500 hover:text-primary transition-colors">ROOT</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="text-zinc-700" />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/components" className="text-[10px] font-black uppercase text-zinc-500 hover:text-primary transition-colors">MODULES</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="text-zinc-700" />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-[10px] font-black uppercase text-primary">BREADCRUMB_PROTOCOL</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </EndcoreCard>
        </div>
    )
}
