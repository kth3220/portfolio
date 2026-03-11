"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-4xl md:text-5xl font-bold">Thank you</div>
            <p className="text-gray-300 leading-relaxed">
              포트폴리오를 봐주셔서 감사합니다.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="space-y-4">
              <div>
                <p className="text-2xl font-semibold">김태희</p>
                <p className="text-lg text-gray-300">Frontend Developer</p>
              </div>

              <div className="grid grid-cols-1 gap-3">
                <a
                  href="https://github.com/kth3220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <span>GitHub</span>
                  <span className="text-blue-300">github.com/kth3220</span>
                </a>
                <a
                  href="mailto:dddd3220@naver.com"
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <span>Email</span>
                  <span className="text-blue-200">dddd3220@naver.com</span>
                </a>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="mailto:dddd3220@naver.com"
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition"
                >
                  이메일 보내기
                </a>
                <a
                  href="https://github.com/kth3220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-white/20 text-white text-xs font-semibold hover:border-blue-400 hover:text-blue-200 transition"
                >
                  GitHub 보기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
