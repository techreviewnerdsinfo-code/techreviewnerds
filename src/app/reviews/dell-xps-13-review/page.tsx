// …previous code remains unchanged…

const productOfferJson = buildProductOffer({
  name: product.title,
  description: product.features.join(', '),
  image: `https://techreviewnerds.com${product.image}`,
  brand: 'Dell',
  price: product.price.replace(/[^0-9.]/g, ''), // keep it as a string
  url: `https://techreviewnerds.com/reviews/dell-xps-13-review`,
  // Note: remove rating here; buildProductOffer doesn't accept it
});

const faqJson = buildFAQPage(faqs);
const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [JSON.parse(productOfferJson), JSON.parse(faqJson)],
});

// …rest of the component remains the same
