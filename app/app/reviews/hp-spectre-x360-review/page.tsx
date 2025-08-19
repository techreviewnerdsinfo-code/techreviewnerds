import { Metadata } from 'next';
import ReviewTemplate from '@/components/templates/ReviewTemplate';
import { findByAsin } from '@/lib/data/getProducts';
import { buildProductOffer, buildFAQPage } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'HP Spectre x360 Review – Premium 2‑in‑1 Performer',
  description:
    'We review the HP Spectre x360 (2025) and evaluate its display, performance and versatility to see if it stands out among premium convertibles.',
  alternates: {
    canonical: 'https://techreviewnerds.com/reviews/hp-spectre-x360-review',
  },
};

const Page = () => {
  // Fetch mock product by ASIN
  const product = findByAsin('MOCK-SPECTRE-2025');
  if (!product) return null;

  // Narrative sections
  const overview =
    'HP’s Spectre x360 continues to raise the bar for premium convertibles with a stunning OLED display and robust performance. The 2025 edition refines the design while boosting efficiency and battery life.';
  const strengths = [
    'Vivid OLED display with true blacks',
    'Excellent battery life for a convertible',
    'Premium build and sleek design',
    'Includes stylus and Thunderbolt ports',
  ];
  const weaknesses = [
    'Higher price compared to competitors',
    'RAM is soldered and not upgradeable',
    'Fans can be audible under load',
  ];
  const verdict =
    'The HP Spectre x360 is one of the best premium 2‑in‑1 laptops you can buy. Its OLED display, battery life and included stylus make it a standout choice for creatives and professionals, though its price and non‑upgradeable RAM may deter some buyers.';

  // Related links
  const alternatives = [
    { href: '/best-ultrabooks', title: 'Best ultrabooks 2025' },
    { href: '/comparisons/spectre-x360-vs-flex-5', title: 'HP Spectre x360 vs Lenovo Flex 5 comparison' },
    { href: '/reviews/dell-xps-13-review', title: 'Dell XPS 13 review' },
  ];

  // FAQs
  const faqs = [
    {
      question: 'Does the Spectre x360 include a stylus?',
      answer:
        'Yes. HP includes an active pen in the box, which attaches magnetically and supports tilt and pressure sensitivity.',
    },
    {
      question: 'Can I upgrade the RAM or storage?',
      answer:
        'RAM is soldered on the Spectre x360 and cannot be upgraded. Storage is also soldered in the 2025 model, so choose your configuration carefully.',
    },
    {
      question: 'Does the OLED display suffer from burn‑in?',
      answer:
        'Modern OLED panels are fairly resistant to burn‑in. HP includes software mitigations such as pixel shifting and screen savers. Burn‑in is unlikely with normal use.',
    },
  ];

  // Product/Offer JSON-LD. Keep price as a string and omit rating.
  const productOfferJson = buildProductOffer({
    name: product.title,
    description: product.features.join(', '),
    image: `https://techreviewnerds.com${product.image}`,
    brand: 'HP',
    price: product.price.replace(/[^0-9.]/g, ''),
    url: `https://techreviewnerds.com/reviews/hp-spectre-x360-review`,
  });

  // FAQ JSON-LD
  const faqJson = buildFAQPage(faqs);

  // Combine schemas
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [JSON.parse(productOfferJson), JSON.parse(faqJson)],
  });

  return (
    <ReviewTemplate
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Reviews', href: '/' },
        { label: 'HP Spectre x360', href: '/reviews/hp-spectre-x360-review' },
      ]}
      title="HP Spectre x360 review"
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
