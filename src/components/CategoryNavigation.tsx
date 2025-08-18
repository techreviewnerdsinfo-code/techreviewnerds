import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SUB_NICHES } from '@/config/site';

/**
 * Renders a list of links for each laptop sub‑niche category.  Highlights the
 * current category based on the URL path.
 */
export const CategoryNavigation: React.FC = () => {
  const pathname = usePathname();

  const currentCategory = pathname.split('/')[2] || '';

  return (
    <nav className="flex flex-wrap gap-3 justify-center my-4">
      {SUB_NICHES.map((cat) => {
        const active = currentCategory === cat;
        return (
          <Link
            key={cat}
            href={`/categories/${cat}`}
            className={`px-3 py-1 rounded-full text-sm capitalize border hover:bg-primary-light hover:text-white transition-colors ${active ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            {cat}
          </Link>
        );
      })}
    </nav>
  );
};