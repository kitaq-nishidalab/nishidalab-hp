import { getTranslations, setRequestLocale } from "next-intl/server";
import rawPublications from "@/constants/publications.json";
import PublicationList from "@/features/routes/publications/components/PublicationList";
import { CenteredImageTitle } from "@/components/CenteredImageTitle";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: `${t("header.labName")} | ${t("header.publications")}`,
  };
}

type Publication = {
  title: string;
  authors: string[];
  category: string;
  year: number;
  venue: string;
  link?: string;
};

export default async function PublicationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  const publications: Publication[] = rawPublications;

  const categories = [...new Set(publications.map((item) => item.category))];
  const years = [...new Set(publications.map((item) => item.year))].sort(
    (a, b) => b - a
  );

  const categoryLabels = {
    journal: t("publications.categories.journal"),
    conference: t("publications.categories.conference"),
    domestic: t("publications.categories.domestic"),
  };

  return (
    <>
      <CenteredImageTitle
        imageUrl="/robot_obi.jpg"
        title={t("publications.title")}
      />
      <div className="max-w-5xl mx-auto p-6">
        <PublicationList
          publications={publications}
          categories={categories}
          years={years}
          labelAll={t("publications.all")}
          labelCategory={t("publications.filterByCategory")}
          labelYear={t("publications.filterByYear")}
          categoryLabels={categoryLabels}
        />
      </div>
    </>
  );
}
