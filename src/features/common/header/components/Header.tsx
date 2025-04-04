"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "トップ", href: "/" },
  { name: "研究内容", href: "/research" },
  { name: "メンバー", href: "/members" },
  { name: "研究業績", href: "/publications" },
  { name: "お問い合わせ", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when path changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="研究室ロゴ"
              width={100}
              height={100}
              className="h-15 w-auto"
            />
            <h1 className="text-xl font-bold">西田健研究室</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`relative py-2 text-gray-700 transition-colors hover:text-gray-900
                      after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left
                      after:scale-x-0 after:bg-gray-900 after:transition-transform after:duration-300
                      hover:after:scale-x-100
                      ${
                        pathname === item.href
                          ? "text-gray-900 after:scale-x-100"
                          : ""
                      }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-4 pb-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`relative block py-2 text-gray-700 transition-colors hover:text-gray-900
                      after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left
                      after:scale-x-0 after:bg-gray-900 after:transition-transform after:duration-300
                      hover:after:scale-x-100
                      ${
                        pathname === item.href
                          ? "text-gray-900 after:scale-x-100"
                          : ""
                      }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
