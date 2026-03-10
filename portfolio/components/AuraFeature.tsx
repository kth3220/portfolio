"use client";

import ImageFrame from "@/components/ImageFrame";

export default function AuraFeature() {
  const features = [
    {
      title: "챗봇 인터페이스",
      description:
        "사용자가 자연어로 코디를 요청할 수 있도록 대화형 UI를 구현했습니다.",
      image: "aura-chat-result.png",
    },
    {
      title: "스타일 선택 기능",
      description:
        "사용자의 선호 스타일을 선택해 추천 결과에 반영하도록 설계했습니다.",
      image: "aura-modal-style.png",
    },
    {
      title: "다크 모드",
      description:
        "가독성과 몰입감을 높이기 위해 다크 모드 UI를 제공합니다.",
      image: "aura-chat-dark.png",
    },
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-blue-600">Aura.ai</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          주요 기능
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl border-2 border-gray-200 bg-white hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100"
            >
              <ImageFrame
                src={`/${feature.image}`}
                alt={feature.title}
                className="h-48"
                fit="contain"
              />
              <h3 className="text-xl font-bold mt-6 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
