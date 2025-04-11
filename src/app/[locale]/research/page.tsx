import { getTranslations, setRequestLocale } from "next-intl/server";
import { CenteredImageTitle } from "@/components/CenteredImageTitle";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: `${t("header.labName")} | ${t("header.research")}`,
  };
}

export default async function ResearchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  return (
    <>
      <CenteredImageTitle
        imageUrl="/robot_obi.jpg"
        title={t("research.title")}
      />
      <div className="max-w-4xl mx-auto">あああ</div>
    </>
  );
}
