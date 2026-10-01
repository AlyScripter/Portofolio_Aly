import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowLeft, FileText } from "lucide-react";

export default function Navbar({ onNavigate, currentPage, onBackToHome, onOpenCv }) {
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

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50 rounded-full transition-all duration-300 ${
        scrolled
          ? "glass-nav py-3 px-6 shadow-[0_10px_30px_rgba(0,0,0,0.7)] border-white/10"
          : "bg-black/40 backdrop-blur-md py-4 px-6 border border-white/5"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={onBackToHome}
          className="text-xs font-display tracking-[0.25em] font-bold text-white hover:text-[#B6FF3B] transition duration-300 cursor-pointer flex items-center gap-2"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#B6FF3B] shadow-[0_0_8px_#B6FF3B]"></div>
          <span>HAIDAR ALY</span>
        </button>

        {/* Desktop Nav */}
        {currentPage === "home" ? (
          <nav className="hidden lg:flex items-center gap-7">
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, "about")}
              className="text-[11px] font-sans tracking-widest text-neutral-400 hover:text-[#B6FF3B] transition-colors relative group py-1"
            >
              ABOUT
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B6FF3B] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#experience"
              onClick={(e) => handleLinkClick(e, "experience")}
              className="text-[11px] font-sans tracking-widest text-neutral-400 hover:text-[#B6FF3B] transition-colors relative group py-1"
            >
              EXPERIENCE
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B6FF3B] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#projects"
              onClick={(e) => handleLinkClick(e, "projects")}
              className="text-[11px] font-sans tracking-widest text-neutral-400 hover:text-[#B6FF3B] transition-colors relative group py-1"
            >
              PROJECTS
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B6FF3B] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#achievements"
              onClick={(e) => handleLinkClick(e, "achievements")}
              className="text-[11px] font-sans tracking-widest text-neutral-400 hover:text-[#B6FF3B] transition-colors relative group py-1"
            >
              AWARDS
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B6FF3B] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#organization"
              onClick={(e) => handleLinkClick(e, "organization")}
              className="text-[11px] font-sans tracking-widest text-neutral-400 hover:text-[#B6FF3B] transition-colors relative group py-1"
            >
              ORGANIZATION
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B6FF3B] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#activities"
              onClick={(e) => handleLinkClick(e, "activities")}
              className="text-[11px] font-sans tracking-widest text-neutral-400 hover:text-[#B6FF3B] transition-colors relative group py-1"
            >
              ACTIVITIES
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B6FF3B] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
        ) : (
          <button
            onClick={onBackToHome}
            className="hidden md:flex items-center gap-2 text-xs font-sans tracking-widest text-neutral-400 hover:text-[#B6FF3B] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> BACK TO PORTFOLIO
          </button>
        )}

        {/* Action Quick CV trigger */}
        <div className="hidden sm:flex items-center gap-3">
          {onOpenCv && (
            <button
              onClick={onOpenCv}
              className="px-4 py-1.5 rounded-full bg-white/5 hover:bg-[#B6FF3B] text-zinc-300 hover:text-black border border-white/10 hover:border-[#B6FF3B] text-[10px] font-mono tracking-wider transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3 h-3" />
              <span>CV VIEW</span>
            </button>
          )}

          <div className="hidden md:flex items-center gap-2 pl-2 border-l border-white/10">
            <div className="w-2 h-2 rounded-full bg-[#B6FF3B] animate-pulse shadow-[0_0_6px_#B6FF3B]"></div>
            <span className="text-[10px] tracking-wider text-neutral-400 font-mono">AVAILABLE</span>
          </div>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white hover:text-[#B6FF3B] transition-colors p-1"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[calc(100%+0.75rem)] left-0 w-full glass-nav rounded-3xl p-6 flex flex-col gap-3 shadow-2xl border-white/10 lg:hidden"
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
                  href="#experience"
                  onClick={(e) => handleLinkClick(e, "experience")}
                  className="text-xs font-sans tracking-widest text-neutral-300 hover:text-[#B6FF3B] py-2 border-b border-white/5"
                >
                  WORK EXPERIENCE
                </a>
                <a
                  href="#projects"
                  onClick={(e) => handleLinkClick(e, "projects")}
                  className="text-xs font-sans tracking-widest text-neutral-300 hover:text-[#B6FF3B] py-2 border-b border-white/5"
                >
                  MY PROJECTS
                </a>
                <a
                  href="#achievements"
                  onClick={(e) => handleLinkClick(e, "achievements")}
                  className="text-xs font-sans tracking-widest text-neutral-300 hover:text-[#B6FF3B] py-2 border-b border-white/5"
                >
                  AWARDS & ACHIEVEMENTS
                </a>
                <a
                  href="#organization"
                  onClick={(e) => handleLinkClick(e, "organization")}
                  className="text-xs font-sans tracking-widest text-neutral-300 hover:text-[#B6FF3B] py-2 border-b border-white/5"
                >
                  ORGANIZATION
                </a>
                <a
                  href="#activities"
                  onClick={(e) => handleLinkClick(e, "activities")}
                  className="text-xs font-sans tracking-widest text-neutral-300 hover:text-[#B6FF3B] py-2 border-b border-white/5"
                >
                  ACTIVITIES & BLOG
                </a>

                {onOpenCv && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenCv();
                    }}
                    className="w-full mt-2 py-3 rounded-2xl bg-[#B6FF3B] text-black font-semibold text-xs font-mono tracking-wider flex items-center justify-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    <span>OPEN CURRICULUM VITAE</span>
                  </button>
                )}
              </>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBackToHome();
                }}
                className="text-xs font-sans tracking-widest text-neutral-300 hover:text-[#B6FF3B] text-left py-2 flex items-center gap-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> BACK TO PORTFOLIO
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
