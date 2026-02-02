"use client"

import React, { useState } from 'react';
import { EndcoreCard } from '@/components/ui/EndcoreCard';
import {
    Users,
    Search,
    Shield,
    Activity,
    MoreVertical,
    Fingerprint,
    ShieldCheck,
    UserPlus,
    Filter,
    ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Personnel {
    id: string;
    name: string;
    role: string;
    sector: 'Combat' | 'Medical' | 'Support' | 'Intel';
    clearance: 1 | 2 | 3 | 4;
    status: 'active' | 'syncing' | 'warning' | 'critical';
    biometric: number;
    lastSeen: string;
    image: string;
}

const PERSONNEL: Personnel[] = [
    {
        id: 'P-082',
        name: 'KALTSIT',
        role: 'Chief Medical Officer',
        sector: 'Medical',
        clearance: 4,
        status: 'active',
        biometric: 98.4,
        lastSeen: '02_MIN_AGO',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    },
    {
        id: 'P-115',
        name: 'CH_EN',
        role: 'Tactical Commander',
        sector: 'Combat',
        clearance: 4,
        status: 'syncing',
        biometric: 92.1,
        lastSeen: 'NOW',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    },
    {
        id: 'P-204',
        name: 'LOGOS',
        role: 'Intel Analyst',
        sector: 'Intel',
        clearance: 3,
        status: 'active',
        biometric: 87.5,
        lastSeen: '15_MIN_AGO',
        image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=200',
    },
    {
        id: 'P-044',
        name: 'AMIYA',
        role: 'Operations Manager',
        sector: 'Support',
        clearance: 4,
        status: 'active',
        biometric: 99.2,
        lastSeen: 'ONLINE',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    },
    {
        id: 'P-512',
        name: 'SARYA_N',
        role: 'Security Specialist',
        sector: 'Combat',
        clearance: 3,
        status: 'warning',
        biometric: 74.8,
        lastSeen: '05_MIN_AGO',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    },
    {
        id: 'P-009',
        name: 'THORNS',
        role: 'Chemical Specialist',
        sector: 'Medical',
        clearance: 2,
        status: 'critical',
        biometric: 45.2,
        lastSeen: 'SIGNAL_LOST',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    }
];

export default function CRMPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState<'All' | Personnel['sector']>('All');

    const filteredPersonnel = PERSONNEL.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.id.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = filter === 'All' || p.sector === filter;
        return matchesSearch && matchesFilter;
    });

    const getStatusColor = (status: Personnel['status']) => {
        switch (status) {
            case 'active': return 'bg-emerald-500';
            case 'syncing': return 'bg-primary';
            case 'warning': return 'bg-orange-500';
            case 'critical': return 'bg-red-500';
            default: return 'bg-zinc-500';
        }
    };

    return (
        <div className="space-y-8 min-h-full pb-20">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-1">
                    <h1 className="text-4xl font-black text-black dark:text-white uppercase tracking-tight">
                        Personnel_Unit_<span className="text-primary">D.01</span>
                    </h1>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">
                        Registry of field operators and tactical staff. Biometric synchronization required for all active clearance levels.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-2xl border border-zinc-200 dark:border-white/5 flex items-center gap-2">
                        <Activity size={16} className="text-primary" />
                        <span className="text-xs font-black uppercase text-zinc-900 dark:text-white">Active_Sync: 94%</span>
                    </div>
                    <button className="p-2.5 bg-black dark:bg-white text-white dark:text-black rounded-2xl hover:bg-primary hover:text-black dark:hover:bg-primary dark:hover:text-black transition-all shadow-lg">
                        <UserPlus size={20} />
                    </button>
                </div>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-4">
                <div className="relative flex-1 min-w-[300px]">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search operator, ID, or role..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-[1.5rem] py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-mono"
                    />
                </div>

                <div className="flex items-center gap-1.5 p-1 bg-zinc-100 dark:bg-zinc-800 rounded-2xl">
                    {['All', 'Combat', 'Medical', 'Support', 'Intel'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat as any)}
                            className={cn(
                                "px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all tracking-wider",
                                filter === cat
                                    ? "bg-white dark:bg-zinc-900 text-black dark:text-primary shadow-sm"
                                    : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Personnel Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                    {filteredPersonnel.map((person) => (
                        <motion.div
                            key={person.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-[2.5rem] overflow-hidden transition-all hover:shadow-2xl"
                        >
                            <div className="p-6 space-y-6">
                                {/* Card Header */}
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-16 h-16 rounded-[1.5rem] overflow-hidden border-2 border-zinc-100 dark:border-white/5 bg-zinc-100 dark:bg-zinc-800">
                                            <Image
                                                src={person.image}
                                                alt={person.name}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-90"
                                            />
                                            <div className={cn(
                                                "absolute bottom-1 right-1 w-3 h-3 rounded-full border-2 border-white dark:border-zinc-900",
                                                getStatusColor(person.status)
                                            )} />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h3 className="text-lg font-black tracking-tight text-zinc-900 dark:text-white uppercase leading-none">
                                                    {person.name}
                                                </h3>
                                                <span className="text-[10px] font-mono text-primary px-1.5 py-0.5 bg-primary/10 rounded border border-primary/20">
                                                    CL_{person.clearance}
                                                </span>
                                            </div>
                                            <p className="text-xs text-zinc-500 mt-1 font-medium">{person.role}</p>
                                        </div>
                                    </div>
                                    <button className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                                        <MoreVertical size={20} />
                                    </button>
                                </div>

                                {/* Biometric Status */}
                                <div className="space-y-3">
                                    <div className="flex justify-between items-end">
                                        <div className="flex items-center gap-2">
                                            <Fingerprint size={14} className="text-zinc-400" />
                                            <span className="text-[10px] uppercase font-black text-zinc-400 tracking-widest">Biometric_Sync</span>
                                        </div>
                                        <span className={cn(
                                            "text-xs font-black",
                                            person.biometric > 90 ? "text-emerald-500" :
                                                person.biometric > 70 ? "text-primary" : "text-red-500"
                                        )}>
                                            {person.biometric}%
                                        </span>
                                    </div>
                                    <div className="h-1.5 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${person.biometric}%` }}
                                            className={cn(
                                                "h-full rounded-full transition-all duration-1000",
                                                person.biometric > 90 ? "bg-emerald-500" :
                                                    person.biometric > 70 ? "bg-primary" : "bg-red-500"
                                            )}
                                        />
                                    </div>
                                </div>

                                {/* Info Footer */}
                                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-100 dark:border-white/5">
                                    <div className="space-y-1">
                                        <span className="text-[9px] uppercase font-black text-zinc-400 tracking-widest block">Unit_Sector</span>
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                                            <span className="text-[10px] font-bold text-zinc-700 dark:text-zinc-300 uppercase">{person.sector}</span>
                                        </div>
                                    </div>
                                    <div className="space-y-1 text-right">
                                        <span className="text-[9px] uppercase font-black text-zinc-400 tracking-widest block">Last_Activity</span>
                                        <span className="text-[10px] font-mono text-zinc-500">{person.lastSeen}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Overlay Link */}
                            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" />
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                                <ArrowUpRight size={20} className="text-primary" />
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Quick Summary Card */}
            <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20 w-full max-w-2xl px-4">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-black dark:bg-zinc-900 border border-white/10 rounded-[2rem] p-6 shadow-2xl flex items-center justify-between gap-8"
                >
                    <div className="flex items-center gap-6 divide-x divide-white/10">
                        <div className="space-y-1">
                            <span className="text-[10px] uppercase font-black text-primary tracking-[0.2em] block">Total_Staff</span>
                            <span className="text-2xl font-black text-white">{PERSONNEL.length}</span>
                        </div>
                        <div className="pl-6 space-y-1">
                            <span className="text-[10px] uppercase font-black text-zinc-500 tracking-[0.2em] block">Deployment</span>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-sm font-bold text-white tracking-widest uppercase">Operational</span>
                            </div>
                        </div>
                    </div>

                    <button className="flex items-center gap-2 px-6 py-3 bg-primary text-black rounded-xl font-black uppercase text-[10px] tracking-widest hover:scale-105 active:scale-95 transition-all">
                        <ShieldCheck size={16} />
                        Run_System_Audit
                    </button>
                </motion.div>
            </div>

            {/* Background Aesthetic Grid */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.07] z-[-1] overflow-hidden">
                <div className="grid grid-cols-[repeat(40,minmax(0,1fr))] w-full h-full">
                    {[...Array(1600)].map((_, i) => (
                        <div key={i} className="border-[0.5px] border-black dark:border-white" />
                    ))}
                </div>
            </div>
        </div>
    );
}
