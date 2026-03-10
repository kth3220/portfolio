"use client";

export default function MarketUpdateProblem() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-cyan-600">MarketUpdate</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
          문제 해결
        </h2>

        <div className="p-8 rounded-2xl border-2 border-gray-200 bg-white">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            채팅 데이터 실시간 반영 문제
          </h3>
          <p className="text-gray-600">
            Firebase Realtime Database를 활용해 메시지가 즉시 반영되도록 구현했습니다.
          </p>
          <p className="text-gray-600 mt-2">
            <span className="font-semibold text-blue-600">결과 </span>
            채팅 지연을 줄여 사용자가 실시간 대화로 거래를 이어갈 수 있게 했습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
