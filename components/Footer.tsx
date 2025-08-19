import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
      <div className="container mx-auto text-center space-y-4">
        <nav className="space-x-4">
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/editorial-policy" className="hover:text-white">Editorial Policy</Link>
          <Link href="/affiliate-disclosure" className="hover:text-white">Affiliate Disclosure</Link>
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
        </nav>
        <p className="text-sm">© {year} Tech Review Nerds.</p>
      </div>
    </footer>
  );
}