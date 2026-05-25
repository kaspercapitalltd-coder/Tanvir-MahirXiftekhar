import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-[#050505] flex flex-col items-center justify-center text-center px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 blur-[150px] mix-blend-screen pointer-events-none" />
      <h1 className="text-[150px] md:text-[200px] font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-900 leading-none">404</h1>
      <h2 className="text-2xl font-mono tracking-widest uppercase text-gold mb-6 font-bold">Invalidation Level Reached</h2>
      <p className="text-zinc-400 max-w-md mx-auto mb-10 font-light leading-relaxed">
        The execution path you requested no longer exists in our structure. Return to the primary terminal.
      </p>
      <Link href="/" className="px-8 py-4 bg-white text-black font-bold tracking-widest text-sm uppercase rounded-sm hover:bg-gold transition-colors relative z-10 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
        Return to Home
      </Link>
    </div>
  );
}
