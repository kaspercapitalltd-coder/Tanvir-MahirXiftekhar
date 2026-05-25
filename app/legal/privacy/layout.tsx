import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | THE CAPITAL GURU',
  description: 'Privacy Policy and Data Protection guidelines for THE CAPITAL GURU.',
  alternates: {
    canonical: 'https://thecapitalguru.net/legal/privacy',
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
