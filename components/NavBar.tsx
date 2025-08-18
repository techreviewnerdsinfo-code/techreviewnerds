import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">Tech Review Nerds</Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/best-budget-laptops" className="hover:text-primary-dark">Budget</Link>
          <Link href="/best-gaming-laptops" className="hover:text-primary-dark">Gaming</Link>
          <Link href="/best-student-laptops" className="hover:text-primary-dark">Student</Link>
        </nav>
      </div>
    </header>
  );
}
