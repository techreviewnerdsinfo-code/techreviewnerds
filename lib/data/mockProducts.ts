import products from '@/data/products.json';
import { Product } from '@/types/product';

export function getAllProducts(): Product[] {
  return products as Product[];
}

export function getProductBySlug(slug: string): Product | undefined {
  return (products as Product[]).find((p) => p.slug === slug);
}
