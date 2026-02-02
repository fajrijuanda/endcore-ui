import { Navbar } from "@/components/layout/Navbar";
import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { ArrowRight, Box, Hexagon, Shield, Globe, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="h-screen w-full relative bg-[#f0f0f3] dark:bg-zinc-900 transition-colors duration-300 overflow-hidden flex flex-col p-4 gap-4">
      {/* Abstract Background (Fixed) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 dark:opacity-10" />
      </div>

      {/* Header / Navbar Wrapper */}
      <header className="relative z-50 shrink-0">
        <Navbar />
      </header>

      {/* Main Floating Content Wrapper (Card) */}
      <main className="relative z-10 flex-1 min-h-0 w-full rounded-[2.5rem] overflow-hidden border transition-all duration-300 shadow-xl flex flex-col"
        style={{
          backgroundColor: 'var(--background-glass)',
          backdropFilter: 'var(--backdrop-filter)',
          WebkitBackdropFilter: 'var(--backdrop-filter)',
          borderColor: 'var(--border-glass)',
        }}
      >
        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {/* Hero Section */}
          <section className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 px-6 py-12">
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <Image
                src="/logo.png"
                alt="Endcore Logo"
                width={140}
                height={140}
                className="relative z-10 drop-shadow-[0_0_25px_rgba(255,215,0,0.6)]"
              />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-wider backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              System Online • v1.0.0
            </div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-foreground leading-[0.9]">
              THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600 dark:to-yellow-200 drop-shadow-sm">ENDCORE</span> <br /> PROTOCOL
            </h1>

            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed">
              A tactical, high-performance UI kit engineered for the next generation of web applications. Built for speed, precision, and dominance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mt-8">
              <Link href="/dashboard" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-primary text-black font-extrabold px-10 py-4 rounded-full hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transform hover:-translate-y-0.5">
                  INITIALIZE SYSTEM <ArrowRight size={20} strokeWidth={3} />
                </button>
              </Link>
              <Link href="/auth/login" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white/5 text-foreground font-bold px-10 py-4 rounded-full hover:bg-white/10 transition-all border border-zinc-200 dark:border-white/10 backdrop-blur-sm">
                  AUTHENTICATE
                </button>
              </Link>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-20 px-6 border-t border-dashed border-zinc-200 dark:border-white/5">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">CORE MODULES</h2>
                <p className="text-zinc-500 dark:text-zinc-400">Advanced systems for complex operations.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <EndcoreCard title="Dynamic Architecture" status="active" className="h-full">
                  <div className="flex flex-col items-start gap-4 py-4">
                    <Box className="text-black dark:text-primary w-10 h-10" />
                    <h3 className="text-xl font-bold text-foreground">Floating Grid System</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      Detached navigation and content modules that adapt fluidly to any viewport, creating a sense of depth and dimensionality.
                    </p>
                  </div>
                </EndcoreCard>

                <EndcoreCard title="Tactical Visuals" status="warning" className="h-full">
                  <div className="flex flex-col items-start gap-4 py-4">
                    <Hexagon className="text-black dark:text-primary w-10 h-10" />
                    <h3 className="text-xl font-bold text-foreground">High-Contrast UI</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      Engineered with a specific yellow-black tactical palette for maximum readability in high-stress environments.
                    </p>
                  </div>
                </EndcoreCard>

                <EndcoreCard title="System Security" status="critical" className="h-full">
                  <div className="flex flex-col items-start gap-4 py-4">
                    <Shield className="text-black dark:text-primary w-10 h-10" />
                    <h3 className="text-xl font-bold text-foreground">Robust Auth</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      Integrated authentication workflows and role-based access control patterns ready for deployment.
                    </p>
                  </div>
                </EndcoreCard>
              </div>
            </div>
          </section>

          {/* Stats / Proof Section */}
          <section className="py-20 px-6 bg-primary/5 border-y border-dashed border-zinc-200 dark:border-white/5">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-black text-foreground mb-1">99.9%</div>
                <div className="text-xs uppercase tracking-widest text-zinc-500">Uptime</div>
              </div>
              <div>
                <div className="text-4xl font-black text-foreground mb-1">⚡ 50ms</div>
                <div className="text-xs uppercase tracking-widest text-zinc-500">Latency</div>
              </div>
              <div>
                <div className="text-4xl font-black text-foreground mb-1">10+</div>
                <div className="text-xs uppercase tracking-widest text-zinc-500">Modules</div>
              </div>
              <div>
                <div className="text-4xl font-black text-foreground mb-1">∞</div>
                <div className="text-xs uppercase tracking-widest text-zinc-500">Scale</div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer (Fixed inside Card) */}
        <footer className="py-8 px-6 border-t border-dashed border-zinc-200 dark:border-white/5 bg-white/50 dark:bg-black/20 shrink-0">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Logo" width={24} height={24} className="opacity-80" />
              <span className="text-sm font-bold text-foreground">ENDCORE SYSTEMS</span>
            </div>
            <div className="text-xs text-zinc-500">
              © 2026 Endcore UI. All systems operational.
            </div>
            <div className="flex gap-4">
              <Github className="w-5 h-5 text-zinc-400 hover:text-foreground cursor-pointer transition-colors" />
              <Globe className="w-5 h-5 text-zinc-400 hover:text-foreground cursor-pointer transition-colors" />
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
