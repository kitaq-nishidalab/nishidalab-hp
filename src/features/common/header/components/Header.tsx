"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { ToggleLanguage } from "@/components/ToggleLanguage";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("header");

  const navItems = [
    { name: t("home"), href: "/" },
    { name: t("research"), href: "/research" },
    { name: t("members"), href: "/members" },
    { name: t("publications"), href: "/publications" },
    { name: t("contact"), href: "/contact" },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto px-4 py-3 lg:py-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo and Title */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/logo.png"
              alt="Lab Logo"
              width={100}
              height={100}
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <h1 className="text-lg font-bold lg:text-xl">{t("labName")}</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
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
              <li className="ml-2">
                <ToggleLanguage />
              </li>
            </ul>
          </nav>

          {/* Mobile Controls */}
          <div className="flex items-center space-x-4 lg:hidden">
            <ToggleLanguage />
            <button
              className="rounded-md bg-gray-100 p-2 text-gray-700 transition-colors hover:bg-gray-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? t("closeMenu") : t("openMenu")}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <nav className="lg:hidden my-1">
            <ul className="grid gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-md px-3 py-2 text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900
                      ${
                        pathname === item.href
                          ? "bg-gray-100 font-medium text-gray-900"
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
