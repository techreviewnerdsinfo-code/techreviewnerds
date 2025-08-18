import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="py-10">
      <h1 className="text-3xl font-bold mb-4">Welcome to Tech Review Nerds</h1>
      <p className="mb-8 max-w-2xl text-lg text-neutral-700">
        Your trusted source for laptop reviews, comparisons and guides. Discover the best laptops for every need and budget.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        <Link href="/best-budget-laptops" className="block p-6 bg-white rounded-lg shadow-card hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Budget Laptops</h2>
          <p>Explore top-rated laptops that won’t break the bank.</p>
        </Link>
        <Link href="/best-gaming-laptops" className="block p-6 bg-white rounded-lg shadow-card hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Gaming Laptops</h2>
          <p>Find powerful rigs to level up your gameplay.</p>
        </Link>
        <Link href="/best-student-laptops" className="block p-6 bg-white rounded-lg shadow-card hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Student Laptops</h2>
          <p>Choose the right laptop to ace your classes.</p>
        </Link>
      </div>
    </section>
  );
}
