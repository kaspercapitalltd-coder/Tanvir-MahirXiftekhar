import Link from 'next/link';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#020202] border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      {/* Cinematic Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-gold/5 blur-[120px] pointer-events-none rounded-t-full mix-blend-screen" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_100%,#000_10%,transparent_100%)] opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 relative">
                <Image src="https://i.ibb.co/bR8bDCp5/122151.png" alt="Logo" fill className="object-contain" referrerPolicy="no-referrer" />
              </div>
              <span className="font-display text-xl tracking-[0.2em] font-medium uppercase text-white">
                Capital Guru
              </span>
            </Link>
            <p className="text-zinc-400 font-light max-w-sm mb-8 leading-relaxed">
              India's premium institutional trader ecosystem. Precision setups, absolute discipline, exponential compounding.
            </p>
            <div className="flex gap-4">
              <Link href="https://t.me/G_Thecapitalguru" target="_blank" className="p-4 bg-white/[0.01] backdrop-blur-xl border border-white/5 hover:border-gold/30 hover:text-gold transition-all duration-300 text-zinc-400 rounded-sm">
                Telegram
              </Link>
              <a href="mailto:mahir@thecapitalguru.net" className="p-4 bg-white/[0.01] backdrop-blur-xl border border-white/5 hover:border-gold/30 hover:text-gold transition-all duration-300 text-zinc-400 rounded-sm">
                Email
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-white font-mono text-xs tracking-widest uppercase mb-6 font-bold">Ecosystem</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-zinc-500 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/membership" className="text-zinc-500 hover:text-white transition-colors text-sm">Membership</Link></li>
              <li><Link href="/results" className="text-zinc-500 hover:text-white transition-colors text-sm">Past Trades</Link></li>
              <li><Link href="/blog" className="text-zinc-500 hover:text-white transition-colors text-sm">Blogs</Link></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-white font-mono text-xs tracking-widest uppercase mb-6 font-bold">Analysis</h4>
            <ul className="space-y-4">
              <li><Link href="/blog" className="text-zinc-500 hover:text-white transition-colors text-sm">BankNifty Setups</Link></li>
              <li><Link href="/blog" className="text-zinc-500 hover:text-white transition-colors text-sm">Nifty Frameworks</Link></li>
              <li><Link href="/blog" className="text-zinc-500 hover:text-white transition-colors text-sm">Trading Psychology</Link></li>
              <li><Link href="/blog" className="text-zinc-500 hover:text-white transition-colors text-sm">Risk Management</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-mono text-xs tracking-widest uppercase mb-6 font-bold">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="/faq" className="text-zinc-500 hover:text-white transition-colors text-sm">FAQ</Link></li>
              <li><Link href="/contact" className="text-zinc-500 hover:text-white transition-colors text-sm">Support</Link></li>
              <li><Link href="/legal/terms" className="text-zinc-500 hover:text-white transition-colors text-sm">Terms of Service</Link></li>
              <li><Link href="/legal/privacy" className="text-zinc-500 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div className="lg:col-span-3 bg-white/[0.01] backdrop-blur-xl p-6 border border-white/5 rounded-sm relative overflow-hidden group hover:border-white/10 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <h4 className="text-gold font-mono text-xs tracking-widest uppercase mb-4 font-bold flex items-center gap-2 relative z-10">
              <TrendingUp className="w-4 h-4" /> Market Status
            </h4>
            <p className="text-zinc-400 text-sm mb-4 leading-relaxed font-light relative z-10">
              We monitor macro liquidity daily. Setup alerts are broadcast immediately when criteria are met.
            </p>
            <Link href="https://cosmofeed.com/vig/6a0c3b251be92d0013bbe3c4" target="_blank" className="text-xs font-mono tracking-widest uppercase flex items-center gap-2 text-white hover:text-gold transition-colors font-bold relative z-10">
              Join Now <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600 font-mono">
          <p>© {new Date().getFullYear()} THE CAPITAL GURU. All rights reserved.</p>
          <p>Not SEBI Registered. Trading involves extreme risk.</p>
        </div>
      </div>
    </footer>
  );
}
