import { i18n, Locale } from "@/i18n-config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function LocaleSwitcher({ lang }: { lang: string }) {
  const pathname = usePathname();
  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("");
  };
  return (
    <>
      {i18n.locales.map((locale, index) => {
        return (
          <button
            className={`uppercase ${
              lang === locale ? "font-bold underline" : ""
            }`}
            key={locale}
          >
            <Link href={redirectedPathname(locale)}>
              {index > 0 && <span className="pr-2 font-normal">|</span>}
              {locale}
            </Link>
          </button>
        );
      })}
    </>
  );
}
