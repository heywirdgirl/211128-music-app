import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="text-center md:text-left">
          <h1 className="text-lg font-bold">Simple Shop</h1>
          <p className="text-sm">123 Main Street, Your City</p>
        </div>
        <div className="text-center mt-2 md:mt-0">
          <p className="text-sm">
            📞 <Link href="tel:+1234567890" className="hover:underline">+1 234 567 890</Link>
          </p>
        </div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link href="https://facebook.com/yourpage" className="hover:underline">Facebook</Link>
          <Link href="https://shopee.com/yourstore" className="hover:underline">Shopee</Link>
        </div>
      </div>
    </header>
  );
}