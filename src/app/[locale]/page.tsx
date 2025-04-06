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

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description.author")}</p>
      <p>{t("description.date")}</p>
      <p>{t("description.content")}</p>
    </div>
  );
}
