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
    Users,
    Box,
    Type,
    Copy,
    Navigation as NavigationIcon,
    Bell,
    Database,
    Activity as ActivityIcon
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
                    {
                        name: 'Base Components',
                        icon: Box,
                        href: '#',
                        children: [
                            { name: 'Accordion', href: '/components/accordion' },
                            { name: 'Aspect Ratio', href: '/components/aspect-ratio' },
                            { name: 'Avatar', href: '/components/avatar' },
                            { name: 'Badge', href: '/components/badge' },
                            { name: 'Button', href: '/components/button' },
                            { name: 'Card', href: '/components/card' },
                            { name: 'Collapsible', href: '/components/collapsible' },
                            { name: 'Label', href: '/components/label' },
                            { name: 'Progress', href: '/components/progress' },
                            { name: 'Scroll Area', href: '/components/scroll-area' },
                            { name: 'Separator', href: '/components/separator' },
                            { name: 'Skeleton', href: '/components/skeleton' },
                            { name: 'Tabs', href: '/components/tabs' },
                            { name: 'EndcoreCard', href: '/components/endcore-card' },
                        ]
                    },
                    {
                        name: 'Forms & Inputs',
                        icon: Type,
                        href: '#',
                        children: [
                            { name: 'Calendar', href: '/components/calendar' },
                            { name: 'Checkbox', href: '/components/checkbox' },
                            { name: 'Command', href: '/components/command' },
                            { name: 'Form', href: '/components/form' },
                            { name: 'Input', href: '/components/input' },
                            { name: 'Radio Group', href: '/components/radio-group' },
                            { name: 'Select', href: '/components/select' },
                            { name: 'Slider', href: '/components/slider' },
                            { name: 'Switch', href: '/components/switch' },
                            { name: 'Textarea', href: '/components/textarea' },
                            { name: 'Toggle', href: '/components/toggle' },
                            { name: 'Toggle Group', href: '/components/toggle-group' },
                        ]
                    },
                    {
                        name: 'Overlays',
                        icon: Copy,
                        href: '#',
                        children: [
                            { name: 'Alert Dialog', href: '/components/alert-dialog' },
                            { name: 'Dialog', href: '/components/dialog' },
                            { name: 'Drawer', href: '/components/drawer' },
                            { name: 'Hover Card', href: '/components/hover-card' },
                            { name: 'Popover', href: '/components/popover' },
                            { name: 'Sheet', href: '/components/sheet' },
                            { name: 'Tooltip', href: '/components/tooltip' },
                        ]
                    },
                    {
                        name: 'Navigation',
                        icon: NavigationIcon,
                        href: '#',
                        children: [
                            { name: 'Context Menu', href: '/components/context-menu' },
                            { name: 'Dropdown Menu', href: '/components/dropdown-menu' },
                            { name: 'Menubar', href: '/components/menubar' },
                            { name: 'Navigation Menu', href: '/components/navigation-menu' },
                        ]
                    },
                    {
                        name: 'Feedback',
                        icon: Bell,
                        href: '#',
                        children: [
                            { name: 'Alert', href: '/components/alert' },
                            { name: 'Sonner', href: '/components/sonner' },
                        ]
                    },
                    {
                        name: 'Data Display',
                        icon: Database,
                        href: '#',
                        children: [
                            { name: 'Table', href: '/components/table' },
                            { name: 'Data Table', href: '/components/data-table' },
                        ]
                    },
                ]
            },
            { name: 'Widgets', icon: LayoutList, href: '/widgets' },
            { name: 'Forms', icon: FileText, href: '/forms' },
            { name: 'Tables', icon: Table, href: '/tables' },
        ]
    },
    {
        group: 'TELEMETRY',
        items: [
            {
                name: 'Analytics',
                icon: ActivityIcon,
                href: '/analytics',
                children: [
                    { name: 'Area Chart', href: '/analytics/area' },
                    { name: 'Bar Chart', href: '/analytics/bar' },
                    { name: 'Line Chart', href: '/analytics/line' },
                    { name: 'Pie Chart', href: '/analytics/pie' },
                    { name: 'Radar Chart', href: '/analytics/radar' },
                ]
            }
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
                    ? "text-[hsl(var(--sidebar-foreground))] bg-white/10"
                    : "text-[hsl(var(--sidebar-foreground))]/70 hover:bg-white/10 hover:text-[hsl(var(--sidebar-foreground))]",
            isChild && "py-2 mb-1"
        )}>
            {item.icon && <item.icon size={isChild ? 16 : 20} className={cn("shrink-0", isActive ? (isChild ? "text-primary" : "text-primary-foreground") : "text-[hsl(var(--sidebar-foreground))]/70 group-hover:text-[hsl(var(--sidebar-foreground))]")} />}

            {isChild && !item.icon && (
                <div className={cn(
                    "w-1.5 h-1.5 rounded-full mx-1.5 shrink-0 transition-all",
                    pathname === item.href ? "bg-primary scale-125" : "bg-[hsl(var(--sidebar-foreground))]/30 group-hover:bg-[hsl(var(--sidebar-foreground))]/60"
                )} />
            )}

            {!collapsed && (
                <span className={cn("font-medium truncate", isChild ? "text-[13px]" : "text-sm")}>
                    {item.name}
                </span>
            )}

            {!collapsed && hasChildren && (
                <div className={cn("ml-auto transition-transform duration-200", isOpen ? "rotate-180" : "")}>
                    <ChevronDown size={14} className="text-[hsl(var(--sidebar-foreground))]/50" />
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
                                key={child.name}
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
                "h-full transition-all duration-300 ease-in-out shadow-2xl flex flex-col rounded-[2.5rem] border overflow-hidden",
                collapsed ? "w-[80px]" : "w-[280px]"
            )}
            style={{
                backgroundColor: 'hsl(var(--sidebar) / 0.8)',
                borderColor: 'var(--sidebar-border)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            }}
        >
            <div className={cn(
                "flex items-center gap-3 h-20 transition-all duration-300",
                collapsed ? "px-3 justify-center" : "px-6"
            )}>
                <div className={cn(
                    "relative shrink-0 transition-all duration-300",
                    collapsed ? "w-10 h-10" : "w-14 h-14"
                )}>
                    {mounted ? (
                        <Image
                            src={theme === 'dark' ? "/logo.png" : "/logo-dark.png"}
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
                        className="font-bold text-xl tracking-tight text-[hsl(var(--sidebar-foreground))] whitespace-nowrap"
                    >
                        Endcore<span className="text-[hsl(var(--sidebar-foreground))]">UI</span>
                    </motion.div>
                )}
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-4 overflow-y-auto overflow-x-hidden no-scrollbar">
                <div className="space-y-6">
                    {sidebarGroups.map((group, idx) => (
                        <div key={idx} className="space-y-2">
                            {collapsed ? (
                                <div className="h-[1px] bg-border mx-2 my-4 opacity-50" />
                            ) : (
                                <div className="px-3">
                                    <span className="text-[10px] font-black tracking-[0.2em] text-[hsl(var(--sidebar-foreground))]/40 uppercase font-mono">
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
            <div className="p-4 border-t border-white/10">
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="w-full flex items-center justify-center p-2 rounded-lg hover:bg-white/10 text-[hsl(var(--sidebar-foreground))]/70 hover:text-[hsl(var(--sidebar-foreground))] transition-colors"
                >
                    {collapsed ? <ChevronRight size={20} /> : <div className="flex items-center gap-2"><ChevronLeft size={20} /> <span className="text-sm font-medium">Collapse</span></div>}
                </button>
            </div>
        </aside>
    );
}
