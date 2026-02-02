import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { DynamicIslandNav } from '@/components/shared/EndcoreDynamicIsland';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Endcore UI',
  description: 'Endfield-Inspired Admin Interface',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary selection:text-black`}
      >
        {/* Ambient Background Glow */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[128px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[128px]" />
        </div>

        {/* Dynamic Island Navigation */}
        <DynamicIslandNav />

        {/* Main Content Wrapper (Floating Hub) */}
        <main className="relative z-10 h-screen w-full flex flex-col p-4 md:p-6 pt-24 overflow-hidden">

          <div className="flex-1 overflow-auto rounded-[2rem] border border-white/5 bg-[#121212]/50 backdrop-blur-sm shadow-2xl relative">
            {/* Inner Content Scroll Area */}
            <div className="h-full w-full overflow-y-auto overflow-x-hidden p-6 md:p-8 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20">
              {children}
            </div>
          </div>

        </main>
      </body>
    </html>
  );
}
