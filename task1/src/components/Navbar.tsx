import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = ["Home", "About", "Skills", "Projects", "Resume", "Contact"];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_ITEMS.map((id) =>
      document.getElementById(id.toLowerCase())
      );
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActive(NAV_ITEMS[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (item: string) => {
    setMobileOpen(false);
    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "glass-card py-3" : "py-5"}`
      }>
      
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          className="font-orbitron text-lg font-bold neon-text tracking-widest"
          onClick={(e) => {e.preventDefault();handleClick("Home");}}>
          
          ​Bhuvana  
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) =>
          <li key={item}>
              <button
              onClick={() => handleClick(item)}
              className={`neon-link font-rajdhani text-sm font-semibold uppercase tracking-wider ${
              active === item ? "active" : ""}`
              }>
              
                {item}
              </button>
            </li>
          )}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden neon-text"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu">
          
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen &&
      <div className="md:hidden glass-card mt-2 mx-4 rounded-lg p-4">
          <ul className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) =>
          <li key={item}>
                <button
              onClick={() => handleClick(item)}
              className={`neon-link font-rajdhani text-base font-semibold uppercase tracking-wider w-full text-left ${
              active === item ? "active" : ""}`
              }>
              
                  {item}
                </button>
              </li>
          )}
          </ul>
        </div>
      }
    </nav>);

};

export default Navbar;