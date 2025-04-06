import StudentList from "@/features/routes/members/components/StudentList";
import studentsData from "@/constants/students.json";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

export default async function MemberPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  return (
    <div className="max-w-4xl mx-auto">
      <section className="staff-section fade-in px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">{t("member.staffTitle")}</h2>
        <div className="staff flex flex-col md:flex-row items-center gap-6">
          <Image
            src="/staff.jpg"
            alt="教授の写真"
            width={200}
            height={200}
            priority
          />
          <div className="staff-info">
            <span className="staff-title text-sm text-gray-500">
              {t("member.staffPosition")}
            </span>
            <h3 className="staff-name text-xl font-semibold">西田 健</h3>
            <p className="staff-bio mt-2 text-sm text-gray-700">
              2002年，九州工業大学博士（工学）．2002年，九州工業大学
              助教．2013年，九州工業大学 准教授．2018年，LORIA研究所
              客員研究員． 2018年，サレント大学 客員研究員．2019年，KiQ
              Robotics（株）取締役．2020年，九州工業大学 特任教授．
              2021年，Nishida Lab 代表．2022年，北九州市立大学
              教授．2024年，（株）ろぼあぷり 代表取締役．
            </p>
          </div>
        </div>
      </section>

      <StudentList
        students={studentsData}
        sectionTitle={t("member.studentsTitle")}
      />
    </div>
  );
}
