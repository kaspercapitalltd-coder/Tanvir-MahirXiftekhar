'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "Is THE CAPITAL GURU SEBI Registered?", a: "No. THE CAPITAL GURU is an educational intelligence network. We do not provide personalized financial advice, portfolio management, or guaranteed returns. All setups and structural analysis are provided strictly for educational purposes to demonstrate institutional execution logic. Trading F&O involves extreme risk." },
  { q: "What segments do you cover?", a: "We exclusively cover Indian National Stock Exchange (NSE) Derivatives—specifically Nifty 50 and BankNifty Options. We do not trade stocks, forex, or crypto. We focus entirely on high-liquidity index manipulation." },
  { q: "How much capital do I need?", a: "We recommend a minimum capital of ₹30,000 to cleanly execute our risk management framework (max 2% risk per trade). However, the principles of structural analysis apply regardless of capital size." },
  { q: "Do you provide automated trading algorithms?", a: "No. We believe in building discretionary traders who understand mechanical rules. We provide the structural analysis and entry/exit zones, but you must manually press the buy and sell buttons to develop the necessary psychological discipline." },
  { q: "What happens after I pay for Elite Access?", a: "Payments are securely routed through Cosmofeed. Immediately upon successful payment, you will be redirected to an exclusive, encrypted Telegram channel link. You will receive instant access." },
  { q: "Do I get a refund if I lose money?", a: "Absolutely not. We do not guarantee profits. We guarantee institutional-grade analysis. If you lose money, it means you either experienced a standard statistical drawdown (which is normal), or you violated the strict risk-management parameters we enforce. There are no refunds." },
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#050505] pt-12 pb-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
         <h1 className="text-4xl md:text-6xl font-display font-medium text-white mb-6 text-center">Frequently Asked Questions.</h1>
         <p className="text-xl text-zinc-400 font-light text-center mb-16">
            Clarity is currency. Read through our operational parameters before committing capital.
         </p>
         
         <div className="space-y-4">
               {faqs.map((faq, i) => (
                  <div key={i} className="border border-zinc-900 bg-[#0A0A0A] rounded-sm overflow-hidden">
                     <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                     >
                        <span className="font-display text-lg md:text-xl text-zinc-100">{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 text-gold transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                     </button>
                     <motion.div
                        initial={false}
                        animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                        className="overflow-hidden"
                     >
                        <div className="p-6 md:p-8 pt-0 text-zinc-400 font-light leading-relaxed border-t border-zinc-900 bg-[#111]">
                           {faq.a}
                        </div>
                     </motion.div>
                  </div>
               ))}
            </div>
      </div>
    </div>
  );
}
