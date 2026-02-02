import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, Terminal } from "lucide-react";

export default function ComponentsPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col space-y-2">
                <h1 className="text-3xl font-bold tracking-tight text-white">UI Components</h1>
                <p className="text-muted-foreground">Primitives and atoms for building the Endcore interface.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Buttons */}
                <EndcoreCard title="Buttons" status="active">
                    <div className="flex flex-wrap gap-2">
                        <Button>Default</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="link">Link</Button>
                    </div>
                </EndcoreCard>

                {/* Badges */}
                <EndcoreCard title="Badges" status="neutral">
                    <div className="flex flex-wrap gap-2">
                        <Badge>Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="destructive">Destructive</Badge>
                        <Badge variant="outline">Outline</Badge>
                    </div>
                </EndcoreCard>

                {/* Inputs */}
                <EndcoreCard title="Inputs" status="neutral">
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <Label>Email</Label>
                            <Input type="email" placeholder="Email" />
                        </div>
                        <div className="space-y-1">
                            <Label>Password</Label>
                            <Input type="password" placeholder="Password" />
                        </div>
                    </div>
                </EndcoreCard>

                {/* Switches & Sliders */}
                <EndcoreCard title="Controls" status="warning">
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <Switch id="airplane-mode" />
                            <Label htmlFor="airplane-mode">Airplane Mode</Label>
                        </div>
                        <div className="space-y-2">
                            <Label>Volume</Label>
                            <Slider defaultValue={[50]} max={100} step={1} />
                        </div>
                    </div>
                </EndcoreCard>

                {/* Checkbox & Radio */}
                <EndcoreCard title="Selection" status="neutral">
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <Label htmlFor="terms">Accept terms</Label>
                        </div>
                        <RadioGroup defaultValue="comfortable">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="default" id="r1" />
                                <Label htmlFor="r1">Default</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="comfortable" id="r2" />
                                <Label htmlFor="r2">Comfortable</Label>
                            </div>
                        </RadioGroup>
                    </div>
                </EndcoreCard>

                {/* Select & Textarea */}
                <EndcoreCard title="Forms" status="neutral">
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <Label>Role</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="admin">Admin</SelectItem>
                                    <SelectItem value="user">User</SelectItem>
                                    <SelectItem value="guest">Guest</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-1">
                            <Label>Bio</Label>
                            <Textarea placeholder="Tell us about yourself" />
                        </div>
                    </div>
                </EndcoreCard>

                {/* Accordion */}
                <EndcoreCard title="Accordion" status="neutral">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Is it styled?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It comes with default styles that matches the other components&apos; aesthetic.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </EndcoreCard>

                {/* Alert */}
                <EndcoreCard title="Alerts" status="critical">
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>
                            Your session has expired. Please log in again.
                        </AlertDescription>
                    </Alert>
                    <div className="mt-4">
                        <Alert>
                            <Terminal className="h-4 w-4" />
                            <AlertTitle>Heads up!</AlertTitle>
                            <AlertDescription>
                                You can add components to your app using the cli.
                            </AlertDescription>
                        </Alert>
                    </div>
                </EndcoreCard>

                {/* Progress */}
                <EndcoreCard title="Progress" status="active">
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <div className="flex justify-between text-xs">
                                <span>Loading Resource</span>
                                <span>45%</span>
                            </div>
                            <Progress value={45} />
                        </div>
                        <div className="space-y-1">
                            <div className="flex justify-between text-xs">
                                <span>System Integrity</span>
                                <span>82%</span>
                            </div>
                            <Progress value={82} className="bg-white/10 [&>div]:bg-green-500" />
                        </div>
                    </div>
                </EndcoreCard>

                {/* Tabs */}
                <EndcoreCard title="Tabs" status="neutral" className="md:col-span-2">
                    <Tabs defaultValue="account" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="account">Account</TabsTrigger>
                            <TabsTrigger value="password">Password</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">
                            <Card className="bg-transparent border-0 shadow-none">
                                <CardHeader>
                                    <CardTitle className="text-white">Account</CardTitle>
                                    <CardDescription>
                                        Make changes to your account here. Click save when you&apos;re done.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" defaultValue="Pedro Duarte" className="bg-black/20" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="username">Username</Label>
                                        <Input id="username" defaultValue="@peduarte" className="bg-black/20" />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="bg-white text-black hover:bg-zinc-200">Save changes</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                        <TabsContent value="password">
                            <div className="p-4 text-sm text-muted-foreground">Change your password here.</div>
                        </TabsContent>
                    </Tabs>
                </EndcoreCard>

                {/* Table */}
                <EndcoreCard title="Data Table" status="neutral" className="md:col-span-2 lg:col-span-3">
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

            </div>
        </div>
    );
}
