import type { Metadata } from 'next';
import { BRAND_NAME } from '@/config/site';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn more about ${BRAND_NAME}, our mission and how we help you choose the best laptops.`,
};

export default function AboutPage() {
  return (
    <section className="space-y-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold">About {BRAND_NAME}</h1>
      <p className="text-gray-700">
        {BRAND_NAME} exists to simplify the laptop‑buying process.  With hundreds of models and specs
        released every year, it can be hard to know where to start.  Our site is run by a small team of
        independent reviewers with backgrounds in engineering, creative work and IT support.  We spend
        countless hours using, testing and comparing devices so you don’t have to.
      </p>
      <p className="text-gray-700">
        Each member of our team brings years of hands‑on experience: from former hardware editors and
        electronics engineers to professional photographers and game developers.  When we recommend a
        laptop, it’s because we’ve lived with it in real‑world conditions — typing thousands of words,
        editing photos, compiling code and lugging it through airports.  We evaluate build quality,
        performance, thermals and value for money with different personas in mind: students, creators,
        gamers and frequent travelers.
      </p>
      <p className="text-gray-700">
        Trust is at the core of {BRAND_NAME}.  We disclose when we use affiliate links and never accept
        payment for positive coverage.  Our testing methodology prioritises repeatable benchmarks and
        everyday usability over marketing claims.  If you have feedback or suggestions, we’d love to hear
        from you — please reach out via our contact page.
      </p>
    </section>
  );
}