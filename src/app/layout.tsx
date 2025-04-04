import type { Metadata } from "next";
import "./globals.css";
import Header from "@/features/common/header/components/Header";
import Footer from "@/features/common/footer/components/Footer";

export const metadata: Metadata = {
  title: "西田健研究室",
  description: "北九州市立大学 西田健研究室の公式ホームページです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
