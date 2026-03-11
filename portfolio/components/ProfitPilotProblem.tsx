"use client";

export default function ProfitPilotProblem() {
  const items = [
    {
      title: "실시간 데이터 누적 렌더링",
      fix: "실시간 데이터 누적 렌더링을 제한해 성능을 안정화",
    },
    {
      title: "테마 전환 초기 깜빡임",
      fix: "테마 전환 시 초기 깜빡임을 줄여 일관된 첫 화면 제공",
    },
    {
      title: "거래/연결 상태 피드백 분산",
      fix: "거래/연결 상태 피드백을 공통 패턴으로 통일",
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-emerald-600">ProfitPilot</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          문제 해결
        </h2>
        <p className="mt-3 text-gray-600">
          실시간 데이터 환경에서 안정성을 높인 개선 사항입니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                <span className="font-semibold text-emerald-600">해결 </span>
                {item.fix}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
