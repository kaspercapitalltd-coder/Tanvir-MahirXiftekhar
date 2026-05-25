import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Execution Logs & Results | THE CAPITAL GURU',
  description: 'Verified institutional results, PnL logs, and execution summaries from the Elite members of THE CAPITAL GURU.',
  alternates: {
    canonical: 'https://thecapitalguru.net/results',
  },
  openGraph: {
    title: 'Execution Logs & Results | THE CAPITAL GURU',
    url: 'https://thecapitalguru.net/results',
  },
};

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
