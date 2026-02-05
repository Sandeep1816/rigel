import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-12 text-sm">

          {/* BRAND */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Rigel Trade Fairs & Exhibitions
            </h4>
            <p className="leading-relaxed">
              Organizers of professionally managed trade fairs and exhibitions
              connecting brands, buyers, and communities across India.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/exhibitions">Our Exhibitions</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* EXHIBITIONS */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Exhibitions
            </h4>
            <ul className="space-y-2">
              <li>Mama & Kids Expo</li>
              <li>Food & Hospitality Expo</li>
              <li>Upcoming Exhibitions</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Contact
            </h4>
            <p>
              Bangalore, India
            </p>
            <p className="mt-2">
              +91 99160 02229<br />
              +91 93802 43993
            </p>
            <p className="mt-2">
              info@rigeltradefairs.com
            </p>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 mt-16 pt-6 text-center text-xs">
          © {new Date().getFullYear()} Rigel Trade Fairs & Exhibitions. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
