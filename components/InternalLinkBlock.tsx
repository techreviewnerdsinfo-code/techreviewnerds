"use client";
import React from 'react';
import Link from 'next/link';

/**
 * InternalLinkBlock
 *
 * Renders a heading and a bulleted list of internal links. Use this
 * component on hub pages to point readers to related guides or
 * comparisons.
 */
export interface InternalLink {
  href: string;
  title: string;
}

interface InternalLinkBlockProps {
  heading: string;
  links: InternalLink[];
}

const InternalLinkBlock: React.FC<InternalLinkBlockProps> = ({ heading, links }) => (
  <div>
    <h3 className="text-xl font-semibold mb-2">{heading}</h3>
    <ul className="list-disc pl-5 space-y-1">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="text-primary-dark hover:underline">
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default InternalLinkBlock;