import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowLeft } from "lucide-react";

interface NavbarProps {
  onNavigate: (section: string) => void;
  currentPage: string;
  onBackToHome: () => void;
}

export default function Navbar({ onNavigate, currentPage, onBackToHome }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50 rounded-full transition-all duration-300 ${
        scrolled
          ? "glass-nav py-3.5 px-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-white/10"
          : "bg-transparent py-5 px-6 border-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={onBackToHome}
          className="text-xs font-display tracking-[0.3em] font-medium text-white hover:text-[#B6FF3B] transition duration-300 cursor-pointer"
        >
          MY PORTFOLIO
        </button>

        {/* Desktop Nav */}
        {currentPage === "home" ? (
          <nav className="hidden md:flex items-center gap-10">
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, "about")}
              className="text-xs font-sans tracking-widest text-neutral-400 hover:text-[#B6FF3B] transition-colors relative group py-1"
            >
              ABOUT ME
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B6FF3B] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#projects"
              onClick={(e) => handleLinkClick(e, "projects")}
              className="text-xs font-sans tracking-widest text-neutral-400 hover:text-[#B6FF3B] transition-colors relative group py-1"
            >
              MY PROJECT
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B6FF3B] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#activities"
              onClick={(e) => handleLinkClick(e, "activities")}
              className="text-xs font-sans tracking-widest text-neutral-400 hover:text-[#B6FF3B] transition-colors relative group py-1"
            >
              MY BLOG
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B6FF3B] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
        ) : (
          <button
            onClick={onBackToHome}
            className="hidden md:flex items-center gap-2 text-xs font-sans tracking-widest text-neutral-400 hover:text-[#B6FF3B] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> BACK TO HOME
          </button>
        )}

        {/* Action Dot / Quick Contact button */}
        <div className="hidden md:flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#B6FF3B] animate-pulse shadow-[0_0_8px_#B6FF3B]"></div>
          <span className="text-[10px] tracking-wider text-neutral-400 font-mono">AVAILABLE FOR PROJECTS</span>
        </div>

        {/* Mobile menu action button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white hover:text-[#B6FF3B] transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[calc(100%+0.75rem)] left-0 w-full glass-nav rounded-3xl p-6 flex flex-col gap-4 shadow-xl border-white/10 md:hidden"
          >
            {currentPage === "home" ? (
              <>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, "about")}
                  className="text-xs font-sans tracking-widest text-neutral-300 hover:text-[#B6FF3B] py-2 border-b border-white/5"
                >
                  ABOUT ME
                </a>
                <a
                  href="#projects"
                  onClick={(e) => handleLinkClick(e, "projects")}
                  className="text-xs font-sans tracking-widest text-neutral-300 hover:text-[#B6FF3B] py-2 border-b border-white/5"
                >
                  MY PROJECT
                </a>
                <a
                  href="#activities"
                  onClick={(e) => handleLinkClick(e, "activities")}
                  className="text-xs font-sans tracking-widest text-neutral-300 hover:text-[#B6FF3B] py-2"
                >
                  MY BLOG
                </a>
              </>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBackToHome();
                }}
                className="text-xs font-sans tracking-widest text-neutral-300 hover:text-[#B6FF3B] text-left py-2 flex items-center gap-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> BACK TO HOME
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
