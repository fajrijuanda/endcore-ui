"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function ResizablePage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">SPATIAL_ADAPTORS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Flexible grid systems for user-defined interface layouts and modular HUD scaling.</p>
            </div>

            <EndcoreCard title="Dynamic_Layout_Interface" status="active">
                <div className="p-8">
                    <div className="h-[400px] rounded-[3rem] border border-white/10 bg-white/5 overflow-hidden">
                        <ResizablePanelGroup orientation="horizontal">
                            <ResizablePanel defaultSize={25}>
                                <div className="flex h-full items-center justify-center p-6 bg-primary/5">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">SIDEBAR_BUFF</span>
                                </div>
                            </ResizablePanel>
                            <ResizableHandle className="bg-white/10 w-1 hover:bg-primary/50 transition-colors" />
                            <ResizablePanel defaultSize={75}>
                                <ResizablePanelGroup orientation="vertical">
                                    <ResizablePanel defaultSize={25}>
                                        <div className="flex h-full items-center justify-center p-6 border-b border-white/5">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">HEADER_NODE</span>
                                        </div>
                                    </ResizablePanel>
                                    <ResizableHandle className="bg-white/10 h-1 hover:bg-primary/50 transition-colors" />
                                    <ResizablePanel defaultSize={75}>
                                        <div className="flex h-full items-center justify-center p-6">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">PRIMARY_CONTENT_STREAM</span>
                                        </div>
                                    </ResizablePanel>
                                </ResizablePanelGroup>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </div>
                </div>
            </EndcoreCard>
        </div>
    )
}
