import type { Metadata } from "next";
import "./globals.css";
import Header from "@/features/common/header/components/Header";
import Footer from "@/features/common/footer/components/Footer";
import { setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "北九州市立大学 西田健研究室",
  description: "北九州市立大学 西田健研究室の公式ホームページです。",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // 無効な言語の場合は404ページを表示
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // SSG対応
  setRequestLocale(locale);
  // 言語ファイルの読み込み
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={notoSansJP.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
