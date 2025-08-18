import { Metadata } from 'next';
import ReviewTemplate from '@/components/templates/ReviewTemplate';
import { findByAsin } from '@/lib/data/getProducts';
import { buildProductOffer, buildFAQPage } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Dell XPS 13 Review – The Compact Powerhouse',
  description:
    'We review the Dell XPS 13 (2025) and evaluate its performance, display quality and portability to see if it still reigns supreme among compact laptops.',
  alternates: {
    canonical: 'https://techreviewnerds.com/reviews/dell-xps-13-review',
  },
};

const Page = () => {
  const product = findByAsin('MOCK-XPS13-2025');
  if (!product) return null;
  const overview =
    'Dell’s XPS 13 continues to set the bar for premium ultraportables with its virtually borderless display and solid performance.  The 2025 model updates the internals while retaining the classic design.';
  const strengths = [
    'Gorgeous FHD+ display with minimal bezels',
    'Strong performance from Intel’s 13th‑gen chips',
    'Solid build quality and premium feel',
    'Long battery life for a 13‑inch laptop',
  ];
  const weaknesses = [
    'Limited port selection (mostly USB‑C)',
    'Soldered RAM prevents upgrades',
    'Can run warm under heavy workloads',
  ];
  const verdict =
    'The Dell XPS 13 remains one of the best ultraportables around.  Its blend of portability, performance and premium construction makes it easy to recommend, though power users may wish for more ports and upgrade options.';
  const alternatives = [
    { href: '/best-ultrabooks', title: 'Best ultrabooks 2025' },
    { href: '/comparisons/macbook-air-vs-xps-13', title: 'MacBook Air vs XPS 13 comparison' },
    { href: '/reviews/hp-spectre-x360-review', title: 'HP Spectre x360 review' },
  ];
  const faqs = [
    {
      question: 'Does the XPS 13 support Thunderbolt?',
      answer:
        'Yes.  The USB‑C ports on the XPS 13 support Thunderbolt 4, enabling high‑speed data transfer and external GPU docks.',
    },
    {
      question: 'Can I upgrade the RAM or storage?',
      answer:
        'The RAM is soldered and not upgradeable.  Storage is also soldered in this generation, so choose your configuration wisely at purchase.',
    },
    {
      question: 'Does it have a headphone jack?',
      answer:
        'No.  Dell removed the 3.5mm headphone jack from the 2025 XPS 13.  You’ll need a USB‑C audio adapter or Bluetooth headphones.',
    },
  ];
  const productOfferJson = buildProductOffer({
    name: product.title,
    description: product.features.join(', '),
    image: `https://techreviewnerds.com${product.image}`,
    brand: 'Dell',
    price: parseFloat(product.price.replace(/[^0-9.]/g, '')),
    priceCurrency: 'USD',
    url: `https://techreviewnerds.com/reviews/dell-xps-13-review`,
    rating: product.rating,
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
        { label: 'Dell XPS 13', href: '/reviews/dell-xps-13-review' },
      ]}
      title="Dell XPS 13 review"
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