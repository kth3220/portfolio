"use client";

export default function DevelopmentPhilosophy() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <p className="text-sm font-semibold text-blue-600">Philosophy</p>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            개발 철학
          </h2>
          <div className="text-xl text-gray-700 leading-relaxed space-y-4">
            <p>
              프론트엔드 개발에서 가장 중요하게 생각하는 것은 사용자 경험과 코드 구조입니다.
            </p>
            <p>
              사용자가 자연스럽게 사용할 수 있는 UI를 만들고 동시에 유지보수가 가능한 코드 구조를 만드는 것을
              목표로 개발하고 있습니다.
            </p>
            <p>
              앞으로도 사용자 경험과 확장 가능한 코드 구조를 함께 고려하는
              프론트엔드 개발자가 되는 것을 목표로 하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
