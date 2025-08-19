import { Metadata } from 'next';
import ComparisonTemplate from '@/components/templates/ComparisonTemplate';
import { buildFAQPage } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'HP Spectre x360 vs Lenovo Flex 5 – Convertible Face‑Off',
  description:
    'A detailed comparison of the premium HP Spectre x360 and the budget‑friendly Lenovo IdeaPad Flex 5. Find out which 2‑in‑1 is right for your workflow.',
  alternates: {
    canonical: 'https://techreviewnerds.com/comparisons/spectre-x360-vs-flex-5',
  },
};

const Page = () => {
  const specs = [
    { label: 'Processor', a: 'Intel Core i7‑1355U', b: 'Ryzen 5 7530U' },
    { label: 'RAM', a: '16GB', b: '16GB' },
    { label: 'Storage', a: '1TB SSD', b: '512GB SSD' },
    { label: 'Display', a: '13.5" OLED', b: '14" FHD Touch' },
    { label: 'Weight', a: '3.0 lb', b: '3.3 lb' },
    { label: 'Battery', a: '13h', b: '10h' },
    { label: 'Price', a: '$1,299', b: '$699' },
  ];

  // Verdict now uses forA/forB keys instead of an array
  const verdict = {
    forA:
      'Pick the HP Spectre x360 if you want a premium 2‑in‑1 with an OLED display, longer battery life and a polished design. It’s ideal for professionals and creatives.',
    forB:
      'Choose the Lenovo IdeaPad Flex 5 if you’re on a tighter budget but still want the versatility of a convertible. The Flex 5 offers great value and respectable performance for everyday tasks.',
  };

  const alternatives = [
    { href: '/best-ultrabooks', title: 'Best ultrabooks 2025' },
    { href: '/best-student-laptops', title: 'Best student laptops 2025' },
    { href: '/reviews/lenovo-t14-review', title: 'Lenovo ThinkPad T14 review' },
  ];

  const faqs = [
    {
      question: 'Do both laptops support a stylus?',
      answer:
        'Yes. The HP Spectre x360 includes an active pen in the box, while the Lenovo Flex 5 supports an optional stylus sold separately.',
    },
    {
      question: 'Can I upgrade the storage or RAM?',
      answer:
        'Both models allow storage upgrades via an M.2 slot. RAM is soldered on the Spectre x360 but upgradeable on the Flex 5.',
    },
    {
      question: 'Is the OLED display worth the extra cost?',
      answer:
        'OLED offers deeper blacks and more vivid colours, which benefit photo and media work. If you mostly use your laptop for browsing and documents, a standard IPS panel may suffice.',
    },
  ];

  const faqJson = buildFAQPage(faqs);
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [JSON.parse(faqJson)],
  });

  // Define productA and productB for the template
  const productA = {
    name: 'HP Spectre x360',
    description: 'A premium 2‑in‑1 with an OLED display, longer battery life and a polished design.',
  };

  const productB = {
    name: 'Lenovo IdeaPad Flex 5',
    description: 'A value‑oriented convertible with solid performance for everyday tasks.',
  };

  return (
    <ComparisonTemplate
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Comparisons', href: '/' },
        { label: 'Spectre x360 vs Flex 5', href: '/comparisons/spectre-x360-vs-flex-5' },
      ]}
      title="HP Spectre x360 vs Lenovo IdeaPad Flex 5"
      intro="Convertible laptops are more popular than ever. We compare a premium option from HP with a value‑oriented Lenovo to help you decide which 2‑in‑1 fits your needs."
      productA={productA}
      productB={productB}
      specs={specs}
      verdict={verdict}
      alternatives={alternatives}
      faqs={faqs}
      jsonLd={jsonLd}
    />
  );
};

export default Page;
