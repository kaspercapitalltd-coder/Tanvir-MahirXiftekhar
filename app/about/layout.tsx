import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Philosophy & Architecture | THE CAPITAL GURU',
  description: 'We are not a signal provider. We are an institutional execution engine designed to extract capital from heavily manipulated derivative markets.',
  alternates: {
    canonical: 'https://thecapitalguru.net/about',
  },
  openGraph: {
    title: 'About THE CAPITAL GURU | Institutional Execution',
    description: 'We are not a signal provider. We are an institutional execution engine designed to extract capital from heavily manipulated derivative markets.',
    url: 'https://thecapitalguru.net/about',
    type: 'website',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
