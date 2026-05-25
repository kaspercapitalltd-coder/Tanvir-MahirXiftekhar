import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | THE CAPITAL GURU',
  description: 'Frequently asked questions about our institutional F&O execution engine, risk management, and membership.',
  alternates: {
    canonical: 'https://thecapitalguru.net/faq',
  },
  openGraph: {
    title: 'FAQ | THE CAPITAL GURU',
    description: 'Frequently asked questions about our institutional F&O execution engine, risk management, and membership.',
    url: 'https://thecapitalguru.net/faq',
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are you SEBI registered?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are currently an educational and research-based platform. We share our proprietary execution framework and personal trades for educational purposes. We do not provide guaranteed return schemes or PMS."
        }
      },
      {
         "@type": "Question",
         "name": "How much capital do I need?",
         "acceptedAnswer": {
           "@type": "Answer",
           "text": "We recommend a minimum capital of ₹50,000 for options buying to ensure you can adequately absorb structural stop-losses without violating the 2% risk rule."
         }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
