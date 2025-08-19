import type { Metadata } from 'next';
import { BRAND_NAME } from '@/config/site';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: `${BRAND_NAME} participates in affiliate programs to help support our work while remaining free to readers.`,
  alternates: {
    canonical: 'https://techreviewnerds.com/affiliate-disclosure',
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <section className="max-w-3xl mx-auto space-y-4">
      <h1 className="text-3xl font-semibold">Affiliate Disclosure</h1>
      <p className="text-gray-700">
        To keep {BRAND_NAME} free for readers, we participate in various affiliate marketing programs.
        This means we may earn a commission when you click a link to a retailer and make a purchase.
        These commissions help us fund our testing and research but do not influence our editorial
        recommendations.
      </p>
      <p className="text-gray-700">
        Our team always puts the interests of our readers first.  We only recommend products that we truly
        believe are the best in their category based on our testing and experience.  When a page includes
        affiliate links, we make this clear in a disclaimer near the top of the article.
      </p>
      <p className="text-gray-700">
        If you have any questions about our affiliate relationships or want more information about the
        programs we participate in, please don’t hesitate to get in touch via our contact page.
      </p>
    </section>
  );
}