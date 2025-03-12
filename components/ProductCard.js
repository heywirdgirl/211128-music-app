import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-64">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="w-full"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">${product.price}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}