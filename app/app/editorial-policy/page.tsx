import type { Metadata } from 'next';
import { BRAND_NAME } from '@/config/site';

export const metadata: Metadata = {
  title: 'Editorial Policy',
  description: `Understand the editorial guidelines and principles that guide the content on ${BRAND_NAME}.`,
  alternates: {
    canonical: 'https://techreviewnerds.com/editorial-policy',
  },
};

export default function EditorialPolicyPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-4">
      <h1 className="text-3xl font-semibold">Editorial Policy</h1>
      <p className="text-gray-700">
        {BRAND_NAME} is committed to providing readers with honest, unbiased reviews and recommendations.  We
        maintain strict editorial independence and never accept payment in exchange for positive coverage.
        Our writers and editors adhere to a clear set of guidelines designed to protect the integrity of
        our content.
      </p>
      <h2 className="text-2xl font-semibold mt-4">Independence</h2>
      <p className="text-gray-700">
        Our recommendations are based solely on our evaluation of the products.  We do not allow
        advertisers or affiliate partners to influence our opinions.  When we receive products for review,
        we disclose this within the article and are under no obligation to provide favourable coverage.
      </p>
      <h2 className="text-2xl font-semibold mt-4">Accuracy</h2>
      <p className="text-gray-700">
        We strive to ensure that all information on this site is accurate and up‑to‑date.  If you notice
        any errors or outdated details, please let us know so we can correct them promptly.  Technical
        specifications and pricing can change, so we periodically update our articles to reflect the
        latest data.
      </p>
      <h2 className="text-2xl font-semibold mt-4">Corrections</h2>
      <p className="text-gray-700">
        When mistakes happen, we own them.  Corrections will be clearly noted at the top or bottom of
        the affected article.  We appreciate feedback from our readers and view it as an opportunity to
        improve.
      </p>
    </section>
  );
}