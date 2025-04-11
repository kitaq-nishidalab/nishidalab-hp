"use client";

import Link from "next/link";
import { FaFacebook, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white w-full p-6">
      <div className="flex items-center justify-center gap-6">
        <p className="text-xs md:text-sm text-center">
          © 2025 NishidaLab. All rights reserved.
        </p>
        <div className="flex gap-3">
          <Link
            href="https://github.com/kitaq-nishidalab"
            target="_blank"
            aria-label="GitHub"
            className="hover:text-gray-400"
          >
            <FaGithub size={28} />
          </Link>
          <Link
            href="https://www.facebook.com/NishidaTakeshiLab"
            target="_blank"
            aria-label="Facebook"
            className="hover:text-gray-400"
          >
            <FaFacebook size={28} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
