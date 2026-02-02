import { EndcoreCard } from '@/components/ui/EndcoreCard';

export default function CRMPage() {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold text-white mb-4">CRM <span className="text-primary">Hub</span></h1>
            <EndcoreCard title="Customer List" status="active" className="h-[500px]">
                <div className="flex items-center justify-center h-full text-muted-foreground">
                    Customer Table Placeholder
                </div>
            </EndcoreCard>
        </div>
    );
}
