"use client";

export default function MarketUpdateProblem() {
  const problems = [
    {
      problem: "마이페이지 작성글 목록이 비어 보이던 문제",
      solution: "/mypage/my-product 응답 구조에 맞춰 바인딩 로직을 수정했습니다.",
      impact: "작성글 목록이 정상 렌더링되어 탐색 흐름이 개선되었습니다.",
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-cyan-600">MarketUpdate</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
          문제 해결
        </h2>
        <p className="mt-3 text-gray-600">
          실제 서비스 흐름에서 발생한 이슈를 해결했습니다.
        </p>

        <div className="space-y-6">
          {problems.map((item) => (
            <div
              key={item.problem}
              className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-cyan-200 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.problem}
              </h3>
              <p className="text-gray-600 text-sm">
                <span className="font-semibold text-cyan-600">해결 </span>
                {item.solution}
              </p>
              <p className="text-gray-600 text-sm mt-2">
                <span className="font-semibold text-cyan-600">결과 </span>
                {item.impact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
