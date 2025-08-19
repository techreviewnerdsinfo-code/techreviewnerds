import { Metadata } from 'next';
import ReviewTemplate from '@/components/templates/ReviewTemplate';
import { findByAsin } from '@/lib/data/getProducts';
import { buildProductOffer, buildFAQPage } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'ROG Zephyrus M2 Review – Slim Gaming Beast',
  description:
    'Our in‑depth review of the ASUS ROG Zephyrus M2 covers its gaming performance, thermals and portability to see if it’s the ideal thin‑and‑light gaming laptop.',
  alternates: {
    canonical: 'https://techreviewnerds.com/reviews/rog-zephyrus-m2-review',
  },
};

const Page = () => {
  // Retrieve mock product data by ASIN
  const product = findByAsin('MOCK-ZEPHYRUS-M2-2025');
  if (!product) return null;

  // Overview and verdict
  const overview =
    'ASUS’s ROG Zephyrus M2 packs high‑end gaming performance into a surprisingly slim chassis. The 2025 refresh includes an upgraded GPU and improved cooling while retaining its sleek design.';
  const strengths = [
    'Excellent RTX 40‑series graphics performance',
    'Slim and lightweight for a gaming laptop',
    'High‑refresh QHD display with good colour accuracy',
    'Responsive keyboard and large precision touchpad',
  ];
  const weaknesses = [
    'Runs hot under sustained loads',
    'Battery life is mediocre',
    'Limited upgradeability',
  ];
  const verdict =
    'If you want a thin‑and‑light gaming machine that doesn’t skimp on power, the Zephyrus M2 is an outstanding choice. Its thermals and battery life aren’t the best, but the performance per pound is impressive.';

  // Related links
  const alternatives = [
    { href: '/best-gaming-laptops', title: 'Best gaming laptops 2025' },
    { href: '/comparisons/dell-g15-vs-msi-katana-15', title: 'Dell G15 vs MSI Katana 15 comparison' },
    { href: '/reviews/dell-xps-13-review', title: 'Dell XPS 13 review' },
  ];

  // Frequently asked questions
  const faqs = [
    {
      question: 'Can I upgrade the RAM or storage?',
      answer:
        'The Zephyrus M2 has one open M.2 slot for storage upgrades. RAM is soldered and not upgradeable.',
    },
    {
      question: 'Does it support G‑Sync?',
      answer:
        'Yes, the built‑in display supports NVIDIA G‑Sync for tear‑free gaming, and you can connect an external G‑Sync monitor via USB‑C.',
    },
    {
      question: 'How loud are the fans?',
      answer:
        'Under heavy gaming loads, fan noise is noticeable but still quieter than many competing gaming laptops. In lighter tasks, the fans remain relatively quiet.',
    },
  ];

  // Create product/offer schema: price is a string and no rating is passed.
  const productOfferJson = buildProductOffer({
    name: product.title,
    description: product.features.join(', '),
    image: `https://techreviewnerds.com${product.image}`,
    brand: 'ASUS',
    price: product.price.replace(/[^0-9.]/g, ''),
    url: `https://techreviewnerds.com/reviews/${product.asin.toLowerCase()}-review`,
  });

  // Create FAQ schema
  const faqJson = buildFAQPage(faqs);

  // Combine into a single JSON‑LD graph
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [JSON.parse(productOfferJson), JSON.parse(faqJson)],
  });

  return (
    <ReviewTemplate
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Reviews', href: '/' },
        { label: product.title, href: `/reviews/${product.asin.toLowerCase()}-review` },
      ]}
      title={`${product.title} review`}
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
