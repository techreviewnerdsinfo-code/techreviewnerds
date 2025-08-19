export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-10 bg-blue-600 text-white rounded-lg">
        <h1 className="text-4xl font-bold mb-2">Welcome to Tech Review Nerds</h1>
        <p className="text-lg max-w-2xl mx-auto">Honest laptop reviews, head‑to‑head comparisons and buying guides for every need and budget.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-1">Budget Laptops</h3>
            <p className="text-sm text-gray-600">Top picks under $500 and $1000.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-1">Gaming Laptops</h3>
            <p className="text-sm text-gray-600">Best rigs for every gamer.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-1">Student Laptops</h3>
            <p className="text-sm text-gray-600">Portable machines for learning.</p>
          </div>
        </div>
      </section>
    </div>
  );
}