import FullScreenCarousel from "@/features/routes/home/components/FullScreenCarousel";
import { routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ locale: string }>;
// }) {
//   const { locale } = await params;
//   const t = await getTranslations({ locale });

//   return {
//     title: t("title"),
//   };
// }

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  const images = ["/lab.jpg", "/robot_lab.png", "/campus.jpg"];
  const text = t("carousel.title");

  return (
    <div>
      <FullScreenCarousel images={images} text={text} />
    </div>
  );
}
