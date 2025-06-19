import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-black text-white"
    >
      <RevealOnScroll>
        <div className="w-full max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Cloud Platform",
                description:
                  "A cloud-based deployment platform offering seamless resource management, monitoring tools, and support for multiple languages and frameworks.",
                tech: ["React", "Python", "AWS", "Docker"]
              },
              {
                title: "E-Commerce Platform",
                description:
                  "A scalable e-commerce system featuring user authentication, shopping carts, payment gateways, and admin analytics dashboard for product management.",
                tech: ["React", "Node.js", "Stripe", "MongoDB"]
              }
            ].map((project, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-white/10 bg-white/5 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-start">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                    rel="noopener noreferrer"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};