import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface EndcoreCardProps {
    title: string;
    status?: 'active' | 'warning' | 'critical' | 'neutral';
    children: ReactNode;
    className?: string;
    action?: ReactNode;
}

export const EndcoreCard = ({ title, status = 'neutral', children, className, action }: EndcoreCardProps) => {
    const statusColor = {
        active: 'bg-primary shadow-[0_0_10px_rgba(255,255,0,0.5)]',
        warning: 'bg-primary shadow-[0_0_10px_rgba(255,215,0,0.5)]',
        critical: 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]',
        neutral: 'bg-white/20',
    };

    return (
        <div className={cn(
            "group relative bg-white dark:bg-[#1A1A1A] border border-zinc-200 dark:border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-black dark:hover:border-primary hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] dark:hover:bg-[#202020] flex flex-col",
            className
        )}>
            {/* Decorative top-right cut */}
            <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-white/5 -rotate-45 transform origin-bottom-left translate-x-[50%] -translate-y-[50%]" />
            </div>

            <div className="flex justify-between items-center p-5 border-b border-zinc-200 dark:border-white/5">
                <div className="flex items-center gap-3">
                    <div className={cn("h-1.5 w-1.5 rounded-full", statusColor[status])} />
                    <h3 className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold group-hover:text-black dark:group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                </div>
                {action && (
                    <div className="text-xs text-muted-foreground">{action}</div>
                )}
            </div>

            <div className="p-5 flex-1 h-full min-h-0">
                {children}
            </div>
        </div>
    );
};
