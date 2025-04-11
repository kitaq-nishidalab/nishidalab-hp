"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export const ToggleLanguage = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const locales = ["ja", "en"];

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return;
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  const getLabel = (loc: string) => (loc === "ja" ? "日本語" : "English");

  return (
    <div className="text-sm">
      {locales.map((loc, index) => (
        <span key={loc}>
          {loc === locale ? (
            <span className="font-bold">{getLabel(loc)}</span>
          ) : (
            <button
              onClick={() => switchLocale(loc)}
              className="hover:underline"
              aria-label={`Switch to ${getLabel(loc)}`}
            >
              {getLabel(loc)}
            </button>
          )}
          {index === 0 && " / "}
        </span>
      ))}
    </div>
  );
};
