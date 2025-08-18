import React from 'react';

/**
 * DisclosureBadge displays a short notice that product links on the site may
 * generate affiliate commissions. This badge should be placed near CTA
 * buttons or product listings to maintain transparency.
 */
export default function DisclosureBadge() {
  return (
    <div className="mt-2 text-xs text-gray-500 italic">
      {/*
        The language here should clearly disclose to users that clicking on
        product links may earn the site a commission. Adjust the wording to
        satisfy your jurisdiction’s disclosure requirements.
      */}
      <span className="block">Disclosure: We may earn a commission when you purchase through our links.</span>
    </div>
  );
}