"use client";

export default function MarketUpdateOverview() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/30 to-blue-100/30 rounded-2xl blur-2xl" />
              <div className="relative bg-white rounded-2xl flex items-center justify-center border-2 border-gray-200 p-12 shadow-lg">
                <img
                  src="/market-main-long.png"
                  alt="상품 리스트 화면"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-cyan-600">
                MarketUpdate
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                프로젝트 개요
              </h2>
              <p className="text-xl text-gray-700 font-semibold mb-4">
                중고 거래 플랫폼 웹 서비스
              </p>
              <p className="text-gray-600 leading-relaxed">
                사용자가 상품을 등록하고 다른 사용자와 채팅을 통해 거래를 진행할
                수 있는 서비스입니다.
              </p>
            </div>

            <div className="space-y-2 text-gray-700">
              <p className="font-semibold">기여도</p>
              <p>팀 프로젝트</p>
              <p>프론트엔드 개발 40% (프론트 2인 중 1명)</p>
              <p className="font-semibold mt-3">담당 역할</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Figma로 전 화면 UX/UI 설계 A~Z 수행</li>
                <li>• React 컴포넌트 기반 화면 구현</li>
                <li>• 채팅 UI 구현 및 채팅 새 창 분리 기능 개발</li>
                <li>• 관심상품(좋아요) API 연동</li>
                <li>• 마이페이지 작성글 목록 데이터 바인딩</li>
                <li>• FAQ / Notice / 푸터 UI 제작</li>
              </ul>
            </div>

            <div className="text-sm text-gray-600">
              사용 기술: React / Node.js / Redux Toolkit / Spring Boot /
              WebSocket(STOMP)
            </div>

            <div className="p-4 rounded-lg bg-cyan-50 border-l-4 border-cyan-600 text-sm text-cyan-900">
              임팩트: 상품 목록/상세/채팅을 분리해 화면 전환 흐름과 가독성을 개선했습니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
