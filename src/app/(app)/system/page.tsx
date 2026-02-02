import { EndcoreCard } from '@/components/ui/EndcoreCard';

export default function SystemPage() {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold text-white mb-4">System <span className="text-primary">Settings</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <EndcoreCard title="General" status="neutral">Settings Form</EndcoreCard>
                <EndcoreCard title="Security" status="critical">RBAC Controls</EndcoreCard>
            </div>
        </div>
    );
}
