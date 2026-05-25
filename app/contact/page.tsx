'use client';

import { Mail, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#050505] pt-12 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
         <div className="text-center max-w-3xl mx-auto mb-20 relative">
            <h1 className="text-5xl md:text-7xl font-display font-medium text-white mb-6">Support & Inquiries.</h1>
            <p className="text-xl text-zinc-400 font-light">
              Direct access to our management team. We prioritize Elite Members but respond to all inquiries within 24 hours.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link href="mailto:mahir@thecapitalguru.net" className="group p-8 bg-[#0A0A0A] border border-zinc-900 rounded-sm hover:border-gold/50 transition-colors flex flex-col items-center text-center">
               <div className="w-16 h-16 rounded-full bg-[#111] border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-gold"/>
               </div>
               <h3 className="text-xl font-display text-white mb-2">Corporate Email</h3>
               <p className="text-zinc-500 text-sm mb-4">For partnerships, technical support, and general inquiries.</p>
               <p className="font-mono text-zinc-300 text-sm">mahir@thecapitalguru.net</p>
            </Link>

            <Link href="https://t.me/TheCapitalGuruSupport" target="_blank" className="group p-8 bg-[#0A0A0A] border border-zinc-900 rounded-sm hover:border-blue-500/50 transition-colors flex flex-col items-center text-center relative overflow-hidden">
               <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
               <div className="w-16 h-16 rounded-full bg-[#111] border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-blue-500"/>
               </div>
               <h3 className="text-xl font-display text-white mb-2">Telegram Support</h3>
               <p className="text-zinc-500 text-sm mb-4">Fastest response time. Direct chat with our moderation team.</p>
               <p className="font-mono text-zinc-300 text-sm flex items-center gap-2">@TheCapitalGuruSupport <ArrowUpRight className="w-4 h-4 text-blue-500"/></p>
            </Link>

            <div className="group p-8 bg-[#0A0A0A] border border-zinc-900 rounded-sm hover:border-green-500/50 transition-colors flex flex-col items-center text-center">
               <div className="w-16 h-16 rounded-full bg-[#111] border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-green-500"/>
               </div>
               <h3 className="text-xl font-display text-white mb-2">WhatsApp & Phone</h3>
               <p className="text-zinc-500 text-sm mb-4">Available during standard market hours (9:00 AM - 3:30 PM IST).</p>
               <p className="font-mono text-zinc-300 text-sm">+91 91067 13107</p>
            </div>
         </div>
      </div>
    </div>
  );
}
