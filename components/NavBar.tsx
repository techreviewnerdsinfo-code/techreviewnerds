import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-800">Tech Review Nerds</Link>
        <nav className="space-x-4 hidden md:block">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/best-laptops" className="text-gray-700 hover:text-blue-600">Best Laptops</Link>
          <Link href="/comparisons" className="text-gray-700 hover:text-blue-600">Comparisons</Link>
          <Link href="/reviews" className="text-gray-700 hover:text-blue-600">Reviews</Link>
          <Link href="/guides" className="text-gray-700 hover:text-blue-600">Guides</Link>
        </nav>
      </div>
    </header>
  );
}