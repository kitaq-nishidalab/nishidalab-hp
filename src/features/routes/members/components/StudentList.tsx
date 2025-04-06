type Student = {
  grade: string;
  name: {
    ja: string;
    en: string;
  };
};

type Props = {
  students: Student[];
  sectionTitle: string;
  locale: string;
};

export default function StudentList({ students, sectionTitle, locale }: Props) {
  return (
    <section className="students-section fade-in px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">{sectionTitle}</h2>
      <div className="students-list grid gap-2">
        {students.map((student, index) => (
          <div key={index} className="student fade-in">
            <span className="grade font-medium text-blue-600 mr-2">
              {student.grade}
            </span>
            {locale === "en" ? student.name.en : student.name.ja}
          </div>
        ))}
      </div>
    </section>
  );
}
