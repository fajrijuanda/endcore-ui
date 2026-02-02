import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { ArrowRight, Box, Hexagon, Layers } from "lucide-react";
import Link from "next/link";

import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-12">

      {/* Hero Section */}
      <section className="space-y-6 max-w-3xl mx-auto">
        <div className="flex justify-center mb-4">
          <Image
            src="/logo.png"
            alt="Endcore Logo"
            width={128}
            height={128}
            className="drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]"
          />
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Next.js 15 Available Now
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-black dark:to-white">Endcore</span> UI.
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A high-contrast, futuristic admin interface template inspired by tactical operations aesthetics.
          Built for speed, precision, and visual dominance.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link href="/dashboard" className="bg-primary text-black font-bold px-8 py-3 rounded-full hover:bg-primary/90 transition-all flex items-center gap-2">
            Enter Hub <ArrowRight size={18} />
          </Link>
          <Link href="/auth/login" className="bg-white/10 text-white font-medium px-8 py-3 rounded-full hover:bg-white/20 transition-all border border-white/5">
            View Login
          </Link>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
        <EndcoreCard title="Dynamic Architecture" status="active">
          <div className="flex flex-col items-center gap-4 py-6">
            <Box className="text-primary w-12 h-12" />
            <p className="text-sm text-center text-muted-foreground">Floating navigation and content modules that adapt to any screen size.</p>
          </div>
        </EndcoreCard>

        <EndcoreCard title="Tactical Design" status="warning">
          <div className="flex flex-col items-center gap-4 py-6">
            <Hexagon className="text-primary w-12 h-12" />
            <p className="text-sm text-center text-muted-foreground">High-contrast yellow & black palette designed for maximum readability.</p>
          </div>
        </EndcoreCard>

        <EndcoreCard title="Modular System" status="critical">
          <div className="flex flex-col items-center gap-4 py-6">
            <Layers className="text-red-500 w-12 h-12" />
            <p className="text-sm text-center text-muted-foreground">Pre-built components for CRM, Kanban, E-Commerce, and Analytics.</p>
          </div>
        </EndcoreCard>
      </section>

    </div>
  );
}
