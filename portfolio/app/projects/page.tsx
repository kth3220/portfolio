import Link from "next/link";
import ImageFrame from "@/components/ImageFrame";

const projects = [
  {
    slug: "aura",
    title: "Aura.ai",
    summary: "AI 기반 패션 코디 추천 챗봇 서비스",
    featured: true,
    image: "aura-main.png",
  },
  {
    slug: "market",
    title: "MarketUpdate",
    summary: "실시간 채팅 기반 중고 거래 플랫폼",
    image: "market-main-long.png",
  },
  {
    slug: "profit",
    title: "ProfitPilot",
    summary: "AI 투자 시뮬레이션 웹 서비스",
    image: "profit-main.png",
  },
  {
    slug: "spa",
    title: "Vanilla JS SPA",
    summary: "프레임워크 없이 구현한 SPA",
    image: "vanilla-main.png",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            프로젝트
          </h1>
          <p className="text-gray-600 mt-4">
            대표 프로젝트를 상세 페이지로 정리했습니다.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={`p-6 rounded-2xl border bg-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
                  project.featured ? "border-blue-200 shadow-lg" : "border-gray-200"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-semibold text-blue-600">
                    {project.featured ? "대표 프로젝트" : "Project"}
                  </div>
                </div>
                <ImageFrame
                  src={`/${project.image}`}
                  alt={`${project.title} 대표 화면`}
                  className="h-44"
                  fit="contain"
                  showLoading={false}
                />
                <h2 className="mt-4 text-xl font-semibold text-gray-900">
                  {project.title}
                </h2>
                <p className="text-gray-600 mt-2 text-sm">{project.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
