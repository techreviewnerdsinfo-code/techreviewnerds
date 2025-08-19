'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SUB_NICHES } from '@/config/site';

export default function CategoryNavigation() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col space-y-2">
      {SUB_NICHES.map((sn) => {
        const href = `/categories/${sn}`;
        const isActive = pathname === href;
        return (
          <Link
            key={sn}
            href={href}
            className={`text-sm capitalize ${
              isActive
                ? 'text-blue-600 font-semibold'
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            {sn} laptops
          </Link>
        );
      })}
    </nav>
  );
}
