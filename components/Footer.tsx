import { CONTACT_EMAIL, BRAND_NAME } from '@/config/site';

/**
 * Global footer displayed at the bottom of every page.
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-12 border-t border-gray-200 bg-white py-6 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>
          &copy; {currentYear} {BRAND_NAME}. All rights reserved.
        </p>
        <nav className="flex flex-wrap items-center gap-4 text-sm">
          <a href="/about" className="hover:underline">About</a>
          <a href="/editorial-policy" className="hover:underline">Editorial Policy</a>
          <a href="/testing-methodology" className="hover:underline">Testing Methodology</a>
          <a href="/affiliate-disclosure" className="hover:underline">Affiliate Disclosure</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
        <p>
          Email us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline font-medium">
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </footer>
  );
};