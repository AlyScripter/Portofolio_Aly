import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../data";
import { KanbanSquare, ArrowUpRight, ChevronDown, CheckCircle2 } from "lucide-react";

export default function Projects({ onSelectProject }) {
  // Start with 3 projects on the front page as requested
  const [visibleCount, setVisibleCount] = useState(3);

  const displayedProjects = PROJECTS.slice(0, visibleCount);
  const remainingCount = PROJECTS.length - visibleCount;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, PROJECTS.length));
  };

  const handleShowLess = () => {
    setVisibleCount(3);
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-black grid-bg border-t border-white/[0.03]">
      {/* Decorative center glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#B6FF3B]/5 rounded-full blur-[140px] animate-glow-pulse pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-card border-white/5 text-[#B6FF3B] text-[10px] uppercase font-mono tracking-widest"
          >
            <KanbanSquare className="w-3.5 h-3.5" />
            <span>PORTFOLIO & PROJECT SHOWCASE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight text-white"
          >
            Featured <span className="text-[#B6FF3B]">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 font-sans leading-relaxed text-sm md:text-base"
          >
            Real projects developed during academic research and applied engineering — spanning IoT aquaculture, academic management platforms, mobile telemetry, and interactive game systems.
          </motion.p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {displayedProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col justify-between p-6 bg-[#0e0e0e] hover:bg-[#121212] glass-card rounded-[32px] border border-white/5 hover:border-[#B6FF3B]/30 hover-neon-glow transition-all duration-300 overflow-hidden"
              >
                {/* Image Frame */}
                <div className="h-52 rounded-2xl overflow-hidden relative mb-5 bg-neutral-900 border border-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800";
                    }}
                  />
                  
                  {/* Category Pill Tags */}
                  <div className="absolute bottom-3 left-3 flex gap-1.5 flex-wrap z-10 max-w-[85%]">
                    {project.tags.slice(0, 2).map((tag, tagIx) => (
                      <span key={tagIx} className="px-2 py-0.5 bg-black/85 backdrop-blur-md rounded-md text-[9px] font-mono tracking-wider text-zinc-300 border border-white/10 uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-[9px] font-mono text-[#B6FF3B] border border-white/10">
                    ID // 0{idx + 1}
                  </div>
                </div>

                {/* Text Fields */}
                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Period & Subtitle */}
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#B6FF3B] tracking-wider uppercase mb-1">
                      <span>{project.period}</span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-white group-hover:text-[#B6FF3B] transition-colors duration-200 line-clamp-2">
                      {project.title}
                    </h3>

                    <div className="w-10 h-[2px] bg-[#B6FF3B]/30 group-hover:w-full transition-all duration-300 rounded my-3"></div>

                    <p className="text-zinc-400 font-sans text-xs leading-relaxed line-clamp-3 mb-4">
                      {project.summary}
                    </p>
                  </div>

                  {/* Show Details trigger */}
                  <div className="pt-2">
                    <button
                      onClick={() => onSelectProject(project.id)}
                      className="w-full group/btn px-4 py-3 rounded-2xl bg-neutral-900/90 hover:bg-[#B6FF3B] border border-white/5 hover:border-[#B6FF3B] text-zinc-300 hover:text-black font-semibold text-xs tracking-wider flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
                    >
                      <span>VIEW PROJECT DETAILS</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button Section */}
        <div className="mt-14 text-center">
          {remainingCount > 0 ? (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleLoadMore}
              className="group px-8 py-4 rounded-full bg-[#121212] hover:bg-[#B6FF3B] border border-white/10 hover:border-[#B6FF3B] text-white hover:text-black font-semibold text-xs font-mono tracking-widest inline-flex items-center gap-3 transition-all duration-300 shadow-xl cursor-pointer"
            >
              <span>LIHAT LEBIH BANYAK ({remainingCount} PROYEK LAGI)</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </motion.button>
          ) : (
            <div className="flex flex-col items-center gap-2 pt-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B6FF3B]" />
                <span>Seluruh 8 proyek berhasil ditampilkan</span>
              </div>
              <button
                onClick={handleShowLess}
                className="mt-2 text-[11px] font-mono text-zinc-400 hover:text-[#B6FF3B] underline underline-offset-4 transition-colors cursor-pointer"
              >
                Tampilkan Lebih Sedikit (Kembali ke 3 Proyek)
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
