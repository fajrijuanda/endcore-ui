"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">MODULAR_ACCORDIONS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Vertical toggles for managing dense operational intelligence and collapsible system readouts.</p>
            </div>

            <EndcoreCard title="System_Operational_Protocols" status="active">
                <div className="p-8">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="border-white/5">
                            <AccordionTrigger className="font-bold hover:no-underline hover:text-primary transition-colors uppercase tracking-wider">
                                01_CORE_INITIALIZATION
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground font-mono text-xs leading-relaxed">
                                Ensure all orbital relays are aligned before starting the core initialization sequence.
                                Failure to comply may result in signal degradation across Sector 7.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-white/5">
                            <AccordionTrigger className="font-bold hover:no-underline hover:text-primary transition-colors uppercase tracking-wider">
                                02_DATA_PURGE_SEQUENCE
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground font-mono text-xs leading-relaxed">
                                A full data purge will wipe all local caches and temporary mission logs.
                                This action is recommended after every 24-hour operational cycle.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border-white/5">
                            <AccordionTrigger className="font-bold hover:no-underline hover:text-primary transition-colors uppercase tracking-wider">
                                03_AUTHORIZATION_LEVELS
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground font-mono text-xs leading-relaxed">
                                Multi-factor biometric authentication required for Level 4 clearance. Level 5 requires
                                physical hardware key injection.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <div className="mt-8 pt-8 border-t border-white/5">
                        <p className="text-[10px] text-muted-foreground font-mono leading-relaxed uppercase">
                            Note: Component behavior depends on local bandwidth. Expected lag: {"<"} 50ms
                        </p>
                    </div>
                </div>
            </EndcoreCard>
        </div>
    )
}
