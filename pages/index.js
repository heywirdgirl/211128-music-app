import fs from "fs";
import path from "path";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public/products.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const products = JSON.parse(jsonData);

  return { props: { products } }; // ✅ Ensure it returns all products
}

export default function Home({ products }) {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center my-6">Simple Shop</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => ( // ✅ Correctly maps all products
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}