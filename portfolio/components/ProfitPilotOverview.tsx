"use client";

export default function ProfitPilotOverview() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-emerald-100/30 rounded-2xl blur-2xl" />
              <div className="relative bg-white rounded-2xl flex items-center justify-center border-2 border-gray-200 p-12 shadow-lg">
                <img
                  src="/profit-main.png"
                  alt="주식 매매 화면"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-emerald-600">ProfitPilot</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                프로젝트 개요
              </h2>
              <p className="text-xl text-gray-700 font-semibold mb-4">
                AI 투자 시뮬레이션 웹 서비스
              </p>
              <p className="text-gray-600 leading-relaxed">
                AI 챗봇과 대화하며 가상 주식을 매매하고,
                실시간 시세/거래 내역/수익률을 확인할 수 있는 서비스입니다.
              </p>
            </div>

            <div className="space-y-2 text-gray-700">
              <p className="font-semibold">담당 역할 (Frontend 중심)</p>
              <p className="text-sm text-gray-600">
                UI/UX 기획 및 화면 설계(Figma) 주도
              </p>
              <p className="text-sm text-gray-600">
                홈/마켓/포트폴리오/리더보드/AI 챗봇 화면 구현
              </p>
              <p className="text-sm text-gray-600">
                실시간 데이터 연동 및 상태 동기화
              </p>
              <p className="text-sm text-gray-600">
                다크/라이트 테마 전환, Toast/피드백 UX 구현
              </p>
              <p className="text-sm text-gray-600">
                공통 스타일 구조 정리 및 인터랙션 일관성 개선
              </p>
            </div>

            <div className="text-sm text-gray-600">
              사용 기술: JavaScript (ES Modules) / Flask / Chart.js / HTML/CSS
            </div>

            <div className="p-4 rounded-lg bg-emerald-50 border-l-4 border-emerald-600 text-sm text-emerald-900">
              임팩트: 거래 내역과 수익률을 한 화면에 묶어 학습 흐름을 자연스럽게 만들었습니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

