import Link from 'next/link';
import { BRAND_NAME, SUB_NICHES } from '@/config/site';

/**
 * The site header containing the logo/brand name and navigation links.
 */
export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          {BRAND_NAME}
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link>
          <div className="relative group">
            <span className="text-gray-600 hover:text-primary cursor-pointer transition-colors select-none">Categories</span>
            <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg hidden group-hover:block">
              {SUB_NICHES.map((cat) => (
                <Link
                  key={cat}
                  href={`/categories/${cat}`}
                  className="block px-4 py-2 capitalize text-gray-700 hover:bg-gray-100"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">About</Link>
          <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link>
        </nav>
        <button className="md:hidden p-2 text-gray-600" aria-label="Open menu" onClick={() => {}}>
          {/* Simple hamburger icon.  You can replace this with a functional mobile menu if desired. */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
        </button>
      </div>
    </header>
  );
};