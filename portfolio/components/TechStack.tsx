"use client";

export default function TechStack() {
  const categories = [
    {
      name: "Frontend",
      items: ["React", "Next.js", "TypeScript"],
    },
    {
      name: "State Management",
      items: ["Zustand"],
    },
    {
      name: "Backend / API",
      items: ["FastAPI", "Flask", "Firebase", "REST API", "OpenAI API"],
    },
    {
      name: "Styling",
      items: ["Tailwind CSS", "Styled Components"],
    },
    {
      name: "Tools",
      items: ["Git", "Figma"],
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-semibold text-blue-600">Tech Stack</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            기술 스택 & 사용 맥락
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category, categoryIndex) => {
            const categoryColors = [
              {
                bg: "from-blue-50 to-blue-100",
                border: "border-blue-200",
                text: "text-blue-700",
                badge: "bg-blue-100 text-blue-700",
              },
              {
                bg: "from-purple-50 to-purple-100",
                border: "border-purple-200",
                text: "text-purple-700",
                badge: "bg-purple-100 text-purple-700",
              },
              {
                bg: "from-cyan-50 to-cyan-100",
                border: "border-cyan-200",
                text: "text-cyan-700",
                badge: "bg-cyan-100 text-cyan-700",
              },
              {
                bg: "from-emerald-50 to-emerald-100",
                border: "border-emerald-200",
                text: "text-emerald-700",
                badge: "bg-emerald-100 text-emerald-700",
              },
              {
                bg: "from-amber-50 to-amber-100",
                border: "border-amber-200",
                text: "text-amber-700",
                badge: "bg-amber-100 text-amber-700",
              },
            ];
            const color = categoryColors[categoryIndex % 5];
            return (
              <div
                key={category.name}
                className={`p-8 rounded-2xl bg-gradient-to-br ${color.bg} border ${color.border} hover:shadow-lg transition-all duration-300`}
              >
                <h3 className={`text-lg font-bold ${color.text} mb-6`}>
                  {category.name}
                </h3>
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <div
                      key={item}
                      className={`px-4 py-2 rounded-lg ${color.badge} text-sm font-semibold hover:shadow-md transition-all duration-300 transform hover:scale-105 cursor-default flex items-center gap-2`}
                    >
                      <span className="inline-flex h-5 w-5 rounded-full bg-white/70 border border-white" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
