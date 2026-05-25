import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });

export const metadata: Metadata = {
  metadataBase: new URL('https://thecapitalguru.net'),
  title: {
    default: 'THE CAPITAL GURU | Luxury Trading Intelligence',
    template: '%s | THE CAPITAL GURU'
  },
  description: 'A premium F&O market analysis platform and disciplined trading community in India.',
  keywords: ['Nifty analysis', 'BankNifty analysis', 'options trading India', 'BankNifty signals', 'premium trading telegram', 'F&O trading', 'intraday trading', 'trading psychology'],
  verification: {
    google: "YiUVxnyQuSkpx9azmEvzHjWrvEDQIfy0Yt_9JlyQhb4"
  },
  alternates: {
    canonical: 'https://thecapitalguru.net',
  },
  openGraph: {
    type: 'website',
    url: 'https://thecapitalguru.net',
    title: 'THE CAPITAL GURU | Luxury Trading Intelligence',
    description: 'A premium F&O market analysis platform and disciplined trading community.',
    siteName: 'THE CAPITAL GURU',
    images: [{ url: 'https://i.ibb.co/vxz7vRHn/OG-IMAGE.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THE CAPITAL GURU | Luxury Trading Intelligence',
    description: 'A premium F&O market analysis platform and disciplined trading community.',
    images: ['https://i.ibb.co/vxz7vRHn/OG-IMAGE.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "THE CAPITAL GURU",
    "url": "https://thecapitalguru.net",
    "logo": "https://i.ibb.co/vxz7vRHn/OG-IMAGE.png",
    "description": "A premium F&O market analysis platform and disciplined trading community in India.",
    "sameAs": [
      "https://twitter.com/thecapitalguru",
      "https://instagram.com/thecapitalguru",
      "https://t.me/thecapitalguru"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "THE CAPITAL GURU",
    "url": "https://thecapitalguru.net"
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-background text-white font-sans antialiased min-h-screen flex flex-col selection:bg-gold selection:text-black">
        <Preloader />
        <Navbar />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
