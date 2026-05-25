'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import Link from 'next/link';
import { ArrowUpRight, Target, BrainCircuit, Activity, ShieldCheck, ChevronRight, BarChart3, Clock, Users, CheckCircle2, TrendingUp, Zap, Server, Lock, Fingerprint, ActivitySquare, Check } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { value: '7+', label: 'Years Experience', icon: Clock },
  { value: '15,000+', label: 'Traders Reached', icon: Users },
  { value: '₹3Cr+', label: 'Community Profit', icon: TrendingUp },
  { value: '92%', label: 'Setup Accuracy Target', icon: Target },
];

const features = [
  {
    title: 'Professional Market Analysis',
    description: "We don't rely on guesswork. We track big money movement, important price levels, and market momentum to find the best trades.",
    icon: BarChart3,
  },
  {
    title: 'High-Probability Setups',
    description: 'Protecting capital is our first rule. We only take trades when the chances of winning are high and the risk is low.',
    icon: Target,
  },
  {
    title: 'Strict Risk Management',
    description: 'Strict rules for stop-losses. We never risk blowing up your trading account for a single trade.',
    icon: ShieldCheck,
  },
  {
    title: 'Clear Trade Alerts',
    description: 'Exact entry, stop-loss, and target levels are given for every trade. No confusing signals, only clear action plans.',
    icon: Zap,
  },
];

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

const traderWall = [
  { user: "Rajesh K.", type: "BankNifty Call", pnl: "+₹42,500", desc: "Executed the 9:45 AM setup perfectly. Gamma burst captured." },
  { user: "Amit S.", type: "Nifty Put", pnl: "+₹18,200", desc: "Caught the upper resistance rejection as drafted in the pre-market." },
  { user: "Vikram D.", type: "BankNifty Put", pnl: "+₹85,000", desc: "Zero emotion. Hit the entry, trailed stop loss to cost. Massive expiry trade." },
  { user: "Sneha M.", type: "Swing Setup", pnl: "+₹22,100", desc: "Finally learned how to hold winners without panicking." },
];

const particles = [
  { top: "10%", left: "20%", size: 2, delay: 0, duration: 15 },
  { top: "30%", left: "80%", size: 3, delay: 2, duration: 20 },
  { top: "50%", left: "40%", size: 1.5, delay: 5, duration: 18 },
  { top: "70%", left: "90%", size: 2.5, delay: 1, duration: 25 },
  { top: "80%", left: "10%", size: 2, delay: 3, duration: 22 },
  { top: "20%", left: "50%", size: 1, delay: 4, duration: 19 },
  { top: "90%", left: "70%", size: 3, delay: 6, duration: 24 },
  { top: "40%", left: "30%", size: 2, delay: 7, duration: 21 },
  { top: "60%", left: "60%", size: 1.5, delay: 2.5, duration: 17 },
  { top: "15%", left: "85%", size: 2.5, delay: 1.5, duration: 23 },
  { top: "85%", left: "45%", size: 2, delay: 4.5, duration: 16 },
  { top: "25%", left: "15%", size: 1.5, delay: 3.5, duration: 20 },
  { top: "5%", left: "65%", size: 2.5, delay: 1.2, duration: 21 },
  { top: "95%", left: "25%", size: 1.5, delay: 4.2, duration: 19 },
  { top: "45%", left: "8%", size: 2, delay: 5.5, duration: 22 }
];

