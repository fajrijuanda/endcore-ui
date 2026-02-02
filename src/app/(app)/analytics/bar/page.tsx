"use client"

import React from 'react';
import { EndcoreCard } from '@/components/ui/EndcoreCard';
import {
    BarChart as ReBarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell
} from 'recharts';
import { Database, Cpu, HardDrive } from 'lucide-react';

const data = [
    { sector: 'COMBAT', allocated: 85, used: 72 },
    { sector: 'MEDICAL', allocated: 40, used: 25 },
    { sector: 'INTEL', allocated: 65, used: 58 },
    { sector: 'SUPPORT', allocated: 30, used: 28 },
    { sector: 'ORBITAL', allocated: 95, used: 92 },
];

export default function BarChartPage() {
    return (
        <div className="space-y-8 min-h-full pb-20">
            {/* Header */}
            <header>
                <h1 className="text-4xl font-black text-black dark:text-white uppercase tracking-tight">
                    Resource_Allocation_<span className="text-primary">Ops</span>
                </h1>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1 max-w-xl font-medium">
                    Sector-level compute and energy distribution logs. Priority override active for Orbital and Combat sectors.
                </p>
            </header>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: 'Total_Compute', value: '3.2 PFLOPS', icon: Cpu },
                    { label: 'Storage_Array', value: '840 PB', icon: HardDrive },
                    { label: 'DB_Nodes', value: '128 Active', icon: Database },
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

            {/* Main Bar Chart */}
            <EndcoreCard title="Sector_Compute_Distribution" status="active" className="h-[500px]">
                <div className="w-full h-full p-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <ReBarChart
                            data={data}
                            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                        >
                            <CartesianGrid
                                strokeDasharray="3 3"
                                vertical={false}
                                stroke="currentColor"
                                className="text-zinc-200 dark:text-zinc-800"
                            />
                            <XAxis
                                dataKey="sector"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 10, fontWeight: 900, fill: 'currentColor' }}
                                className="text-zinc-400"
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 10, fontWeight: 700, fill: 'currentColor' }}
                                className="text-zinc-400"
                            />
                            <Tooltip
                                cursor={{ fill: 'transparent' }}
                                contentStyle={{
                                    backgroundColor: 'black',
                                    border: 'none',
                                    borderRadius: '12px',
                                    fontSize: '12px',
                                    color: 'white',
                                    fontWeight: '900'
                                }}
                            />
                            <Bar
                                dataKey="allocated"
                                radius={[6, 6, 0, 0]}
                                barSize={40}
                            >
                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={index === 4 ? 'hsl(var(--primary))' : 'currentColor'}
                                        className="text-zinc-300 dark:text-white/10"
                                    />
                                ))}
                            </Bar>
                            <Bar
                                dataKey="used"
                                fill="hsl(var(--primary))"
                                radius={[6, 6, 0, 0]}
                                barSize={20}
                                className="opacity-80"
                            />
                        </ReBarChart>
                    </ResponsiveContainer>
                </div>
            </EndcoreCard>
        </div>
    );
}
