import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact the Elite | THE CAPITAL GURU',
  description: 'Connect with THE CAPITAL GURU support for membership inquiries, institutional discussions, and VIP onboarding.',
  alternates: {
    canonical: 'https://thecapitalguru.net/contact',
  },
  openGraph: {
    title: 'Contact the Elite | THE CAPITAL GURU',
    url: 'https://thecapitalguru.net/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
