import { Metadata } from 'next';
import UseCaseHubTemplate from '@/components/templates/UseCaseHubTemplate';
import { buildFAQPage } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Laptops with the Best Battery Life 2025 | Tech Review Nerds',
  description:
    'Need all‑day endurance?  We identify laptops with the longest battery life so you can work or study unplugged for hours.',
  alternates: {
    canonical: 'https://techreviewnerds.com/guides/best-battery-life-laptops',
  },
};

const Page = () => {
  const comparisonTable = [
    { label: 'Model', values: ['MacBook Air M2', 'Dell XPS 13', 'HP Spectre x360', 'Lenovo ThinkPad T14'] },
    { label: 'Battery life', values: ['18h', '12–14h', '13h', '12h'] },
    { label: 'Weight', values: ['2.7 lb', '2.6 lb', '3.0 lb', '3.2 lb'] },
    { label: 'Price', values: ['$1,099', '$999', '$1,299', '$1,499'] },
  ];
  const personaGuidance =
    'If you travel frequently or need to take notes all day without access to a charger, prioritise battery life above raw power.  Students and business travellers especially benefit from long‑lasting machines.';
  const thresholds = [
    'Battery life of 10 hours or more under typical usage',
    'Low‑power processors (Intel U‑series or Apple M2) for efficiency',
    'Lightweight design under 3.5 lb for portability',
    'Fast charging to top up quickly between meetings or classes',
  ];
  const pitfalls = [
    'Don’t rely solely on manufacturer battery claims – look for real‑world tests.',
    'Avoid high‑powered gaming GPUs if you care about battery life.',
    'Remember that screen brightness and background apps can drastically reduce runtime.',
  ];
  const internalLinks = [
    { href: '/best-ultrabooks', title: 'Best ultrabooks 2025' },
    { href: '/best-student-laptops', title: 'Best student laptops 2025' },
  ];
  const faqs = [
    {
      question: 'How is battery life tested?',
      answer:
        'We loop web browsing, streaming and productivity tasks at 200 nits screen brightness until the battery dies.  This simulates real‑world mixed usage.',
    },
    {
      question: 'Can I extend battery life?',
      answer:
        'Yes.  Lower screen brightness, disable unused wireless functions and close background apps to stretch runtime.',
    },
    {
      question: 'Is a bigger battery always better?',
      answer:
        'Not necessarily.  Overall efficiency and software optimisation matter more than battery capacity alone.',
    },
  ];
  const faqJson = buildFAQPage(faqs);
  const jsonLd = JSON.stringify({ '@context': 'https://schema.org', '@graph': [JSON.parse(faqJson)] });
  return (
    <UseCaseHubTemplate
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Guides', href: '/' },
        { label: 'Best battery life laptops', href: '/guides/best-battery-life-laptops' },
      ]}
      title="Laptops with the best battery life in 2025"
      intro="No outlet? No problem.  These laptops deliver exceptional battery life so you can work or study all day on a single charge."
      personaGuidance={personaGuidance}
      thresholds={thresholds}
      pitfalls={pitfalls}
      comparisonTable={comparisonTable}
      internalLinks={internalLinks}
      faqs={faqs}
      jsonLd={jsonLd}
    />
  );
};

export default Page;