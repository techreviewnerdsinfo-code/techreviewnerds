import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import products from '@/data/products.json';
import { StarRating } from '@/components/StarRating';
import Image from 'next/image';
import Link from 'next/link';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return (products as any[]).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = (products as any[]).find((p) => p.slug === params.slug);
  if (!product) {
    return {};
  }
  return {
    title: `${product.name}`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = (products as any[]).find((p) => p.slug === params.slug);
  if (!product) {
    return notFound();
  }
  return (
    <article className="space-y-6">
      <nav aria-label="Breadcrumb" className="text-sm">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="text-primary hover:underline">
              Home
            </Link>
          </li>
          <li>›</li>
          <li>
            <Link href={`/categories/${product.category}`} className="text-primary hover:underline capitalize">
              {product.category}
            </Link>
          </li>
          <li>›</li>
          <li className="truncate" aria-current="page">
            {product.name}
          </li>
        </ol>
      </nav>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-shrink-0 md:w-1/2 relative h-64 md:h-80">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-semibold leading-tight">{product.name}</h1>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</span>
            <StarRating rating={product.rating} />
          </div>
          <p className="text-gray-700">{product.description}</p>
          <div>
            <h2 className="text-lg font-semibold mb-2">Key Features</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Specifications</h2>
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-sm">
              <tbody>
                {Object.entries(product.specs).map(([key, value]) => (
                  <tr key={key} className="odd:bg-gray-50">
                    <th className="text-left font-medium px-2 py-1 whitespace-nowrap w-32 capitalize">{key}</th>
                    <td className="px-2 py-1">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </article>
  );
}