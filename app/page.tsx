import { Metadata } from 'next';
import products from '@/data/products.json';
import { CategoryNavigation } from '@/components/CategoryNavigation';
import { ProductCard } from '@/components/ProductCard';
import { SUB_NICHES, BRAND_NAME } from '@/config/site';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: `${BRAND_NAME} – Find the Best Laptops for Every Need`,
  description: `Browse our expertly curated selection of laptops across every sub‑niche including budget, gaming, student, business and ultrabooks.`,
};

/**
 * The homepage shows a brief introduction and highlights featured laptops from each category.
 */
export default function HomePage() {
  // Convert imported JSON to typed array
  const allProducts = products as any[];
  // Choose top product by rating for each category to feature
  const featuredByCategory: Record<string, any> = {};
  allProducts.forEach((p) => {
    const existing = featuredByCategory[p.category];
    if (!existing || p.rating > existing.rating) {
      featuredByCategory[p.category] = p;
    }
  });
  return (
    <div className="space-y-10">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Your trusted guide to the best laptops
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Whether you're a gamer, student, professional or on a budget, we help you find the perfect laptop.  Explore our expert reviews and comparisons across every sub‑niche.
        </p>
      </section>
      <CategoryNavigation />
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Picks</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SUB_NICHES.map((cat) => {
            const product = featuredByCategory[cat];
            return product ? <ProductCard key={product.id} product={product} /> : null;
          })}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">All Products</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}