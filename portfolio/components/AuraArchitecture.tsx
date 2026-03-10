"use client";

import ImageFrame from "@/components/ImageFrame";

export default function AuraArchitecture() {
  const steps = [
    "User",
    "Next.js Frontend",
    "FastAPI Server",
    "OpenAI API",
    "Response Data",
    "Zustand Store",
    "UI Rendering",
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-blue-600">Aura.ai</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          아키텍처
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-3">
            {steps.map((label, index) => (
              <div key={label}>
                <div className="p-4 rounded-lg bg-blue-50 border-2 border-blue-200 text-center">
                  <p className="font-semibold text-blue-900">{label}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="text-center text-gray-400 py-2 text-2xl">↓</div>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-6 text-gray-700">
            <div>
              <p className="text-sm font-semibold text-blue-600 mb-3">
                Architecture Diagram
              </p>
              <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
                <ImageFrame
                  src="/aura-architecture-diagram.png"
                  alt="Aura.ai 아키텍처 다이어그램"
                  className="h-64"
                  fit="contain"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                이미지 파일: aura-architecture-diagram.png
              </p>
            </div>

            <p>서비스는 Next.js 기반 프론트엔드와 FastAPI 서버로 구성되었습니다.</p>
            <p>사용자 입력은 API 서버로 전달되고 OpenAI API를 통해 추천 데이터를 생성합니다.</p>
            <p>추천 데이터는 Zustand 상태로 관리되어 UI에 반영됩니다.</p>
            <p>AI 응답을 프론트엔드 상태로 관리해 UI 업데이트 흐름을 단순화했습니다.</p>

            <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
              <p className="text-xs font-semibold text-blue-700 mb-3">Flow</p>
              <div className="flex flex-wrap items-center gap-2 text-xs text-blue-900 font-semibold">
                <span className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white border border-blue-200">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <circle cx="12" cy="8" r="3.2" />
                    <path d="M5 19c1.8-3.2 12.2-3.2 14 0" />
                  </svg>
                  User Input
                </span>
                <span className="text-blue-400">→</span>
                <span className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white border border-blue-200">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <circle cx="12" cy="12" r="8" />
                    <path d="M4 12h16M12 4c2.8 3 2.8 13 0 16M12 4c-2.8 3-2.8 13 0 16" />
                  </svg>
                  API Request
                </span>
                <span className="text-blue-400">→</span>
                <span className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white border border-blue-200">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="5" y="7" width="14" height="10" rx="2" />
                    <path d="M9 11h.01M15 11h.01M8 17v2M16 17v2M12 4v3" />
                  </svg>
                  AI Response
                </span>
                <span className="text-blue-400">→</span>
                <span className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white border border-blue-200">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M6 10c0-3.5 12-3.5 12 0s-12 3.5-12 0Z" />
                    <path d="M6 10v6c0 2 12 2 12 0v-6" />
                  </svg>
                  Zustand Store
                </span>
                <span className="text-blue-400">→</span>
                <span className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white border border-blue-200">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M4 7h16v10H4z" />
                    <path d="M7 10h6M7 13h10" />
                  </svg>
                  UI Update
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
