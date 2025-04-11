import { getTranslations, setRequestLocale } from "next-intl/server";
import { CenteredImageTitle } from "@/components/CenteredImageTitle";
import Image from "next/image";

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
      <section className="px-4 py-8 max-w-4xl mx-auto space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            {t("research.visionTitle")}
          </h2>
          <p className="text-base leading-relaxed">{t("research.vision")}</p>
        </div>

        {["pathPlanning", "measurement3D"].map((key) => (
          <div key={key} className="space-y-2">
            <h3 className="text-xl font-semibold">
              {t(`research.${key}.title`)}
            </h3>
            <Image
              src={`/${key}.png`}
              alt={t(`research.${key}.title`)}
              width={800}
              height={400}
              className="w-full h-auto object-cover"
            />
            <p className="text-base leading-relaxed">
              {t(`research.${key}.desc`)}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}
