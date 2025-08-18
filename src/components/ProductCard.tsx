import Link from 'next/link';
import Image from 'next/image';
import { StarRating } from './StarRating';
import type { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

/**
 * A card component that displays a product overview with image, name, price and rating.
 */
export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm bg-white hover:shadow-md transition-shadow">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative w-full h-48">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="p-4 flex flex-col gap-2">
          <h3 className="text-lg font-semibold leading-snug line-clamp-2">{product.name}</h3>
          <div className="flex items-center justify-between">
            <span className="text-primary font-bold">${product.price.toFixed(2)}</span>
            <StarRating rating={product.rating} />
          </div>
        </div>
      </Link>
    </div>
  );
};