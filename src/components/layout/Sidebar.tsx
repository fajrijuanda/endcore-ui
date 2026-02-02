"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    ShoppingBag,
    Layers,
    FileText,
    Settings,
    Table,
    LayoutList,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Users
} from 'lucide-react';

interface SidebarItem {
    name: string;
    icon?: React.ElementType;
    href: string;
    children?: SidebarItem[];
}

interface SidebarGroup {
    group: string;
    items: SidebarItem[];
}
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const sidebarGroups: SidebarGroup[] = [
    {
        group: 'OVERVIEW',
        items: [
            { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
        ]
    },
    {
        group: 'TACTICAL MODULES',
        items: [
            {
                name: 'Components',
                icon: Layers,
                href: '/components',
                children: [
                    { name: 'Buttons', href: '/components/buttons' },
                    { name: 'Cards', href: '/components/cards' },
                    { name: 'Inputs', href: '/components/inputs' },
                    { name: 'Feedback', href: '/components/feedback' },
                ]
            },
            { name: 'Widgets', icon: LayoutList, href: '/widgets' },
            { name: 'Forms', icon: FileText, href: '/forms' },
            { name: 'Tables', icon: Table, href: '/tables' },
        ]
    },
    {
        group: 'SYSTEM APPS',
        items: [
            { name: 'Shop', icon: ShoppingBag, href: '/ecommerce' },
            { name: 'Users', icon: Users, href: '/crm' },
        ]
    },
    {
        group: 'INFRASTRUCTURE',
        items: [
            { name: 'Settings', icon: Settings, href: '/system' },
        ]
    }
];

interface NavItemProps {
    item: SidebarItem;
    collapsed: boolean;
    pathname: string;
    isChild?: boolean;
}

function NavItem({ item, collapsed, pathname, isChild = false }: NavItemProps) {
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = item.children && item.children.length > 0;

    // Check if any child is active
    const isChildActive = hasChildren && item.children?.some((child) => pathname === child.href);
    const isActive = pathname === item.href || isChildActive;

    // Auto-open if child is active
    React.useEffect(() => {
        if (isChildActive) setIsOpen(true);
    }, [isChildActive]);

    const content = (
        <div className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative cursor-pointer",
            isActive && !hasChildren
                ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                : (isActive && hasChildren)
                    ? "text-foreground bg-white/5"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
            isChild && "py-2 mb-1"
        )}>
            {item.icon && <item.icon size={isChild ? 16 : 20} className={cn("shrink-0", isActive ? (isChild ? "text-primary" : "text-primary-foreground") : "text-muted-foreground group-hover:text-black dark:group-hover:text-primary")} />}

            {isChild && !item.icon && (
                <div className={cn(
                    "w-1.5 h-1.5 rounded-full mx-1.5 shrink-0 transition-all",
                    pathname === item.href ? "bg-primary scale-125" : "bg-zinc-500/50 group-hover:bg-zinc-400"
                )} />
            )}

            {!collapsed && (
                <span className={cn("font-medium truncate", isChild ? "text-[13px]" : "text-sm")}>
                    {item.name}
                </span>
            )}

            {!collapsed && hasChildren && (
                <div className={cn("ml-auto transition-transform duration-200", isOpen ? "rotate-180" : "")}>
                    <ChevronDown size={14} className="text-zinc-500" />
                </div>
            )}

            {/* Tooltip for collapsed mode */}
            {collapsed && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-sm border border-border z-50 font-sans">
                    {item.name}
                </div>
            )}

            {isActive && !collapsed && !hasChildren && (
                <motion.div
                    layoutId="activeIndicator"
                    className="absolute right-2 w-1 h-1 rounded-full bg-white/50"
                />
            )}
        </div>
    );

    return (
        <div className="space-y-1">
            {hasChildren ? (
                <div onClick={() => !collapsed && setIsOpen(!isOpen)}>
                    {content}
                </div>
            ) : (
                <Link href={item.href}>{content}</Link>
            )}

            {!collapsed && hasChildren && (
                <motion.div
                    initial={false}
                    animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                    className="overflow-hidden pl-4"
                >
                    <div className="pt-1 pb-2 space-y-1 border-l border-white/10 ml-5 pl-2">
                        {item.children?.map((child) => (
                            <NavItem
                                key={child.href}
                                item={child}
                                collapsed={collapsed}
                                pathname={pathname}
                                isChild={true}
                            />
                        ))}
                    </div>
                </motion.div>
            )}
        </div>
    );
}

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
                        Endcore<span className="text-black dark:text-primary">UI</span>
                    </motion.div>
                )}
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-4 overflow-y-auto overflow-x-hidden custom-scrollbar">
                <div className="space-y-6">
                    {sidebarGroups.map((group, idx) => (
                        <div key={idx} className="space-y-2">
                            {collapsed ? (
                                <div className="h-[1px] bg-border mx-2 my-4 opacity-50" />
                            ) : (
                                <div className="px-3">
                                    <span className="text-[10px] font-black tracking-[0.2em] text-zinc-400/70 dark:text-zinc-500/50 uppercase font-mono">
                                        {group.group}
                                    </span>
                                </div>
                            )}

                            <div className="space-y-1">
                                {group.items.map((item) => (
                                    <NavItem
                                        key={item.name}
                                        item={item}
                                        collapsed={collapsed}
                                        pathname={pathname}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
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
