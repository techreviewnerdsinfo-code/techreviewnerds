import '@/app/globals.css';
import type { Metadata } from 'next';
import { BRAND_NAME, PRIMARY_NICHE } from '@/config/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Script from 'next/script';
import Banner from '@/components/Banner';
import React from 'react';
// Load the Inter font from Google with automatic optimisations. Next.js will
// include the appropriate preload tags to reduce layout shift and blocking
// behaviour. Using next/font/google provides the font as a CSS class that
// can be applied to the <body> element. This helps with font loading
// performance and CLS (cumulative layout shift).
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: {
    template: `%s | ${BRAND_NAME}`,
    default: `${BRAND_NAME} – Your trusted guide to the best ${PRIMARY_NICHE}`,
  },
  description: `${BRAND_NAME} publishes honest reviews and comparisons of the top ${PRIMARY_NICHE} available today. Find the right laptop for your needs.`,
  generator: 'Next.js',
  keywords: [BRAND_NAME, PRIMARY_NICHE, 'reviews', 'comparisons'],
  authors: [{ name: BRAND_NAME }],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* Google Analytics 4 scripts. These load the gtag library and initialise GA
            with your measurement ID. The measurement ID is read from the
            NEXT_PUBLIC_GA_ID environment variable. Remove or replace this block if
            you do not wish to track analytics. */}
        <Script
          id="ga4-base"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="ga4-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <Header />
        {/* Show a demo banner to indicate mock data */}
        <Banner />
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}