// Build an ItemList schema for a list of items
export function buildItemList(items: { url: string; name: string }[]): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Thing',
        url: item.url,
        name: item.name,
      },
    })),
  };
  return JSON.stringify(schema);
}

// Build a FAQPage schema
export function buildFAQPage(faqs: { question: string; answer: string }[]): string {
  const schema = {
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
  return JSON.stringify(schema);
}

// Build a Product/Offer schema (if you need it)
export function buildProductOffer(args: {
  name: string;
  description: string;
  url: string;
  image: string;
  price: string;
  brand: string;
}): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: args.name,
    description: args.description,
    image: [args.image],
    brand: { '@type': 'Brand', name: args.brand },
    offers: {
      '@type': 'Offer',
      url: args.url,
      price: args.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };
  return JSON.stringify(schema);
}
