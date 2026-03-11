"use client";

export default function Strength() {
  const strengths: {
    title: string;
    description: string;
    icon: string;
    extra?: string;
  }[] = [
    {
      title: "Component Architecture",
      description:
        "컴포넌트의 책임을 분리해 UI 재사용성과 유지보수성을 높였습니다. Container / Presentational 구조로 UI와 로직을 분리했습니다.",
      icon: "🧩",
    },
    {
      title: "State Management",
      description:
        "Zustand를 활용해 챗봇 상태, 사용자 정보, 추천 데이터를 분리했습니다. 이를 통해 UI 업데이트 흐름을 단순화했습니다.",
      icon: "🧠",
    },
    {
      title: "API Integration",
      description:
        "FastAPI / Flask 기반 API와 연동해 AI 추천 서비스와 웹 UI를 연결했습니다. 비동기 요청 처리와 데이터 구조 안정성을 고려했습니다.",
      icon: "🔌",
    },
    {
      title: "Performance Optimization",
      description:
        "Next.js SSR/CSR 환경에서 발생하는 문제를 해결하고 불필요한 렌더링을 줄여 UI 성능을 개선했습니다.",
      icon: "⚡",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-semibold text-blue-600">Strength</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            핵심 역량 & 작업 방식
          </h2>
          <p className="mt-3 text-gray-600">
            구조 설계, 상태 관리, 성능 개선 관점에서 역량을 정리했습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((strength, index) => {
            const gradients = [
              "from-blue-500 to-cyan-500",
              "from-purple-500 to-pink-500",
              "from-orange-500 to-red-500",
              "from-emerald-500 to-teal-500",
            ];
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {strength.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {strength.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {strength.description}
                </p>
                {strength.extra && (
                  <p className="text-gray-600 leading-relaxed text-sm mt-3">
                    {strength.extra}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
