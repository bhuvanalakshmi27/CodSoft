import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Download, Award, Eye } from "lucide-react";

const CERTIFICATIONS = [
  "Tata Cybersecurity Analyst Job Simulation – Forage",
  "Quantum Fundamentals – Qubitech",
  "AWS Cloud Practitioner Essentials – AWS",
  "Agentic AI Applications – Simplilearn",
];

const ResumeSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="resume" className="relative z-10 py-24 px-6">
      <div className="container mx-auto max-w-3xl" ref={ref}>
        <div className="text-center">
          <h2 className="section-heading neon-text">Resume & Certifications</h2>
          <div className="section-divider" />
        </div>

        <div className="glass-card neon-border-hover rounded-xl p-8 text-center mb-8">
          <p className="text-foreground/70 font-rajdhani mb-6">
            View or download my resume to learn more about my experience and qualifications.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {/* Ee link resume ni kotha tab lo open chesthundhi - same neon button */}
            <a
              href="/Bhuvana_Lakshmi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button inline-flex items-center gap-2"
            >
              <Eye size={16} /> View Resume
            </a>

            {/* Okavela user ki direct download kavalante idi help avthundhi - already neon-button structure usage */}
            <a
              href="/Bhuvana_Lakshmi_Resume.pdf"
              download="Bhuvana_Lakshmi_Resume.pdf"
              className="neon-button inline-flex items-center gap-2"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>
        </div>

        <div className="glass-card neon-border-hover rounded-xl p-8">
          <h3 className="font-orbitron text-sm font-semibold tracking-widest uppercase text-neon mb-6 flex items-center gap-2">
            <Award size={16} /> Certifications
          </h3>
          <ul className="space-y-3">
            {CERTIFICATIONS.map((cert) => (
              <li
                key={cert}
                className="flex items-center gap-3 text-foreground/80 font-rajdhani"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-neon shrink-0 shadow-[0_0_6px_hsl(190_100%_50%/0.5)]" />
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;