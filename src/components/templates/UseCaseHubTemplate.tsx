"use client";
import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import InternalLinkBlock from '@/components/InternalLinkBlock';
import DisclosureBadge from '@/components/DisclosureBadge';
import { trackEvent } from '@/lib/analytics';

/*
 * UseCaseHubTemplate
 *
 * Template for problem/ use‑case hub pages such as "best battery life laptops".
 * It provides context for the persona, outlines recommended specs, warns about
 * common pitfalls, includes a simple comparison table, and answers FAQs.
 */
export interface UseCaseRow {
  label: string;
  values: string[];
}
export interface FAQItem {
  question: string;
  answer: string;
}
export interface InternalLink {
  href: string;
  title: string;
}
interface UseCaseHubTemplateProps {
  breadcrumbs: { label: string; href: string }[];
  title: string;
  intro: string;
  personaGuidance: string;
  thresholds: string[];
  pitfalls: string[];
  comparisonTable: UseCaseRow[];
  internalLinks: InternalLink[];
  faqs: FAQItem[];
  jsonLd?: string;
}
const UseCaseHubTemplate: React.FC<UseCaseHubTemplateProps> = ({
  breadcrumbs,
  title,
  intro,
  personaGuidance,
  thresholds,
  pitfalls,
  comparisonTable,
  internalLinks,
  faqs,
  jsonLd,
}) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="mb-6 leading-relaxed">{intro}</p>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Who is this for?</h2>
        <p className="text-gray-700">{personaGuidance}</p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Recommended specs</h2>
        <ul className="list-disc pl-5 space-y-1">
          {thresholds.map((t) => (
            <li key={t} className="text-gray-700">
              {t}
            </li>
          ))}
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Common pitfalls to avoid</h2>
        <ul className="list-disc pl-5 space-y-1">
          {pitfalls.map((p) => (
            <li key={p} className="text-gray-700">
              {p}
            </li>
          ))}
        </ul>
      </section>
      <section className="mb-8 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-2">Comparison table</h2>
        <table className="min-w-full text-left border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 font-medium">Spec</th>
              {comparisonTable[0]?.values.map((_, idx) => (
                <th key={idx} className="p-2 font-medium">
                  Option {idx + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonTable.map((row) => (
              <tr
                key={row.label}
                className="border-t border-gray-200 cursor-pointer"
                onClick={() =>
                  trackEvent({
                    action: 'table_click',
                    category: 'usecase',
                    label: row.label,
                  })
                }
              >
                <td className="p-2 font-medium bg-gray-50">{row.label}</td>
                {row.values.map((val, idx) => (
                  <td key={idx} className="p-2">
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      {internalLinks && internalLinks.length > 0 && (
        <section className="mb-8">
          <InternalLinkBlock links={internalLinks} heading="Related guides" />
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
      {/* Disclosure badge shown near bottom of use‑case pages */}
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
export default UseCaseHubTemplate;