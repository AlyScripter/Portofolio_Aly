import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, FileDown } from "lucide-react";

interface HeroProps {
  onKnowMore: () => void;
}

export default function Hero({ onKnowMore }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["image/slideshow1.png", "image/slideshow2.png"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Dynamic Slideshow Background with Parallax Overlay */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.35, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${slides[currentSlide]}')`,
            }}
          />
        </AnimatePresence>

        {/* Cyberpunk grid overlay + vignette */}
        <div className="absolute inset-0 grid-bg opacity-40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-radial-vignette opacity-80 pointer-events-none"></div>

        {/* Ambient neon orbs floating */}
        <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-[#B6FF3B]/10 rounded-full blur-[120px] animate-glow-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] animate-glow-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Main Hero Content */}
      <div className="container mx-auto px-6 max-w-5xl relative z-10 flex flex-col justify-center items-center text-center">
        {/* Subtle Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border-white/5 mb-6 shadow-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B6FF3B] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B6FF3B]"></span>
          </span>
          <span className="text-[10px] tracking-widest font-mono text-zinc-400">WELCOME TO MY FUTURISTIC HUB</span>
        </motion.div>

        {/* Title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-medium tracking-tight mb-8">
          <motion.span
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="block text-white"
          >
            WHO I
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#B6FF3B] to-emerald-400"
          >
            AM ?
          </motion.span>
        </h1>

        {/* Subtitle / Bio Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-zinc-400 font-sans tracking-wide leading-relaxed max-w-3xl mb-12"
        >
          Here I am—a young explorer carving my own path, trying new things, gaining fresh experiences, and meeting new people along the way. While I'm still young, it's the perfect time to discover the world and chase curiosity 🌍✨
          <span className="block mt-4 text-sm font-semibold text-[#B6FF3B] tracking-[0.2em]">
            CURIOUS ABOUT MY JOURNEY? GO AHEAD & SCROLL DOWN 🚀
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full max-w-md"
        >
          <button
            onClick={onKnowMore}
            className="group relative w-full sm:w-auto px-8 py-4 rounded-full bg-[#B6FF3B] text-black font-semibold tracking-wider text-xs flex items-center justify-center gap-2.5 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(182,255,59,0.5)] cursor-pointer"
          >
            <span className="relative z-10">KNOW MORE</span>
            <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white transition-transform duration-300 ease-out z-0 opacity-15"></div>
          </button>

          <a
            href="https://drive.google.com/file/d/1KmtUlRtVBcb00Zu3OWFg4aeoLoE9POld/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto px-8 py-4 rounded-full border border-zinc-700 hover:border-[#B6FF3B] text-zinc-300 hover:text-white transition-all duration-300 text-xs tracking-wider flex items-center justify-center gap-2.5 font-medium cursor-pointer"
          >
            <FileDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#B6FF3B] transition-colors" />
            CURRICULUM VITAE
          </a>
        </motion.div>
      </div>

      {/* Futuristic Scroll Down indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300">
        <span className="text-[9px] font-mono tracking-[0.3em] text-zinc-500">SCROLL DOWN</span>
        <div className="w-1.5 h-7 rounded-full border border-zinc-700 p-0.5 flex justify-center">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-1 bg-[#B6FF3B] rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
