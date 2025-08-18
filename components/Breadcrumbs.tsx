import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumbs" className="text-sm text-gray-600 mb-4">
      <ol className="list-none p-0 inline-flex">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2 text-gray-400">/</span>}
            <Link href={item.href}>
              <span className="hover:text-gray-900">{item.label}</span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
