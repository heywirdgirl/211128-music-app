import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public/products.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const products = JSON.parse(jsonData);

  return { props: { products } };
}

export default function Home({ products }) {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Simple Shop</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md">
              <div className="relative w-full h-40">
                <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="rounded-md" />
              </div>
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
              <Link href={`/products/${product.id}`} className="text-blue-500 hover:underline mt-2 block">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}