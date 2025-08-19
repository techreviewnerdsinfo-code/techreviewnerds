import { Metadata } from 'next';
import BestOfHubTemplate from '@/components/templates/BestOfHubTemplate';
import { filterByUseCase } from '@/lib/data/getProducts';
import { buildItemList, buildFAQPage } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Best Gaming Laptops 2025 | Tech Review Nerds',
  description:
    'Our guide to the best gaming laptops of 2025 covers high‑performance machines for every budget, highlighting the models that deliver the smoothest gameplay and highest frame rates.',
  alternates: {
    canonical: 'https://techreviewnerds.com/best-gaming-laptops',
  },
};

const Page = () => {
  const productsData = filterByUseCase('gaming').slice(0, 4);
  const products = productsData.map((p) => ({
    slug: p.asin.toLowerCase(),
    name: p.title,
    image: p.image,
    description: p.features.join(', '),
    pros: ['High frame rates', 'Powerful GPU', 'RGB keyboard'],
    cons: ['Short battery life', 'Bulky'],
    rating: p.rating,
    price: p.price,
  }));
  const comparisonTable = [
    { label: 'Processor', values: productsData.map((p) => p.specs.cpu) },
    { label: 'GPU', values: productsData.map((p) => p.features.find((f) => f.startsWith('RTX') || f.startsWith('AMD') ) || '-') },
    { label: 'RAM', values: productsData.map((p) => p.specs.ram) },
    { label: 'Storage', values: productsData.map((p) => p.specs.storage) },
    { label: 'Display', values: productsData.map((p) => p.features.find((f) => f.includes('Hz')) || '-') },
    { label: 'Weight', values: productsData.map((p) => p.specs.weight) },
  ];
  const criteria = [
    'Powerful dedicated graphics',
    'Modern multi‑core CPU',
    'High‑refresh display',
    'Efficient cooling system',
    'Upgradeable RAM and storage',
    'Reasonable battery life for gaming machines',
  ];
  const internalLinks = [
    { href: '/best-budget-laptops', title: 'Best budget laptops' },
    { href: '/comparisons/ryzen-7-vs-i7-laptop', title: 'Ryzen 7 vs i7 laptops' },
  ];
  const faqs = [
    {
      question: 'What should I look for in a gaming laptop?',
      answer:
        'Prioritise a capable GPU, a fast processor, sufficient RAM (at least 16GB) and a high‑refresh display. Cooling and build quality matter too.',
    },
    {
      question: 'Can a gaming laptop replace my desktop?',
      answer:
        'Modern gaming laptops can rival many desktops, especially when paired with external monitors and peripherals. However, they still face thermal and upgrade limitations compared to desktops.',
    },
    {
      question: 'Do I need a 240Hz display?',
      answer:
        'For competitive gamers, high refresh rates (144Hz or higher) provide smoother gameplay. Casual gamers may be happy with 120Hz or 144Hz displays.',
    },
  ];

  // Persona guides for gaming laptops
  const personas = [
    { persona: 'esports player', description: 'Prioritise high refresh rates and low response times for competitive play.' },
    { persona: 'content creator', description: 'Look for high core counts and GPUs with plenty of VRAM for rendering and streaming.' },
    { persona: 'student gamer', description: 'Balance performance and price with mid‑range GPUs that handle coursework and games.' },
    { persona: 'traveler', description: 'Choose a portable gaming laptop with decent battery life and lower weight.' },
  ];
  // Alternatives in case the top picks are unavailable
  const alternatives = [
    'Dell G15 Gaming',
    'MSI Katana 15',
    'Acer Predator Helios 16',
  ];
  const pitfalls = [
    'Don’t overspend on flashy RGB if the specs don’t match your needs.',
    'Avoid 4GB VRAM GPUs if you want to future‑proof your purchase.',
    'Watch out for laptops with poor thermal designs that throttle under load.',
  ];
  const checklist = [
    'Decide your target resolution and frame rates.',
    'Prefer RTX 40‑series or AMD RDNA3 GPUs.',
    'Check cooling design and exhaust placement.',
    'Ensure RAM and storage are upgradeable.',
    'Read our detailed reviews for pros and cons.',
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
        { label: 'Gaming', href: '/best-gaming-laptops' },
      ]}
      title="Best gaming laptops 2025"
      intro="Our team put dozens of gaming laptops through their paces to find the machines that deliver buttery‑smooth frame rates and stunning visuals. These are the models that impressed us the most."
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