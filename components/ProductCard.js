import Image from "next/image";

const ProductCard = ({ hat }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <Image src={hat.image} alt={hat.name} width={200} height={200} />
      <h2 className="text-lg font-bold">{hat.name}</h2>
      <p className="text-gray-600">${hat.price.toFixed(2)}</p>
      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Buy Now</button>
    </div>
  );
};

export default ProductCard;