'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Check, Lock, Star, ChevronDown, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

const plans = [
  {
    name: "2 Weeks Elite",
    price: "₹1799",
    duration: "14 Days",
    ideal: "For testing execution speed.",
    features: ["Intraday Nifty/BankNifty Setups", "Strict Entry/Exit Zones", "Live Market Bias"]
  },
  {
    name: "Monthly Elite",
    price: "₹3299",
    duration: "30 Days",
    ideal: "For serious intraday traders.",
    popular: true,
    features: ["Everything in 2 Weeks", "Premium Risk Framework", "Trade Management Guidance", "Direct Psychology Insights"]
  },
  {
    name: "6 Months Elite",
    price: "₹15999",
    duration: "180 Days",
    ideal: "For compounding capital.",
    features: ["Everything in Monthly", "Macro Swing Analysis", "Priority Support Access", "Capital Scaling Plan"]
  },
  {
    name: "12 Months Elite",
    price: "₹26999",
    duration: "365 Days",
    ideal: "For institutional scaling.",
    features: ["Everything in 6 Months", "V.I.P Inner Circle Status", "1-on-1 Strategy Calibration", "Ultimate Arsenal Access"]
  }
];

const faqs = [
  { q: "Is this a signal group?", a: "We provide high-conviction educational setups with exact logic, entry zones, and invalidation levels. You execute them to learn institutional mechanics while compounding." },
  { q: "Do I need a large capital to start?", a: "No. Our risk frameworks are designed so you can start with ₹20,000 to ₹50,000. It's about consistency and percentages, not absolute numbers." },
  { q: "How are alerts delivered?", a: "All alerts are delivered via our private, encrypted Telegram channel for instantaneous, low-latency execution." },
  { q: "What if I am a beginner?", a: "We provide foundational guides, but you must know how to place limit and stop-loss orders in your broker. We handle the analysis." },
];

export default function Membership() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#050505] pt-12 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
         <div className="text-center max-w-3xl mx-auto mb-20 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold/10 blur-[100px] pointer-events-none" />
            <h1 className="text-5xl md:text-7xl font-display font-medium text-white mb-6 tracking-tight relative z-10">Elite Access.</h1>
            <p className="text-xl text-zinc-400 font-light relative z-10">
              Join the inner circle of disciplined F&O traders. Choose your commitment level.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
               {plans.map((plan, i) => (
                  <motion.div
                     key={plan.name}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: i * 0.1 }}
                     className={`flex flex-col p-8 text-left border rounded-sm transition-all duration-300 ${plan.popular ? 'bg-[#0A0A0A] border-gold shadow-[0_0_40px_-5px_rgba(212,175,55,0.4)] relative transform lg:-translate-y-6 scale-[1.02]' : 'bg-[#111] border-zinc-800'}`}
                  >
                     {plan.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold to-gold-rich text-black text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 shadow-[0_0_20px_rgba(212,175,55,0.5)] rounded-full whitespace-nowrap z-10 flex items-center gap-1">
                           <Star className="w-3 h-3"/> Most Chosen
                        </div>
                     )}
                     
                     <div className="mb-8 mt-2 border-b border-zinc-800 pb-6">
                        <h4 className="text-2xl font-display text-white mb-2">{plan.name}</h4>
                        <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest">{plan.ideal}</p>
                     </div>
                     
                     <div className="mb-8">
                        <div className="flex items-baseline gap-1 mb-2">
                           <span className="text-5xl font-display text-white">{plan.price}</span>
                        </div>
                        <p className="text-zinc-400 text-sm">Access for {plan.duration}</p>
                     </div>

                     <ul className="mb-10 space-y-4 flex-grow">
                        {plan.features.map((feat, idx) => (
                           <li key={idx} className="flex items-start gap-3">
                              <Check className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-gold' : 'text-zinc-500'}`} />
                              <span className="text-zinc-300 text-sm font-medium">{feat}</span>
                           </li>
                        ))}
                     </ul>

                     <Link 
                        href="https://cosmofeed.com/vig/6a0c3b251be92d0013bbe3c4" 
                        target="_blank"
                        className={`mt-auto w-full py-4 text-xs font-bold tracking-widest uppercase flex justify-center items-center transition-all duration-300 rounded-sm gap-2 ${plan.popular ? 'bg-gold text-black hover:bg-white shadow-[0_0_20px_rgba(212,175,55,0.3)]' : 'bg-zinc-800 text-white hover:bg-zinc-700'}`}
                     >
                        Secure Access <Lock className="w-4 h-4" />
                     </Link>
                  </motion.div>
               ))}
         </div>

         {/* Trust/Guarantee */}
         <div className="max-w-4xl mx-auto bg-[#0A0A0A] border border-zinc-900 rounded-sm p-8 md:p-12 mb-32 text-center">
            <ShieldCheck className="w-12 h-12 text-gold mx-auto mb-6" />
            <h3 className="text-2xl font-display text-white mb-4">Secure & Encrypted Onboarding</h3>
            <p className="text-zinc-400 font-light mb-8 max-w-2xl mx-auto">
               Payments are securely processed via Cosmofeed. Upon successful transaction, you will instantly receive an automated invite link to the encrypted Telegram broadcast channel. No waiting.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
               {['UPI', 'Google Pay', 'PhonePe', 'Card'].map(m => (
                  <span key={m} className="px-4 py-2 border border-zinc-800 bg-[#111] text-xs font-mono uppercase tracking-widest text-zinc-500 rounded-sm">{m}</span>
               ))}
            </div>
         </div>

         {/* FAQ */}
         <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-display text-white mb-10 text-center">Membership FAQ</h3>
            <div className="space-y-4">
               {faqs.map((faq, i) => (
                  <div key={i} className="border border-zinc-900 bg-[#0A0A0A] rounded-sm overflow-hidden">
                     <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between p-6 text-left"
                     >
                        <span className="font-display text-lg text-zinc-100">{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 text-gold transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                     </button>
                     <motion.div
                        initial={false}
                        animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                        className="overflow-hidden"
                     >
                        <div className="p-6 pt-0 text-zinc-400 font-light leading-relaxed border-t border-zinc-900 bg-[#111]">
                           {faq.a}
                        </div>
                     </motion.div>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
