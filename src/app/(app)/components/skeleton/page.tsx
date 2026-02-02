"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">DATA_SHADOWS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Placeholder assets for maintaining structural integrity during asynchronous data fetching.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <EndcoreCard title="Component_Loading_State" status="neutral">
                    <div className="p-12 space-y-8">
                        <div className="flex items-center space-x-4">
                            <Skeleton className="h-12 w-12 rounded-full bg-white/5" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[250px] bg-white/5" />
                                <Skeleton className="h-4 w-[200px] bg-white/5" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Skeleton className="h-4 w-full bg-white/10" />
                            <Skeleton className="h-4 w-5/6 bg-white/10" />
                        </div>
                    </div>
                </EndcoreCard>

                <EndcoreCard title="Asset_Card_Loading" status="neutral">
                    <div className="p-12">
                        <div className="border border-white/5 bg-white/5 rounded-3xl p-6 space-y-4">
                            <Skeleton className="h-32 w-full rounded-2xl bg-white/10" />
                            <div className="space-y-2">
                                <Skeleton className="h-6 w-1/2 bg-white/5" />
                                <Skeleton className="h-4 w-full bg-white/5" />
                            </div>
                        </div>
                    </div>
                </EndcoreCard>
            </div>
        </div>
    )
}
