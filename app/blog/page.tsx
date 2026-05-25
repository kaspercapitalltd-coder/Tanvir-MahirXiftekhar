import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS, CATEGORIES } from '@/lib/data/blog';
import { ChevronRight, Filter } from 'lucide-react';

export const metadata = {
  title: 'Trading Intelligence Hub',
  description: 'Premium F&O institutional research and analysis from the Elite members of THE CAPITAL GURU.',
  alternates: {
    canonical: 'https://thecapitalguru.net/blog',
  },
  openGraph: {
    title: 'Trading Intelligence Hub | THE CAPITAL GURU',
    description: 'Premium F&O institutional research and analysis from the Elite members of THE CAPITAL GURU.',
    url: 'https://thecapitalguru.net/blog',
    type: 'website',
  },
};

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col pt-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gold/5 blur-[150px] mix-blend-screen pointer-events-none -z-10" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-4 text-white">Intelligence Hub</h1>
          <p className="text-zinc-400 text-lg max-w-2xl font-light">
            Research, frameworks, and institutional setups engineered for the most aggressive derivative markets on the planet.
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 mb-12 scrollbar-hide border-b border-zinc-900">
          {CATEGORIES.map((cat, i) => (
            <button key={i} className={`whitespace-nowrap px-4 py-2 text-sm font-mono tracking-widest uppercase transition-all flex-shrink-0 ${i === 0 ? 'text-gold border-b-2 border-gold font-bold' : 'text-zinc-500 hover:text-zinc-300'}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
          {BLOG_POSTS.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col bg-[#0A0A0A] border border-zinc-900 rounded-sm hover:border-gold/30 transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:shadow-[0_10px_30px_-5px_rgba(212,175,55,0.15)]">
              <div className="relative h-60 w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/60 backdrop-blur-md text-[10px] uppercase tracking-widest text-gold border border-gold/20 rounded-sm">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs font-mono text-zinc-500 mb-4 flex items-center justify-between">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-display text-white mb-3 group-hover:text-gold transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">{post.excerpt}</p>
                
                <div className="flex items-center text-xs font-bold tracking-widest text-zinc-300 uppercase mt-auto group-hover:text-gold transition-colors gap-2">
                  Read Protocol <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
