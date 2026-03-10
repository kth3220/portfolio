"use client";

import ImageFrame from "@/components/ImageFrame";

export default function ProfitPilotFeature() {
  const items = [
    { title: "포트폴리오", image: "profit-portfolio.png" },
    { title: "거래 내역", image: "profit-trades.png" },
    { title: "AI 챗봇", image: "profit-chatbot.png" },
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-emerald-600">ProfitPilot</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          주요 기능
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-white border-2 border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <ImageFrame
                src={`/${item.image}`}
                alt={item.title}
                className="h-48"
                fit="contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-gray-700">
          <h3 className="text-xl font-bold mb-4">주요 기능 요약</h3>
          <p>주식 매매, 거래 내역 조회, 수익률 분석</p>
        </div>
      </div>
    </section>
  );
}
