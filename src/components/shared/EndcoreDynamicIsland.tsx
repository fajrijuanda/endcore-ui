'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Home, Users, ShoppingCart, Settings, Layout, Menu, LayoutList, KanbanSquare, Lock, Layers } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'Home', icon: Home, href: '/' },
    { name: 'Dashboard', icon: LayoutList, href: '/dashboard' },
    { name: 'CRM', icon: Users, href: '/crm' },
    { name: 'Kanban', icon: KanbanSquare, href: '/kanban' },
    { name: 'Commerce', icon: ShoppingCart, href: '/commerce' },
    { name: 'System', icon: Settings, href: '/system' },
    { name: 'Components', icon: Layers, href: '/components' },
    { name: 'Widgets', icon: LayoutList, href: '/widgets' },
    { name: 'Auth', icon: Lock, href: '/auth/login' },
];

export const DynamicIslandNav = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const pathname = usePathname();

    return (
        <div className="fixed bottom-6 md:bottom-auto md:top-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
            <motion.div
                layout
                initial={{ width: '48px', height: '48px', borderRadius: '24px' }}
                animate={{
                    width: isExpanded ? 'auto' : '48px',
                    height: '56px',
                    borderRadius: '28px',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className={cn(
                    "bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center overflow-hidden",
                    isExpanded ? "px-2" : "px-0 justify-center"
                )}
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}
            >
                <AnimatePresence mode="popLayout">
                    {!isExpanded ? (
                        <motion.div
                            key="collapsed-icon"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            onClick={() => setIsExpanded(true)}
                            className="cursor-pointer text-primary p-3"
                        >
                            <Menu size={20} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="expanded-menu"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-1"
                        >
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link key={item.name} href={item.href}>
                                        <div className={cn(
                                            "p-3 rounded-full transition-colors relative group",
                                            isActive ? "bg-white/10 text-primary" : "text-muted-foreground hover:text-white"
                                        )}>
                                            <item.icon size={20} />
                                            {isActive && (
                                                <motion.div
                                                    layoutId="active-indicator"
                                                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                                                />
                                            )}

                                            {/* Tooltip */}
                                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity bg-black border border-white/10 px-2 py-0.5 rounded text-white whitespace-nowrap pointer-events-none">
                                                {item.name}
                                            </span>
                                        </div>
                                    </Link>
                                );
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};
