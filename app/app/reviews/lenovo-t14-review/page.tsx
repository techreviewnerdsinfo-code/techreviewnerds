import { Metadata } from 'next';
import ReviewTemplate from '@/components/templates/ReviewTemplate';
import { findByAsin } from '@/lib/data/getProducts';
import { buildProductOffer, buildFAQPage } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Lenovo ThinkPad T14 Review – Business Workhorse',
  description:
    'Our review of the Lenovo ThinkPad T14 (2025) covers its durability, performance and battery life to see if it’s still the go‑to for professionals.',
  alternates: {
    canonical: 'https://techreviewnerds.com/reviews/lenovo-t14-review',
  },
};

const Page = () => {
  const product = findByAsin('MOCK-T14-2025');
  if (!product) return null;

  const overview =
    'Lenovo’s ThinkPad T14 continues its legacy as a durable and reliable business laptop. With updated processors and an improved display, the 2025 model aims to balance portability and performance.';
  const strengths = [
    'Robust chassis and excellent build quality',
    'Great keyboard and TrackPoint',
    'Wide port selection and user‑serviceable components',
    'Long battery life',
  ];
  const weaknesses = [
    'Display isn’t as bright or vivid as competitors',
    'Heavier than ultrabooks',
    'Speakers are average',
  ];
  const verdict =
    'The ThinkPad T14 remains a solid choice for professionals who prioritise durability, serviceability and typing comfort. It may not be the lightest or most modern‑looking machine, but it’s built to last.';

  const alternatives = [
    { href: '/best-business-laptops', title: 'Best business laptops 2025' },
    { href: '/comparisons/dell-g15-vs-msi-katana-15', title: 'Dell G15 vs MSI Katana 15 comparison' },
    { href: '/reviews/rog-zephyrus-m2-review', title: 'ROG Zephyrus M2 review' },
  ];

  const faqs = [
    {
      question: 'Is the RAM upgradeable on the T14?',
      answer: 'Yes. The T14 has one soldered module and one SODIMM slot, allowing memory upgrades.',
    },
    {
      question: 'Does it have a touchscreen option?',
      answer: 'The T14 can be configured with a touch display, though battery life may be reduced compared to non‑touch models.',
    },
    {
      question: 'How durable is the chassis?',
      answer: 'The ThinkPad T14 meets MIL‑STD 810H standards for durability and has a spill‑resistant keyboard.',
    },
  ];

  const productOfferJson = buildProductOffer({
    name: product.title,
    description: product.features.join(', '),
    image: `https://techreviewnerds.com${product.image}`,
    brand: 'Lenovo',
    price: product.price.replace(/[^0-9.]/g, ''),
    url: `https://techreviewnerds.com/reviews/${product.asin.toLowerCase()}-review`,
  });

  const faqJson = buildFAQPage(faqs);

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [JSON.parse(productOfferJson), JSON.parse(faqJson)],
  });

  return (
    <ReviewTemplate
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Reviews', href: '/' },
        { label: 'Lenovo ThinkPad T14', href: '/reviews/lenovo-t14-review' },
      ]}
      title="Lenovo ThinkPad T14 review"
      overview={overview}
      specs={product.specs}
      strengths={strengths}
      weaknesses={weaknesses}
      verdict={verdict}
      alternatives={alternatives}
      faqs={faqs}
      jsonLd={jsonLd}
    />
  );
};

export default Page;
