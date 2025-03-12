import Link from "next/link";

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
          <p className="text-sm">
            📞 <Link href="tel:+1234567890" className="hover:underline">+1 234 567 890</Link>
          </p>
        </div>

        {/* Right - Social Links */}
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link href="https://facebook.com/" target="_blank" className="flex items-center gap-1 hover:underline">
            {/* Facebook SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12.07C22 6.52 17.52 2 12 2S2 6.52 2 12.07c0 4.93 3.54 9.04 8.2 9.92v-7.02H7.9V12.07h2.3V9.71c0-2.27 1.36-3.53 3.44-3.53.98 0 2.01.17 2.01.17v2.2h-1.13c-1.12 0-1.47.69-1.47 1.4v1.68h2.5l-.4 2.9h-2.1v7.02c4.66-.88 8.2-4.99 8.2-9.92z"/>
            </svg>
            Facebook
          </Link>

          <Link href="https://shopee.com/" target="_blank" className="flex items-center gap-1 hover:underline">
            {/* Shopee SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 2a3 3 0 0 0-3 3v1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2V5a3 3 0 0 0-3-3H9zm0 2h6a1 1 0 0 1 1 1v1H8V5a1 1 0 0 1 1-1zm-5 5h16v12H4V9zm8 2c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 2c1.11 0 2 .89 2 2s-.89 2-2 2-2-.89-2-2 .89-2 2-2z"/>
            </svg>
            Shopee
          </Link>
        </div>

      </div>
    </header>
  );
}