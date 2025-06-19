import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Django",
    "PostgreSQL"
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-black text-white"
    >
      <div className="w-full max-w-3xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="glass rounded-xl p-6 md:p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
              I am a Full Stack Developer with a passion for creating dynamic and responsive web applications. I have experience in both front-end and back-end development, allowing me to build complete solutions that deliver exceptional user experiences. My skills include HTML, CSS, JavaScript, React, Python, Django, PostgreSQL and more. I am always eager to learn new technologies and improve my skills to stay current in the ever-evolving tech landscape.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-4 hover:-translate-y-1 transition-all">
                <h3 className="text-lg font-bold mb-4">FullStack</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-lg font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 text-sm md:text-base space-y-2">
                <li>
                  <strong>M.S. in Information Technology</strong> – University of Mumbai (2022 – 2024)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management, Cloud Computing
                </li>
              </ul>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};