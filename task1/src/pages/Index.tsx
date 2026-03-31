import ParticleCanvas from "@/components/ParticleCanvas";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="relative min-h-screen">
    <ParticleCanvas />
    {/* Gradient overlay on particles */}
    <div
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, hsl(230 60% 12% / 0.3) 0%, hsl(230 60% 8% / 0.8) 70%, hsl(230 60% 8%) 100%)",
      }}
    />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ResumeSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
