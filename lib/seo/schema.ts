/*
 * SEO Schema Helpers
 *
 * Helper functions for building JSON‑LD structured data. Use them on your
 * pages to generate ItemList, Product and FAQPage schemas.
 */
export interface ItemListEntry {
  url: string;
  name: string;
}
export function buildItemList(items: ItemListEntry[]): string {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: item.url,
      name: item.name,
    })),
  };
  return JSON.stringify(itemList);
}

export interface ProductOffer {
  name: string;
  description: string;
  image: string;
  brand: string;
  price: number;
  priceCurrency: string;
  url: string;
  rating: number;
}
export function buildProductOffer(product: ProductOffer): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: product.priceCurrency,
      availability: 'https://schema.org/InStock',
      url: product.url,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: 1,
    },
  };
  return JSON.stringify(schema);
}

export interface FAQEntry {
  question: string;
  answer: string;
}
export function buildFAQPage(faqs: FAQEntry[]): string {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
  return JSON.stringify(faqSchema);
}