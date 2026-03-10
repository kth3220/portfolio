"use client";

import ImageFrame from "@/components/ImageFrame";

export default function MarketUpdateFeature() {
  const items = [
    { title: "상품 등록", image: "market-post-create.png" },
    { title: "상품 상세", image: "market-post-detail.png" },
    { title: "채팅", image: "market-chat.png" },
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-cyan-600">MarketUpdate</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
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
          <p>상품 등록, 상품 상세 조회, 사용자 간 채팅</p>
        </div>
      </div>
    </section>
  );
}
