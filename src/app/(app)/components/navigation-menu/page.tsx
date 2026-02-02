"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

export default function NavigationMenuPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">MEGA_NAV_NODES</h1>
                </div>
                <p className="text-muted-foreground font-medium">Complex hierarchical menu systems for expansive system architectures and categorical documentation.</p>
            </div>

            <EndcoreCard title="Main_Architecture_Gateway" status="active">
                <div className="p-20 flex items-center justify-center">
                    <NavigationMenu>
                        <NavigationMenuList className="bg-white/5 border border-white/10 p-2 rounded-[2rem] gap-2">
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent hover:bg-primary/10 rounded-2xl h-12 px-6 uppercase font-black text-[10px] tracking-widest">RESOURCES</NavigationMenuTrigger>
                                <NavigationMenuContent className="bg-popover/90 backdrop-blur-xl border-border rounded-[2rem] p-6 w-[400px] md:w-[500px]">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-primary/10 p-6 rounded-2xl flex flex-col justify-end gap-2 border border-primary/20 hover:bg-primary/20 transition-all cursor-pointer group">
                                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-black">?</div>
                                            <h4 className="font-black uppercase text-sm tracking-tight text-primary">Documentation</h4>
                                            <p className="text-[10px] font-mono text-zinc-500 leading-snug">Full technical readout of all system modules and protocols.</p>
                                        </div>
                                        <div className="grid gap-2">
                                            <ListItem title="API_REFERENCE" href="#">RESTful telemetry streams and hooks.</ListItem>
                                            <ListItem title="SECURITY_AUDIT" href="#">Standard compliance reports.</ListItem>
                                            <ListItem title="STABILITY_LOG" href="#">Uptime and core integrity metrics.</ListItem>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent hover:bg-primary/10 rounded-2xl h-12 px-6 uppercase font-black text-[10px] tracking-widest">MISSION</NavigationMenuTrigger>
                                <NavigationMenuContent className="bg-popover border-border rounded-2xl p-6 w-[300px]">
                                    <div className="flex flex-col gap-2">
                                        <ListItem title="ACTIVE_OPS" href="#">Current deployments.</ListItem>
                                        <ListItem title="ARCHIVE" href="#">Historical data sets.</ListItem>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </EndcoreCard>
        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 hover:text-primary focus:bg-white/5 focus:text-primary",
                        className
                    )}
                    {...props}
                >
                    <div className="text-[10px] font-black uppercase tracking-widest">{title}</div>
                    <p className="line-clamp-2 text-[9px] font-mono leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
