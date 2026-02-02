"use client"

import React from 'react';
import { EndcoreCard } from '@/components/ui/EndcoreCard';
import {
    Radar,
    RadarChart as ReRadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Tooltip
} from 'recharts';
import { Sword, ShieldCheck, Zap } from 'lucide-react';

const data = [
    { subject: 'COMBAT', A: 120, B: 110, fullMark: 150 },
    { subject: 'AGILITY', A: 98, B: 130, fullMark: 150 },
    { subject: 'INTEL', A: 86, B: 130, fullMark: 150 },
    { subject: 'RECOVERY', A: 99, B: 100, fullMark: 150 },
    { subject: 'SURVIVAL', A: 85, B: 90, fullMark: 150 },
    { subject: 'TECH', A: 65, B: 85, fullMark: 150 },
];

export default function RadarChartPage() {
    return (
        <div className="space-y-8 min-h-full pb-20">
            {/* Header */}
            <header>
                <h1 className="text-4xl font-black text-black dark:text-white uppercase tracking-tight">
                    Operator_Performance_<span className="text-primary">Metric</span>
                </h1>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1 max-w-xl font-medium">
                    Multi-dimensional tactical assessment for active operators. Neural sync and combat efficiency overlay engaged.
                </p>
            </header>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: 'Sync_Efficiency', value: '96%', icon: Zap },
                    { label: 'Combat_Rating', value: 'S-Grade', icon: Sword },
                    { label: 'Recovery_Cycle', value: '4.2h', icon: ShieldCheck },
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

            {/* Main Radar Chart */}
            <div className="grid grid-cols-1 gap-8">
                <EndcoreCard title="Tactical_Capability_Array" status="active" className="h-[600px]">
                    <div className="w-full h-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <ReRadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                                <PolarGrid
                                    stroke="currentColor"
                                    className="text-zinc-200 dark:text-zinc-800"
                                />
                                <PolarAngleAxis
                                    dataKey="subject"
                                    tick={{ fontSize: 10, fontWeight: 900, fill: 'currentColor' }}
                                    className="text-zinc-400"
                                />
                                <PolarRadiusAxis
                                    angle={30}
                                    domain={[0, 150]}
                                    tick={false}
                                    axisLine={false}
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
                                />
                                <Radar
                                    name="Operator_A"
                                    dataKey="A"
                                    stroke="hsl(var(--primary))"
                                    fill="hsl(var(--primary))"
                                    fillOpacity={0.6}
                                />
                                <Radar
                                    name="Benchmark_B"
                                    dataKey="B"
                                    stroke="currentColor"
                                    fill="currentColor"
                                    fillOpacity={0.1}
                                    className="text-zinc-400 dark:text-zinc-100"
                                />
                            </ReRadarChart>
                        </ResponsiveContainer>
                    </div>
                </EndcoreCard>
            </div>
        </div>
    );
}
