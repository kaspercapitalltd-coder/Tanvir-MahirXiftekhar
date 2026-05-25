'use client';

import { motion } from 'motion/react';
import { TrendingUp, Target, Crosshair, ArrowDownRight, ArrowUpRight } from 'lucide-react';

const executions = [
  { pair: "BankNifty", date: "May 24, 2024", type: "LONG", entry: "48200", exit: "48450", rr: "1:3.5", pnl: "+250 pts", note: "Liquidity sweep below VWAP. Entered on retest. Held through initial chop." },
  { pair: "Nifty50", date: "May 23, 2024", type: "SHORT", entry: "22850", exit: "22780", rr: "1:2.8", pnl: "+70 pts", note: "Failed breakout at HOD. Volume divergence confirmed. Clean scalp." },
  { pair: "BankNifty", date: "May 21, 2024", type: "LONG", entry: "47900", exit: "48300", rr: "1:5", pnl: "+400 pts", note: "Macro structural shift. Held runner for explosive gamma move." },
  { pair: "Nifty50", date: "May 20, 2024", type: "SL HIT", entry: "22500", exit: "22470", rr: "-1R", pnl: "-30 pts", note: "Invalidation level breached. Cut immediately. No emotions." },
  { pair: "BankNifty", date: "May 17, 2024", type: "SHORT", entry: "48100", exit: "47850", rr: "1:3", pnl: "+250 pts", note: "Textbook Wyckoff distribution fade." },
];

export default function Results() {
  return (
    <div className="min-h-screen bg-[#050505] pt-12 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-20">
          <h1 className="text-4xl md:text-6xl font-display font-medium text-white mb-6">Execution Logs.</h1>
          <p className="text-xl text-zinc-400 max-w-2xl font-light border-l-2 border-gold pl-6">
            Transparent records of institutional-grade setups dispatched to our Elite members. We log winners, and we log our stop-losses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
           <div className="bg-[#0A0A0A] border border-zinc-900 p-8 rounded-sm">
              <TrendingUp className="w-8 h-8 text-gold mb-4"/>
              <div className="text-3xl font-display text-white mb-1">92%</div>
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">Target Accuracy</div>
           </div>
           <div className="bg-[#0A0A0A] border border-zinc-900 p-8 rounded-sm">
              <Target className="w-8 h-8 text-gold mb-4"/>
              <div className="text-3xl font-display text-white mb-1">1:3</div>
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">Avg Risk/Reward</div>
           </div>
           <div className="bg-[#0A0A0A] border border-zinc-900 p-8 rounded-sm">
              <Crosshair className="w-8 h-8 text-gold mb-4"/>
              <div className="text-3xl font-display text-white mb-1">Strict</div>
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">Capital Preservation</div>
           </div>
        </div>

        <div className="bg-[#0A0A0A] border border-zinc-900 rounded-sm overflow-hidden">
           <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="bg-[#111] border-b border-zinc-800 text-xs font-mono uppercase tracking-widest text-zinc-500">
                       <th className="px-6 py-4 font-normal">Date / Asset</th>
                       <th className="px-6 py-4 font-normal">Bias</th>
                       <th className="px-6 py-4 font-normal">Entry → Exit</th>
                       <th className="px-6 py-4 font-normal">R/R</th>
                       <th className="px-6 py-4 font-normal">Net Points</th>
                       <th className="px-6 py-4 font-normal">Analyst Note</th>
                    </tr>
                 </thead>
                 <tbody className="text-sm font-mono text-zinc-300">
                    {executions.map((exe, i) => (
                       <tr key={i} className="border-b border-zinc-900 hover:bg-[#111]/50 transition-colors">
                          <td className="px-6 py-4">
                             <div className="text-white font-bold">{exe.pair}</div>
                             <div className="text-xs text-zinc-500">{exe.date}</div>
                          </td>
                          <td className="px-6 py-4">
                             <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-sm text-[10px] tracking-widest ${exe.type === 'LONG' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : exe.type === 'SHORT' ? 'bg-red-500/10 text-red-500 border border-red-500/20' : 'bg-zinc-800 text-zinc-400 border border-zinc-700'}`}>
                                {exe.type === 'LONG' && <ArrowUpRight className="w-3 h-3"/>}
                                {exe.type === 'SHORT' && <ArrowDownRight className="w-3 h-3"/>}
                                {exe.type}
                             </span>
                          </td>
                          <td className="px-6 py-4 flex flex-col">
                             <span>In: {exe.entry}</span>
                             <span className="text-zinc-500">Out: {exe.exit}</span>
                          </td>
                          <td className="px-6 py-4">{exe.rr}</td>
                          <td className={`px-6 py-4 font-bold ${exe.pnl.includes('+') ? 'text-green-500' : 'text-red-500'}`}>{exe.pnl}</td>
                          <td className="px-6 py-4 text-xs font-sans font-light text-zinc-400 max-w-xs">{exe.note}</td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
      </div>
    </div>
  );
}
