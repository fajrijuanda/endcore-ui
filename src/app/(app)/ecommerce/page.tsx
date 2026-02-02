"use client"

import React, { useState } from 'react';
import { EndcoreCard } from '@/components/ui/EndcoreCard';
import { SupplyNodeCard } from '@/components/commerce/SupplyNodeCard';
import { ShoppingCart, Package, Trash2, CheckCircle2, Search, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: 'Combat' | 'Orbital' | 'Intel';
    image: string;
}

const PRODUCTS: Product[] = [
    {
        id: 'node-01',
        name: 'CORE_INITIALIZATION_MODULE',
        category: 'Orbital',
        price: 1250,
        description: 'Critical hardware for aligning orbital relays and synchronizing core systems.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 'node-02',
        name: 'DATA_PURGE_PROTOCOL',
        category: 'Intel',
        price: 850,
        description: 'Automated high-speed data destruction sequence for secure intelligence disposal.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 'node-03',
        name: 'AUTHORIZATION_KEY_L4',
        category: 'Combat',
        price: 2100,
        description: 'High-level biometric bypass for restricted tactical zones and command hierarchy.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 'node-04',
        name: 'TACTICAL_VISOR_MK2',
        category: 'Combat',
        price: 1500,
        description: 'Augmented reality HUD with integrated bio-signature tracking and thermal telemetry.',
        image: 'https://images.unsplash.com/photo-1504333638930-c8787321eee0?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 'node-05',
        name: 'SIGNAL_JAMMER_V3',
        category: 'Intel',
        price: 900,
        description: 'Portable wide-spectrum electronic countermeasure for tactical disruption.',
        image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 'node-06',
        name: 'ORBITAL_REPAIR_DRONE',
        category: 'Orbital',
        price: 3200,
        description: 'Autonomous maintenance unit for external hull repairs and satellite servicing.',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    }
];

export default function CommercePage() {
    const [cart, setCart] = useState<{ id: string; quantity: number }[]>([]);
    const [filter, setFilter] = useState<'All' | 'Combat' | 'Orbital' | 'Intel'>('All');
    const [searchQuery, setSearchQuery] = useState('');

    const addToCart = (id: string) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === id);
            if (existing) {
                return prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { id, quantity: 1 }];
        });
    };

    const removeFromCart = (id: string) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const cartItems = cart.map(item => ({
        ...PRODUCTS.find(p => p.id === item.id)!,
        quantity: item.quantity
    }));

    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const filteredProducts = PRODUCTS.filter(p => {
        const matchesCategory = filter === 'All' || p.category === filter;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="flex flex-col lg:flex-row gap-8 min-h-full">
            {/* Main Shop Area */}
            <div className="flex-1 space-y-8">
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-4xl font-black text-black dark:text-white mb-2 uppercase tracking-tight">
                            Supply_Node_<span className="text-primary">01</span>
                        </h1>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xl">
                            Request modular infrastructure and tactical equipment. All supplies subject to authorization level clearance.
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-2xl border border-zinc-200 dark:border-white/5 flex items-center gap-2">
                            <Package size={16} className="text-primary" />
                            <span className="text-xs font-black uppercase text-zinc-900 dark:text-white">Active_Stock: {PRODUCTS.length}</span>
                        </div>
                    </div>
                </header>

                {/* Filters & Search */}
                <section className="flex flex-wrap items-center gap-4">
                    <div className="relative flex-1 min-w-[300px]">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search modules..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-mono"
                        />
                    </div>

                    <div className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 p-1.5 rounded-2xl">
                        {['All', 'Combat', 'Orbital', 'Intel'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat as typeof filter)}
                                className={cn(
                                    "px-4 py-2 rounded-xl text-xs font-black uppercase transition-all",
                                    filter === cat
                                        ? "bg-white dark:bg-zinc-900 text-black dark:text-primary shadow-sm"
                                        : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Product Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <SupplyNodeCard
                                key={product.id}
                                {...product}
                                onAdd={addToCart}
                            />
                        ))}
                    </AnimatePresence>
                    {filteredProducts.length === 0 && (
                        <div className="col-span-full py-20 text-center space-y-4">
                            <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto">
                                <Search size={24} className="text-zinc-400" />
                            </div>
                            <p className="text-zinc-500 font-mono text-sm">No tactical assets found matching your criteria.</p>
                        </div>
                    )}
                </section>
            </div>

            {/* Sidebar Cart / Request Status */}
            <div className="lg:w-96">
                <div className="sticky top-8 space-y-6">
                    <EndcoreCard title="SupplyRequest_Queue" status={cartItems.length > 0 ? "active" : "neutral"} className="min-h-[500px] flex flex-col">
                        <div className="p-6 flex-1 flex flex-col">
                            {cartItems.length === 0 ? (
                                <div className="flex-1 flex flex-col items-center justify-center text-center p-8 space-y-4">
                                    <div className="w-16 h-16 rounded-[2rem] bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                                        <ShoppingCart size={24} className="text-zinc-400" />
                                    </div>
                                    <div>
                                        <p className="text-zinc-900 dark:text-white font-black text-sm uppercase">Queue_Empty</p>
                                        <p className="text-xs text-zinc-500 mt-1">Select modules from the supply node to initialize a request.</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4 flex-1 overflow-auto max-h-[400px] pr-2 custom-scrollbar no-scrollbar">
                                    {cartItems.map((item) => (
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            key={item.id}
                                            className="flex items-center gap-4 p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl group"
                                        >
                                            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-zinc-200 dark:bg-zinc-700 shrink-0">
                                                <Image src={item.image} alt={item.name} fill className="object-cover" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-[10px] font-black text-zinc-900 dark:text-white uppercase truncate">{item.name}</h4>
                                                <p className="text-[10px] text-zinc-500 font-mono">{item.price} CR × {item.quantity}</p>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-zinc-400 hover:text-red-500 transition-colors p-1"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </motion.div>
                                    ))}
                                </div>
                            )}

                            {/* Summary & Actions */}
                            {cartItems.length > 0 && (
                                <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-white/10 space-y-4">
                                    <div className="flex justify-between items-end">
                                        <span className="text-[10px] uppercase font-black text-zinc-400 tracking-widest">Total_Budget_Allocation</span>
                                        <div className="text-right">
                                            <span className="text-2xl font-black text-zinc-900 dark:text-primary leading-none">{totalPrice}</span>
                                            <span className="text-[10px] font-bold text-zinc-400 ml-1">CR</span>
                                        </div>
                                    </div>

                                    <button className="w-full py-4 bg-zinc-900 dark:bg-primary text-white dark:text-black rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-zinc-800 dark:hover:bg-primary/90 transition-all shadow-xl active:scale-[0.98] flex items-center justify-center gap-2">
                                        Initialize_Transfer
                                        <CheckCircle2 size={16} />
                                    </button>

                                    <p className="text-[9px] text-center text-zinc-500 font-mono uppercase tracking-tighter opacity-50">
                                        Transaction_Log: Secure_Channel_ID: ENDCORE_SEC_8829_X
                                    </p>
                                </div>
                            )}
                        </div>
                    </EndcoreCard>

                    {/* Quick Info Card */}
                    <div className="p-6 rounded-[2.5rem] bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border border-zinc-700 dark:border-zinc-200 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl overflow-hidden relative group">
                        <div className="relative z-10 space-y-2">
                            <h4 className="text-[10px] font-black uppercase tracking-widest opacity-60">System_Status</h4>
                            <p className="font-mono text-sm leading-tight">All supply nodes are currently operating at 94% efficiency. Logistic drones available.</p>
                        </div>
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                            <Zap size={48} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
