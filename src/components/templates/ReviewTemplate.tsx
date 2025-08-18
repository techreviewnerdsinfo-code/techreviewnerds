"use client";
import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import DisclosureBadge from '@/components/DisclosureBadge';

/*
 * ReviewTemplate
 *
 * Template for individual product review pages. Includes an overview, detailed
 * specifications table, lists of strengths and weaknesses, a verdict,
 * alternatives, and FAQs. Supports embedding JSON‑LD Product and FAQPage
 * schemas via the jsonLd prop.
 */
export interface FAQItem {
  question: string;
  answer: string;
}
export interface InternalLink {
  href: string;
  title: string;
}
interface Specs {
  [key: string]: string;
}
interface ReviewTemplateProps {
  breadcrumbs: { label: string; href: string }[];
  title: string;
  overview: string;
  specs: Specs;
  strengths: string[];
  weaknesses: string[];
  verdict: string;
  alternatives: InternalLink[];
  faqs: FAQItem[];
  jsonLd?: string;
}
const ReviewTemplate: React.FC<ReviewTemplateProps> = ({
  breadcrumbs,
  title,
  overview,
  specs,
  strengths,
  weaknesses,
  verdict,
  alternatives,
  faqs,
  jsonLd,
}) => {
  const specEntries = Object.entries(specs);
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="mb-6 leading-relaxed">{overview}</p>
      <section className="mb-6 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-2">Key specs</h2>
        <table className="min-w-full text-left border border-gray-200">
          <tbody>
            {specEntries.map(([key, value]) => (
              <tr key={key} className="border-t border-gray-200">
                <td className="p-2 font-medium bg-gray-50 capitalize">{key.replace(/([a-z])([A-Z])/g, '$1 $2')}</td>
                <td className="p-2">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">What we liked</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          {strengths.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Where it could improve</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          {weaknesses.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Verdict</h2>
        <p className="text-gray-700">{verdict}</p>
      </section>
      {alternatives && alternatives.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Alternatives to consider</h2>
          <ul className="list-disc pl-5 space-y-1">
            {alternatives.map((alt) => (
              <li key={alt.href}>
                <a href={alt.href} className="text-primary-dark hover:underline">
                  {alt.title}
                </a>
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
      {/* Disclosure badge to explain affiliate relationships */}
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
export default ReviewTemplate;