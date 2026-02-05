import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/rigel-logo.png"
            alt="Rigel Trade Fairs"
            width={140}
            height={50}
          />
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/about">About</Link>
          <Link href="/exhibitions">Exhibitions</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </nav>

      </div>
    </header>
  );
}
