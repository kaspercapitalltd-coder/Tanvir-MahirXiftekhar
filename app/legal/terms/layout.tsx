import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | THE CAPITAL GURU',
  description: 'Terms of Service and Risk Disclaimers for THE CAPITAL GURU.',
  alternates: {
    canonical: 'https://thecapitalguru.net/legal/terms',
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
