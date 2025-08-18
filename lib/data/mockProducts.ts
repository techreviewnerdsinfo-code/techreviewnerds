import products from '../../data/products.json';
import { Product } from '../../types/product';

export function getAllProducts(): Product[] {
  return products as Product[];
}

export function getProductsByCategory(category: string): Product[] {
  return getAllProducts().filter((p) => p.category === category);
}