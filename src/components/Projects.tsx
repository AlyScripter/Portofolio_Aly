import React from "react";
import { motion } from "motion/react";
import { PROJECTS } from "../data";
import { KanbanSquare, ArrowUpRight } from "lucide-react";

interface ProjectsProps {
  onSelectProject: (projectId: string) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
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
            <span>PORTFOLIO COLLECTION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight text-white"
          >
            My <span className="text-[#B6FF3B]">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 font-sans leading-relaxed text-sm md:text-base"
          >
            A collection of projects I have worked on, including web development, IoT, and AI applications, showcasing my growth, creativity, and passion for technology.
          </motion.p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col justify-between p-5 bg-[#111111]/60 hover:bg-[#111111] glass-card rounded-[32px] border-white/5 hover:border-[#B6FF3B]/30 hover-neon-glow transition-all duration-500 overflow-hidden"
            >
              {/* Image Frame with zoom */}
              <div className="h-56 rounded-2xl overflow-hidden relative mb-6">
                <div className="absolute inset-0 bg-neutral-950 flex items-center justify-center font-mono text-[9px] text-zinc-600">
                  {project.title} PROJECT ATTACHED
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                  onError={(e) => {
                    // fallbacks based on ID
                    if (project.id === "simaku") {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800";
                    } else {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1542744094-3a31f103e35f?w=800";
                    }
                  }}
                />
                
                {/* Visual Accent Category Banner */}
                <div className="absolute bottom-4 left-4 flex gap-1.5 flex-wrap">
                  {project.tags.slice(0, 2).map((tag, tagIx) => (
                    <span key={tagIx} className="px-2.5 py-1 bg-black/80 backdrop-blur-md rounded-lg text-[9px] font-mono tracking-wider text-zinc-300 border border-white/5 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Text Fields */}
              <div className="space-y-4 px-1 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-mono text-zinc-400 tracking-wider uppercase">{project.subtitle}</span>
                    <span className="text-[10px] font-mono text-zinc-600">ID // 0{idx + 1}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-[#B6FF3B] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="w-12 h-[2px] bg-[#B6FF3B]/30 group-hover:w-full transition-all duration-500 rounded my-3"></div>
                  <p className="text-zinc-400 font-sans text-xs sm:text-sm leading-relaxed mb-6">
                    {project.summary}
                  </p>
                </div>

                {/* Show More action trigger */}
                <div className="pt-2 text-center">
                  <button
                    onClick={() => onSelectProject(project.id)}
                    className="w-full group/btn px-6 py-3.5 rounded-2xl bg-neutral-900 hover:bg-[#B6FF3B] border border-white/5 hover:border-[#B6FF3B] text-zinc-300 hover:text-black font-semibold text-xs tracking-widest flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
                  >
                    <span>SHOW MORE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
