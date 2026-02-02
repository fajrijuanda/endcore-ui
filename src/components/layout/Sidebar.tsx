"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    ShoppingBag,
    Layers,
    FileText,
    Settings,
    ChevronLeft,
    ChevronRight,
    Users,
    Table,
    LayoutList
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const sidebarItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    { name: 'Components', icon: Layers, href: '/components' },
    { name: 'Widgets', icon: LayoutList, href: '/widgets' },
    { name: 'Forms', icon: FileText, href: '/forms' },
    { name: 'Tables', icon: Table, href: '/tables' },
    { name: 'Shop', icon: ShoppingBag, href: '/ecommerce' },
    { name: 'Users', icon: Users, href: '/crm' },
    { name: 'Settings', icon: Settings, href: '/system' },
];

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const pathname = usePathname();

    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <aside
            className={cn(
                "h-full transition-all duration-300 ease-in-out shadow-xl flex flex-col rounded-[2rem] border overflow-hidden",
                collapsed ? "w-[80px]" : "w-[280px]"
            )}
            style={{
                backgroundColor: 'var(--background-glass)',
                backdropFilter: 'var(--backdrop-filter)',
                WebkitBackdropFilter: 'var(--backdrop-filter)',
                borderColor: 'var(--border-glass)',
            }}
        >
            <div className="flex items-center gap-3 p-6 h-20">
                <div className="relative w-14 h-14 shrink-0">
                    {mounted ? (
                        <Image
                            src={theme === 'dark' ? "/logo-dark.png" : "/logo.png"}
                            alt="Logo"
                            fill
                            className="object-contain"
                        />
                    ) : (
                        <div className="w-10 h-10 bg-primary/10 rounded-full animate-pulse" />
                    )}
                </div>
                {!collapsed && (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="font-bold text-xl tracking-tight text-foreground whitespace-nowrap"
                    >
                        Endcore<span className="text-primary">UI</span>
                    </motion.div>
                )}
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 space-y-2 py-4 overflow-y-auto overflow-x-hidden">
                {sidebarItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group relative",
                                isActive
                                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                        >
                            <item.icon size={22} className={cn("shrink-0", isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary")} />

                            {!collapsed && (
                                <span className="font-medium truncate">
                                    {item.name}
                                </span>
                            )}

                            {/* Tooltip for collapsed mode */}
                            {collapsed && (
                                <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-sm border border-border z-50">
                                    {item.name}
                                </div>
                            )}

                            {isActive && !collapsed && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute right-2 w-1.5 h-1.5 rounded-full bg-white/50"
                                />
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* Collapse Toggle */}
            <div className="p-4 border-t border-border">
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="w-full flex items-center justify-center p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                    {collapsed ? <ChevronRight size={20} /> : <div className="flex items-center gap-2"><ChevronLeft size={20} /> <span className="text-sm font-medium">Collapse</span></div>}
                </button>
            </div>



        </aside>
    );
}
