import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal, User, ShieldCheck, Box, AlertTriangle, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"

// --- Types ---

export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
    name: string
    role: string
}

export type UserProfile = {
    id: string
    name: string
    email: string
    role: "Admin" | "Operative" | "Analyst" | "Guest"
    status: "Active" | "Inactive" | "Suspended"
    lastActive: string
}

export type InventoryItem = {
    id: string
    name: string
    category: "Hardware" | "Software" | "Security" | "Comm"
    stock: number
    status: "In Stock" | "Low Stock" | "Out of Stock" | "Compromised"
    lastCheck: string
}

// --- Payment Columns (Existing Refactored) ---

export const columns: ColumnDef<Payment>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.getValue("status") as string
            return (
                <Badge
                    variant="outline"
                    className={cn(
                        "font-black tracking-widest uppercase text-[10px]",
                        status === 'success' ? 'bg-primary/20 text-black dark:text-primary border-primary/30' :
                            status === 'processing' ? 'bg-blue-500/10 text-blue-500 border-blue-500/30' :
                                'bg-red-500/10 text-red-500 border-red-500/30'
                    )}
                >
                    {status}
                </Badge>
            )
        },
    },
    {
        accessorKey: "name",
        header: "Operative",
        cell: ({ row }) => <div className="font-bold flex items-center gap-2"><User size={14} /> {row.getValue("name")}</div>,
    },
    {
        accessorKey: "email",
        header: ({ column }) => (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} className="hover:bg-transparent px-0 font-bold">
                Email <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => <div className="lowercase text-muted-foreground font-mono text-xs">{row.getValue("email")}</div>,
    },
    {
        accessorKey: "amount",
        header: () => <div className="text-right font-bold">Credits</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"))
            const formatted = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount)
            return <div className="text-right font-black font-mono">{formatted}</div>
        },
    },
    {
        id: "actions",
        enableHiding: false,
        cell: () => (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-primary/10">
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-md border-white/10">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem className="focus:bg-primary focus:text-black">View Profile</DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-primary focus:text-black">Audit History</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-500 focus:bg-red-500 focus:text-white">Terminate Access</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        ),
    },
]

// --- User Profile Columns ---

export const userColumns: ColumnDef<UserProfile>[] = [
    {
        accessorKey: "name",
        header: "Identity",
        cell: ({ row }) => (
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                    <User size={16} className="text-black dark:text-primary" />
                </div>
                <div>
                    <div className="font-black text-xs tracking-tight">{row.original.name}</div>
                    <div className="text-[10px] text-muted-foreground font-mono uppercase">{row.original.id}</div>
                </div>
            </div>
        )
    },
    {
        accessorKey: "role",
        header: "Clearance",
        cell: ({ row }) => (
            <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-zinc-500" />
                <span className="text-xs font-bold">{row.getValue("role")}</span>
            </div>
        )
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.getValue("status") as string
            return (
                <div className="flex items-center gap-2">
                    <div className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        status === 'Active' ? 'bg-primary' : 'bg-red-500'
                    )} />
                    <span className="text-[10px] font-bold uppercase">{status}</span>
                </div>
            )
        }
    },
    {
        accessorKey: "lastActive",
        header: "Heartbeat",
        cell: ({ row }) => <div className="text-[10px] font-mono text-muted-foreground italic">{row.getValue("lastActive")}</div>
    }
]

// --- Inventory Columns ---

export const inventoryColumns: ColumnDef<InventoryItem>[] = [
    {
        accessorKey: "id",
        header: "Serial_ID",
        cell: ({ row }) => <code className="text-[10px] font-mono bg-black/5 dark:bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{row.getValue("id")}</code>
    },
    {
        accessorKey: "name",
        header: "Asset_Name",
        cell: ({ row }) => <div className="font-bold flex items-center gap-2"><Box size={14} className="text-zinc-400" /> {row.getValue("name")}</div>
    },
    {
        accessorKey: "stock",
        header: "Reserve",
        cell: ({ row }) => {
            const stock = row.getValue("stock") as number
            return (
                <div className="flex items-center gap-4">
                    <div className="flex-1 h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden w-16">
                        <div
                            className={cn("h-full transition-all", stock < 20 ? 'bg-red-500' : 'bg-primary')}
                            style={{ width: `${Math.min(stock, 100)}%` }}
                        />
                    </div>
                    <span className="text-[10px] font-mono font-black">{stock}</span>
                </div>
            )
        }
    },
    {
        accessorKey: "status",
        header: "Integrity",
        cell: ({ row }) => {
            const status = row.getValue("status") as string
            return (
                <div className={cn(
                    "inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[9px] font-black uppercase border",
                    status === 'In Stock' ? 'bg-primary/10 text-black dark:text-primary border-primary/20' :
                        status === 'Out of Stock' ? 'bg-red-500/10 text-red-500 border-red-500/20' :
                            'bg-zinc-500/10 text-zinc-500 border-zinc-500/20'
                )}>
                    {status === 'In Stock' && <CheckCircle2 size={10} />}
                    {status === 'Out of Stock' && <AlertTriangle size={10} />}
                    {status}
                </div>
            )
        }
    }
]

import { cn } from "@/lib/utils"
