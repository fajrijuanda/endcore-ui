"use client"

import React from 'react';
import { EndcoreCard } from '@/components/ui/EndcoreCard';
import {
    LineChart as ReLineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from 'recharts';
import { Fingerprint, Heart, Thermometer } from 'lucide-react';

const data = [
    { time: '08:00', heartRate: 72, temp: 36.5, stress: 20 },
    { time: '10:00', heartRate: 85, temp: 36.6, stress: 35 },
    { time: '12:00', heartRate: 78, temp: 36.4, stress: 25 },
    { time: '14:00', heartRate: 110, temp: 37.1, stress: 65 },
    { time: '16:00', heartRate: 95, temp: 36.8, stress: 45 },
    { time: '18:00', heartRate: 82, temp: 36.6, stress: 30 },
    { time: '20:00', heartRate: 75, temp: 36.5, stress: 22 },
];

export default function LineChartPage() {
    return (
        <div className="space-y-8 min-h-full pb-20">
            {/* Header */}
            <header>
                <h1 className="text-4xl font-black text-black dark:text-white uppercase tracking-tight">
                    Biometric_History_<span className="text-primary">Sync</span>
                </h1>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1 max-w-xl font-medium">
                    Aggregate biometric telemetry for active personnel. Alert threshold set to level 3 distress protocol.
                </p>
            </header>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: 'Avg_Heart_Rate', value: '82 BPM', icon: Heart },
                    { label: 'Core_Temperature', value: '36.6°C', icon: Thermometer },
                    { label: 'Sync_Stability', value: '98.2%', icon: Fingerprint },
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

            {/* Main Line Chart */}
            <EndcoreCard title="Live_Vital_Synchronization" status="active" className="h-[500px]">
                <div className="w-full h-full p-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <ReLineChart
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
                                dataKey="time"
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
                                contentStyle={{
                                    backgroundColor: 'black',
                                    border: 'none',
                                    borderRadius: '12px',
                                    fontSize: '12px',
                                    color: 'white',
                                    fontWeight: '900'
                                }}
                            />
                            <Legend
                                iconType="rect"
                                wrapperStyle={{ paddingBottom: '20px', fontSize: '10px', textTransform: 'uppercase', fontWeight: 900 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="heartRate"
                                stroke="hsl(var(--primary))"
                                strokeWidth={4}
                                dot={{ r: 6, fill: 'hsl(var(--primary))', strokeWidth: 2, stroke: 'white' }}
                                activeDot={{ r: 8 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="stress"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeDasharray="5 5"
                                className="text-zinc-400 dark:text-zinc-600"
                                dot={false}
                            />
                        </ReLineChart>
                    </ResponsiveContainer>
                </div>
            </EndcoreCard>
        </div>
    );
}
