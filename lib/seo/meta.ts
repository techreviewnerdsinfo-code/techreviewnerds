export type Metadata = {
  title: string;
  description: string;
  openGraph: {
    title: string;
    description: string;
    type: 'website';
  };
  twitter: {
    card: 'summary_large_image';
    title: string;
    description: string;
  };
};

export function buildMeta(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
