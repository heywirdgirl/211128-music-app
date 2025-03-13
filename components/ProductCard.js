import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow">
      <div className="relative w-full h-56 md:h-64 lg:h-72">
        <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="rounded-md" />
      </div>
      <h2 className="text-lg font-semibold mt-3 text-gray-900">{product.name}</h2>
      <p className="text-gray-600 text-sm mt-1">
        {product.description.length > 80 ? product.description.substring(0, 80) + "..." : product.description}
      </p>
      <p className="text-gray-800 font-semibold mt-2">${product.price.toFixed(2)}</p>
      <Link href={`/products/${product.id}`} className="mt-3 block text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
        View Details
      </Link>
    </div>
  );
}