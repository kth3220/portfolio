export default function Projects() {
  const projects = [
    {
      title: "Aura AI Chatbot",
      description: "ChatGPT 기반 AI 챗봇 서비스",
      demo: "https://aura-ai-three-kappa.vercel.app",
      github: "https://github.com/kth3220/aura-ai",
    },
  ];

  return (
    <section id="projects" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="flex justify-center">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-gray-700 p-8 rounded-xl w-96"
          >
            <h3 className="text-xl font-bold mb-3">{project.title}</h3>

            <p className="text-gray-400 mb-6">{project.description}</p>

            <div className="flex justify-center gap-4">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-4 py-2 rounded"
              >
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border px-4 py-2 rounded"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
