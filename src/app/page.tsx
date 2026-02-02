import { Navbar } from "@/components/layout/Navbar";
import { EndcoreCard } from "@/components/ui/EndcoreCard";
import { BackgroundPattern } from "@/components/layout/BackgroundPattern";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Box,
  Hexagon,
  Shield,
  Globe,
  Github,
  Activity,
  Lock,
  CheckCircle2
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="h-screen w-full relative bg-[#f0f0f3] dark:bg-zinc-900 transition-colors duration-300 overflow-hidden flex flex-col p-4 gap-4">
      {/* Abstract Background (Fixed) */}
      <div className="absolute inset-0 z-0">
        <BackgroundPattern />
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
                width={160}
                height={160}
                className="relative z-10 drop-shadow-[0_0_25px_rgba(255,215,0,0.6)]"
              />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-primary dark:bg-primary/10 dark:text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
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
              <div className="text-center mb-16 px-4">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="h-[1px] w-8 bg-zinc-300 dark:bg-primary/30" />
                  <span className="text-[10px] px-3 py-1 bg-black text-primary dark:bg-primary/10 dark:text-primary rounded-full uppercase tracking-[0.4em] font-black">Capabilities</span>
                  <div className="h-[1px] w-8 bg-zinc-300 dark:bg-primary/30" />
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4">TACTICAL MODULES</h2>
                <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">Precision-engineered systems for high-performance operative workflows.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <EndcoreCard title="Dynamic Architecture" status="active" className="h-full">
                  <div className="flex flex-col items-start gap-4 py-4">
                    <div className="p-3 bg-primary/10 rounded-2xl">
                      <Box className="text-black dark:text-primary w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Floating Grid System</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      Detached navigation and content modules that adapt fluidly to any viewport, creating a sense of depth and dimensionality.
                    </p>
                  </div>
                </EndcoreCard>

                <EndcoreCard title="Tactical Visuals" status="warning" className="h-full">
                  <div className="flex flex-col items-start gap-4 py-4">
                    <div className="p-3 bg-primary/10 rounded-2xl">
                      <Hexagon className="text-black dark:text-primary w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">High-Contrast UI</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      Engineered with a specific yellow-black tactical palette for maximum readability in high-stress environments.
                    </p>
                  </div>
                </EndcoreCard>

                <EndcoreCard title="System Security" status="critical" className="h-full">
                  <div className="flex flex-col items-start gap-4 py-4">
                    <div className="p-3 bg-primary/10 rounded-2xl">
                      <Shield className="text-black dark:text-primary w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Robust Auth</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      Integrated authentication workflows and role-based access control patterns ready for deployment.
                    </p>
                  </div>
                </EndcoreCard>
              </div>
            </div>
          </section>

          {/* Showcase Section */}
          <section id="showcase" className="py-20 px-6 border-t border-dashed border-zinc-200 dark:border-white/5 relative overflow-hidden group">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="h-[1px] w-8 bg-zinc-300 dark:bg-primary/30" />
                  <span className="text-[10px] px-3 py-1 bg-black text-primary dark:bg-primary/10 dark:text-primary rounded-full uppercase tracking-[0.4em] font-black">Showcase</span>
                  <div className="h-[1px] w-8 bg-zinc-300 dark:bg-primary/30" />
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4">SYSTEM PREVIEW</h2>
                <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">A glimpse into the command center interface and data visualizations.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Visual Widget 1: Analytics */}
                <div className="bg-white/40 dark:bg-black/40 border border-zinc-200 dark:border-white/5 rounded-[2rem] p-8 h-[400px] relative overflow-hidden flex flex-col justify-between backdrop-blur-md">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-[10px] font-black tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">REALTIME_TRAFFIC_FEED</span>
                    </div>
                    <Activity className="w-5 h-5 text-zinc-400" />
                  </div>

                  <div className="flex-1 flex items-end gap-2 pb-4">
                    {[40, 70, 45, 90, 65, 30, 85, 100, 55, 75, 50, 80, 60, 95, 40].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-primary/20 hover:bg-primary transition-all duration-300 rounded-t-sm"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-200 dark:border-white/5 font-mono">
                    <div>
                      <div className="text-[10px] text-zinc-500 dark:text-zinc-600 mb-1">BITRATE</div>
                      <div className="text-sm font-bold text-foreground">1.4 GB/S</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-500 dark:text-zinc-600 mb-1">LATENCY</div>
                      <div className="text-sm font-bold text-foreground">12 MS</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-500 dark:text-zinc-600 mb-1">PACKETS</div>
                      <div className="text-sm font-bold text-foreground">OK_<span className="text-black dark:text-primary">024</span></div>
                    </div>
                  </div>
                </div>

                {/* Visual Widget 2: Security Hub */}
                <div className="bg-white/40 dark:bg-black/40 border border-zinc-200 dark:border-white/5 rounded-[2rem] p-8 h-[400px] relative overflow-hidden backdrop-blur-md">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-black text-foreground">SECURITY_HUB</h3>
                    <Lock className="w-6 h-6 text-black dark:text-primary" />
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: 'FIREWALL_PROTOCOL', status: 'PROTECTED', color: 'text-black dark:text-primary font-black' },
                      { label: 'ENCRYPTION_LAYER', status: 'AES_256', color: 'text-foreground' },
                      { label: 'SATELLITE_LINK', status: 'ACTIVE', color: 'text-black dark:text-primary font-black' },
                      { label: 'THREAT_SCAN', status: 'NO_ENTRY', color: 'text-zinc-400' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-black/5 dark:bg-black/20 border border-zinc-100 dark:border-white/5">
                        <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 tracking-wider font-mono">{item.label}</span>
                        <span className={`text-[10px] font-black tracking-widest ${item.color} font-mono`}>{item.status}</span>
                      </div>
                    ))}
                  </div>

                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="py-20 px-6 border-t border-dashed border-zinc-200 dark:border-white/5">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="h-[1px] w-8 bg-zinc-300 dark:bg-primary/30" />
                  <span className="text-[10px] px-3 py-1 bg-black text-primary dark:bg-primary/10 dark:text-primary rounded-full uppercase tracking-[0.4em] font-black">Acquisition</span>
                  <div className="h-[1px] w-8 bg-zinc-300 dark:bg-primary/30" />
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4">SERVICE TIERS</h2>
                <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">Scale your operations with precision engineered licensing models.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Plan 1 */}
                <div className="bg-white/40 dark:bg-black/40 border border-zinc-200 dark:border-white/5 rounded-[2.5rem] p-8 backdrop-blur-md flex flex-col h-full relative group hover:border-primary/50 transition-all duration-300">
                  <div className="mb-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2 block">Level 1</span>
                    <h3 className="text-2xl font-black text-foreground">OPERATIVE</h3>
                    <div className="text-4xl font-black mt-2 text-foreground">$0 <span className="text-sm font-medium text-zinc-500">/mo</span></div>
                  </div>

                  <ul className="flex-1 space-y-4 mb-8">
                    {['Single Project License', 'Core UI Components', 'Community Access', 'Manual Updates'].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                        <CheckCircle2 size={16} className="text-black dark:text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full py-4 rounded-full border border-zinc-300 dark:border-white/10 font-bold hover:bg-foreground hover:text-background transition-colors dark:text-white">
                    INITIALIZE_BASE
                  </button>
                </div>

                {/* Plan 2 */}
                <div className="bg-primary border-2 border-primary rounded-[2.5rem] p-8 shadow-[0_0_40px_rgba(255,215,0,0.2)] flex flex-col h-full relative z-10 scale-105 transform">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-primary text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest uppercase shadow-xl">
                    Recommended
                  </div>
                  <div className="mb-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/60 mb-2 block">Level 2</span>
                    <h3 className="text-2xl font-black text-black">SQUADRON</h3>
                    <div className="text-4xl font-black mt-2 text-black">$49 <span className="text-sm font-medium text-black/60">/mo</span></div>
                  </div>

                  <ul className="flex-1 space-y-4 mb-8">
                    {['Unlimited Projects', 'Advanced Modules', 'Priority Support', 'Automatic CDN Updates', 'Custom Themes'].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-black font-semibold">
                        <CheckCircle2 size={16} className="text-black" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full py-4 rounded-full bg-black text-primary font-black shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02]">
                    COMMENCE_DEPLOY
                  </button>

                  <Image src="/logo.png" alt="" width={60} height={60} className="absolute -bottom-2 -right-2 opacity-10 pointer-events-none" />
                </div>

                {/* Plan 3 */}
                <div className="bg-white/40 dark:bg-black/40 border border-zinc-200 dark:border-white/5 rounded-[2.5rem] p-8 backdrop-blur-md flex flex-col h-full relative group hover:border-primary/50 transition-all duration-300">
                  <div className="mb-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2 block">Level 3</span>
                    <h3 className="text-2xl font-black text-foreground">COMMAND</h3>
                    <div className="text-4xl font-black mt-2 text-foreground">$199 <span className="text-sm font-medium text-zinc-500">/mo</span></div>
                  </div>

                  <ul className="flex-1 space-y-4 mb-8">
                    {['White-label Access', 'Direct Dev Communication', 'SLA Guarantee', 'Infrastructure Control', 'Source Code Access'].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                        <CheckCircle2 size={16} className="text-black dark:text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full py-4 rounded-full border border-zinc-300 dark:border-white/10 font-bold hover:bg-foreground hover:text-background transition-colors dark:text-white">
                    ORDER_ESTABLISH
                  </button>
                </div>
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
              <Github className="w-5 h-5 text-zinc-400 hover:text-black dark:hover:text-primary cursor-pointer transition-colors" />
              <Globe className="w-5 h-5 text-zinc-400 hover:text-black dark:hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
