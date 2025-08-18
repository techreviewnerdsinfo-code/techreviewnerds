import { Metadata } from 'next';
import ComparisonTemplate from '@/components/templates/ComparisonTemplate';
import { buildFAQPage } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Dell G15 vs MSI Katana 15 – Mid‑Range Gaming Showdown',
  description:
    'We compare the Dell G15 Gaming and MSI Katana 15 laptops across CPU, GPU, display, portability and value to help you pick your next gaming rig.',
  alternates: {
    canonical: 'https://techreviewnerds.com/comparisons/dell-g15-vs-msi-katana-15',
  },
};

const Page = () => {
  const specs = [
    { label: 'Processor', a: 'Ryzen 7 7840HS', b: 'Intel Core i7‑12650H' },
    { label: 'Graphics', a: 'NVIDIA RTX 4060 8GB', b: 'NVIDIA RTX 4050 6GB' },
    { label: 'RAM', a: '16GB DDR5', b: '16GB DDR5' },
    { label: 'Storage', a: '1TB SSD', b: '512GB SSD' },
    { label: 'Display', a: '15.6" FHD 165Hz', b: '15.6" FHD 144Hz' },
    { label: 'Weight', a: '5.5 lb', b: '4.9 lb' },
    { label: 'Battery', a: '7h', b: '6h' },
    { label: 'Price', a: '$1,299', b: '$1,099' },
  ];
  const verdict = [
    {
      title: 'Choose the Dell G15 if…',
      description: 'You want slightly higher graphics performance, a higher refresh display and don’t mind the extra weight.  The G15 also offers better thermals for extended play.',
    },
    {
      title: 'Choose the MSI Katana 15 if…',
      description: 'You prefer a lighter chassis and a lower price point while still enjoying capable gaming performance.  It’s a great value choice for students and budget‑minded gamers.',
    },
  ];
  const alternatives = [
    { href: '/best-gaming-laptops', title: 'Best gaming laptops 2025' },
    { href: '/comparisons/ryzen-7-vs-i7-laptop', title: 'Ryzen 7 vs Intel Core i7' },
    { href: '/reviews/rog-zephyrus-m2-review', title: 'ROG Zephyrus M2 review' },
  ];
  const faqs = [
    {
      question: 'Are these laptops good for content creation?',
      answer:
        'Both machines have enough CPU and GPU power for light video editing and 3D work.  For professional workloads, consider laptops with higher‑end GPUs and colour‑accurate displays.',
    },
    {
      question: 'Can I upgrade the RAM and storage?',
      answer:
        'Yes.  Both the Dell G15 and MSI Katana 15 allow RAM and storage upgrades via accessible slots.  This makes them more future‑proof than some slim notebooks.',
    },
    {
      question: 'Which has better cooling?',
      answer:
        'The Dell G15 generally runs cooler thanks to its larger chassis and beefier cooling solution.  The Katana 15 can get warmer but remains within safe limits.',
    },
  ];
  const faqJson = buildFAQPage(faqs);
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [JSON.parse(faqJson)],
  });
  return (
    <ComparisonTemplate
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Comparisons', href: '/' },
        { label: 'Dell G15 vs MSI Katana 15', href: '/comparisons/dell-g15-vs-msi-katana-15' },
      ]}
      title="Dell G15 vs MSI Katana 15"
      intro="Two mid‑range gaming laptops go head‑to‑head.  We break down how the Dell G15 and MSI Katana 15 differ so you can choose the right machine for your needs."
      specs={specs}
      verdict={verdict}
      alternatives={alternatives}
      faqs={faqs}
      jsonLd={jsonLd}
    />
  );
};

export default Page;