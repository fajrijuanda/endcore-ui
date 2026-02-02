import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DataTable } from "@/components/ui/data-table";
import { Payment, UserProfile, InventoryItem, columns, userColumns, inventoryColumns } from "./columns";

const payments: Payment[] = [
    { id: "TX_902", amount: 4500, status: "success", email: "h.miller@endcore.io", name: "H. Miller", role: "Operative" },
    { id: "TX_441", amount: 1200, status: "processing", email: "j.doe@central.net", name: "J. Doe", role: "Analyst" },
    { id: "TX_112", amount: 800, status: "failed", email: "k.vance@uplink.sys", name: "K. Vance", role: "Operative" },
    { id: "TX_773", amount: 3200, status: "success", email: "s.connor@sky.net", name: "S. Connor", role: "Admin" },
    { id: "TX_505", amount: 150, status: "pending", email: "t.rizzo@field.ops", name: "T. Rizzo", role: "Guest" },
]

const users: UserProfile[] = [
    { id: "UID-8821", name: "Commander Sterling", email: "sterling@hq.endcore.io", role: "Admin", status: "Active", lastActive: "2m ago" },
    { id: "UID-3410", name: "Agent K", email: "k@division.sys", role: "Operative", status: "Active", lastActive: "15m ago" },
    { id: "UID-9055", name: "Dr. Aris V.", email: "aris@research.labs", role: "Analyst", status: "Active", lastActive: "1h ago" },
    { id: "UID-1122", name: "Operative 01", email: "01@shadow.net", role: "Operative", status: "Suspended", lastActive: "3d ago" },
    { id: "UID-7761", name: "Sarah J.", email: "sarah@logistics.ops", role: "Guest", status: "Inactive", lastActive: "12h ago" },
]

const inventory: InventoryItem[] = [
    { id: "HW-P882", name: "Encryption Node X1", category: "Hardware", stock: 85, status: "In Stock", lastCheck: "2026-02-01" },
    { id: "SW-L341", name: "Protocol V.2 Patch", category: "Software", stock: 12, status: "Low Stock", lastCheck: "2026-02-02" },
    { id: "SC-S905", name: "Biometric Scanner", category: "Security", stock: 0, status: "Out of Stock", lastCheck: "2026-01-30" },
    { id: "CM-C112", name: "Satellite Relay", category: "Comm", stock: 42, status: "In Stock", lastCheck: "2026-02-01" },
    { id: "HW-D773", name: "Data Core v4", category: "Hardware", stock: 156, status: "In Stock", lastCheck: "2026-02-02" },
]

export default function TablesPage() {
    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">Operational_Logs</h1>
                </div>
                <p className="text-muted-foreground font-medium">Interface for real-time data monitoring and asset management.</p>
            </div>

            <Tabs defaultValue="tactical" className="w-full">
                <TabsList className="grid w-full max-w-[600px] grid-cols-3 bg-white/5 border border-white/10 rounded-2xl p-1">
                    <TabsTrigger value="tactical" className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-black font-bold">TACTICAL_GRID</TabsTrigger>
                    <TabsTrigger value="users" className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-black font-bold">IDENTITY_HUB</TabsTrigger>
                    <TabsTrigger value="inventory" className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-black font-bold">ASSET_RESERVE</TabsTrigger>
                </TabsList>

                {/* Tactical Grid (Modernized Basic) */}
                <TabsContent value="tactical" className="mt-8">
                    <EndcoreCard title="Credits_Transmission_Log" status="active">
                        <DataTable columns={columns} data={payments} />
                    </EndcoreCard>
                </TabsContent>

                {/* Identity Hub (User Management) */}
                <TabsContent value="users" className="mt-8">
                    <EndcoreCard title="Authorized_Personnel_Index" status="warning">
                        <DataTable columns={userColumns} data={users} />
                    </EndcoreCard>
                </TabsContent>

                {/* Asset Reserve (Inventory) */}
                <TabsContent value="inventory" className="mt-8">
                    <EndcoreCard title="Hardware_and_Software_Reserve" status="neutral">
                        <DataTable columns={inventoryColumns} data={inventory} />
                    </EndcoreCard>
                </TabsContent>
            </Tabs>

            {/* Simple Table (Manual implementation for diversity) */}
            <div className="mt-12">
                <div className="flex items-center gap-2 mb-6">
                    <div className="h-4 w-0.5 bg-zinc-400 rounded-full" />
                    <h3 className="text-sm font-black tracking-[0.2em] text-zinc-500 uppercase">Legacy_Table_Format</h3>
                </div>
                <div className="rounded-[2rem] border border-white/5 bg-black/20 overflow-hidden">
                    <Table>
                        <TableHeader className="bg-white/5">
                            <TableRow className="border-white/5 hover:bg-transparent">
                                <TableHead className="font-bold text-zinc-400">UID</TableHead>
                                <TableHead className="font-bold text-zinc-400">STATUS</TableHead>
                                <TableHead className="text-right font-bold text-zinc-400">UPTIME</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className="border-white/5 hover:bg-white/5">
                                <TableCell className="font-mono text-xs">SRV-01</TableCell>
                                <TableCell><div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary" /><span className="text-[10px] font-bold">STABLE</span></div></TableCell>
                                <TableCell className="text-right font-mono text-xs">99.9%</TableCell>
                            </TableRow>
                            <TableRow className="border-white/5 hover:bg-white/5">
                                <TableCell className="font-mono text-xs">SRV-02</TableCell>
                                <TableCell><div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-500" /><span className="text-[10px] font-bold">OFFLINE</span></div></TableCell>
                                <TableCell className="text-right font-mono text-xs">0.0%</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
