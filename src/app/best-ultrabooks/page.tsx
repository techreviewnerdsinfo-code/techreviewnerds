import { Metadata } from 'next';
import BestOfHubTemplate from '@/components/templates/BestOfHubTemplate';
import { filterByUseCase } from '@/lib/data/getProducts';
import { buildItemList, buildFAQPage } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Best Ultrabooks 2025 | Tech Review Nerds',
  description:
    'Explore the finest ultrabooks of 2025.  These thin and light premium laptops combine portability with impressive performance.',
  alternates: {
    canonical: 'https://techreviewnerds.com/best-ultrabooks',
  },
};

const Page = () => {
  // Ultrabooks emphasise portability and premium build, so we filter by the travel use case
  const productsData = filterByUseCase('travel').slice(0, 4);
  const products = productsData.map((p) => ({
    slug: p.asin.toLowerCase(),
    name: p.title,
    image: p.image,
    description: p.features.join(', '),
    pros: ['Ultra‑thin design', 'Premium materials', 'Long battery life'],
    cons: ['Higher price', 'Limited upgradeability'],
    rating: p.rating,
    price: p.price,
  }));
  const comparisonTable = [
    { label: 'Processor', values: productsData.map((p) => p.specs.cpu) },
    { label: 'RAM', values: productsData.map((p) => p.specs.ram) },
    { label: 'Storage', values: productsData.map((p) => p.specs.storage) },
    { label: 'Weight', values: productsData.map((p) => p.specs.weight) },
    { label: 'Battery', values: productsData.map((p) => p.specs.battery) },
  ];
  const criteria = [
    'Slim and lightweight design (around 3 lbs or less)',
    'Premium build quality (metal or carbon fibre chassis)',
    'All‑day battery life (10+ hours)',
    'Fast storage and at least 16GB of RAM',
    'High‑quality displays for productivity and media',
    'Good selection of ports for travel convenience',
  ];
  const internalLinks = [
    { href: '/best-business-laptops', title: 'Best business laptops' },
    { href: '/best-student-laptops', title: 'Best student laptops' },
  ];
  const faqs = [
    {
      question: 'What defines an ultrabook?',
      answer:
        'Ultrabooks are thin, light laptops that use low‑power processors and solid‑state storage.  They prioritise portability and battery life without sacrificing too much performance.',
    },
    {
      question: 'Can ultrabooks handle demanding tasks?',
      answer:
        'Modern ultrabooks are capable of photo editing, coding and even light gaming, but they are not designed for heavy 3D rendering or sustained gaming sessions.',
    },
    {
      question: 'How much should I spend on an ultrabook?',
      answer:
        'Expect to pay $1,000 or more for a quality ultrabook.  The price reflects the premium materials and engineering required to make such thin yet powerful devices.',
    },
  ];
  const personas = [
    { persona: 'executive traveler', description: 'Needs a premium machine that’s easy to carry between meetings and on flights.' },
    { persona: 'writer', description: 'Values a great keyboard and long battery life for writing on the go.' },
    { persona: 'photographer', description: 'Appreciates a high‑resolution display and fast storage for editing on location.' },
    { persona: 'student', description: 'Wants a lightweight laptop that fits easily in a backpack without sacrificing performance.' },
  ];
  const alternatives = ['HP Spectre x360', 'Dell XPS 13', 'MacBook Air M2'];
  const pitfalls = [
    'Don’t expect to upgrade RAM or storage in most ultrabooks.',
    'Avoid models with sub‑par displays if you work with visuals.',
    'Consider port selection; some ultrabooks rely on dongles.',
  ];
  const checklist = [
    'Decide on your required screen size (13–14 inches is typical).',
    'Ensure battery life meets your travel needs.',
    'Check the keyboard for comfort and key travel.',
    'Verify warranty coverage and customer support.',
    'Read our full reviews for detailed pros and cons.',
  ];
  const itemListJson = buildItemList(
    productsData.map((p) => ({
      url: `https://techreviewnerds.com/reviews/${p.asin.toLowerCase()}-review`,
      name: p.title,
    }))
  );
  const faqJson = buildFAQPage(
    faqs.map((f) => ({ question: f.question, answer: f.answer }))
  );
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [JSON.parse(itemListJson), JSON.parse(faqJson)],
  });
  return (
    <BestOfHubTemplate
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Best laptops', href: '/' },
        { label: 'Ultrabooks', href: '/best-ultrabooks' },
      ]}
      title="Best ultrabooks 2025"
      intro="For those who value portability without compromising on build quality and battery life, these ultrabooks represent the pinnacle of mobile computing in 2025."
      criteria={criteria}
      products={products}
      comparisonTable={comparisonTable}
      internalLinks={internalLinks}
      faqs={faqs}
      personas={personas}
      alternatives={alternatives}
      pitfalls={pitfalls}
      checklist={checklist}
      jsonLd={jsonLd}
    />
  );
};

export default Page;