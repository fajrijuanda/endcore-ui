import { EndcoreCard } from '@/components/ui/EndcoreCard';

export default function KanbanPage() {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold text-white mb-4">Kanban <span className="text-primary">Flow</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px]">
                <EndcoreCard title="To Do" status="neutral">
                    <div className="h-full border-l border-dashed border-white/10 ml-2 pl-4">Task Items</div>
                </EndcoreCard>
                <EndcoreCard title="In Progress" status="active">
                    <div className="h-full border-l border-dashed border-primary/20 ml-2 pl-4">Task Items</div>
                </EndcoreCard>
                <EndcoreCard title="Done" status="active">
                    <div className="h-full border-l border-dashed border-green-500/20 ml-2 pl-4">Task Items</div>
                </EndcoreCard>
            </div>
        </div>
    );
}
