import { Metadata } from 'next';
import ReviewTemplate from '@/components/templates/ReviewTemplate';
import { findByAsin } from '@/lib/data/getProducts';
import { buildProductOffer, buildFAQPage } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Lenovo ThinkPad T14 Review – A Trusty Business Companion',
  description:
    'Our in‑depth review of the Lenovo ThinkPad T14 covers performance, build quality, battery life and more to help you decide if this business laptop is right for you.',
  alternates: {
    canonical: 'https://techreviewnerds.com/reviews/lenovo-t14-review',
  },
};

const Page = () => {
  const product = findByAsin('MOCK-T14-2025');
  // Fallback in case the product isn't found
  if (!product) return null;
  const overview =
    'The ThinkPad T14 continues Lenovo’s tradition of durable business laptops with excellent keyboards and robust security features. Equipped with the latest Ryzen Pro chips, it balances portability with productivity.';
  const strengths = [
    'Excellent build quality with MIL‑STD durability',
    'One of the best keyboards on any laptop',
    'Strong battery life for a 14‑inch machine',
    'Upgradeable storage and memory',
  ];
  const weaknesses = [
    'Tinny speakers',
    'Expensive compared to consumer laptops',
    'Integrated graphics limit gaming and creative workloads',
  ];
  const verdict =
    'If you need a no‑nonsense workhorse that will last for years, the ThinkPad T14 is easy to recommend. Its keyboard and build quality are unmatched, though its price and graphics performance may deter casual users.';
  const alternatives = [
    { href: '/comparisons/macbook-air-vs-xps-13', title: 'MacBook Air vs XPS 13' },
    { href: '/reviews/rog-zephyrus-m2-review', title: 'ROG Zephyrus M2 review' },
  ];
  const faqs = [
    {
      question: 'Is the ThinkPad T14 good for programming?',
      answer:
        'Yes. Its comfortable keyboard, durable build and ample processing power make it a favourite among developers and IT professionals.',
    },
    {
      question: 'Can I upgrade the RAM or storage?',
      answer:
        'The T14 allows upgrades for both RAM and storage, but you’ll need to remove the bottom panel. Lenovo offers service manuals to guide the process.',
    },
    {
      question: 'Does it come with a warranty?',
      answer:
        'Lenovo includes a one‑year warranty as standard. Extended and onsite warranties are available at extra cost.',
    },
  ];
  const productOfferJson = buildProductOffer({
    name: product.title,
    description: product.features.join(', '),
    image: `https://techreviewnerds.com${product.image}`,
    brand: 'Lenovo',
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
        { label: 'Lenovo T14', href: '/reviews/lenovo-t14-review' },
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