"use client";
import Link from 'next/link';

/**
 * Breadcrumbs
 *
 * Displays a trail of links to help users orient themselves on the site.
 */
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-4">
      {items.map((crumb, index) => (
        <span key={index}>
          {crumb.href ? (
            <>
              <Link href={crumb.href} className="hover:underline">
                {crumb.label}
              </Link>
              {index < items.length - 1 && ' / '}
            </>
          ) : (
            <span className="text-gray-800 font-medium">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;