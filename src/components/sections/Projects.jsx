import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
              <p className="text-gray-300 mb-4">
                A cloud-based deployment platform offering seamless resource
                management, monitoring tools, and support for multiple languages
                and frameworks.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Python", "AWS", "Docker"].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
              <p className="text-gray-300 mb-4">
                A scalable e-commerce system featuring user authentication, shopping carts, payment gateways, and admin analytics dashboard for product management.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "Stripe", "MongoDB"].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};