export const BackgroundPattern = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Primary Blob (Top Left) - Remains Yellow */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow" />

            {/* Secondary Blob (Bottom Right) - Changed from Blue to Black/Gray */}
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-zinc-500/20 dark:bg-zinc-800/30 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow delay-700" />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 dark:opacity-10" />
        </div>
    );
};
