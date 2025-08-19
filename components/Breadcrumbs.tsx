import Link from 'next/link';

export interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-4">
      {crumbs.map((crumb, index) => (
        <span key={index}>
          {crumb.href ? (
            <>
              <Link href={crumb.href} className="hover:underline">{crumb.label}</Link> /{' '}
            </>
          ) : (
            <span className="text-gray-800 font-medium">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}