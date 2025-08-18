import React from 'react';

interface StarRatingProps {
  rating: number;
}

/**
 * Displays a row of star icons corresponding to the provided rating.
 * Uses simple SVGs to avoid pulling in any third‑party icon library.
 */
export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const maxStars = 5;
  const filledStars = Math.round(rating);

  return (
    <div className="flex items-center" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: maxStars }).map((_, index) => {
        const isFilled = index < filledStars;
        return (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill={isFilled ? '#FBBF24' : '#D1D5DB'}
            className="w-4 h-4 mr-0.5"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.26 3.923a1 1 0 00.95.69h4.113c.969 0 1.371 1.24.588 1.81l-3.324 2.415a1 1 0 00-.364 1.118l1.26 3.922c.3.922-.755 1.688-1.538 1.118L10 13.348l-3.324 2.415c-.783.57-1.838-.196-1.539-1.118l1.26-3.922a1 1 0 00-.364-1.118L2.71 9.35c-.783-.57-.38-1.81.588-1.81h4.112a1 1 0 00.951-.69l1.26-3.923z" />
          </svg>
        );
      })}
    </div>
  );
};