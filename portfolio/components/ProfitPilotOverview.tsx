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
                AI 챗봇과의 대화를 통해 가상 주식 매매를 진행하고
                거래 내역과 수익률을 확인할 수 있는 투자 시뮬레이션 서비스입니다.
              </p>
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

