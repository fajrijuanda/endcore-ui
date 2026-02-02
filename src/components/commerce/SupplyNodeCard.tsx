"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Zap, Shield, Target } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface SupplyNodeCardProps {
    id: string;
    name: string;
    description: string;
    price: number;
    category: 'Combat' | 'Orbital' | 'Intel';
    image: string;
    onAdd: (id: string) => void;
}

const categoryIcons = {
    Combat: Target,
    Orbital: Zap,
    Intel: Shield,
};

export function SupplyNodeCard({ id, name, description, price, category, image, onAdd }: SupplyNodeCardProps) {
    const Icon = categoryIcons[category];

    return (
        <motion.div
            whileHover={{ y: -6 }}
            className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl"
        >
            {/* Header Overlay */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <div className={cn(
                    "flex items-center gap-1.5 px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg",
                    "bg-black dark:bg-primary text-primary dark:text-black"
                )}>
                    <Icon size={12} strokeWidth={3} />
                    {category}
                </div>
            </div>

            {/* Image Container */}
            <div className="relative h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-900 via-transparent to-transparent opacity-60" />
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h3 className="text-lg font-black tracking-tight text-zinc-900 dark:text-white uppercase leading-tight">
                            {name}
                        </h3>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-zinc-100 dark:border-white/5">
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-black">Supply_Cost</span>
                        <div className="flex items-center gap-1">
                            <span className="text-xl font-black text-zinc-900 dark:text-primary">{price}</span>
                            <span className="text-[10px] font-bold text-zinc-400">CR</span>
                        </div>
                    </div>

                    <button
                        onClick={() => onAdd(id)}
                        className="p-3 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-2xl hover:bg-primary hover:text-black dark:hover:bg-primary dark:hover:text-black transition-all shadow-lg active:scale-95"
                    >
                        <ShoppingCart size={18} />
                    </button>
                </div>
            </div>

            {/* Decorative Grid */}
            <div className="absolute bottom-0 right-0 w-16 h-16 opacity-5 pointer-events-none">
                <div className="grid grid-cols-4 grid-rows-4 w-full h-full p-2">
                    {[...Array(16)].map((_, i) => (
                        <div key={i} className="border-[0.5px] border-black dark:border-white" />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
