import { Metadata } from 'next';
import ComparisonTemplate from '@/components/templates/ComparisonTemplate';
import { buildFAQPage } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Ryzen 7 vs Intel Core i7 Laptops – Performance, Efficiency and Value',
  description:
    'We compare AMD’s Ryzen 7 mobile processors against Intel’s Core i7 chips in laptops to help you choose the right CPU for your workflow and budget.',
  alternates: {
    canonical: 'https://techreviewnerds.com/comparisons/ryzen-7-vs-i7-laptop',
  },
};

const Page = () => {
  const specs = [
    { label: 'Cores / threads', a: '8C/16T', b: '6C/12T–8C/16T' },
    { label: 'Base clock', a: '3.2GHz', b: '3.0GHz' },
    { label: 'Boost clock', a: '4.7GHz', b: '4.9GHz' },
    { label: 'Integrated graphics', a: 'Radeon 680M', b: 'Intel Iris Xe' },
    { label: 'TDP range', a: '15–45W', b: '15–45W' },
    { label: 'Typical laptop price', a: '$900–$1,500', b: '$1,000–$1,800' },
  ];
  const verdict = {
    forA:
      'Ryzen 7 laptops excel at multi‑threaded tasks like video editing and heavy multitasking. They often provide better value in the mid‑range segment.',
    forB:
      'Core i7 machines offer stronger single‑threaded performance and efficiency, making them great for productivity and battery‑sensitive workloads.',
  };
  const alternatives = [
    { href: '/best-gaming-laptops', title: 'Best gaming laptops' },
    { href: '/best-budget-laptops', title: 'Best budget laptops' },
  ];
  const faqs = [
    {
      question: 'Is Ryzen 7 better than i7 for gaming?',
      answer:
        'Ryzen 7 chips pair well with discrete GPUs and excel in multi‑threaded game engines, but Intel’s latest i7 CPUs can offer slightly higher frame rates in lightly threaded titles.',
    },
    {
      question: 'Which processor is more power efficient?',
      answer:
        'Intel’s 13th‑gen mobile i7 chips benefit from a hybrid core design that improves efficiency, giving them an edge in battery life over most Ryzen 7 laptops.',
    },
    {
      question: 'Do AMD laptops run hotter than Intel laptops?',
      answer:
        'Both platforms produce heat under load. Cooling design matters more than the CPU brand. Always consider the chassis and thermal solution of the laptop you choose.',
    },
  ];
  const faqJson = buildFAQPage(faqs);
  return (
    <ComparisonTemplate
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Comparisons', href: '/' },
        { label: 'Ryzen 7 vs i7', href: '/comparisons/ryzen-7-vs-i7-laptop' },
      ]}
      title="Ryzen 7 vs Intel Core i7 laptops"
      intro="Choosing between AMD’s Ryzen 7 and Intel’s Core i7 processors isn’t as simple as looking at core counts. We break down performance, efficiency and value to help you decide which CPU fits your needs."
      productA={{ name: 'Ryzen 7 laptop' }}
      productB={{ name: 'Core i7 laptop' }}
      specs={specs}
      verdict={verdict}
      alternatives={alternatives}
      faqs={faqs}
      jsonLd={faqJson}
    />
  );
};

export default Page;