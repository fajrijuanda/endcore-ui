"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { ArrowUpRight, DollarSign, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col space-y-2">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard Overview</h1>
                <p className="text-muted-foreground">Summary of your business performance today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <EndcoreCard title="Total Revenue" status="active" className="bg-card">
                    <div className="flex flex-col gap-2 p-2">
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold">Rp 64.000</span>
                            <div className="flex items-center text-green-500 text-xs font-bold bg-green-500/10 px-2 py-1 rounded-full">
                                <ArrowUpRight className="w-3 h-3 mr-1" /> +12%
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground">Total Income</p>
                    </div>
                </EndcoreCard>
                <EndcoreCard title="Today's Sales" status="neutral">
                    <div className="flex flex-col gap-2 p-2">
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold">Rp 0</span>
                            <div className="flex items-center text-green-500 text-xs font-bold bg-green-500/10 px-2 py-1 rounded-full">
                                <Activity className="w-3 h-3 mr-1" /> Live
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground">Sales Today</p>
                    </div>
                </EndcoreCard>
                <EndcoreCard title="Total Orders" status="warning">
                    <div className="flex flex-col gap-2 p-2">
                        <div className="text-2xl font-bold">2</div>
                        <p className="text-xs text-muted-foreground">Total Pesanan</p>
                    </div>
                </EndcoreCard>
                <EndcoreCard title="Total Products" status="critical">
                    <div className="flex flex-col gap-2 p-2">
                        <div className="text-2xl font-bold">0</div>
                        <p className="text-xs text-muted-foreground">Total Produk</p>
                    </div>
                </EndcoreCard>
            </div>

            {/* Charts Section */}
            <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
                <EndcoreCard title="Sales Trend (7 Days)" status="neutral" className="h-[300px] flex items-center justify-center">
                    <div className="text-muted-foreground text-sm flex flex-col items-center">
                        <svg className="w-full h-[200px]" viewBox="0 0 500 150" preserveAspectRatio="none">
                            <path d="M0,140 C100,140 200,140 250,140 C300,10 350,140 500,140" fill="none" stroke="currentColor" strokeWidth="2" className="text-black dark:text-primary" />
                            <path d="M0,140 C100,140 200,140 250,140 C300,10 350,140 500,140 L500,150 L0,150 Z" fill="url(#gradient)" className="opacity-20 text-black dark:text-primary" />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="currentColor" />
                                    <stop offset="100%" stopColor="transparent" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <p>Chart Visualization Mockup</p>
                    </div>
                </EndcoreCard>
            </div>

            {/* Recent Transactions */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">Recent Transactions</h2>
                    <Button variant="ghost" className="text-black dark:text-primary text-sm font-bold">View All</Button>
                </div>
                <div className="space-y-3">
                    {[1, 2].map((i) => (
                        <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-xl group/item">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-black dark:text-primary">
                                    <DollarSign size={20} />
                                </div>
                                <div>
                                    <p className="font-bold text-sm">INV/2026/01/29...</p>
                                    <p className="text-xs text-muted-foreground">29 Jan 2026, 17:5{i}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-sm">Rp {20000 + (i * 2000)}</p>
                                <span className="text-[10px] bg-green-500/10 text-green-500 px-2 py-0.5 rounded-full font-bold">PAID</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
