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
  const t = useTranslations("nav");

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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const header = document.getElementById("main-header");
      if (isMenuOpen && header && !header.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header
      id="main-header"
      className="sticky top-0 z-50 w-full bg-white shadow-md"
    >
      <div className="container mx-auto px-4 py-3 md:py-4">
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
            <h1 className="text-lg font-bold md:text-xl">{t("labName")}</h1>
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

          {/* Tablet Navigation (Medium screens) */}
          <nav className="hidden md:block lg:hidden">
            <ul className="flex items-center space-x-4">
              {navItems.slice(0, 3).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative py-2 text-sm text-gray-700 transition-colors hover:text-gray-900
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
              <li>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label={isMenuOpen ? t("closeMenu") : t("openMenu")}
                  className="flex items-center space-x-1 rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-700 transition-colors hover:bg-gray-200"
                >
                  <span>More</span>
                  {isMenuOpen ? (
                    <X className="h-4 w-4" />
                  ) : (
                    <Menu className="h-4 w-4" />
                  )}
                </button>
              </li>
              <li className="ml-2">
                <ToggleLanguage />
              </li>
            </ul>
          </nav>

          {/* Mobile Controls */}
          <div className="flex items-center space-x-4 md:hidden">
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
          <nav className="mt-4 border-t border-gray-100 pt-4 md:hidden">
            <ul className="grid gap-3 pb-4">
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

        {/* Tablet Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute right-4 mt-2 hidden w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 md:block lg:hidden">
            <div className="py-1">
              {navItems.slice(3).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900
                    ${
                      pathname === item.href
                        ? "bg-gray-50 font-medium text-gray-900"
                        : ""
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
