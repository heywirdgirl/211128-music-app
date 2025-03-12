export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left - Store Info */}
        <div className="text-center md:text-left">
          <h1 className="text-lg font-bold">Simple Shop</h1>
          <p className="text-sm">123 Main Street, Your City</p>
        </div>

        {/* Middle - Contact */}
        <div className="text-center">
          <p className="text-sm">📞 <a href="tel:+1234567890" className="hover:underline">+1 234 567 890</a></p>
        </div>

        {/* Right - Social Links */}
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="https://facebook.com/yourpage" target="_blank" className="hover:underline">Facebook</a>
          <a href="https://shopee.com/yourstore" target="_blank" className="hover:underline">Shopee</a>
        </div>

      </div>
    </header>
  );
}