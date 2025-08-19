import { Metadata } from 'next';
import UseCaseHubTemplate from '@/components/templates/UseCaseHubTemplate';
import { buildFAQPage } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Best Fanless Laptops 2025 | Tech Review Nerds',
  description:
    'Enjoy silent computing with these fanless laptops that rely on efficient processors and passive cooling.',
  alternates: {
    canonical: 'https://techreviewnerds.com/guides/fanless-laptops',
  },
};

const Page = () => {
  const comparisonTable = [
    { label: 'Model', values: ['MacBook Air M2', 'Lenovo IdeaPad Flex 5', 'HP Spectre x360', 'Dell XPS 13'] },
    { label: 'Cooling', values: ['Fanless', 'Fanless in low power mode', 'Hybrid', 'Fanless in light tasks'] },
    { label: 'Processor', values: ['Apple M2', 'Ryzen 5 7530U', 'Core i7‑1355U', 'Core i7‑1360P'] },
    { label: 'Weight', values: ['2.7 lb', '3.3 lb', '3.0 lb', '2.6 lb'] },
    { label: 'Price', values: ['$1,099', '$699', '$1,299', '$999'] },
  ];
  const personaGuidance =
    'Fanless laptops are ideal for environments where silence matters — libraries, meetings or night‑time work.  They also resist dust build‑up and are more durable thanks to fewer moving parts.';
  const thresholds = [
    'Processors with low thermal design power (TDP)',
    'Solid‑state storage (SSD) only — no spinning drives',
    'Efficient cooling designs with heat spreaders',
    'Battery life of at least 8 hours',
  ];
  const pitfalls = [
    'Performance will be limited compared to actively cooled laptops.',
    'Under sustained load, passive cooling may throttle CPU speeds.',
    'Ports may be fewer to maintain a slim profile.',
  ];
  const internalLinks = [
    { href: '/best-ultrabooks', title: 'Best ultrabooks 2025' },
    { href: '/comparisons/spectre-x360-vs-flex-5', title: 'Spectre x360 vs Flex 5 comparison' },
  ];
  const faqs = [
    {
      question: 'Are fanless laptops suitable for programming?',
      answer:
        'Yes.  Most programming tasks are not CPU‑intensive enough to overheat fanless designs.  However, large builds or virtual machines may cause throttling.',
    },
    {
      question: 'Do fanless laptops last longer?',
      answer:
        'They often have better longevity because there are no fans to fail or accumulate dust.  Passive cooling also reduces mechanical wear.',
    },
    {
      question: 'Can I play games on a fanless laptop?',
      answer:
        'Light and browser‑based games will run, but fanless laptops are not designed for demanding 3D titles.',
    },
  ];
  const faqJson = buildFAQPage(faqs);
  const jsonLd = JSON.stringify({ '@context': 'https://schema.org', '@graph': [JSON.parse(faqJson)] });
  return (
    <UseCaseHubTemplate
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Guides', href: '/' },
        { label: 'Fanless laptops', href: '/guides/fanless-laptops' },
      ]}
      title="Best fanless laptops 2025"
      intro="Silent, cool and durable – fanless laptops offer peace and quiet without sacrificing day‑to‑day performance.  Here are our top picks."
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