"use client";

export default function VanillaSPA() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/30 to-orange-100/30 rounded-2xl blur-2xl" />
              <div className="relative bg-white rounded-2xl flex items-center justify-center border-2 border-gray-200 p-12 shadow-lg">
                <img
                  src="/vanilla-main.png"
                  alt="Vanilla SPA 메인 UI"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-amber-600">Vanilla SPA</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                프로젝트 개요
              </h2>
              <p className="text-xl text-gray-700 font-semibold mb-4">
                Vanilla JavaScript 기반 SPA 구현 프로젝트
              </p>
              <p className="text-gray-600 mb-6">
                프레임워크 없이 SPA의 핵심 구조(라우팅 / 상태 관리 / 렌더링 흐름)를 직접 구현했습니다.
              </p>
            </div>

            <p className="text-gray-700">
              이를 통해 SPA 구조와 상태 흐름을 이해하고 웹 애플리케이션 구조에 대한 이해도를 높였습니다.
            </p>
            <p className="text-sm text-gray-600">역할: 구조 설계 / 핵심 로직 구현</p>
            <p className="text-sm text-gray-600">
              사용 기술: JavaScript / History API / Custom JSX / VDOM Diff
            </p>

            <div className="p-4 rounded-lg bg-amber-50 border-l-4 border-amber-600 text-sm text-amber-900">
              임팩트: 핵심 구조를 직접 구현하며 문제 분해 능력과 구조 설계 감각을 강화했습니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

