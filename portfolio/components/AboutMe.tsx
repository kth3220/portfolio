"use client";

export default function AboutMe() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-blue-600">About</p>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                소개
              </h2>
            </div>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p className="text-base text-gray-600">
                사용자 경험을 고려한 웹 서비스를 개발하는 프론트엔드 개발자 김태희입니다.
              </p>
              <p className="text-base text-gray-600">
                Next.js를 활용해 기획, 디자인, 프론트엔드, 백엔드 API, 배포까지 전 과정을 경험했습니다.
              </p>
              <p className="text-base text-gray-600">
                React / Next.js 기반의 컴포넌트 설계와 상태 관리 구조를 통해
                확장 가능한 UI 아키텍처를 구현하는 것에 관심이 있습니다.
              </p>
              <p className="text-base text-gray-600">
                프로젝트에서는 단순 UI 구현을 넘어
                컴포넌트 구조 설계, 상태 관리, API 데이터 흐름을 함께 고려하며 개발했습니다.
              </p>
              <p className="text-base text-gray-600">
                AI API를 활용한 프로젝트를 통해 웹 서비스와 AI 기능을 결합하는 경험을 쌓았습니다.
              </p>
            </div>
          </div>

          <div className="hidden lg:flex lg:justify-center">
            <div className="h-56 w-40 rounded-2xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center p-2">
              <img
                src="/profile-photo.jpg"
                alt="김태희 프로필 사진"
                className="h-full w-full object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
