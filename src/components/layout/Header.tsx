import { Search, Bell, User, Settings, LogOut, Shield } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

export default function Header() {
    const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

    return (
        <header className="sticky top-0 z-30 flex h-20 items-center gap-4 px-6 bg-transparent">
            <div className="w-full flex-1 md:w-auto md:flex-none">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                        placeholder="Search..."
                        className="pl-9 pr-4 w-full md:w-[300px] h-10 bg-white/5 border-white/10 focus:bg-white/10 focus:border-primary/50 transition-all rounded-full"
                    />
                </div>
            </div>
            <div className="flex-1" />
            <div className="flex items-center gap-3">
                <ThemeToggle />
                <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 text-muted-foreground hover:bg-white/10 relative">
                    <Bell size={20} />
                    <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-background" />
                </Button>

                {/* User Profile Dropdown */}
                <div className="pl-3 border-l border-white/10">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="flex items-center gap-3 p-1 rounded-full hover:bg-white/5 transition-colors focus:outline-none group">
                                <div className="text-right hidden md:block">
                                    <p className="text-sm font-bold leading-none transition-colors group-hover:text-primary">Admin User</p>
                                    <p className="text-[10px] text-muted-foreground font-mono mt-1 uppercase tracking-tighter">Clearance_L5</p>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold border border-white/10 group-hover:border-primary/50 transition-all">
                                    A
                                </div>
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56 bg-zinc-900 border-white/10 rounded-2xl p-2 shadow-2xl">
                            <DropdownMenuLabel className="px-3 py-2">
                                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Account_Identity</span>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator className="bg-white/5" />
                            <DropdownMenuItem className="flex items-center gap-2 rounded-xl focus:bg-primary focus:text-black cursor-pointer px-3 py-2 text-xs font-bold uppercase transition-all">
                                <User size={14} /> Profile_Dossier
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center gap-2 rounded-xl focus:bg-primary focus:text-black cursor-pointer px-3 py-2 text-xs font-bold uppercase transition-all">
                                <Settings size={14} /> System_Prefs
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center gap-2 rounded-xl focus:bg-primary focus:text-black cursor-pointer px-3 py-2 text-xs font-bold uppercase transition-all">
                                <Shield size={14} /> Security_Sync
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-white/5" />

                            <AlertDialog open={isLogoutDialogOpen} onOpenChange={setIsLogoutDialogOpen}>
                                <AlertDialogTrigger asChild>
                                    <div className="flex items-center gap-2 rounded-xl focus:bg-red-500 focus:text-white cursor-pointer px-3 py-2 text-xs font-bold uppercase transition-all group/logout hover:bg-red-500/10 hover:text-red-500">
                                        <LogOut size={14} /> Terminate_Session
                                    </div>
                                </AlertDialogTrigger>
                                <AlertDialogContent className="bg-zinc-900 border-white/10 rounded-[2.5rem] p-8">
                                    <AlertDialogHeader>
                                        <div className="w-16 h-16 rounded-[1.5rem] bg-red-500/10 flex items-center justify-center text-red-500 mb-4 mx-auto border border-red-500/20">
                                            <LogOut size={32} />
                                        </div>
                                        <AlertDialogTitle className="text-xl font-black text-center uppercase tracking-tight">TERMINATE_SESSION?</AlertDialogTitle>
                                        <AlertDialogDescription className="text-center text-zinc-400 text-sm">
                                            Warning: You are about to disconnect from the secure Endcore neural uplink. Unsaved telemetry data may be lost.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter className="flex-col sm:flex-row gap-3 mt-6">
                                        <AlertDialogCancel className="flex-1 rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold uppercase text-xs h-12">
                                            Abort
                                        </AlertDialogCancel>
                                        <AlertDialogAction
                                            onClick={() => window.location.href = '/auth/login'}
                                            className="flex-1 rounded-full bg-red-600 hover:bg-red-700 text-white font-black uppercase text-xs h-12 shadow-lg shadow-red-600/20"
                                        >
                                            Confirm_Termination
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}
