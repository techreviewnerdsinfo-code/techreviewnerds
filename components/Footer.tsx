import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 mt-8">
      <div className="container mx-auto py-6 px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">\u00a9 2025 Tech Review Nerds. All rights reserved.</p>
        <nav className="flex space-x-4 mt-2 md:mt-0">
          <Link href="/about">
            <span className="text-sm hover:text-gray-900">About</span>
          </Link>
          <Link href="/editorial-policy">
            <span className="text-sm hover:text-gray-900">Editorial Policy</span>
          </Link>
          <Link href="/affiliate-disclosure">
            <span className="text-sm hover:text-gray-900">Affiliate Disclosure</span>
          </Link>
          <Link href="/privacy">
            <span className="text-sm hover:text-gray-900">Privacy</span>
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
