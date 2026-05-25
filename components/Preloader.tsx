'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020202] text-white overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-gold/10 blur-[100px] rounded-full mix-blend-screen" />

          {/* Logo Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative w-24 h-24 mb-8"
          >
             <Image src="https://i.ibb.co/bR8bDCp5/122151.png" alt="Capital Guru" fill className="object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
          </motion.div>

          {/* Text Container */}
          <div className="flex flex-col items-center gap-3 overflow-hidden">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
              className="text-2xl md:text-3xl font-display font-medium tracking-[0.2em] uppercase text-white"
            >
              The Capital Guru
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-[9px] md:text-[10px] font-mono tracking-[0.3em] uppercase text-gold"
            >
              Initializing Market Intelligence
            </motion.div>
          </div>

          {/* Progress Bar */}
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1.2, duration: 0.5 }}
             className="absolute bottom-20 w-48 h-[1px] bg-white/10 overflow-hidden"
          >
             <motion.div 
               initial={{ x: '-100%' }}
               animate={{ x: '100%' }}
               transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity }}
               className="w-full h-full bg-gradient-to-r from-transparent via-gold to-transparent"
             />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
