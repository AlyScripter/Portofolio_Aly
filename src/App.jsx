import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Organisasi from "./components/Organisasi";
import Activity from "./components/Activity";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";
import CvModal from "./components/CvModal";
import { PROJECTS } from "./data";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home"); // "home" or project ID e.g., "simaku"
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  // Follow Mouse Tracker coordinates for custom cursor glow ring
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Toggle glowing cursor state on clickable interfaces
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("clickable")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Handle section scrolling and home route switching
  const handleNavigate = (sectionId) => {
    if (currentPage !== "home") {
      setCurrentPage("home");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Get active project detail model
  const activeProject = PROJECTS.find((p) => p.id === currentPage);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#B6FF3B] selection:text-black">
      
      {/* Custom mouse glowing follow point (hidden on touch devices) */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.6 : 1,
          backgroundColor: isHovering ? "#B6FF3B" : "transparent",
          border: isHovering ? "none" : "1.5px solid #B6FF3B",
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.2 }}
      />

      <motion.div
        className="hidden md:block fixed top-0 left-0 w-2 h-2 rounded-full bg-[#B6FF3B] pointer-events-none z-[9999] shadow-[0_0_10px_#B6FF3B]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0.3 : 1,
        }}
        transition={{ type: "spring", damping: 45, stiffness: 600, mass: 0.1 }}
      />

      {/* Embedded Central Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onBackToHome={() => setCurrentPage("home")}
        onOpenCv={() => setIsCvModalOpen(true)}
      />

      {/* Interactive CV Modal Dialog */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />

      {/* Screen Views Wrapper featuring Page Reveals */}
      <AnimatePresence mode="wait">
        {currentPage === "home" ? (
          <motion.main
            key="home"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
          >
            {/* Landing Modules with Refined Layout and Integrated CV Data */}
            <Hero
              onKnowMore={() => handleNavigate("about")}
              onOpenCv={() => setIsCvModalOpen(true)}
            />
            <Stats />
            <About />
            <WorkExperience onSelectProject={(id) => setCurrentPage(id)} />
            <Projects onSelectProject={(id) => setCurrentPage(id)} />
            <Achievements />
            <Organisasi />
            <Activity />
            <Gallery />
            <Footer />
          </motion.main>
        ) : (
          activeProject && (
            <motion.main
              key={activeProject.id}
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(4px)" }}
              transition={{ duration: 0.6 }}
            >
              <ProjectDetail
                project={activeProject}
                onBack={() => setCurrentPage("home")}
              />
              <Footer />
            </motion.main>
          )
        )}
      </AnimatePresence>
    </div>
  );
}
