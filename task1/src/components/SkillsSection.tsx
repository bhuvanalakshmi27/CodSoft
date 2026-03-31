import { useScrollReveal } from "@/hooks/useScrollReveal";

const SKILL_GROUPS = [
  {
    label: "Frontend",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    label: "Backend",
    skills: ["Node.js"],
  },
  {
    label: "Database",
    skills: ["MongoDB", "MySQL"],
  },
  {
    label: "Tools",
    skills: ["GitHub", "VS Code"],
  },
  {
    label: "Soft Skills",
    skills: ["Communication", "Leadership", "Presentation"],
  },
];

const SkillsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="relative z-10 py-24 px-6">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <div className="text-center">
          <h2 className="section-heading neon-text">Skills</h2>
          <div className="section-divider" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.label}
              className="glass-card neon-border-hover rounded-xl p-6"
            >
              <h3 className="font-orbitron text-xs font-semibold tracking-widest uppercase text-neon mb-4">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="mono-text text-xs px-3 py-1.5 rounded-md bg-secondary/60 text-foreground/80 border border-border/50 transition-all duration-300 hover:border-neon/40 hover:shadow-[0_0_12px_hsl(190_100%_50%/0.2)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
