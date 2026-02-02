"use client"

import React from 'react';
import { EndcoreCard } from '@/components/ui/EndcoreCard';
import {
    PieChart as RePieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import { Shield, Users, Layers } from 'lucide-react';

const data = [
    { name: 'COMBAT', value: 35 },
    { name: 'MEDICAL', value: 20 },
    { name: 'INTEL', value: 25 },
    { name: 'SUPPORT', value: 15 },
    { name: 'ORBITAL', value: 5 },
];

const COLORS = [
    'hsl(var(--primary))',
    '#ffffff',
    'rgba(255, 255, 255, 0.4)',
    'rgba(255, 255, 255, 0.2)',
    'rgba(255, 255, 255, 0.1)',
];

export default function PieChartPage() {
    return (
        <div className="space-y-8 min-h-full pb-20">
            {/* Header */}
            <header>
                <h1 className="text-4xl font-black text-black dark:text-white uppercase tracking-tight">
                    Sector_Distribution_<span className="text-primary">Registry</span>
                </h1>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1 max-w-xl font-medium">
                    Personnel and asset distribution across all active operational sectors. Security clearance verified for data visualization.
                </p>
            </header>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: 'Primary_Sector', value: 'Combat', icon: Shield },
                    { label: 'Active_Personnel', value: '428 Units', icon: Users },
                    { label: 'Registry_Layers', value: '12 Active', icon: Layers },
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

            {/* Main Pie Chart */}
            <EndcoreCard title="Asset_Weight_Telemetry" status="active" className="h-[500px]">
                <div className="w-full h-full p-4 flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="w-full h-[300px] md:h-full md:flex-1">
                        <ResponsiveContainer width="100%" height="100%">
                            <RePieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80}
                                    outerRadius={120}
                                    paddingAngle={5}
                                    dataKey="value"
                                    stroke="none"
                                >
                                    {data.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>
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
                            </RePieChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="flex-1 space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            {data.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-white/5">
                                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                                    <div>
                                        <p className="text-[10px] font-black uppercase text-zinc-900 dark:text-white">{item.name}</p>
                                        <p className="text-xl font-black text-zinc-400">{item.value}%</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </EndcoreCard>
        </div>
    );
}
