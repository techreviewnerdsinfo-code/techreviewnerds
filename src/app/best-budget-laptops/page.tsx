import { Metadata } from 'next';
import BestOfHubTemplate from '@/components/templates/BestOfHubTemplate';
import { getAll, sortByPrice } from '@/lib/data/getProducts';
import { buildItemList, buildFAQPage } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Best Budget Laptops 2025 | Tech Review Nerds',
  description:
    'Discover our top picks for the best budget laptops in 2025. We highlight affordable machines that deliver solid performance without breaking the bank.',
  alternates: {
    canonical: 'https://techreviewnerds.com/best-budget-laptops',
  },
};

const Page = () => {
  // Retrieve all products and pick the four most affordable
  const productsData = sortByPrice('asc').slice(0, 4);
  // Map into ProductSummary format expected by the template
  const products = productsData.map((p) => ({
    slug: p.asin.toLowerCase(),
    name: p.title,
    image: p.image,
    description: p.features.join(', '),
    pros: [
      'Great value',
      'Decent performance',
      'Portable design',
    ],
    cons: [
      'Limited upgradeability',
      'Entry‑level graphics',
    ],
    rating: p.rating,
    price: p.price,
  }));
  const comparisonTable = [
    {
      label: 'Processor',
      values: productsData.map((p) => p.specs.cpu),
    },
    {
      label: 'RAM',
      values: productsData.map((p) => p.specs.ram),
    },
    {
      label: 'Storage',
      values: productsData.map((p) => p.specs.storage),
    },
    {
      label: 'Weight',
      values: productsData.map((p) => p.specs.weight),
    },
    {
      label: 'Battery',
      values: productsData.map((p) => p.specs.battery),
    },
  ];
  const criteria = [
    'Priced under $800',
    'Modern multi‑core processor',
    'At least 8GB of RAM',
    'Solid‑state storage',
    'Reasonable battery life',
    'Portable form factor',
  ];
  const internalLinks = [
    { href: '/best-gaming-laptops', title: 'Best gaming laptops' },
    { href: '/comparisons/macbook-air-vs-xps-13', title: 'MacBook Air vs XPS 13' },
  ];
  const faqs = [
    {
      question: 'Are budget laptops good enough for light gaming?',
      answer:
        'Entry‑level laptops can handle casual games at lower settings, but they aren’t designed for demanding titles. For a better experience, check out our gaming picks.',
    },
    {
      question: 'How long can I expect a budget laptop to last?',
      answer:
        'With proper care, a budget laptop should last 3–5 years. Investing in models with upgradeable RAM and storage can extend usable life.',
    },
    {
      question: 'Which brand offers the best value laptops?',
      answer:
        'Dell, Acer and Lenovo frequently deliver excellent value in the budget segment. The right choice depends on your needs and available deals.',
    },
  ];
  // Persona mini‑guides explain how different buyers should prioritise features
  const personas = [
    { persona: 'student', description: 'Prioritise affordability and battery life for classes and homework.' },
    { persona: 'traveler', description: 'Look for lightweight models under 3 lbs that fit easily in a backpack.' },
    { persona: 'business', description: 'Ensure at least 8GB RAM and solid build quality for productivity.' },
    { persona: 'casual gamer', description: 'Budget machines can play light games but don’t expect high frame rates.' },
  ];
  // Alternatives in case our top picks are out of stock
  const alternatives = [
    'Acer Aspire 5',
    'HP 15z',
    'Lenovo IdeaPad Flex 5',
  ];
  const pitfalls = [
    'Don’t fall for very low prices with only 4GB of RAM.',
    'Avoid laptops with spinning hard drives; choose an SSD for speed.',
    'Check the keyboard layout and ports to ensure they suit your needs.',
  ];
  const checklist = [
    'Set a realistic budget (under $800).',
    'Look for at least 8GB of RAM.',
    'Choose 512GB SSD or 256GB SSD plus cloud storage.',
    'Check the weight and battery life specs.',
    'Read our full reviews for more context.',
  ];
  const itemListJson: string = buildItemList(
  productsData.map((p) => ({
    url: `https://techreviewnerds.com/reviews/${p.asin.toLowerCase()}-review`,
    name: p.title,
  }))
) as string;

  const faqJson: string = buildFAQPage(
  faqs.map((f) => ({ question: f.question, answer: f.answer }))
) as string;

  return (
    <BestOfHubTemplate
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Best laptops', href: '/' },
        { label: 'Budget', href: '/best-budget-laptops' },
      ]}
      title="Best budget laptops 2025"
      intro="We’ve tested dozens of affordable laptops to find the ones that offer the most performance and value. Here are our favourite budget picks."
      criteria={criteria}
      products={products}
      comparisonTable={comparisonTable}
      internalLinks={internalLinks}
      faqs={faqs}
      personas={personas}
      alternatives={alternatives}
      pitfalls={pitfalls}
      checklist={checklist}
    />
  );
};

export default Page;