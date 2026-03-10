"use client";

export default function SPAArchitecture() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-amber-600">Vanilla SPA</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
          아키텍처
        </h2>

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
              Global Store 구조를 만들어 상태 변경 시 UI가 자동 업데이트되도록 구현했습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
