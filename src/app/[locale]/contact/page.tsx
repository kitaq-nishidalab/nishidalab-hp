import { CenteredImageTitle } from "@/components/CenteredImageTitle";
import CenteredTextWithUnderline from "@/components/CenteredTextWithUnderline";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: `${t("header.labName")} | ${t("header.contact")}`,
  };
}

export default async function ContactPage({
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
        title={t("contact.title")}
      />
      <div className="p-8 md:p-16">
        <div className="space-y-5 mb-16">
          <CenteredTextWithUnderline text={t("contact.contact1")} />
          <p className="text-sm md:text-lg">
            <a
              href={`mailto:${t("contact.email")}`}
              className="text-blue-500 underline"
            >
              {t("contact.email")}
            </a>
          </p>
        </div>
        <div className="space-y-5 mb-16">
          <CenteredTextWithUnderline text={t("contact.contact2")} />
          <p className="text-sm md:text-lg">
            <a
              href={`mailto:${t("contact.email")}`}
              className="text-blue-500 underline"
            >
              {t("contact.email")}
            </a>
          </p>
        </div>
        <div className="space-y-5">
          <CenteredTextWithUnderline text={t("contact.access")} />
          <p className="text-sm md:text-lg">{t("contact.address")}</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.0062035265823!2d130.70962887585353!3d33.88949407321888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3543cbd8d8d13b4d%3A0x97af4e3ff45c8c58!2z5YyX5Lmd5bee5biC56uL5aSn5a2mIOOBsuOBs-OBjeOBruOCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1744264765560!5m2!1sja!2sjp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
