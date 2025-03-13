import fs from "fs";
import path from "path";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "public/products.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const products = JSON.parse(jsonData);

  const paths = products.map((product) => ({
    params: { id: product.id.toString() }
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "public/products.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const products = JSON.parse(jsonData);

  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) return { notFound: true };

  return { props: { product } };
}

export default function ProductPage({ product }) {
  const router = useRouter();

  if (router.isFallback) return <p className="text-center mt-20 text-xl">Loading...</p>;

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.image,
    "description": `Buy ${product.name} for just $${product.price.toFixed(2)}.`,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": product.price,
      "availability": "https://schema.org/InStock",
      "url": `https://yourwebsite.com/products/${product.id}`
    }
  };

  return (
    <>
      <Head>
        <title>{product.name} - Simple Shop</title>
        <meta name="description" content={`Buy ${product.name} for just $${product.price.toFixed(2)}.`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <div className="relative w-full h-60 mt-4">
          <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="rounded-md" />
        </div>
        <p className="text-lg text-gray-600 mt-2">${product.price.toFixed(2)}</p>
      </div>
    </>
  );
}