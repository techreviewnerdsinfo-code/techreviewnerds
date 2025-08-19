/*
 * Product data helpers
 *
 * These functions load the mock products JSON from the `data` folder and
 * provide convenient operations to query and sort products. When you
 * integrate with the Amazon PA‑API, replace these helpers with network
 * requests that fetch live pricing and availability.
 */

import products from "../../data/products.json";

export interface Product {
  asin: string;
  title: string;
  image: string;
  price: string;
  rating: number;
  features: string[];
  buy_url: string;
  use_cases: string[];
  specs: {
    cpu: string;
    ram: string;
    storage: string;
    weight: string;
    battery: string;
  };
}

// Return all products in the mock database
export function getAll(): Product[] {
  return products as Product[];
}

// Filter by use case, e.g. "gaming", "student"
export function filterByUseCase(useCase: string): Product[] {
  return getAll().filter((p) => p.use_cases.includes(useCase));
}

// Find a product by its ASIN code
export function findByAsin(asin: string): Product | undefined {
  return getAll().find((p) => p.asin === asin);
}

// Sort products by price. The price field is a string with currency symbols.
export function sortByPrice(order: "asc" | "desc" = "asc"): Product[] {
  const parsePrice = (price: string) => {
    const num = parseFloat(price.replace(/[^0-9.]/g, ""));
    return isNaN(num) ? 0 : num;
  };
  const sorted = [...getAll()].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
  return order === "asc" ? sorted : sorted.reverse();
}