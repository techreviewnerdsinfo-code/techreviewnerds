"use client";
import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import InternalLinkBlock from '@/components/InternalLinkBlock';
import DisclosureBadge from '@/components/DisclosureBadge';
import { trackEvent } from '@/lib/analytics';

/*
 * BestOfHubTemplate
 *
 * A reusable template for "best of" hub pages. Each hub page introduces the
 * topic, outlines the selection criteria, compares top products in a simple
 * table, showcases individual product cards with pros and cons, and wraps
 * with an FAQ section. A JSON‑LD string can be injected for SEO.
 */
export interface ProductSummary {
  slug: string;
  name: string;
  image: string;
  description: string;
  pros: string[];
  cons: string[];
  rating: number;
  price: string;
}

export interface ComparisonRow {
  label: string;
  values: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

// A persona mini‑guide links a buyer type to a short description of what
// matters most for that person.  Use this to explain how different
// configurations suit students, creators, gamers or frequent travellers.
export interface PersonaGuide {
  persona: string;
  description: string;
}

export interface InternalLink {
  href: string;
  title: string;
}

interface BestOfHubTemplateProps {
  breadcrumbs: { label: string; href: string }[];
  title: string;
  intro: string;
  criteria: string[];
  products: ProductSummary[];
  comparisonTable: ComparisonRow[];
  internalLinks: InternalLink[];
  faqs: FAQItem[];
  jsonLd?: string;
  personas?: PersonaGuide[];
  alternatives?: string[];
  pitfalls?: string[];
  checklist?: string[];
}

const BestOfHubTemplate: React.FC<BestOfHubTemplateProps> = ({
  breadcrumbs,
  title,
  intro,
  criteria,
  products,
  comparisonTable,
  internalLinks,
  faqs,
  jsonLd,
  personas,
  alternatives,
  pitfalls,
  checklist,
}) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="mb-6 leading-relaxed">{intro}</p>

      {/* Selection criteria */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">How we picked</h2>
        <ul className="list-disc pl-5 space-y-1">
          {criteria.map((c) => (
            <li key={c} className="text-gray-700">
              {c}
            </li>
          ))}
        </ul>
      </section>

      {/* Comparison table */}
      <section className="mb-8 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-2">Comparison table</h2>
        <table className="min-w-full text-left border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 font-medium">Spec</th>
              {products.map((p) => (
                <th key={p.slug} className="p-2 font-medium">
                  {p.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonTable.map((row) => (
              <tr key={row.label} className="border-t border-gray-200">
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

      {/* Product cards */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our top picks</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((p) => (
            <div
              key={p.slug}
              className="border rounded-lg shadow-card p-4 flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-1">{p.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{p.description}</p>
              <p className="text-sm font-medium mb-2">Price: {p.price}</p>
              <p className="text-sm font-medium mb-2">Rating: {p.rating} / 5</p>
              <div className="flex flex-wrap mb-2">
                {p.pros.map((pro) => (
                  <span
                    key={pro}
                    className="bg-green-100 text-green-800 text-xs font-medium mr-2 mb-1 px-2 py-1 rounded"
                  >
                    + {pro}
                  </span>
                ))}
                {p.cons.map((con) => (
                  <span
                    key={con}
                    className="bg-red-100 text-red-800 text-xs font-medium mr-2 mb-1 px-2 py-1 rounded"
                  >
                    − {con}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <Link
                  href={`/reviews/${p.slug}-review`}
                  className="inline-block bg-primary-light hover:bg-primary text-white px-4 py-2 rounded"
                  onClick={() =>
                    trackEvent({
                      action: 'outbound_click',
                      category: 'product',
                      label: p.slug,
                    })
                  }
                >
                  Read review
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* Show disclosure beneath product listings */}
        <DisclosureBadge />
      </section>

      {/* Persona guides */}
      {personas && personas.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Who is this for?</h2>
          <ul className="list-disc pl-5 space-y-2">
            {personas.map((p) => (
              <li key={p.persona}>
                <strong className="capitalize">{p.persona}:</strong> {p.description}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Alternatives */}
      {alternatives && alternatives.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Alternatives if out of stock</h2>
          <ul className="list-disc pl-5 space-y-1">
            {alternatives.map((alt) => (
              <li key={alt}>{alt}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Pitfalls */}
      {pitfalls && pitfalls.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Pitfalls to avoid</h2>
          <ul className="list-disc pl-5 space-y-1">
            {pitfalls.map((pf) => (
              <li key={pf}>{pf}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Buying checklist */}
      {checklist && checklist.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Buying checklist</h2>
          <ul className="list-disc pl-5 space-y-1">
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Internal links */}
      {internalLinks && internalLinks.length > 0 && (
        <section className="mb-8">
          <InternalLinkBlock links={internalLinks} heading="Related guides" />
        </section>
      )}

      {/* FAQ section */}
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

      {/* JSON-LD for SEO */}
      {jsonLd && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      )}
    </div>
  );
};

export default BestOfHubTemplate;