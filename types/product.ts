export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  specs: {
    processor: string;
    ram: string;
    storage: string;
    screen: string;
  };
}
