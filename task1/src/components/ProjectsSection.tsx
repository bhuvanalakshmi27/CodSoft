import { useScrollReveal } from "@/hooks/useScrollReveal";
import portfolioImg from "@/assets/project-portfolio.jpg";
import ecobinImg from "@/assets/project-ecobin.jpg";
import calculatorImg from "@/assets/project-calculator.jpg";

const PROJECTS = [
  {
    title: "Portfolio Website",
    desc: "A responsive personal portfolio built with modern web technologies featuring smooth animations and a futuristic UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: portfolioImg,
    hasButton: false,
  },
  {
    title: "Waste Management System",
    desc: "A web application that connects users with municipal authorities to manage plastic and e-waste efficiently, featuring request tracking.",
    tech: ["User Authentication", "Admin Dashboard"],
    image: ecobinImg,
    hasButton: true,
  },
  {
    title: "Responsive Calculator",
    desc: "A simple and responsive calculator application designed to perform basic arithmetic operations with a clean and user-friendly interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: calculatorImg,
    hasButton: true,
  },
];

const ProjectsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="relative z-10 py-24 px-6">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <div className="text-center">
          <h2 className="section-heading neon-text">Projects</h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="glass-card neon-border-hover rounded-xl overflow-hidden group"
            >
              <div className="h-40 bg-secondary/40 flex items-center justify-center border-b border-border/30 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="font-orbitron text-sm font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground font-rajdhani leading-relaxed mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="mono-text text-[10px] px-2 py-0.5 rounded bg-neon/10 text-neon/80 border border-neon/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
