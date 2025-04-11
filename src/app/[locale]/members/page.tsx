import StudentList from "@/features/routes/members/components/StudentList";
import studentsData from "@/constants/students.json";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { CenteredImageTitle } from "@/components/CenteredImageTitle";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: `${t("header.labName")} | ${t("header.members")}`,
  };
}

export default async function MemberPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  return (
    <>
      <CenteredImageTitle imageUrl="/robot_obi.jpg" title={t("member.title")} />
      <div className="max-w-4xl mx-auto">
        <section className="fade-in px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">{t("member.staffTitle")}</h2>
          <div className="staff flex flex-col md:flex-row items-center gap-6">
            <Image
              src="/staff.jpg"
              alt="教授の写真"
              width={250}
              height={250}
              priority
            />
            <div className="staff-info">
              <h3 className="text-3xl font-semibold text-center md:text-left">
                {t("member.professorName")}
              </h3>
              <p className="text-sm text-gray-500 text-center md:text-left">
                {t("member.staffPosition")}
              </p>
              <p className="mt-2 md:mt-5 text-sm text-gray-700 bg-[#ebf3ff] p-4">
                {t("member.professorBio")}
              </p>
            </div>
          </div>
        </section>

        <StudentList
          students={studentsData}
          sectionTitle={t("member.studentsTitle")}
          locale={locale}
        />
      </div>
    </>
  );
}
