import Head from "next/head";

export default function ProductPage({ product }) {
  return (
    <>
      <Head>
        <title>{product.name} - Simple Shop</title>
        <meta name="description" content={`Buy ${product.name} for just $${product.price.toFixed(2)}.`} />
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-md mt-4" />
        <p className="text-lg text-gray-600 mt-2">${product.price.toFixed(2)}</p>
      </div>
    </>
  );
}