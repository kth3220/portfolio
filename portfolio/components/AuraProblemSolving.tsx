"use client";

export default function AuraProblemSolving() {
  const problems = [
    {
      problem: "GPT 응답 지연",
      cause: "API 응답 시간이 길어 UI 반응 속도가 느려졌습니다.",
      solution:
        "비동기 요청 구조를 개선하고 로딩 상태 UI를 추가하여 사용자 경험을 개선했습니다.",
      impact: "체감 대기 시간을 줄이고 사용자 경험을 개선했습니다.",
    },
    {
      problem: "Next.js SSR window 오류",
      cause: "SSR 환경에서는 window 객체에 접근할 수 없습니다.",
      solution:
        "dynamic import를 활용하여 클라이언트 환경에서만 실행되도록 수정했습니다.",
      impact: "SSR 오류 없이 안정적으로 렌더링되도록 만들었습니다.",
    },
    {
      problem: "GPT JSON 구조 불안정",
      cause: "AI 응답 데이터 구조가 일정하지 않았습니다.",
      solution:
        "응답 데이터를 파싱해 프론트엔드에서 사용할 수 있는 일관된 데이터 구조로 변환했습니다.",
      impact: "UI에서 예외 상황을 줄이고 추천 카드 렌더링을 안정화했습니다.",
    },
    {
      problem: "상태 관리 분리로 인한 UI 흐름 복잡도 증가",
      cause: "추천 결과와 챗봇 상태가 분리되어 UI 업데이트 흐름이 복잡했습니다.",
      solution:
        "Zustand 단일 스토어 구조로 상태를 통합해 데이터 흐름을 단순화했습니다.",
      impact: "추천 카드 렌더링 흐름을 안정적으로 관리할 수 있었습니다.",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-blue-600">Aura.ai</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          문제 해결
        </h2>

        <div className="space-y-6">
          {problems.map((item) => (
            <div
              key={item.problem}
              className="p-8 rounded-2xl border-2 border-gray-200 bg-white hover:border-red-300 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.problem}
              </h3>
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">원인 </span>
                {item.cause}
              </p>
              <p className="text-gray-600 mt-2">
                <span className="font-semibold text-green-600">해결 </span>
                {item.solution}
              </p>
              <div className="mt-4 p-3 rounded-lg bg-blue-50 border border-blue-200 text-blue-900 text-sm">
                <span className="font-semibold">결과 </span>
                {item.impact}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
