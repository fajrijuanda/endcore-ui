import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Plus } from "lucide-react";

export default function WidgetsPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col space-y-2">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Widgets</h1>
                <p className="text-muted-foreground">Composed components and ready-to-use interface modules.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/* Profile Card */}
                <EndcoreCard title="Operative Profile" status="active">
                    <div className="flex flex-col items-center gap-4">
                        <Avatar className="h-20 w-20 border-2 border-primary">
                            <AvatarImage src="/avatars/01.png" alt="@endcore" />
                            <AvatarFallback>OP</AvatarFallback>
                        </Avatar>
                        <div className="text-center">
                            <h3 className="text-lg font-bold text-foreground">Alex Chen</h3>
                            <p className="text-sm text-muted-foreground">System Architect</p>
                        </div>
                        <div className="flex gap-2">
                            <Badge variant="secondary" className="bg-black text-primary dark:bg-primary/20 dark:text-primary border-primary/50">Level 5</Badge>
                            <Badge variant="outline" className="border-zinc-200 dark:border-white/20 text-foreground">Verified</Badge>
                        </div>
                        <div className="w-full grid grid-cols-2 gap-2 mt-2">
                            <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 hover:text-white">Message</Button>
                            <Button className="w-full bg-primary hover:bg-primary/90 text-black font-bold">Assign</Button>
                        </div>
                    </div>
                </EndcoreCard>

                {/* Quick Settings */}
                <EndcoreCard title="System Controls" status="neutral">
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-foreground">Stealth Mode</Label>
                                <div className="text-[10px] text-muted-foreground">Disable all external signals</div>
                            </div>
                            <Switch />
                        </div>
                        <Separator className="bg-white/10" />
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-foreground">Auto-Deploy</Label>
                                <div className="text-[10px] text-muted-foreground">Deploy agents on breach</div>
                            </div>
                            <Switch defaultChecked />
                        </div>
                        <Separator className="bg-white/10" />
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-foreground">Notifications</Label>
                                <div className="text-[10px] text-muted-foreground">Receive tactical alerts</div>
                            </div>
                            <Switch defaultChecked />
                        </div>
                    </div>
                </EndcoreCard>

                {/* Small Calendar Widget */}
                <EndcoreCard title="Mission Timeline" status="warning">
                    <div className="flex justify-center">
                        <Calendar
                            mode="single"
                            selected={new Date()}
                            className="rounded-md border border-white/5 bg-black/20"
                        />
                    </div>
                </EndcoreCard>
            </div>

            {/* Activity Feed and Payment */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <EndcoreCard title="Recent Transmissions" className="lg:col-span-4" status="neutral">
                    <div className="space-y-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-start gap-4 p-2 rounded-lg hover:bg-white/5 transition-colors">
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback className="bg-zinc-800 text-xs">U{i}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1 space-y-1">
                                    <p className="text-sm font-medium text-white leading-none">User {i} updated the protocol</p>
                                    <p className="text-xs text-muted-foreground">Deployed new configuration to node {i}x.</p>
                                </div>
                                <div className="text-xs text-muted-foreground">2m ago</div>
                            </div>
                        ))}
                    </div>
                </EndcoreCard>

                <EndcoreCard title="Compacts" className="lg:col-span-3" status="critical">
                    <Card className="bg-transparent border-0 shadow-none p-0">
                        <CardHeader className="px-0 pt-0">
                            <CardTitle className="text-lg text-foreground">Create Mission</CardTitle>
                            <CardDescription>Deploy a new recursive task.</CardDescription>
                        </CardHeader>
                        <CardContent className="px-0 space-y-3">
                            <div className="space-y-1">
                                <Label className="text-xs text-zinc-500">Mission Name</Label>
                                <Input placeholder="Operation Alpha" className="bg-black/20 border-white/10" />
                            </div>
                            <div className="space-y-1">
                                <Label className="text-xs text-zinc-500">Clearance Level</Label>
                                <Input placeholder="Level 5" className="bg-black/20 border-white/10" />
                            </div>
                        </CardContent>
                        <CardFooter className="px-0 pb-0">
                            <Button className="w-full bg-white hover:bg-zinc-200 text-black">
                                <Plus className="mr-2 h-4 w-4" /> Initialize
                            </Button>
                        </CardFooter>
                    </Card>
                </EndcoreCard>
            </div>

        </div>
    );
}
