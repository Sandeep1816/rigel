"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/rigel-logo.png"
            alt="Rigel Trade Fairs"
            width={140}
            height={50}
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/about">About</Link>
          <Link href="/exhibitions">Exhibitions</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col space-y-4 animate-slideDown w-full">
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/exhibitions" onClick={() => setOpen(false)}>Exhibitions</Link>
          <Link href="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
