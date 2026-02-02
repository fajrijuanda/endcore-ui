"use client"

import React from 'react';
import { EndcoreCard } from '@/components/ui/EndcoreCard';
import {
    AreaChart as ReAreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import { Activity, Radio, Zap } from 'lucide-react';

const data = [
    { time: '00:00', strength: 65, jitter: 12 },
    { time: '04:00', strength: 78, jitter: 15 },
    { time: '08:00', strength: 45, jitter: 25 },
    { time: '12:00', strength: 90, jitter: 10 },
    { time: '16:00', strength: 82, jitter: 14 },
    { time: '20:00', strength: 70, jitter: 18 },
    { time: '23:59', strength: 85, jitter: 12 },
];

export default function AreaChartPage() {
    return (
        <div className="space-y-8 min-h-full pb-20">
            {/* Header */}
            <header>
                <h1 className="text-4xl font-black text-black dark:text-white uppercase tracking-tight">
                    Signal_Strength_<span className="text-primary">Telemetry</span>
                </h1>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1 max-w-xl font-medium">
                    External array signal stability and multi-channel synchronization tracking. Automated jitter monitoring enabled.
                </p>
            </header>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: 'Avg_Strength', value: '76.4%', icon: Activity },
                    { label: 'Latency_Delta', value: '14ms', icon: Radio },
                    { label: 'Node_Uptime', value: '99.9%', icon: Zap },
                ].map((stat, i) => (
                    <div key={i} className="p-6 rounded-[2rem] bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-white/5 flex items-center justify-between">
                        <div>
                            <span className="text-[10px] uppercase font-black text-zinc-400 tracking-widest">{stat.label}</span>
                            <p className="text-2xl font-black text-zinc-900 dark:text-white leading-tight">{stat.value}</p>
                        </div>
                        <div className="p-3 bg-white dark:bg-zinc-900 rounded-xl text-primary shadow-sm">
                            <stat.icon size={20} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Area Chart */}
            <div className="grid grid-cols-1 gap-8">
                <EndcoreCard title="Synchronization_Telemetry" status="active" className="h-[500px]">
                    <div className="w-full h-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <ReAreaChart
                                data={data}
                                margin={{ top: 20, right: 30, left: 10, bottom: 0 }}
                            >
                                <defs>
                                    <linearGradient id="colorStrength" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    vertical={false}
                                    stroke="currentColor"
                                    className="text-zinc-200 dark:text-zinc-800"
                                />
                                <XAxis
                                    dataKey="time"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 10, fontWeight: 700, fill: 'currentColor' }}
                                    className="text-zinc-400"
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 10, fontWeight: 700, fill: 'currentColor' }}
                                    className="text-zinc-400"
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'black',
                                        border: 'none',
                                        borderRadius: '12px',
                                        fontSize: '12px',
                                        color: 'white',
                                        fontWeight: '900'
                                    }}
                                    itemStyle={{ color: 'hsl(var(--primary))' }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="strength"
                                    stroke="hsl(var(--primary))"
                                    strokeWidth={4}
                                    fillOpacity={1}
                                    fill="url(#colorStrength)"
                                />
                                <Area
                                    type="monotone"
                                    dataKey="jitter"
                                    stroke="currentColor"
                                    strokeWidth={1}
                                    fill="transparent"
                                    className="text-zinc-400 opacity-20"
                                />
                            </ReAreaChart>
                        </ResponsiveContainer>
                    </div>
                </EndcoreCard>
            </div>

            {/* Decorative Grid Background */}
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
