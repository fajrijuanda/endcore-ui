import { EndcoreCard } from '@/components/ui/EndcoreCard';

export default function CommercePage() {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold text-white mb-4">E-Commerce <span className="text-primary">Ops</span></h1>
            <EndcoreCard title="Inventory" status="warning" className="h-[400px]">
                <div className="flex items-center justify-center h-full text-muted-foreground">
                    Inventory Grid Placeholder
                </div>
            </EndcoreCard>
        </div>
    );
}
