"use client";

import Link from "next/link";
import ImageFrame from "@/components/ImageFrame";

export default function ProjectSummary() {
  const projects = [
    {
      title: "Aura.ai",
      icon: "🤖",
      featured: true,
      slug: "aura",
      badge: "개인",
      image: "aura-main.png",
      role: "기획 · 디자인 · 프론트 · 백엔드 · 배포",
      stack: "Next.js · TypeScript · FastAPI · OpenAI API",
      impact:
        "AI 추천 데이터를 상태로 관리해 챗봇 → 추천 카드 UI까지의 데이터 흐름을 설계했습니다.",
    },
    {
      title: "MarketUpdate",
      icon: "🛒",
      slug: "market",
      badge: "팀",
      image: "market-main-long.png",
      role: "프론트엔드 40%",
      stack: "React · TypeScript · Firebase",
      impact:
        "Firebase Realtime DB를 활용해 실시간 채팅이 즉시 반영되는 UI를 구현했습니다.",
    },
    {
      title: "ProfitPilot",
      icon: "📈",
      slug: "profit",
      badge: "개인",
      image: "profit-main.png",
      role: "UI/로직 설계",
      stack: "React · TypeScript · Dashboard",
      impact: "투자 데이터와 수익률을 대시보드 UI로 시각화했습니다.",
    },
    {
      title: "Vanilla JS SPA",
      icon: "⚙️",
      slug: "spa",
      badge: "개인",
      image: "vanilla-main.png",
      role: "구조 설계",
      stack: "JavaScript · Router · Store",
      impact: "라우터 / 상태 관리 / 렌더링 구조를 순수 JavaScript로 구현했습니다.",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-sm font-semibold text-blue-600">Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            대표 프로젝트 스냅샷
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={`/projects/${project.slug}`}
              className={`group relative p-6 rounded-2xl border bg-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
                project.featured
                  ? "border-blue-200 shadow-lg ring-2 ring-blue-100"
                  : "border-gray-200"
              }`}
            >
              {project.featured && (
                <>
                  <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
                    Featured
                  </span>
                </>
              )}
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{project.icon}</div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                    {project.badge}
                  </span>
                </div>
              </div>

              <ImageFrame
                src={`/${project.image}`}
                alt={project.title}
                className="h-40 transition-transform duration-300 group-hover:scale-[1.02]"
                fit="contain"
              />

              <p className="mt-4 font-semibold text-gray-900">
                {project.title}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="text-xs text-gray-600 bg-gray-100 border border-gray-200 inline-flex px-2 py-1 rounded-full">
                  {project.role}
                </span>
                <span className="text-xs text-blue-700 bg-blue-50 border border-blue-100 inline-flex px-2 py-1 rounded-full transition-all duration-300 group-hover:bg-blue-100 group-hover:border-blue-200 group-hover:scale-[1.02]">
                  {project.stack}
                </span>
              </div>
              <p className="mt-3 text-xs text-gray-500 leading-relaxed">
                {project.impact}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 space-y-4 text-gray-700">
          <p>
            AI API와 웹 서비스를 결합한 프로젝트를 중심으로 사용자 인터랙션과 데이터 흐름을 고려한
            웹 애플리케이션을 구현했습니다.
          </p>
          <p>
            각 프로젝트에서 UI 설계, 상태 관리 구조, API 연동을 경험하며 서비스 구조를 구현하는 과정을
            학습했습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
