"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";

type Asset = {
    id: string
    name: string
    type: string
    capacity: number
    status: "active" | "standby" | "maintenance"
}

const assets: Asset[] = [
    { id: "S-01", name: "SAT_ORBIT_ALPHA", type: "SATELLITE", capacity: 98, status: "active" },
    { id: "S-02", name: "SAT_ORBIT_BETA", type: "SATELLITE", capacity: 42, status: "active" },
    { id: "G-01", name: "GRND_BASE_01", type: "STATION", capacity: 100, status: "active" },
    { id: "G-02", name: "GRND_BASE_02", type: "STATION", capacity: 0, status: "maintenance" },
    { id: "D-05", name: "DATA_NODE_XP", type: "ROUTER", capacity: 75, status: "standby" },
]

const columns: ColumnDef<Asset>[] = [
    {
        accessorKey: "id",
        header: "ASSET_ID",
        cell: ({ row }) => <span className="font-black text-primary">{row.getValue("id")}</span>
    },
    {
        accessorKey: "name",
        header: "DESIGNATION",
        cell: ({ row }) => <span className="font-mono text-xs uppercase">{row.getValue("name")}</span>
    },
    {
        accessorKey: "capacity",
        header: "CAPACITY",
        cell: ({ row }) => {
            const val = row.getValue("capacity") as number
            return (
                <div className="flex items-center gap-2">
                    <div className="h-1 w-10 bg-white/10 rounded-full overflow-hidden">
                        <div className={`h-full bg-primary`} style={{ width: `${val}%` }} />
                    </div>
                    <span className="text-[10px] font-mono">{val}%</span>
                </div>
            )
        }
    },
    {
        accessorKey: "status",
        header: "OPERATIONAL_STATUS",
        cell: ({ row }) => {
            const status = row.getValue("status") as string
            return (
                <Badge variant={status === 'active' ? 'default' : 'secondary'} className="uppercase font-black text-[9px]">
                    {status}
                </Badge>
            )
        }
    }
]

export default function DataTableDemoPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">DYNAMIC_DYNAMIC_ARRAYS</h1>
                </div>
                <p className="text-muted-foreground font-medium">Advanced grid systems with integrated sorting, filtering, and pagination for mission-critical datasets.</p>
            </div>

            <EndcoreCard title="Asset_Telemetry_Monitor" status="active">
                <div className="p-8">
                    <DataTable columns={columns} data={assets} />
                </div>
            </EndcoreCard>
        </div>
    )
}
