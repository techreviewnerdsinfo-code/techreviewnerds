import { Metadata } from 'next';
import ComparisonTemplate from '@/components/templates/ComparisonTemplate';
import { buildFAQPage } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'MacBook Air vs Dell XPS 13 – Which Ultrabook Should You Buy?',
  description:
    'A head‑to‑head comparison of Apple’s MacBook Air M2 and Dell’s XPS 13 to help you choose the right ultraportable laptop in 2025.',
  alternates: {
    canonical: 'https://techreviewnerds.com/comparisons/macbook-air-vs-xps-13',
  },
};

const Page = () => {
  const specs = [
    { label: 'Processor', a: 'Apple M2', b: 'Intel Core i7‑1360P' },
    { label: 'RAM', a: '8–24GB unified', b: '16–32GB LPDDR5' },
    { label: 'Storage', a: '256GB–2TB SSD', b: '512GB–2TB SSD' },
    { label: 'Display', a: '13.6\" 2560×1664', b: '13.4\" 1920×1200' },
    { label: 'Weight', a: '2.7 lb', b: '2.8 lb' },
    { label: 'Battery life', a: '18 hours', b: '14 hours' },
  ];
  const verdict = {
    forA:
      'The MacBook Air M2 is ideal for users who value long battery life, a silent fan‑less design and macOS integration.',
    forB:
      'The XPS 13 suits those who prefer Windows, need more ports, and want the flexibility to configure RAM and storage.',
  };
  const alternatives = [
    { href: '/best-budget-laptops', title: 'Best budget laptops' },
    { href: '/best-gaming-laptops', title: 'Best gaming laptops' },
  ];
  const faqs = [
    {
      question: 'Which laptop has better battery life?',
      answer:
        'Apple’s M2 architecture delivers exceptional battery life, giving the MacBook Air several hours more runtime than the XPS 13 in our tests.',
    },
    {
      question: 'Can I upgrade the RAM or storage?',
      answer:
        'Neither the Air nor the XPS is user‑upgradeable. Configure the RAM and storage you need at purchase to avoid disappointment.',
    },
    {
      question: 'Is the MacBook Air good for software development?',
      answer:
        'Yes, the M2 chip provides ample power for coding and light compilation tasks. However, those relying on Windows‑only tools may prefer the XPS 13.',
    },
  ];
  const faqJson = buildFAQPage(faqs);
  return (
    <ComparisonTemplate
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Comparisons', href: '/' },
        { label: 'MacBook Air vs XPS 13', href: '/comparisons/macbook-air-vs-xps-13' },
      ]}
      title="MacBook Air vs Dell XPS 13"
      intro="Apple’s MacBook Air and Dell’s XPS 13 are two of the best ultraportables on the market. We compare design, performance, battery life and value to help you decide which is right for you."
      productA={{ name: 'MacBook Air M2' }}
      productB={{ name: 'Dell XPS 13' }}
      specs={specs}
      verdict={verdict}
      alternatives={alternatives}
      faqs={faqs}
      jsonLd={faqJson}
    />
  );
};

export default Page;