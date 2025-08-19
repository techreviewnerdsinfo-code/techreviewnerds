import { Metadata } from 'next';
import UseCaseHubTemplate from '@/components/templates/UseCaseHubTemplate';
import { buildFAQPage } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Best Lightweight Work Laptops 2025 | Tech Review Nerds',
  description:
    'For professionals who work on the go, these laptops strike the perfect balance between portability and productivity.',
  alternates: {
    canonical: 'https://techreviewnerds.com/guides/lightweight-work-laptops',
  },
};

const Page = () => {
  const comparisonTable = [
    { label: 'Model', values: ['Dell XPS 13', 'MacBook Air M2', 'HP Spectre x360', 'Lenovo ThinkPad T14'] },
    { label: 'Weight', values: ['2.6 lb', '2.7 lb', '3.0 lb', '3.2 lb'] },
    { label: 'Battery life', values: ['12–14h', '18h', '13h', '12h'] },
    { label: 'Price', values: ['$999', '$1,099', '$1,299', '$1,499'] },
  ];
  const personaGuidance =
    'If you work from coffee shops, co‑working spaces or travel frequently for meetings, a lightweight work laptop will save your back while keeping you productive.';
  const thresholds = [
    'Weight under 3.3 lb',
    'Comfortable keyboard and large trackpad',
    'At least 8 hours of real‑world battery life',
    'Latest‑generation processor for responsive performance',
    'A minimum of 16GB of RAM for heavy multitasking',
  ];
  const pitfalls = [
    'Ultra‑light laptops may sacrifice port selection; consider your peripheral needs.',
    'Some models solder RAM and storage, limiting future upgrades.',
    'High‑resolution displays can drain battery faster if used at full brightness.',
  ];
  const internalLinks = [
    { href: '/best-business-laptops', title: 'Best business laptops 2025' },
    { href: '/best-ultrabooks', title: 'Best ultrabooks 2025' },
  ];
  const faqs = [
    {
      question: 'Do lightweight laptops compromise on durability?',
      answer:
        'Not necessarily.  Many premium ultrabooks use durable alloys or carbon fibre to keep weight down while maintaining rigidity.  Always check build quality in reviews.',
    },
    {
      question: 'Can I dock a lightweight laptop for a desktop‑like setup?',
      answer:
        'Yes.  Thunderbolt and USB‑C docks allow you to connect monitors, keyboards and other peripherals with a single cable.',
    },
    {
      question: 'Are these laptops suitable for remote work?',
      answer:
        'Absolutely.  They offer enough power for productivity apps, video conferencing and web‑based tools.  Consider adding an external monitor for a larger workspace.',
    },
  ];
  const faqJson = buildFAQPage(faqs);
  const jsonLd = JSON.stringify({ '@context': 'https://schema.org', '@graph': [JSON.parse(faqJson)] });
  return (
    <UseCaseHubTemplate
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Guides', href: '/' },
        { label: 'Lightweight work laptops', href: '/guides/lightweight-work-laptops' },
      ]}
      title="Best lightweight work laptops 2025"
      intro="Don’t let a heavy machine slow you down.  These laptops deliver productivity and comfort in a portable package."
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