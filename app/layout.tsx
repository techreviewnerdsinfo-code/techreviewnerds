import '../styles/globals.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tech Review Nerds',
  description: 'Laptop reviews, comparisons and guides for tech enthusiasts.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-neutral-50 text-neutral-900 font-sans">
        <NavBar />
        <main className="min-h-screen max-w-7xl mx-auto px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
