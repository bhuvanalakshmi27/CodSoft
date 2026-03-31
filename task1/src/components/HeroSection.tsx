import { useState, useEffect } from "react";

const TITLES = [
  "Future Engineer",
  "Passionate Developer",
];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(charIndex + 1), 80);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(charIndex - 1), 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTitleIndex((titleIndex + 1) % TITLES.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  const displayedText = TITLES[titleIndex].substring(0, charIndex);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center px-6"
    >
      <div className="relative z-10 max-w-3xl">
        <p className="mono-text text-sm tracking-[0.3em] text-muted-foreground mb-4 uppercase">
          Hello, I'm
        </p>
        <h1 className="font-orbitron text-4xl sm:text-5xl md:text-7xl font-bold mb-6 neon-text text-balance leading-tight">
          Nimmala Bhuvana Lakshmi
        </h1>
        <div className="h-10 flex items-center justify-center">
          <span className="mono-text text-lg md:text-xl text-foreground/80">
            {displayedText}
          </span>
          <span className="inline-block w-0.5 h-6 ml-1 bg-neon animate-typing-cursor" />
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="neon-button">
            View Projects
          </a>
          <a
            href="#contact"
            className="neon-button"
            style={{
              background: "hsl(190 100% 50% / 0.05)",
              borderColor: "hsl(190 100% 50% / 0.2)",
            }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
