export default function Skills() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "JavaScript",
  ];

  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <div className="flex justify-center gap-6 flex-wrap">
        {skills.map((skill) => (
          <div
            key={skill}
            className="border border-gray-700 px-6 py-3 rounded-lg"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
