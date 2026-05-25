'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Target, ArrowRight, Activity, GitBranch } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-[#050505] pt-12 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <section className="py-20 border-b border-zinc-900 relative">
          <div className="absolute top-0 right-10 w-96 h-96 bg-gold/5 blur-[100px] pointer-events-none mix-blend-screen" />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-medium text-white tracking-tight mb-8"
          >
            Philosophy & <br/> <span className="text-zinc-500">Architecture.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-zinc-400 font-light max-w-3xl leading-relaxed border-l-2 border-gold pl-6"
          >
            We are not a signal provider. We are an institutional execution engine designed to extract capital from heavily manipulated derivative markets through ruthless discipline.
          </motion.p>
        </section>

        {/* Narrative */}
        <section className="py-24 grid md:grid-cols-12 gap-12 lg:gap-20">
          <div className="md:col-span-5 relative h-[600px] overflow-hidden rounded-sm border border-zinc-900 group">
            <Image 
              src="https://picsum.photos/seed/capitalguru-about/1200/1600" 
              alt="Institutional Trading" 
              fill 
              className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-10 left-10 p-6 bg-black/60 backdrop-blur-md border border-zinc-800 rounded-sm">
               <h3 className="text-gold font-mono tracking-widest uppercase text-xs mb-2">Established</h3>
               <p className="text-white text-3xl font-display">7+ Years</p>
               <p className="text-zinc-400 text-sm mt-1">Navigating violent volatility.</p>
            </div>
          </div>
          
          <div className="md:col-span-7 flex flex-col justify-center space-y-12">
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-xs font-mono tracking-widest uppercase text-gold mb-4">The Origin</h2>
              <h3 className="text-3xl font-display text-white mb-6">Designed because retail <br/>is destined to fail.</h3>
              <p className="text-zinc-400 font-light leading-relaxed mb-4 text-lg">
                The ecosystem of the Indian F&O market is predatory. It is mathematically designed to transfer wealth from the uneducated, emotional retail trader to the sophisticated, mechanical institutional algorithm.
              </p>
              <p className="text-zinc-400 font-light leading-relaxed text-lg">
                After years of proprietary trading, the founder of THE CAPITAL GURU mapped the exact execution protocols used by smart money. The realization was simple: You cannot outsmart the algorithm, but you can trade alongside it.
              </p>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-xs font-mono tracking-widest uppercase text-gold mb-4">The Mandate</h2>
              <h3 className="text-3xl font-display text-white mb-6">Capital Preservation First.</h3>
              <p className="text-zinc-400 font-light leading-relaxed mb-4 text-lg">
                We do not promise daily profits. We do not promise 10x returns in a week. We promise a mathematical edge and absolute risk mitigation. If a setup does not offer a minimum 1:3 risk-to-reward ratio based on structural support, we simply do not execute.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-24 border-t border-zinc-900 bg-[#0A0A0A] -mx-6 px-6 lg:-mx-8 lg:px-8">
           <div className="max-w-7xl mx-auto">
             <div className="text-center mb-16">
               <h2 className="text-4xl font-display text-white mb-4">The Three Pillars</h2>
               <p className="text-zinc-500 uppercase tracking-widest font-mono text-sm">The foundation of our ecosystem</p>
             </div>
             <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Structural Precision", desc: "No indicators. Pure price action, order flow, and liquidity pool mapping to enter exactly where institutional algorithms place limit orders.", icon: Target },
                  { title: "Mechanical Discipline", desc: "Every trade has a hard pre-calculated stop loss. Emotions are removed. If the invalidation level hits, the trade is dead. No holding, no hoping.", icon: ShieldCheck },
                  { title: "Asymmetric Compounding", desc: "We are not scalping for pennies. We sit on our hands for hours waiting for the one setup that offers extreme reward for minimal risk.", icon: Activity }
                ].map((p, i) => (
                   <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="p-8 border border-zinc-800 bg-[#111] hover:border-gold/50 transition-colors group rounded-sm"
                   >
                      <p.icon className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform" />
                      <h4 className="text-xl font-display text-white mb-4">{p.title}</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
                   </motion.div>
                ))}
             </div>
           </div>
        </section>

        <section className="py-24 text-center">
            <h2 className="text-3xl md:text-5xl font-display text-white mb-8">Ready to exit the retail cycle?</h2>
            <Link href="/membership" className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-black rounded-sm font-bold tracking-widest uppercase text-sm hover:bg-white transition-colors shadow-[0_0_30px_rgba(212,175,55,0.4)]">
               Explore Membership Plans <ArrowRight className="w-4 h-4"/>
            </Link>
        </section>

      </div>
    </div>
  );
}
