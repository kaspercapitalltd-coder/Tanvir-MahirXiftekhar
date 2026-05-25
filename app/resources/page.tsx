'use client';

import { motion } from 'motion/react';
import { Download, FileText, BarChart, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

const resources = [
  { title: "Nifty Intraday Checklist", desc: "A strict 10-point checklist to run through before executing any intraday Nifty F&O trade.", type: "PDF", icon: FileText },
  { title: "The Position Sizing Calculator", desc: "Our proprietary formula for calculating exact quantities based on stop-loss distance and capital.", type: "Sheet", icon: BarChart },
  { title: "Psychology & Discipline Framework", desc: "A guide on handling drawdowns, preventing revenge trading, and emotional detachment.", type: "PDF", icon: ShieldAlert },
  { title: "Option Greeks Explainer", desc: "A simplified breakdown of Delta and Theta, and why holding options on expiry is lethal.", type: "PDF", icon: FileText }
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-[#050505] pt-12 pb-32">
       <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold/10 blur-[100px] pointer-events-none" />
             <h1 className="text-5xl md:text-7xl font-display font-medium text-white mb-6 relative z-10">Free Resources.</h1>
             <p className="text-xl text-zinc-400 font-light relative z-10">
               Institutional frameworks, checklists, and calculators. Download and implement immediately.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
             {resources.map((res, i) => (
                <motion.div
                   key={res.title}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.1 }}
                   className="p-8 bg-[#0A0A0A] border border-zinc-900 rounded-sm hover:border-gold/40 transition-colors group flex flex-col items-start"
                >
                   <div className="flex justify-between w-full mb-6 relative">
                      <div className="w-14 h-14 rounded-full bg-[#111] border border-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform z-10">
                         <res.icon className="w-6 h-6 text-gold"/>
                      </div>
                      <span className="text-[10px] font-mono tracking-widest uppercase border border-zinc-800 px-3 py-1 rounded-sm text-zinc-400 h-max">
                         {res.type}
                      </span>
                   </div>
                   
                   <h3 className="text-2xl font-display text-white mb-3">{res.title}</h3>
                   <p className="text-zinc-500 font-light text-sm leading-relaxed mb-8 flex-grow">{res.desc}</p>
                   
                   <button className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase font-bold text-black bg-white px-5 py-2.5 rounded-sm hover:bg-gold transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                      <Download className="w-4 h-4" /> Download Now
                   </button>
                </motion.div>
             ))}
          </div>
          
          <div className="mt-32 max-w-4xl mx-auto border border-gold/20 bg-gold/5 p-10 md:p-16 rounded-sm text-center relative overflow-hidden">
             <div className="absolute right-0 top-0 w-32 h-32 bg-gold/20 blur-[50px] mix-blend-screen pointer-events-none" />
             <h3 className="text-3xl font-display text-white mb-4 relative z-10">Ready for Live Execution?</h3>
             <p className="text-zinc-400 mb-8 max-w-xl mx-auto relative z-10">Reading theory is one thing. Executing live setups with an institutional edge is another. Join the Elite network today.</p>
             <Link href="/membership" className="inline-block relative z-10 px-8 py-4 bg-gold text-black font-bold tracking-widest text-sm uppercase rounded-sm hover:bg-white shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all">
               View Elite Plans
             </Link>
          </div>
       </div>
    </div>
  );
}
