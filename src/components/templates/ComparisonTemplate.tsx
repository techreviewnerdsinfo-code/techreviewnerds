"use client";
import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import DisclosureBadge from '@/components/DisclosureBadge';
import { trackEvent } from '@/lib/analytics';
import Link from 'next/link';

/*
 * ComparisonTemplate
 *
 * Template for head‑to‑head comparison pages. Presents an intro, a spec
 * comparison table, a verdict outlining who each product is for, a list of
 * alternatives, and FAQs. A JSON‑LD string can be injected for FAQPage
 * schema.
 */
export interface SpecRow {
  label: string;
  a: string;
  b: string;
}
export interface FAQItem {
  question: string;
  answer: string;
}
export interface InternalLink {
  href: string;
  title: string;
}
interface ComparisonTemplateProps {
  breadcrumbs: { label: string; href: string }[];
  title: string;
  intro: string;
  productA: { name: string; description?: string };
  productB: { name: string; description?: string };
  specs: SpecRow[];
  verdict: { forA: string; forB: string };
  alternatives: InternalLink[];
  faqs: FAQItem[];
  jsonLd?: string;
}
const ComparisonTemplate: React.FC<ComparisonTemplateProps> = ({
  breadcrumbs,
  title,
  intro,
  productA,
  productB,
  specs,
  verdict,
  alternatives,
  faqs,
  jsonLd,
}) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="mb-6 leading-relaxed">{intro}</p>
      <section className="mb-8 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-2">Key specs comparison</h2>
        <table className="min-w-full text-left border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 font-medium">Spec</th>
              <th className="p-2 font-medium">{productA.name}</th>
              <th className="p-2 font-medium">{productB.name}</th>
            </tr>
          </thead>
          <tbody>
            {specs.map((row) => (
              <tr
                key={row.label}
                className="border-t border-gray-200 cursor-pointer"
                onClick={() =>
                  trackEvent({
                    action: 'table_click',
                    category: 'comparison',
                    label: row.label,
                  })
                }
              >
                <td className="p-2 font-medium bg-gray-50">{row.label}</td>
                <td className="p-2">{row.a}</td>
                <td className="p-2">{row.b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Who should choose which?</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">{productA.name}</h3>
            <p className="text-gray-700">{verdict.forA}</p>
          </div>
          <div>
            <h3 className="font-semibold">{productB.name}</h3>
            <p className="text-gray-700">{verdict.forB}</p>
          </div>
        </div>
      </section>
      {alternatives && alternatives.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Alternatives to consider</h2>
          <ul className="list-disc pl-5 space-y-1">
            {alternatives.map((alt) => (
              <li key={alt.href}>
                <Link href={alt.href} className="text-primary-dark hover:underline">
                  {alt.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      {faqs && faqs.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-medium">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      {/* Disclosure badge appears near the bottom of the page */}
      <DisclosureBadge />
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      )}
    </div>
  );
};
export default ComparisonTemplate;