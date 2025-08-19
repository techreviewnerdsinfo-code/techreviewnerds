import { Metadata } from 'next';
import ReviewTemplate from '@/components/templates/ReviewTemplate';
import { findByAsin } from '@/lib/data/getProducts';
import { buildProductOffer, buildFAQPage } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'ASUS ROG Zephyrus M2 Review – Portable Powerhouse',
  description:
    'Our review dives into the ASUS ROG Zephyrus M2, analysing its gaming performance, portability and overall value for gamers in 2025.',
  alternates: {
    canonical: 'https://techreviewnerds.com/reviews/rog-zephyrus-m2-review',
  },
};

const Page = () => {
  const product = findByAsin('MOCK-ZEPHYRUS-M2-2025');
  if (!product) return null;
  const overview =
    'The ROG Zephyrus M2 packs top‑tier gaming hardware into a surprisingly thin chassis. With an RTX 4070 GPU and a fast QHD display, it targets gamers who need serious power without lugging a bulky machine.';
  const strengths = [
    'Outstanding gaming performance in a slim design',
    'Bright, colour‑accurate QHD display with 240Hz refresh',
    'Impressive port selection',
    'Quiet under light loads',
  ];
  const weaknesses = [
    'Very expensive',
    'Gets hot under sustained loads',
    'Battery life suffers during gaming sessions',
  ];
  const verdict =
    'The Zephyrus M2 is a dream machine for gamers who demand desktop‑level performance on the go. Its price and thermals are the trade‑offs for its powerhouse specs.';
  const alternatives = [
    { href: '/best-gaming-laptops', title: 'Best gaming laptops' },
    { href: '/reviews/lenovo-t14-review', title: 'Lenovo T14 review' },
  ];
  const faqs = [
    {
      question: 'Does the Zephyrus M2 have a MUX switch?',
      answer:
        'Yes, it includes a MUX switch that lets you bypass the integrated graphics for maximum gaming performance.',
    },
    {
      question: 'Can you upgrade the RAM or storage?',
      answer:
        'The RAM is soldered, but there is an additional M.2 slot for expanding storage. Choose the configuration that meets your needs.',
    },
    {
      question: 'How loud does it get under load?',
      answer:
        'During intense gaming, fan noise becomes noticeable but not overpowering. Using headphones will mitigate any distraction.',
    },
  ];
  const productOfferJson = buildProductOffer({
    name: product.title,
    description: product.features.join(', '),
    image: `https://techreviewnerds.com${product.image}`,
    brand: 'ASUS',
    price: parseFloat(product.price.replace(/[^0-9.]/g, '')),
    priceCurrency: 'USD',
    url: `https://techreviewnerds.com/reviews/${product.asin.toLowerCase()}-review`,
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
        { label: 'ROG Zephyrus M2', href: '/reviews/rog-zephyrus-m2-review' },
      ]}
      title="ASUS ROG Zephyrus M2 review"
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