import fs from "fs";
import path from "path";
import ProductCard from "../components/ProductCard";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "hats.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const hats = JSON.parse(jsonData);

  return { props: { hats } };
}

export default function Home({ hats }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Hat Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hats.map((hat) => (
          <ProductCard key={hat.id} hat={hat} />
        ))}
      </div>
    </div>
  );
}