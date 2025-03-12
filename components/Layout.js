import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4">
        <nav className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/">
            <a className="text-2xl font-bold">Hat Shop</a>
          </Link>
          <div className="space-x-6">
            <Link href="/">
              <a className="hover:text-gray-300 transition-colors">Home</a>
            </Link>
            <Link href="/products">
              <a className="hover:text-gray-300 transition-colors">Products</a>
            </Link>
            <button className="hover:text-gray-300 transition-colors">
              Cart (0)
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400">Your premier destination for quality hats since 2023.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Customer Service</h3>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-white">Returns</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
            <p>&copy; 2023 Hat Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}