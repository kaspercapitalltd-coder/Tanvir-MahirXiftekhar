import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trading Resources & Frameworks | THE CAPITAL GURU',
  description: 'Download premium risk management matrices, position sizing calculators, and institutional execution frameworks.',
  alternates: {
    canonical: 'https://thecapitalguru.net/resources',
  },
  openGraph: {
    title: 'Trading Resources & Frameworks | THE CAPITAL GURU',
    url: 'https://thecapitalguru.net/resources',
  },
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
