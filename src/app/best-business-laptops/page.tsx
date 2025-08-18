import { Metadata } from 'next';
import BestOfHubTemplate from '@/components/templates/BestOfHubTemplate';
import { filterByUseCase } from '@/lib/data/getProducts';
import { buildItemList, buildFAQPage } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Best Business Laptops 2025 | Tech Review Nerds',
  description:
    'Discover the top business laptops of 2025.  Our picks emphasise reliability, security and productivity features for professionals on the go.',
  alternates: {
    canonical: 'https://techreviewnerds.com/best-business-laptops',
  },
};

const Page = () => {
  const productsData = filterByUseCase('business').slice(0, 4);
  const products = productsData.map((p) => ({
    slug: p.asin.toLowerCase(),
    name: p.title,
    image: p.image,
    description: p.features.join(', '),
    pros: ['Sturdy build', 'Strong security', 'Good battery life'],
    cons: ['Premium pricing', 'Limited gaming capability'],
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
    'Enterprise‑grade security features (TPM, fingerprint reader)',
    'Durable build quality with MIL‑STD certification',
    'Long battery life for all‑day meetings',
    'Comfortable keyboard and trackpad for extended typing',
    'At least 16GB of RAM for multitasking and large spreadsheets',
    'Upgradeable storage and memory options',
  ];
  const internalLinks = [
    { href: '/best-budget-laptops', title: 'Best budget laptops' },
    { href: '/best-ultrabooks', title: 'Best ultrabooks' },
  ];
  const faqs = [
    {
      question: 'What makes a laptop good for business?',
      answer:
        'A good business laptop offers reliability, a comfortable keyboard, long battery life, robust security features and support for multiple connectivity options.',
    },
    {
      question: 'How important is a dedicated graphics card for business?',
      answer:
        'Most business users can rely on integrated graphics.  Only those doing 3D modelling or video editing need a dedicated GPU.',
    },
    {
      question: 'Should I choose Windows or macOS for business?',
      answer:
        'It depends on your software ecosystem.  Windows offers broader hardware options and compatibility, while macOS has tight integration with Apple services.',
    },
  ];
  const personas = [
    { persona: 'executive', description: 'Needs a premium machine with excellent build quality and long battery life for meetings and travel.' },
    { persona: 'developer', description: 'Requires a powerful processor and plenty of RAM for compiling code and running virtual machines.' },
    { persona: 'sales professional', description: 'Prioritises portability, battery life and strong connectivity for presentations on the go.' },
    { persona: 'analyst', description: 'Needs a sharp display and comfortable keyboard for spreadsheets and reports.' },
  ];
  const alternatives = ['Lenovo ThinkPad T14', 'HP Spectre x360', 'Dell XPS 13'];
  const pitfalls = [
    'Avoid flimsy consumer models that won’t survive daily business travel.',
    'Don’t skimp on security – choose devices with TPM and biometric options.',
    'Consider port selection carefully if you use multiple peripherals.',
  ];
  const checklist = [
    'Ensure at least 16GB of RAM and a recent multi‑core CPU.',
    'Look for sturdy chassis materials (aluminium or magnesium).',
    'Check that the keyboard and screen suit your preferences.',
    'Confirm warranty coverage and on‑site support options.',
    'Read our full reviews for more insights.',
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
        { label: 'Business', href: '/best-business-laptops' },
      ]}
      title="Best business laptops 2025"
      intro="Professionals require machines they can rely on.  We’ve chosen the laptops that excel at productivity, security and durability so you can stay productive wherever your work takes you."
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