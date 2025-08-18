import type { Metadata } from 'next';
import { BRAND_NAME } from '@/config/site';

export const metadata: Metadata = {
  title: 'Testing Methodology',
  description: `Learn how ${BRAND_NAME} evaluates laptops for our reviews and comparisons.`,
  alternates: {
    canonical: 'https://techreviewnerds.com/testing-methodology',
  },
};

export default function TestingMethodologyPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-4">
      <h1 className="text-3xl font-semibold">Our Testing Methodology</h1>
      <p className="text-gray-700">
        At {BRAND_NAME}, we believe that rigorous, repeatable testing produces the most useful advice.
        Below we outline the key aspects of our review process.
      </p>
      <h2 className="text-2xl font-semibold mt-4">Real‑world usage</h2>
      <p className="text-gray-700">
        We don’t rely solely on synthetic benchmarks.  We use each laptop for typical tasks such as web
        browsing, document editing, photo and video editing, gaming and travel.  This helps us assess
        build quality, keyboard comfort, trackpad accuracy and general usability.
      </p>
      <h2 className="text-2xl font-semibold mt-4">Performance and thermals</h2>
      <p className="text-gray-700">
        We run industry‑standard benchmarks to evaluate CPU, GPU and storage performance.  We also monitor
        thermals during sustained workloads to see how well a laptop can maintain its boost clocks without
        overheating or throttling.
      </p>
      <h2 className="text-2xl font-semibold mt-4">Battery life</h2>
      <p className="text-gray-700">
        Battery tests are performed using a scripted loop of web browsing, video playback and light
        productivity until the battery dies.  We report the number of hours a device lasts and note any
        rapid charging capabilities.
      </p>
      <h2 className="text-2xl font-semibold mt-4">Display and audio</h2>
      <p className="text-gray-700">
        We measure display brightness, colour accuracy and contrast using calibrated instruments.  Speakers
        are judged on clarity, volume and balance.  For gaming laptops, we pay particular attention to
        refresh rate and response time.
      </p>
      <h2 className="text-2xl font-semibold mt-4">Software and support</h2>
      <p className="text-gray-700">
        Pre‑installed software, firmware updates and customer support can impact your ownership experience.
        We take note of bloatware, driver stability and how quickly manufacturers fix issues.
      </p>
    </section>
  );
}