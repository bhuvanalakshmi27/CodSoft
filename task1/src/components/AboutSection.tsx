import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap, Target, Code } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="relative z-10 py-24 px-6">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <div className="text-center">
          <h2 className="section-heading neon-text">About Me</h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="w-56 h-56 rounded-full glass-card neon-border flex items-center justify-center overflow-hidden">
              <img
                src={profileImg}
                alt="Bhuvana Lakshmi"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 25%' }}
              />
            </div>
          </div>

          <div>
            <p className="text-lg text-foreground/80 font-rajdhani leading-relaxed mb-8">
              I am a motivated B.Tech Computer Science student with a strong interest in technology and real-world problem solving. I enjoy learning modern tools and building practical projects that enhance my skills. Passionate about web development, I continuously strive to improve and grow as a developer while creating meaningful and user-friendly applications.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  icon: GraduationCap,
                  title: "Education",
                  desc: "B.Tech in Computer Science, focused on building a strong foundation in programming, problem solving, and core technical concepts.",
                },
                {
                  icon: Target,
                  title: "Career Goals",
                  desc: "Aspiring to become a skilled software developer, focused on creating efficient and impactful solutions to real-world problems.",
                },
                {
                  icon: Code,
                  title: "Web Dev",
                  desc: "Interested in web development, modern frameworks, responsive design, and creating user-friendly digital experiences.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="glass-card neon-border-hover p-5 rounded-xl"
                >
                  <item.icon className="w-6 h-6 text-neon mb-3" />
                  <h3 className="font-orbitron text-sm font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-rajdhani leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
