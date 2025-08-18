import type { Metadata } from 'next';
import { CONTACT_EMAIL, BRAND_NAME } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with the team behind ${BRAND_NAME}.`,
};

export default function ContactPage() {
  return (
    <section className="max-w-xl mx-auto space-y-6">
      <h1 className="text-3xl font-semibold">Contact Us</h1>
      <p className="text-gray-700">
        We’d love to hear from you! Whether you have a question about a review, want to suggest a product
        or partnership, or just want to say hello, feel free to reach out.
      </p>
      <div className="space-y-2">
        <p>
          Email us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline font-medium">
            {CONTACT_EMAIL}
          </a>
        </p>
        <p>
          For media enquiries, please include “Media enquiry” in the subject line. We aim to respond within
          two business days.
        </p>
      </div>
    </section>
  );
}