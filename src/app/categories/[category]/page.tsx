import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import products from '@/data/products.json';
import type { Category } from '@/config/site';
import { SUB_NICHES, BRAND_NAME } from '@/config/site';
import { ProductCard } from '@/components/ProductCard';
import { CategoryNavigation } from '@/components/CategoryNavigation';

interface CategoryPageProps {
  params: {
    category: Category;
  };
}

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return SUB_NICHES.map((cat) => ({ category: cat }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = params.category;
  if (!SUB_NICHES.includes(category)) {
    return {};
  }
  const title = `${category.charAt(0).toUpperCase() + category.slice(1)} laptops – ${BRAND_NAME}`;
  const description = `Browse the latest ${category} laptops reviewed by ${BRAND_NAME}.  Find the perfect ${category} laptop with our expert comparisons.`;
  return {
    title,
    description,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  if (!SUB_NICHES.includes(category)) {
    return notFound();
  }
  const list = (products as any[]).filter((p) => p.category === category);
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold capitalize">{category} laptops</h1>
      <CategoryNavigation />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}