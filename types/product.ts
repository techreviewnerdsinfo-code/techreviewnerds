export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  imageUrl: string;
  specs: Record<string, string | number>;
}