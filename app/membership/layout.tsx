import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Elite Access Plans | THE CAPITAL GURU',
  description: 'Secure your position in India\'s premier F&O intelligence network. We prioritize quality traders over volume. Premium risk frameworks.',
  alternates: {
    canonical: 'https://thecapitalguru.net/membership',
  },
  openGraph: {
    title: 'Membership & Plans | THE CAPITAL GURU',
    description: 'Secure your position in India\'s premier F&O intelligence network. We prioritize quality traders over volume.',
    url: 'https://thecapitalguru.net/membership',
    type: 'website',
  },
};

export default function MembershipLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
