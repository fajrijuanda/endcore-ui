"use client"

import React from 'react';
import { EndcoreCard } from '@/components/ui/EndcoreCard';
import {
    AreaChart,
    Area,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line
} from 'recharts';
import {
    Activity,
    Shield,
    Zap,
    Radio,
    TrendingUp,
    ArrowUpRight,
    Users,
    AlertTriangle
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const signalData = [
    { time: '00:00', strength: 65 },
    { time: '04:00', strength: 78 },
    { time: '08:00', strength: 45 },
    { time: '12:00', strength: 90 },
    { time: '16:00', strength: 82 },
];

const allocationData = [
    { name: 'Combat', value: 85 },
    { name: 'Intel', value: 65 },
    { name: 'Medical', value: 40 },
    { name: 'Support', value: 30 },
];

export default function AnalyticsDashboard() {
    return (
        <div className="space-y-8 min-h-full pb-20">
            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-black dark:text-white uppercase tracking-tight">
                        Telemetry_<span className="text-primary">Console</span>
                    </h1>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1 max-w-xl font-medium">
                        Central intelligence and system integrity monitoring. Neural link stability verified at 99.8%.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-black uppercase text-emerald-600 dark:text-emerald-400 tracking-widest">System_Secure</span>
                    </div>
                </div>
            </header>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Active_Nodes', value: '142', icon: Activity, trend: '+12%', color: 'text-primary' },
                    { label: 'Threat_Level', value: 'LOW', icon: Shield, trend: 'STABLE', color: 'text-emerald-500' },
                    { label: 'Energy_Output', value: '8.4 GW', icon: Zap, trend: '+0.5%', color: 'text-primary' },
                    { label: 'Network_Load', value: '24.2%', icon: Radio, trend: '-2.1%', color: 'text-primary' },
                ].map((stat, i) => (
                    <div key={i} className="p-6 rounded-[2rem] bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-white/5 group hover:border-primary transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-[10px] uppercase font-black text-zinc-400 tracking-widest">{stat.label}</span>
                            <div className="p-2 bg-white dark:bg-zinc-900 rounded-xl text-primary shadow-sm">
                                <stat.icon size={16} />
                            </div>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <p className="text-2xl font-black text-zinc-900 dark:text-white leading-tight">{stat.value}</p>
                            <span className={cn("text-[10px] font-bold", stat.color)}>{stat.trend}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Large Chart Container */}
                <div className="lg:col-span-2 space-y-8">
                    <EndcoreCard
                        title="Signal_Integrity_Overview"
                        status="active"
                        className="h-[400px]"
                        action={
                            <Link href="/analytics/area" className="flex items-center gap-1 hover:text-primary transition-colors">
                                View Full <ArrowUpRight size={14} />
                            </Link>
                        }
                    >
                        <div className="w-full h-full p-2">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={signalData}>
                                    <defs>
                                        <linearGradient id="primaryGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" className="text-zinc-200 dark:text-zinc-800" />
                                    <XAxis dataKey="time" hide />
                                    <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
                                    <Area type="monotone" dataKey="strength" stroke="hsl(var(--primary))" strokeWidth={3} fill="url(#primaryGradient)" />
                                    <Tooltip contentStyle={{ backgroundColor: 'black', border: 'none', borderRadius: '8px', fontSize: '10px', color: 'white' }} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </EndcoreCard>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <EndcoreCard title="Core_Allocation" status="neutral" className="h-[300px]" action={<Link href="/analytics/bar"><ArrowUpRight size={14} /></Link>}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={allocationData} layout="vertical">
                                    <XAxis type="number" hide />
                                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 900, fill: 'currentColor' }} className="text-zinc-400" />
                                    <Bar dataKey="value" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} barSize={20} />
                                </BarChart>
                            </ResponsiveContainer>
                        </EndcoreCard>

                        <EndcoreCard title="Recent_Alerts" status="warning" className="h-[300px]">
                            <div className="space-y-4">
                                {[
                                    { time: '14:22', msg: 'Core_Link: Minor jitter detected in sector 4.', type: 'warning' },
                                    { time: '13:05', msg: 'System_Sync: Personnel CL_4 unauthorized access.', type: 'critical' },
                                    { time: '12:44', msg: 'Logistic_Drone: Delivery node active.', type: 'info' },
                                ].map((alert, i) => (
                                    <div key={i} className="flex gap-3 text-[10px] font-mono leading-tight">
                                        <span className="text-zinc-400 shrink-0">[{alert.time}]</span>
                                        <span className={cn(
                                            alert.type === 'warning' ? 'text-primary' :
                                                alert.type === 'critical' ? 'text-red-500' : 'text-zinc-500'
                                        )}>{alert.msg}</span>
                                    </div>
                                ))}
                            </div>
                        </EndcoreCard>
                    </div>
                </div>

                {/* Sidebar Style Info Panel */}
                <div className="space-y-8">
                    <div className="p-8 rounded-[2.5rem] bg-black dark:bg-white text-white dark:text-black space-y-6 relative overflow-hidden group">
                        <div className="relative z-10 space-y-4">
                            <TrendingUp size={48} className="text-primary dark:text-zinc-900 opacity-20 group-hover:rotate-12 transition-transform" />
                            <div>
                                <h3 className="text-xl font-black uppercase tracking-tight">System_Pulse</h3>
                                <p className="text-xs opacity-60 font-medium leading-relaxed mt-2">
                                    Overall terminal health is currently at optimal levels. No critical failures reported in the last 24 deployment cycles.
                                </p>
                            </div>
                            <div className="pt-4 flex items-center gap-4">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-black dark:border-white bg-zinc-800" />
                                    ))}
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest">3 Operators Sync</span>
                            </div>
                        </div>
                        {/* Decorative background number */}
                        <span className="absolute -bottom-10 -right-10 text-[12rem] font-black opacity-5 select-none tracking-tighter">98</span>
                    </div>

                    <EndcoreCard title="Operator_Registry" status="active">
                        <div className="space-y-4">
                            {[
                                { name: 'KALTSIT', status: 'Active', sector: 'Medical' },
                                { name: 'CH_EN', status: 'Syncing', sector: 'Combat' },
                                { name: 'AMIYA', status: 'Active', sector: 'Support' },
                            ].map((op, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-zinc-200 dark:bg-zinc-700" />
                                        <div>
                                            <p className="text-[10px] font-black text-zinc-900 dark:text-white uppercase leading-none">{op.name}</p>
                                            <p className="text-[9px] text-zinc-500 mt-1 uppercase tracking-wider">{op.sector}</p>
                                        </div>
                                    </div>
                                    <span className="text-[9px] font-mono text-primary px-1.5 py-0.5 rounded border border-primary/20">{op.status}</span>
                                </div>
                            ))}
                            <Link href="/crm" className="block text-center text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-primary transition-colors pt-2">
                                View Full Personnel Registry_
                            </Link>
                        </div>
                    </EndcoreCard>
                </div>
            </div>

            {/* Background Grid */}
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
