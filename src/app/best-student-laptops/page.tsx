import { Metadata } from 'next';
import BestOfHubTemplate from '@/components/templates/BestOfHubTemplate';
import { filterByUseCase } from '@/lib/data/getProducts';
import { buildItemList, buildFAQPage } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Best Student Laptops 2025 | Tech Review Nerds',
  description:
    'Our student laptop guide for 2025 highlights affordable, dependable machines that excel at note‑taking, research and light creative work.',
  alternates: {
    canonical: 'https://techreviewnerds.com/best-student-laptops',
  },
};

const Page = () => {
  const productsData = filterByUseCase('student').slice(0, 4);
  const products = productsData.map((p) => ({
    slug: p.asin.toLowerCase(),
    name: p.title,
    image: p.image,
    description: p.features.join(', '),
    pros: ['Great battery life', 'Affordable', 'Portable'],
    cons: ['Limited graphics power', 'Basic display'],
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
    'Affordable pricing suitable for tuition budgets',
    'Lightweight and compact for easy commuting',
    'All‑day battery life (8+ hours)',
    'At least 8GB of RAM for multitasking',
    'Solid‑state storage for fast boot times',
    'Durable build quality to survive campus life',
  ];
  const internalLinks = [
    { href: '/best-budget-laptops', title: 'Best budget laptops' },
    { href: '/best-ultrabooks', title: 'Best ultrabooks' },
  ];
  const faqs = [
    {
      question: 'How much RAM does a student laptop need?',
      answer:
        'For most students, 8GB is sufficient for note‑taking and research.  If you plan to run engineering software or virtual machines, consider 16GB.',
    },
    {
      question: 'Are Chromebooks good for college?',
      answer:
        'Chromebooks are lightweight and affordable but may not run certain specialised apps.  Make sure your course requirements don’t mandate Windows or macOS.',
    },
    {
      question: 'Should I prioritise battery life or performance?',
      answer:
        'For general coursework, battery life and portability matter more than raw performance.  Only engineering or creative majors need higher‑end processors.',
    },
  ];
  const personas = [
    { persona: 'liberal arts student', description: 'Prioritise portability, a good keyboard and long battery life for taking notes and writing essays.' },
    { persona: 'engineering student', description: 'Look for more CPU cores and optional discrete graphics for CAD and simulation software.' },
    { persona: 'creative student', description: 'Choose a laptop with a high‑resolution display and plenty of storage for photos and video projects.' },
    { persona: 'commuter', description: 'A lightweight machine with sturdy build quality will survive daily trips between home and campus.' },
  ];
  const alternatives = ['Lenovo IdeaPad Flex 5', 'HP 15z', 'Acer Aspire 5'];
  const pitfalls = [
    'Don’t buy a heavy 17‑inch gaming laptop unless you really need the power.',
    'Avoid devices with only 4GB of RAM — they will feel sluggish over time.',
    'Check that the keyboard and trackpad feel comfortable before you commit.',
  ];
  const checklist = [
    'Set a budget and stick to it.',
    'Aim for at least 8GB of RAM and an SSD.',
    'Check portability (weight and dimensions).',
    'Confirm battery life claims from reviews.',
    'Make sure your essential software is compatible.',
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
        { label: 'Student', href: '/best-student-laptops' },
      ]}
      title="Best student laptops 2025"
      intro="Finding the right laptop for college or university doesn’t have to be expensive.  We picked the best notebooks for students based on price, portability and endurance."
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