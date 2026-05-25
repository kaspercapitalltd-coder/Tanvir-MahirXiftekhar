import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Markdown from 'react-markdown';
import { ArrowLeft, Share2, Bookmark, Clock, User } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '@/lib/data/blog';

// In Next.js 15, route params for Server Components are asynchronous
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);
  if (!post) return { title: 'Not Found' };
  
  return {
    title: `${post.title} | Intelligence Hub`,
    description: post.excerpt,
    alternates: {
      canonical: `https://thecapitalguru.net/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | THE CAPITAL GURU`,
      description: post.excerpt,
      url: `https://thecapitalguru.net/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://thecapitalguru.net/blog/${post.slug}`
    },
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,  
    "author": {
      "@type": "Person",
      "name": post.author
    },  
    "publisher": {
      "@type": "Organization",
      "name": "THE CAPITAL GURU",
      "logo": {
        "@type": "ImageObject",
        "url": "https://i.ibb.co/vxz7vRHn/OG-IMAGE.png"
      }
    },
    "datePublished": post.date,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://thecapitalguru.net/"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://thecapitalguru.net/blog"
    },{
      "@type": "ListItem",
      "position": 3,
      "name": post.title,
      "item": `https://thecapitalguru.net/blog/${post.slug}`
    }]
  };

  return (
    <article className="min-h-screen bg-[#050505] pb-32">
       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
       {/* Hero Image */}
       <div className="relative w-full h-[50vh] min-h-[400px] border-b border-zinc-900 group">
          <Image src={post.image} alt={post.title} fill className="object-cover opacity-60 mix-blend-luminosity" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
          
          <div className="absolute inset-0 max-w-4xl mx-auto px-6 lg:px-8 flex flex-col justify-end pb-16 z-10">
             <Link href="/blog" className="inline-flex items-center text-xs font-mono tracking-widest uppercase text-gold hover:text-white transition-colors gap-2 mb-8 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full w-max border border-zinc-800">
                <ArrowLeft className="w-4 h-4" /> Back to Hub
             </Link>
             
             <div className="flex items-center gap-3 mb-6">
                 <span className="text-xs font-mono tracking-widest uppercase text-black bg-gold px-3 py-1 font-bold rounded-sm shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                    {post.category}
                 </span>
             </div>
             
             <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-medium text-white tracking-tight leading-[1.05] DropShadow-lg max-w-4xl">
                {post.title}
             </h1>
          </div>
       </div>

       {/* Article Info Bar */}
       <div className="border-b border-zinc-900 bg-[#0A0A0A] sticky top-20 z-40 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="max-w-4xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono uppercase tracking-widest text-zinc-400">
             <div className="flex items-center gap-6">
                <span className="flex items-center gap-2"><User className="w-4 h-4 text-gold"/> {post.author}</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-gold"/> {post.readTime}</span>
                <span>{post.date}</span>
             </div>
             <div className="flex items-center gap-4">
                <button className="hover:text-gold transition-colors"><Share2 className="w-4 h-4"/></button>
                <button className="hover:text-gold transition-colors"><Bookmark className="w-4 h-4"/></button>
             </div>
          </div>
       </div>

       {/* Article Content */}
       <div className="max-w-3xl mx-auto px-6 pt-16">
          <p className="text-2xl text-zinc-300 font-light leading-relaxed mb-16 italic border-l-2 border-gold pl-6">
            {post.excerpt}
          </p>
          
          <div className="markdown-body relative z-20">
            <Markdown>{post.content}</Markdown>
          </div>

          {/* Related Articles - SEO Internal Linking */}
          <div className="mt-20 pt-16 border-t border-zinc-900">
             <h3 className="text-2xl font-display text-white mb-8 border-l-4 border-gold pl-4">Related Intelligence</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {BLOG_POSTS.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 2).map((related) => (
                   <Link href={`/blog/${related.slug}`} key={related.slug} className="group p-6 bg-[#0A0A0A] border border-zinc-900 rounded-sm hover:border-gold/30 transition-all flex flex-col">
                      <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase mb-3">{related.category}</span>
                      <h4 className="text-lg font-display text-white group-hover:text-gold transition-colors mb-2">{related.title}</h4>
                      <p className="text-sm text-zinc-400 line-clamp-2">{related.excerpt}</p>
                   </Link>
                ))}
                {/* Fallback if not enough related in category */}
                {BLOG_POSTS.filter(p => p.slug !== post.slug && p.category === post.category).length < 2 &&
                 BLOG_POSTS.filter(p => p.slug !== post.slug && p.category !== post.category).slice(0, 2 - BLOG_POSTS.filter(p => p.slug !== post.slug && p.category === post.category).length).map((related) => (
                   <Link href={`/blog/${related.slug}`} key={related.slug} className="group p-6 bg-[#0A0A0A] border border-zinc-900 rounded-sm hover:border-gold/30 transition-all flex flex-col">
                      <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase mb-3">{related.category}</span>
                      <h4 className="text-lg font-display text-white group-hover:text-gold transition-colors mb-2">{related.title}</h4>
                      <p className="text-sm text-zinc-400 line-clamp-2">{related.excerpt}</p>
                   </Link>
                ))}
             </div>
          </div>
          
          <div className="mt-16 pt-10 border-t border-zinc-900 flex flex-col items-center text-center">
             <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                <Image src="https://i.ibb.co/bR8bDCp5/122151.png" alt="Capital Guru" width={32} height={32} referrerPolicy="no-referrer" />
             </div>
             <h3 className="text-2xl font-display text-white mb-4">Execute With Us</h3>
             <p className="text-zinc-400 max-w-md mx-auto mb-8">
               If you understand this architecture, you are ready for the Engine. Join elite traders executing high-probability setups daily.
             </p>
             <Link href="/membership" className="px-8 py-4 bg-gold text-black font-bold tracking-widest text-sm uppercase rounded-sm hover:bg-white shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all">
               Access Elite Group
             </Link>
          </div>
       </div>
    </article>
  );
}
