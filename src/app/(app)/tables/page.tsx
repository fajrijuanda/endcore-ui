"use client"

import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DataTable } from "@/components/ui/data-table";
import { Payment, columns } from "./columns";

const data: Payment[] = [
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
        name: "Alice Smith",
        role: "User"
    },
    {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
        name: "Bob Jones",
        role: "Admin"
    },
    {
        id: "489e1d43",
        amount: 300,
        status: "success",
        email: "charlie@gmail.com",
        name: "Charlie Day",
        role: "User"
    },
    {
        id: "489e1d44",
        amount: 50,
        status: "failed",
        email: "david@gmail.com",
        name: "David Miller",
        role: "Guest"
    },
    {
        id: "489e1d45",
        amount: 75,
        status: "success",
        email: "eve@gmail.com",
        name: "Eve Seven",
        role: "User"
    },
    {
        id: "489e1d46",
        amount: 200,
        status: "processing",
        email: "frank@gmail.com",
        name: "Frank Ocean",
        role: "Admin"
    },
]

export default function TablesPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col space-y-2">
                <h1 className="text-3xl font-bold tracking-tight text-white">Tables</h1>
                <p className="text-muted-foreground">Display data in standard and interactive formats.</p>
            </div>

            <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid w-full max-w-[400px] grid-cols-2">
                    <TabsTrigger value="basic">Basic Table</TabsTrigger>
                    <TabsTrigger value="datatable">Data Table</TabsTrigger>
                </TabsList>

                <TabsContent value="basic" className="mt-6">
                    <EndcoreCard title="Basic Table" status="neutral">
                        <Table>
                            <TableCaption>A list of your recent invoices.</TableCaption>
                            <TableHeader>
                                <TableRow className="border-white/10 hover:bg-white/5">
                                    <TableHead className="w-[100px]">Invoice</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Method</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow className="border-white/10 hover:bg-white/5">
                                    <TableCell className="font-medium">INV001</TableCell>
                                    <TableCell>Paid</TableCell>
                                    <TableCell>Credit Card</TableCell>
                                    <TableCell className="text-right">$250.00</TableCell>
                                </TableRow>
                                <TableRow className="border-white/10 hover:bg-white/5">
                                    <TableCell className="font-medium">INV002</TableCell>
                                    <TableCell>Pending</TableCell>
                                    <TableCell>PayPal</TableCell>
                                    <TableCell className="text-right">$125.00</TableCell>
                                </TableRow>
                                <TableRow className="border-white/10 hover:bg-white/5">
                                    <TableCell className="font-medium">INV003</TableCell>
                                    <TableCell>Unpaid</TableCell>
                                    <TableCell>Bank Transfer</TableCell>
                                    <TableCell className="text-right">$450.00</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </EndcoreCard>
                </TabsContent>

                <TabsContent value="datatable" className="mt-6">
                    <EndcoreCard title="Advanced Data Table" status="active">
                        <DataTable columns={columns} data={data} />
                    </EndcoreCard>
                </TabsContent>
            </Tabs>
        </div>
    )
}
