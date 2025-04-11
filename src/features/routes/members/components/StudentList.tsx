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
    <section className="fade-in px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">{sectionTitle}</h2>
      <div className="grid grid-cols-2 gap-4">
        {students.map((student, index) => (
          <div key={index} className="fade-in">
            <span className="font-medium text-blue-600 mr-2">
              {student.grade}
            </span>
            {locale === "en" ? student.name.en : student.name.ja}
          </div>
        ))}
      </div>
    </section>
  );
}
