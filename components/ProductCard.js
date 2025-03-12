import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <div className="relative w-full h-40">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
    </div>
  );
}