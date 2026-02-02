"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--primary))",
    },
    mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export default function ChartPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">TELEMETRY_VISUALS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Graphical data representations for real-time monitoring of system throughput and resource allocation.</p>
            </div>

            <EndcoreCard title="System_Throughput_Log" status="active">
                <div className="p-8">
                    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                        <BarChart accessibilityLayer data={chartData}>
                            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#333" />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value: string) => value.slice(0, 3).toUpperCase()}
                                style={{ fontSize: '10px', fontFamily: 'monospace', fontWeight: 'bold' }}
                            />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
                            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={8} />
                        </BarChart>
                    </ChartContainer>
                </div>
                <div className="pb-8 text-center">
                    <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Global_System_Load_Average: 0.82</p>
                </div>
            </EndcoreCard>
        </div>
    )
}
