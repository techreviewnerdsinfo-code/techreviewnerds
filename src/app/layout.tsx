import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tech Review Nerds',
  description: 'Unbiased laptop reviews, comparisons and guides',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-gray-50 text-gray-900'}>
        <NavBar />
        <main className="min-h-screen container mx-auto px-4 pt-6 pb-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}