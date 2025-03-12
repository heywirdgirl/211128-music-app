import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Shop</h1>
      <Link href="/products">
        <a className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors">
          View Products
        </a>
      </Link>
    </div>
  );
}