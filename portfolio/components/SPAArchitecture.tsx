"use client";

export default function SPAArchitecture() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-amber-600">Vanilla SPA</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
          아키텍처
        </h2>
        <p className="mt-3 text-gray-600">
          SPA의 핵심 구조를 모듈 단위로 정리했습니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl border-2 border-gray-200 bg-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">라우터 구현</h3>
            <p className="text-gray-600">
              History API 기반으로 페이지 새로고침 없이 화면을 전환하도록 구현했습니다.
            </p>
          </div>
          <div className="p-8 rounded-2xl border-2 border-gray-200 bg-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">상태 관리</h3>
            <p className="text-gray-600">
              Global Store 구조를 만들어 상태 변경 시 화면이 재렌더링되도록 구현했습니다.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-amber-900 mb-6">문제 해결</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "새로고침 없이 화면 전환 필요",
                solution: "History API 기반 라우터 구현",
                result: "SPA 전환 흐름을 안정화했습니다.",
              },
              {
                title: "로그인 접근 제어 필요",
                solution: "AuthGuard + ForbiddenError 적용",
                result: "비로그인 접근을 차단했습니다.",
              },
              {
                title: "상태 변경 시 수동 갱신 부담",
                solution: "Global Store + Observer 적용",
                result: "화면 갱신 흐름을 단순화했습니다.",
              },
              {
                title: "이벤트 중복 등록 가능성",
                solution: "이벤트 위임으로 처리 비용 축소",
                result: "핸들러 관리 비용을 줄였습니다.",
              },
              {
                title: "변경된 부분만 업데이트 필요",
                solution: "VDOM diff 업데이트 적용",
                result: "부분 렌더링으로 성능 부담을 줄였습니다.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-amber-200 hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-amber-700">해결 </span>
                  {item.solution}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <span className="font-semibold text-amber-700">결과 </span>
                  {item.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
