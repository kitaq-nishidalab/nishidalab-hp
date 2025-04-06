"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export const ToggleLanguage = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // 明示的に表示順を指定
  const locales = ["ja", "en"];

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <div className="flex items-center rounded-full bg-gray-100 p-1 text-xs md:text-sm">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          disabled={loc === locale}
          className={`rounded-full px-2 py-1 transition-all ${
            loc === locale
              ? "bg-white font-medium text-gray-800 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
          aria-label={`Switch to ${loc.toUpperCase()} language`}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
