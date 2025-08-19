import type { Category } from '@/config/site';

/**
 * Represents a single laptop product.  Extend this type as you integrate
 * with real product data sources.
 */
export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  rating: number;
  category: Category;
  image: string;
  description: string;
  specs: Record<string, string>;
  features: string[];
}