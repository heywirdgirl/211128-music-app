import ProductCard from '/components/ProductCard';

export default function Products({ products }) {
  return (
    // Remove the container div and keep just the content:
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Hats Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* ...existing product cards... */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('/data/products.json');
  const data = await res.json();

  return {
    props: {
      products: data.products,
    },
  };
}