import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header"; // Import Header

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Header /> {/* Add Header Here */}
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Simple Shop</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}