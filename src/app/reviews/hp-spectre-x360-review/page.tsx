import { Metadata } from 'next';
import ReviewTemplate from '@/components/templates/ReviewTemplate';
import { findByAsin } from '@/lib/data/getProducts';
import { buildProductOffer, buildFAQPage } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'HP Spectre x360 Review – Premium Convertible Elegance',
  description:
    'An in‑depth review of the HP Spectre x360 (2025), focusing on its stunning OLED display, design and performance for professionals and creatives.',
  alternates: {
    canonical: 'https://techreviewnerds.com/reviews/hp-spectre-x360-review',
  },
};

const Page = () => {
  const product = findByAsin('MOCK-SPECTRE-2025');
  if (!product) return null;
  const overview =
    'The HP Spectre x360 is a luxurious 2‑in‑1 laptop with a gorgeous OLED screen and premium build.  We examine how the 2025 model stacks up for everyday use and creative work.';
  const strengths = [
    'Stunning OLED display with deep blacks',
    'Sleek and sophisticated design',
    'Long battery life and fast charging',
    'Includes a stylus and protective sleeve',
  ];
  const weaknesses = [
    'Expensive compared to mid‑range convertibles',
    'Soldered RAM limits future upgrades',
    'Fans can get audible under load',
  ];
  const verdict =
    'If you want the best convertible ultrabook money can buy, the HP Spectre x360 delivers with its OLED display, premium build and solid performance.  The price is steep, but few competitors match its polish.';
  const alternatives = [
    { href: '/comparisons/spectre-x360-vs-flex-5', title: 'Spectre x360 vs Flex 5 comparison' },
    { href: '/best-ultrabooks', title: 'Best ultrabooks 2025' },
    { href: '/reviews/dell-xps-13-review', title: 'Dell XPS 13 review' },
  ];
  const faqs = [
    {
      question: 'Does the Spectre x360 come with a pen?',
      answer: 'Yes.  HP includes an active stylus in the box along with a protective sleeve.',
    },
    {
      question: 'Is the OLED display prone to burn‑in?',
      answer:
        'OLED technology can suffer image retention over time, but modern panels include mitigation techniques.  Avoid leaving static elements on screen for extended periods.',
    },
    {
      question: 'Can I upgrade the storage?',
      answer:
        'Yes.  The M.2 NVMe SSD is replaceable, but you will need to open the chassis and may void the warranty.',
    },
  ];
  const productOfferJson = buildProductOffer({
    name: product.title,
    description: product.features.join(', '),
    image: `https://techreviewnerds.com${product.image}`,
    brand: 'HP',
    price: parseFloat(product.price.replace(/[^0-9.]/g, '')),
    priceCurrency: 'USD',
    url: `https://techreviewnerds.com/reviews/hp-spectre-x360-review`,
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