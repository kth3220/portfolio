"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import ProjectImageGallery from "@/components/ProjectImageGallery";
import ProjectToc from "@/components/ProjectToc";
import ImageFrame from "@/components/ImageFrame";

const projectOrder = ["aura", "market", "profit", "spa"] as const;

const tocSections = [
  { id: "overview", label: "프로젝트 개요" },
  { id: "tech", label: "기술 스택" },
  { id: "features", label: "주요 기능" },
  { id: "architecture", label: "아키텍처" },
  { id: "problems", label: "문제 해결" },
  { id: "learnings", label: "배운 점" },
];

const projectData: Record<
  string,
  {
    title: string;
    subtitle: string;
    overview: string[];
    tech: { label: string; items: string[] }[];
    features: string[];
    architecture: string[];
    problems: { problem: string; solution: string; result: string }[];
    learnings: string[];
    links?: { label: string; href: string }[];
    images?: { label: string; filename: string }[];
    summary: { label: string; value: string }[];
    tags: string[];
  }
> = {
  aura: {
    title: "Aura.ai",
    subtitle: "AI 기반 패션 코디 추천 챗봇",
    overview: [
      "사용자의 입력과 날씨, 위치, 스타일 정보를 기반으로 코디를 추천합니다.",
      "Next.js 프론트엔드와 FastAPI 서버를 연동해 구현했습니다.",
    ],
    tech: [
      { label: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS"] },
      { label: "State", items: ["Zustand"] },
      { label: "Backend", items: ["FastAPI"] },
      { label: "AI", items: ["OpenAI API"] },
    ],
    features: [
      "챗봇 기반 코디 추천",
      "스타일 선택 모달",
      "추천 결과 카드 UI",
    ],
    architecture: [
      "User → Next.js Frontend",
      "Frontend → FastAPI Server",
      "FastAPI → OpenAI API",
      "Response Data → Zustand Store",
      "Store → UI Rendering",
    ],
    problems: [
      {
        problem: "GPT 응답 지연",
        solution: "비동기 요청 구조 개선 및 로딩 UI 추가",
        result: "체감 대기 시간을 줄이고 사용자 경험을 개선했습니다.",
      },
      {
        problem: "SSR 환경 window 접근 오류",
        solution: "dynamic import로 클라이언트 전용 실행",
        result: "SSR 환경에서도 안정적으로 렌더링했습니다.",
      },
      {
        problem: "GPT JSON 구조 불안정",
        solution: "응답 파싱 및 스키마 검증 로직 추가",
        result: "추천 카드 렌더링 안정성을 확보했습니다.",
      },
    ],
    learnings: [
      "AI 응답 데이터를 프론트엔드 상태로 안정적으로 관리하는 방법",
      "챗봇 UI 구조 설계와 상태 관리 흐름 경험",
    ],
    links: [
      { label: "Live Demo", href: "https://aura-ai-three-kappa.vercel.app/" },
      { label: "GitHub", href: "https://github.com/kth3220/aura-ai" },
    ],
    images: [
      { label: "메인 화면", filename: "aura-main.png" },
      { label: "반응형 메인", filename: "aura-main-long.png" },
      { label: "스타일 선택 모달", filename: "aura-modal-style.png" },
      { label: "채팅 결과", filename: "aura-chat-result.png" },
      { label: "다크 모드", filename: "aura-chat-dark.png" },
      { label: "마이페이지", filename: "aura-mypage.png" },
    ],
    summary: [
      { label: "형태", value: "개인 프로젝트" },
      { label: "역할", value: "기획 · 디자인 · 프론트엔드 · 백엔드" },
      { label: "핵심", value: "AI 추천 데이터 흐름 설계" },
    ],
    tags: ["Next.js", "FastAPI", "OpenAI API", "Zustand"],
  },
  market: {
    title: "MarketUpdate",
    subtitle: "실시간 채팅 기반 중고 거래 플랫폼",
    overview: [
      "사용자가 상품을 등록하고 채팅으로 거래하는 서비스입니다.",
      "Figma로 UI 구조를 설계한 뒤 React 컴포넌트로 구현했습니다.",
    ],
    tech: [
      { label: "Frontend", items: ["React", "TypeScript"] },
      { label: "Backend", items: ["Firebase"] },
    ],
    features: ["상품 등록", "상품 상세", "실시간 채팅"],
    architecture: [
      "Client → Firebase Realtime DB",
      "Realtime DB → UI 업데이트",
    ],
    problems: [
      {
        problem: "채팅 데이터 실시간 반영 지연",
        solution: "Realtime DB 리스너 기반으로 즉시 반영",
        result: "메시지 지연을 최소화했습니다.",
      },
    ],
    learnings: [
      "실시간 데이터 흐름 설계 경험",
      "컴포넌트 단위 UI 구현 역량",
    ],
    images: [
      { label: "메인 화면", filename: "market-main-long.png" },
      { label: "게시글 작성", filename: "market-post-create.png" },
      { label: "게시글 상세", filename: "market-post-detail.png" },
      { label: "채팅", filename: "market-chat.png" },
      { label: "공지사항", filename: "market-notice.png" },
      { label: "마이페이지(프로필)", filename: "market-mypage-profile.png" },
      { label: "마이페이지(목록)", filename: "market-mypage-list.png" },
    ],
    summary: [
      { label: "형태", value: "팀 프로젝트" },
      { label: "역할", value: "프론트엔드 40%" },
      { label: "핵심", value: "실시간 채팅 UI 구현" },
    ],
    tags: ["React", "Firebase", "Realtime DB", "Chat"],
  },
  profit: {
    title: "ProfitPilot",
    subtitle: "AI 투자 시뮬레이션 웹 서비스",
    overview: [
      "챗봇과 대화하며 주식 매매를 진행하고 수익률을 확인합니다.",
      "대화형 인터페이스로 투자 전략 학습 경험을 제공합니다.",
    ],
    tech: [
      { label: "Frontend", items: ["React", "TypeScript"] },
      { label: "UI", items: ["Chart", "Dashboard"] },
    ],
    features: ["주식 매매", "거래 내역", "수익률 분석"],
    architecture: [
      "Client 상태 → 거래/수익률 계산",
      "분석 결과 → UI 렌더링",
    ],
    problems: [
      {
        problem: "정보 밀도가 높은 화면 구성",
        solution: "핵심 지표를 요약 카드와 차트로 분리",
        result: "시각적 부담을 줄이고 흐름을 단순화했습니다.",
      },
    ],
    learnings: [
      "데이터 중심 대시보드 UI 설계",
      "사용자 흐름을 고려한 화면 구조화",
    ],
    images: [
      { label: "메인 화면", filename: "profit-main.png" },
      { label: "다크 모드", filename: "profit-main-dark.png" },
      { label: "포트폴리오", filename: "profit-portfolio.png" },
      { label: "거래 화면", filename: "profit-trading.png" },
      { label: "거래 내역", filename: "profit-trades.png" },
      { label: "리더보드", filename: "profit-leaderboard.png" },
      { label: "AI 챗봇", filename: "profit-chatbot.png" },
    ],
    summary: [
      { label: "형태", value: "개인 프로젝트" },
      { label: "역할", value: "UI/로직 설계" },
      { label: "핵심", value: "투자 시뮬레이션 UX" },
    ],
    tags: ["React", "TypeScript", "Chart", "Dashboard"],
  },
  spa: {
    title: "Vanilla JS SPA",
    subtitle: "프레임워크 없이 구현한 SPA",
    overview: [
      "라우팅, 상태 관리, UI 렌더링을 순수 JavaScript로 직접 구현했습니다.",
      "프레임워크 내부 동작을 이해하고 구조 설계 감각을 강화했습니다.",
    ],
    tech: [
      { label: "Core", items: ["JavaScript", "History API"] },
      { label: "Pattern", items: ["Store", "Observer", "Pub-Sub"] },
    ],
    features: ["라우팅", "상태 관리", "UI 렌더링"],
    architecture: [
      "History API 기반 라우터",
      "Global Store + Observer",
      "상태 변경 → UI 렌더링",
    ],
    problems: [
      {
        problem: "렌더링 중복 발생",
        solution: "구독 기반 업데이트로 개선",
        result: "불필요한 렌더링을 줄였습니다.",
      },
    ],
    learnings: [
      "프레임워크 구조에 대한 이해",
      "문제 분해와 설계 역량 향상",
    ],
    images: [
      { label: "메인 화면", filename: "vanilla-main.png" },
      { label: "검색/수정", filename: "vanilla-edit.png" },
    ],
    summary: [
      { label: "형태", value: "개인 프로젝트" },
      { label: "역할", value: "구조 설계" },
      { label: "핵심", value: "SPA 핵심 기능 구현" },
    ],
    tags: ["JavaScript", "Router", "Store"],
  },
};

export default function ProjectDetailPage() {
  const params = useParams();
  const rawSlug = params?.slug;
  const slugValue = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;
  const slug = String(slugValue ?? "")
    .trim()
    .toLowerCase()
    .split("?")[0]
    .split("#")[0];
  const project = projectData[slug];
  const currentIndex = projectOrder.indexOf(
    slug as (typeof projectOrder)[number]
  );
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;
  const nextSlug = projectOrder[(safeIndex + 1) % projectOrder.length];
  const nextProject = projectData[nextSlug];

  if (!project) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center text-gray-600 space-y-2">
          <p>프로젝트를 찾을 수 없습니다.</p>
          <p className="text-xs">slug: {slug || "(empty)"}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="text-sm text-blue-600 hover:underline">
            홈으로
          </Link>
          <Link
            href="/projects"
            className="text-sm text-gray-600 hover:text-blue-600"
          >
            프로젝트 목록
          </Link>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            {project.title}
          </h1>
          <p className="text-gray-600 mt-2">{project.subtitle}</p>

          {project.links && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-semibold hover:border-blue-600 hover:text-blue-700"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.summary.map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-xl border border-gray-200 bg-gray-50"
              >
                <p className="text-xs text-gray-500">{item.label}</p>
                <p className="font-semibold text-gray-900 mt-1">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">주요 화면</h2>
          <div className="mt-6">
            <ProjectImageGallery images={project.images} />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">
          <aside className="hidden lg:block sticky top-24 self-start">
            <ProjectToc sections={tocSections} />
          </aside>

          <div className="space-y-12">
            <div id="overview">
              <h2 className="text-2xl font-bold text-gray-900">
                프로젝트 개요
              </h2>
              <div className="mt-4 space-y-2 text-gray-700">
                {project.overview.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>

            <div id="tech">
              <h2 className="text-2xl font-bold text-gray-900">기술 스택</h2>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.tech.map((group) => (
                  <div
                    key={group.label}
                    className="p-4 rounded-xl border border-gray-200"
                  >
                    <p className="font-semibold text-gray-900">
                      {group.label}
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      {group.items.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div id="features">
              <h2 className="text-2xl font-bold text-gray-900">주요 기능</h2>
              <div className="mt-4 text-gray-700 space-y-2">
                {project.features.map((item) => (
                  <p key={item}>• {item}</p>
                ))}
              </div>
            </div>

            <div id="architecture">
              <h2 className="text-2xl font-bold text-gray-900">아키텍처</h2>
              <div className="mt-4 text-gray-700 space-y-2">
                {project.architecture.map((item) => (
                  <p key={item}>• {item}</p>
                ))}
              </div>

              {slug === "aura" && (
                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-blue-600 mb-3">
                      Architecture Diagram
                    </p>
                    <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
                      <ImageFrame
                        src="/aura-architecture-diagram.png"
                        alt="Aura.ai 아키텍처 다이어그램"
                        className="h-72"
                        fit="contain"
                      />
                    </div>
                  </div>
                  <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                    <p className="text-xs font-semibold text-blue-700 mb-3">
                      Flow
                    </p>
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
              )}
            </div>

            <div id="problems">
              <h2 className="text-2xl font-bold text-gray-900">문제 해결</h2>
              <div className="mt-4 space-y-4">
                {project.problems.map((item) => (
                  <div
                    key={item.problem}
                    className="p-4 rounded-xl border border-gray-200"
                  >
                    <p className="font-semibold text-gray-900">
                      {item.problem}
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      해결: {item.solution}
                    </p>
                    <p className="text-gray-600 text-sm">결과: {item.result}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="learnings">
              <h2 className="text-2xl font-bold text-gray-900">배운 점</h2>
              <div className="mt-4 space-y-2 text-gray-700">
                {project.learnings.map((item) => (
                  <p key={item}>• {item}</p>
                ))}
              </div>
            </div>

            <div className="mt-6 p-6 rounded-2xl border border-gray-200 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900">
                이 프로젝트가 마음에 드셨나요?
              </h3>
              <p className="text-gray-600 mt-2">
                자세한 구현 내용이나 문의가 있으시면 연락 주세요.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="mailto:dddd3220@naver.com"
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
                >
                  이메일 문의
                </a>
                <a
                  href="/"
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-900 text-sm font-semibold hover:border-blue-600 hover:text-blue-700"
                >
                  홈으로 돌아가기
                </a>
              </div>
            </div>

            <div className="mt-6 p-6 rounded-2xl border border-gray-200 bg-white">
              <p className="text-sm text-gray-500">Next Project</p>
              <h3 className="text-lg font-bold text-gray-900 mt-2">
                {nextProject.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                {nextProject.subtitle}
              </p>
              <Link
                href={`/projects/${nextSlug}`}
                className="inline-flex mt-4 px-4 py-2 rounded-lg border border-gray-300 text-gray-900 text-sm font-semibold hover:border-blue-600 hover:text-blue-700"
              >
                다음 프로젝트 보기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}