function TiltWrapper({ children, className, ...props }: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
      {...props}
    >
      <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="w-full h-full">
        {children}
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020202]">
      {/* ----------------- HERO SECTION ----------------- */}
      <section className="relative min-h-[100vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden">
        {/* Architectural Background */}
        <div className="absolute inset-0 z-0">
           {/* Dark Gradient Base */}
           <div className="absolute inset-0 bg-[#020202]" />
           
           {/* Subtle Animated Grid */}
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 0.03 }}
             transition={{ duration: 2 }}
             className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_20%,transparent_100%)]" 
           />
           
           {/* Glow Effects & Lighting */}
           <div className="absolute top-0 inset-x-0 h-[40vh] bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
           <motion.div
             animate={{ scale: [1, 1.05, 1], opacity: [0.05, 0.08, 0.05] }}
             transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
             className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] bg-[radial-gradient(circle,_var(--color-gold)_0%,_transparent_60%)] blur-[120px] pointer-events-none mix-blend-screen" 
           />
           
           {/* Subtle Background Monogram */}
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 0.04, scale: 1 }}
             transition={{ duration: 3, ease: "easeOut" }}
             className="absolute top-[5%] right-[0%] md:right-[5%] w-[90vw] max-w-[900px] aspect-square pointer-events-none blur-[1px] mix-blend-screen"
           >
             <Image src="https://i.ibb.co/bR8bDCp5/122151.png" alt="Capital Guru Emblem" fill className="object-contain" referrerPolicy="no-referrer" />
           </motion.div>

           {/* Ambient Dust Particles */}
           <div className="absolute inset-0 overflow-hidden pointer-events-none">
             {particles.map((p, i) => (
               <motion.div
                 key={i}
                 className="absolute rounded-full bg-white/30 blur-[1px]"
                 style={{
                   top: p.top,
                   left: p.left,
                   width: p.size,
                   height: p.size,
                 }}
                 animate={{
                   y: [0, -60, 0],
                   x: [0, 30, 0],
                   opacity: [0.1, 0.6, 0.1],
                   scale: [1, 1.5, 1],
                 }}
                 transition={{
                   duration: p.duration,
                   repeat: Infinity,
                   delay: p.delay,
                   ease: "easeInOut",
                 }}
               />
             ))}
           </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 flex flex-col w-full mt-8 md:mt-0">
          
          <motion.div
             initial={{ opacity: 0, y: 15 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, ease: "easeOut" }}
             className="inline-flex items-center gap-3 px-5 py-2.5 mb-8 border border-white/10 rounded-full bg-white/[0.015] backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] self-start relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 translate-x-[-100%] animate-[shimmer_3s_infinite]" />
             <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_12px_rgba(212,175,55,1)] animate-pulse" />
             <span className="text-[10px] md:text-[11px] font-mono text-zinc-300 tracking-[0.25em] uppercase relative z-10">Discipline • Precision • Execution</span>
          </motion.div>

          <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
             className="text-[3.5rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[6.5rem] font-display font-medium tracking-tight mb-8 text-white max-w-5xl"
          >
             Trade With Structure.<br /> 
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-gold to-zinc-500">Execute With Conviction.</span>
          </motion.h1>

          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
             className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 font-light leading-relaxed tracking-wide"
          >
            India's Premium F&O trading community. Stop following random tips and noise. Join a disciplined ecosystem built for high-probability setups and institutional risk management.
          </motion.p>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
             className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto items-stretch sm:items-center mb-16"
          >
            <Link 
              href="https://cosmofeed.com/vig/6a0c3b251be92d0013bbe3c4" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-5 text-[11px] md:text-[12px] font-bold tracking-[0.2em] uppercase text-[#050505] overflow-hidden flex items-center justify-center gap-3 transition-all duration-500 rounded-sm w-full sm:w-auto shadow-[0_0_40px_-5px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_-5px_rgba(212,175,55,0.7)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#FFF0B3] to-[#D4AF37] bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <span className="relative z-10 flex items-center gap-2">
                Join Elite Access <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
            
            <Link 
              href="/results" 
              className="group px-8 py-5 text-[11px] md:text-[12px] font-bold tracking-[0.2em] uppercase text-zinc-200 bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-2xl border border-white/10 hover:border-gold/30 transition-all duration-500 flex items-center justify-center gap-2 w-full sm:w-auto rounded-sm relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              <span className="relative z-10 flex items-center gap-2">
                View Live Executions <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-gold transition-colors duration-300" />
              </span>
            </Link>
          </motion.div>

          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
             className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-8 border-t border-white/10 mt-auto"
          >
             <div className="flex items-center gap-2 text-zinc-400">
               <Users className="w-4 h-4 text-gold/80" />
               <span className="text-xs font-mono tracking-widest uppercase">15,000+ Traders</span>
             </div>
             <div className="flex items-center gap-2 text-zinc-400">
               <Clock className="w-4 h-4 text-gold/80" />
               <span className="text-xs font-mono tracking-widest uppercase">7+ Years Experience</span>
             </div>
             <div className="flex items-center gap-2 text-zinc-400">
               <Activity className="w-4 h-4 text-gold/80" />
               <span className="text-xs font-mono tracking-widest uppercase">NSE & BSE F&O</span>
             </div>
             <div className="flex items-center gap-2 text-zinc-400 flex-1 sm:flex-none justify-start sm:border-l sm:border-white/10 sm:pl-8">
               <TrendingUp className="w-4 h-4 text-green-500" />
               <span className="text-xs font-mono tracking-widest uppercase text-white">₹3Cr+ Verified</span>
             </div>
          </motion.div>
        </div>
      </section>

      {/* ----------------- ELEGANT TICKER ----------------- */}
      <div className="w-full bg-[#050505] border-y border-zinc-900/50 flex overflow-hidden whitespace-nowrap py-3">
        <motion.div 
           className="flex gap-16 items-center text-zinc-600/80 text-[10px] font-mono tracking-[0.3em] uppercase"
           animate={{ x: [0, -2000] }}
           transition={{ ease: 'linear', duration: 50, repeat: Infinity }}
        >
            <span>• NIFTY50 ANALYSIS</span>
            <span>• BANKNIFTY ALERTS</span>
            <span>• CLEAR STOP LOSS</span>
            <span>• EMOTIONAL DISCIPLINE</span>
            <span>• HIGH REWARD TRADES</span>
            <span>• SMART MONEY TRACKING</span>
            <span>• STRICT RISK LIMITS</span>
            <span>• PREMIUM COMMUNITY</span>
            {/* Repeat */}
            <span>• NIFTY50 ANALYSIS</span>
            <span>• BANKNIFTY ALERTS</span>
            <span>• CLEAR STOP LOSS</span>
            <span>• EMOTIONAL DISCIPLINE</span>
            <span>• HIGH REWARD TRADES</span>
            <span>• SMART MONEY TRACKING</span>
            <span>• STRICT RISK LIMITS</span>
            <span>• PREMIUM COMMUNITY</span>
        </motion.div>
      </div>

      {/* ----------------- PILLARS ----------------- */}
      <section className="py-32 relative bg-[#020202]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, i) => (
              <TiltWrapper 
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative p-10 bg-white/[0.01] backdrop-blur-xl border border-white/5 hover:border-gold/20 hover:bg-white/[0.03] transition-all duration-500 group flex flex-col rounded-sm overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <feature.icon className="w-6 h-6 text-gold mb-8 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
                <h4 className="text-lg font-display mb-4 text-white font-medium">{feature.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed font-light">{feature.description}</p>
              </TiltWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- PRECISION TERMINAL ----------------- */}
      <section className="py-32 relative overflow-hidden bg-[#020202]">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--color-gold-glow)_0%,_transparent_40%)] opacity-[0.03]" />
         <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
               
               {/* Left Text */}
               <div className="lg:w-5/12 w-full">
                  <div className="inline-flex items-center gap-2 mb-6 border-l border-gold pl-4">
                     <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-400">Trading System</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-display mb-8 text-white leading-[1.1]">
                     Our Trading Process.
                  </h3>
                  <p className="text-zinc-400 text-lg font-light leading-relaxed mb-8">
                     We rely on strict logic and data. Every trade alert shared with our community goes through strict checks before it is given. Pure discipline, no gambling.
                  </p>
                  <Link href="/blog" className="text-[11px] font-mono text-gold tracking-[0.2em] uppercase hover:text-white transition-colors flex items-center gap-2">
                     Read Our Blogs <ChevronRight className="w-3 h-3" />
                  </Link>
               </div>

               {/* Right Terminal Window */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95, y: 20 }}
                 whileInView={{ opacity: 1, scale: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                 className="lg:w-7/12 w-full"
               >
                  <div className="bg-white/[0.01] backdrop-blur-2xl border border-white/10 rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative">
                     {/* Window Header */}
                     <div className="bg-white/[0.03] border-b border-white/5 px-4 py-3 flex items-center justify-between">
                        <div className="flex gap-2">
                           <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                           <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                           <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        </div>
                        <span className="text-[9px] font-mono text-zinc-500 tracking-[0.2em] uppercase">Capital_Guru // Terminal</span>
                     </div>
                     {/* Window Content */}
                     <div className="p-6 md:p-10 space-y-5 relative">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />
                        {[
                           { label: "> SCENARIO", val: "BANKNIFTY 47500 CE", type: "text-zinc-200" },
                           { label: "> ENTRY ZONE", val: "₹320 - ₹335", type: "text-gold" },
                           { label: "> STOP LOSS", val: "Daily Close Bel ₹280", type: "text-red-400/80" },
                           { label: "> TARGETS", val: "₹410 / ₹480 / ₹550", type: "text-green-400/80" },
                           { label: "> SETUP LOGIC", val: "CONFIRMED :: 1:3 RR", type: "text-zinc-500" }
                        ].map((row, i) => (
                           <motion.div 
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.15 + 0.3 }}
                              key={row.label} 
                              className="flex justify-between items-center border-b border-zinc-900/50 pb-3 last:border-0 last:pb-0"
                           >
                              <span className="font-mono text-[11px] md:text-sm tracking-[0.1em] text-zinc-600">{row.label}</span>
                              <span className={`font-mono text-[11px] md:text-sm tracking-wide ${row.type}`}>{row.val}</span>
                           </motion.div>
                        ))}
                     </div>
                  </div>
               </motion.div>

            </div>
         </div>
      </section>

      {/* ----------------- STATS STRIP ----------------- */}
      <section className="py-20 bg-[#050505] border-y border-zinc-900/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-zinc-900/50">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className={i === 0 ? "" : "pl-6 md:pl-12"}
              >
                  <div className="text-3xl md:text-4xl font-display text-white tracking-tight mb-3">{stat.value}</div>
                  <div className="text-[10px] tracking-[0.2em] text-zinc-500 uppercase font-mono">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- BROKER PARTNER (CINEMATIC) ----------------- */}
      <section className="py-32 bg-[#020202] relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1000px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
         <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
               className="p-[1px] bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-sm overflow-hidden"
            >
               <div className="p-12 md:p-16 bg-white/[0.01] backdrop-blur-3xl flex flex-col md:flex-row items-center justify-between gap-12 relative">
                  
                  <div className="relative z-10 text-center md:text-left max-w-xl">
                     <span className="inline-block text-[10px] font-mono tracking-[0.2em] uppercase text-emerald-500 mb-6 border border-emerald-500/20 px-3 py-1 bg-emerald-500/5">
                        Official Broker Partner
                     </span>
                     <h3 className="text-3xl md:text-4xl font-display text-white mb-6 leading-tight">
                        Trade Seamlessly with <span className="text-emerald-500 italic pr-2">Dhan.</span>
                     </h3>
                     <p className="text-zinc-400 font-light leading-relaxed">
                        Serious options traders need fast execution. We recommend Dhan for lightning-fast F&O trades, free TradingView charts, and zero account maintenance charges.
                     </p>
                  </div>
                  
                  <Link 
                     href="https://invite.dhan.co/?join=MAHI56"
                     target="_blank"
                     className="relative z-10 shrink-0 px-10 py-5 bg-transparent border border-emerald-500/50 hover:bg-emerald-500 text-white transition-all duration-300 text-[11px] font-mono tracking-[0.2em] uppercase text-center flex items-center gap-3"
                  >
                     Open Account <ArrowUpRight className="w-4 h-4"/>
                  </Link>
               </div>
            </motion.div>
         </div>
      </section>

      {/* ----------------- RESULTS / PNL CARDS ----------------- */}
      <section className="py-32 bg-[#050505] border-y border-zinc-900/50 relative">
         <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-zinc-900/50 pb-8">
               <div className="max-w-2xl">
                  <h2 className="text-[10px] font-mono tracking-[0.2em] uppercase text-gold mb-6">Past Trades</h2>
                  <h3 className="text-4xl md:text-5xl font-display text-white">Our Trading Results.</h3>
               </div>
               <Link href="/results" className="text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-500 hover:text-white transition-colors flex items-center gap-2">
                  View Full Logs <ArrowUpRight className="w-3 h-3" />
               </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
               {traderWall.map((t, i) => (
                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                     key={i}
                     className="p-8 bg-white/[0.01] backdrop-blur-2xl border border-white/5 hover:border-white/10 transition-all duration-500 relative flex flex-col rounded-sm group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                  >
                     <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                     <div className="text-[10px] font-mono tracking-[0.2em] text-zinc-500 uppercase mb-8 flex justify-between items-center w-full">
                        <span>{t.type}</span>
                        <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center">
                          <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500" />
                        </div>
                     </div>
                     <div className="text-3xl font-display text-white mb-6 tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">{t.pnl}</div>
                     <p className="text-zinc-500 text-sm leading-relaxed font-light mt-auto italic group-hover:text-zinc-400 transition-colors">
                        "{t.desc}"
                     </p>
                     <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center relative overflow-hidden">
                        <span className="text-[11px] text-zinc-400 tracking-wider">Member {t.user}</span>
                        <span className="text-[9px] text-green-500/50 font-mono">VERIFIED</span>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ----------------- PRICING (ELEGANT) ----------------- */}
      <section className="py-32 relative bg-[#020202]">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20 max-w-3xl mx-auto">
               <h2 className="text-[10px] font-mono tracking-[0.2em] uppercase text-gold mb-6 border border-gold/20 inline-block px-4 py-1">Membership</h2>
               <h3 className="text-4xl md:text-5xl font-display text-white mb-6">Join Our Premium Community.</h3>
               <p className="text-zinc-400 font-light text-lg">
                 Get access to India's top F&O trading setups. Seats are limited to maintain a high-quality community experience.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
               {plans.map((plan, i) => (
                  <TiltWrapper
                     key={plan.name}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                     className={`flex flex-col p-8 md:p-10 text-left border rounded-sm transition-all duration-500 relative group overflow-hidden h-full ${plan.popular ? 'bg-white/[0.03] backdrop-blur-3xl border-gold/40 shadow-[0_0_50px_rgba(212,175,55,0.08)] -translate-y-2' : 'bg-white/[0.01] backdrop-blur-xl border-white/5 hover:border-white/20 hover:-translate-y-1'}`}
                  >
                     {plan.popular && (
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-gold via-[#FFF0B3] to-gold" />
                     )}
                     <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                     
                     <div className="mb-10 relative z-10">
                        <h4 className={`text-xs font-mono tracking-[0.2em] font-bold uppercase mb-4 ${plan.popular ? 'text-gold' : 'text-white/80'}`}>{plan.name}</h4>
                        <div className="text-4xl font-display text-white tracking-tight">{plan.price}</div>
                        <p className="text-zinc-500 text-[10px] font-mono tracking-[0.15em] mt-4 uppercase border-b border-white/10 pb-4">{plan.ideal}</p>
                     </div>

                     <ul className="mb-12 space-y-5 flex-grow relative z-10">
                        {plan.features.map((feat, idx) => (
                           <li key={idx} className="flex items-start gap-4">
                              <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_currentColor] ${plan.popular ? 'bg-gold text-gold/50' : 'bg-white/30 text-white/10'}`} />
                              <span className="text-zinc-300 text-sm font-light leading-relaxed">{feat}</span>
                           </li>
                        ))}
                     </ul>

                     <Link 
                        href="https://cosmofeed.com/vig/6a0c3b251be92d0013bbe3c4" 
                        target="_blank"
                        className={`mt-auto w-full py-4.5 text-[10px] font-mono font-bold tracking-[0.25em] uppercase flex justify-center items-center rounded-sm transition-all duration-500 relative z-10 overflow-hidden ${plan.popular ? 'bg-gold text-[#050505] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]' : 'bg-white/[0.02] border border-white/10 text-zinc-300 hover:bg-white/[0.08] hover:text-white'}`}
                     >
                        <span className="relative z-10">Join Now</span>
                        {plan.popular && <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />}
                     </Link>
                  </TiltWrapper>
               ))}
            </div>
         </div>
      </section>

      {/* ----------------- FOOTER CTA ----------------- */}
      <section className="relative overflow-hidden bg-gold">
         <div className="absolute inset-0 bg-[#050505] transform origin-bottom-left -rotate-2 scale-110" />
         <div className="py-40 relative z-10 text-center max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-[10px] font-mono tracking-[0.2em] uppercase text-gold mb-8">Take The Next Step</h2>
            <h3 className="text-5xl md:text-7xl font-display mb-10 leading-[1.1] text-white">
              Your Trading Journey <br/>
              <span className="italic text-zinc-500 font-light">Starts Here.</span>
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Link 
                  href="https://cosmofeed.com/vig/6a0c3b251be92d0013bbe3c4" 
                  target="_blank"
                  className="px-12 py-5 text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-black bg-gold hover:bg-white transition-colors duration-300 inline-flex items-center justify-center gap-3"
                >
                  Join The Community <ArrowUpRight className="w-4 h-4" />
                </Link>
            </div>
         </div>
      </section>
    </div>
  );
}

