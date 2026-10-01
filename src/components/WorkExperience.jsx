import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WORK_EXPERIENCES, USER_INFO } from "../data";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  Layers, 
  GraduationCap, 
  Sparkles,
  ArrowUpRight,
  X,
  Maximize2
} from "lucide-react";

export default function WorkExperience({ onSelectProject }) {
  const [selectedExp, setSelectedExp] = useState(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedExp(null);
    };
    if (selectedExp) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedExp]);

  const getTimelineIcon = (id) => {
    switch (id) {
      case "brin":
        return <Cpu className="w-5 h-5 text-black" />;
      case "simaku":
        return <Terminal className="w-5 h-5 text-black" />;
      case "tomiran":
      case "dicreate":
        return <Briefcase className="w-5 h-5 text-black" />;
      default:
        return <Layers className="w-5 h-5 text-black" />;
    }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#050505] grid-bg border-t border-white/[0.03]">
      {/* Decorative ambient neon orbs */}
      <div className="absolute top-1/4 -right-24 w-[450px] h-[450px] bg-[#B6FF3B]/5 rounded-full blur-[150px] animate-glow-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/3 -left-24 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-card border-white/5 text-[#B6FF3B] text-[10px] uppercase font-mono tracking-widest shadow-sm"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>WORK & RESEARCH TIMELINE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight text-white"
          >
            Work & Research <span className="text-[#B6FF3B]">Experience</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 font-sans leading-relaxed text-sm md:text-base"
          >
            A chronological timeline of official research and engineering positions from my CV. Click any role card to view full technical deliverables.
          </motion.p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative pl-6 sm:pl-10 md:pl-14">
          
          {/* Glowing Vertical Spine */}
          <div className="absolute left-[15px] sm:left-[23px] md:left-[31px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#B6FF3B] via-[#B6FF3B]/50 to-emerald-500/20 shadow-[0_0_12px_rgba(182,255,59,0.35)]"></div>

          {/* Timeline Items - Simple & Lightweight on Page */}
          <div className="space-y-8 sm:space-y-10">
            {WORK_EXPERIENCES.map((exp, idx) => {
              const isHovered = hoveredIdx === idx;
              const displaySkills = exp.skills ? exp.skills.slice(0, 4) : [];
              const extraSkillsCount = exp.skills && exp.skills.length > 4 ? exp.skills.length - 4 : 0;

              return (
                <motion.div
                  key={exp.id || idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onClick={() => setSelectedExp(exp)}
                  className="relative group cursor-pointer"
                >
                  {/* Glowing Node on the Vertical Spine */}
                  <div className="absolute -left-[30px] sm:-left-[38px] md:-left-[46px] top-7 -translate-x-1/2 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-[#B6FF3B]/10 border border-[#B6FF3B]/30 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                      <div className="w-5 h-5 rounded-full bg-[#B6FF3B] shadow-[0_0_12px_#B6FF3B] flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-black"></div>
                      </div>
                    </div>
                  </div>

                  {/* Clean, Simple Timeline Card */}
                  <div className={`p-6 sm:p-7 rounded-[26px] glass-card border transition-all duration-300 relative overflow-hidden ${
                    isHovered 
                      ? "bg-[#131313] border-[#B6FF3B]/50 shadow-[0_0_30px_rgba(182,255,59,0.12)] -translate-y-1" 
                      : "bg-[#0c0c0c]/90 border-white/10 hover:border-white/20"
                  }`}>
                    
                    {/* Top ambient glow */}
                    <div className="absolute top-0 right-0 w-36 h-36 bg-[#B6FF3B]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#B6FF3B]/10 transition-colors"></div>

                    {/* Corner Cyberpunk Decal */}
                    <div className="absolute top-3.5 right-3.5 w-3 h-3 border-t-2 border-r-2 border-[#B6FF3B]/30 group-hover:border-[#B6FF3B] transition-colors"></div>

                    {/* Meta Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
                      {/* Period Badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B6FF3B]/10 border border-[#B6FF3B]/30 text-[#B6FF3B] font-mono text-[11px] font-semibold tracking-wider">
                        <Calendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </div>

                      {/* Location & Type pill */}
                      <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#B6FF3B]" />
                          {exp.location}
                        </span>
                        <span className="hidden sm:inline text-zinc-600">•</span>
                        <span className="hidden sm:inline px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-[11px]">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Role Title and Company */}
                    <div className="mb-3">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight group-hover:text-[#B6FF3B] transition-colors duration-200">
                            {exp.role}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 mt-1">
                            <span className="text-sm font-medium text-emerald-400">
                              {exp.company}
                            </span>
                            {exp.subRole && (
                              <>
                                <span className="text-zinc-600">•</span>
                                <span className="text-xs font-mono text-zinc-400">
                                  {exp.subRole}
                                </span>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Pop-up cue button */}
                        <div className="shrink-0 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 group-hover:border-[#B6FF3B] group-hover:bg-[#B6FF3B]/10 text-zinc-300 group-hover:text-[#B6FF3B] text-xs font-mono transition-all">
                          <span>Details</span>
                          <Maximize2 className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>

                    {/* Concise Summary (Simple & not heavy) */}
                    <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed line-clamp-2 mb-4">
                      {exp.summary}
                    </p>

                    {/* Footer: Preview Tech Tags & Action */}
                    <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {displaySkills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-0.5 rounded-full bg-black/60 border border-white/10 text-zinc-300 text-[11px] font-mono"
                          >
                            {skill}
                          </span>
                        ))}
                        {extraSkillsCount > 0 && (
                          <span className="px-2 py-0.5 rounded-full bg-white/5 text-zinc-400 text-[10px] font-mono">
                            +{extraSkillsCount} more
                          </span>
                        )}
                      </div>

                      <div className="sm:hidden flex items-center gap-1 text-[11px] font-mono text-[#B6FF3B]">
                        <span>View details</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Academic Foundation Box */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group mt-10 sm:mt-14"
          >
            {/* Glowing Base Node */}
            <div className="absolute -left-[30px] sm:-left-[38px] md:-left-[46px] top-6 -translate-x-1/2 flex items-center justify-center">
              <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-emerald-400 shadow-[0_0_12px_#10b981] flex items-center justify-center">
                  <GraduationCap className="w-3 h-3 text-black" />
                </div>
              </div>
            </div>

            {/* Academic Foundation Box */}
            <div className="p-6 rounded-[24px] bg-[#0c0c0c] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase block mb-1">
                  ACADEMIC FOUNDATION // {USER_INFO.education.period}
                </span>
                <h4 className="text-base sm:text-lg font-display font-semibold text-white">
                  {USER_INFO.education.degree}
                </h4>
                <p className="text-xs text-zinc-400 font-sans mt-0.5">
                  {USER_INFO.education.institution}
                </p>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold">
                  GPA: {USER_INFO.education.gpa}
                </div>
                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 font-mono text-xs">
                  {USER_INFO.education.focus}
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* POP-UP DETAIL MODAL */}
      <AnimatePresence>
        {selectedExp && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-2xl bg-[#0e0e0e] border border-white/15 rounded-[30px] shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden z-10 max-h-[88vh] flex flex-col"
            >
              {/* Top Accent Line */}
              <div className="h-1 w-full bg-gradient-to-r from-[#B6FF3B] via-emerald-400 to-[#B6FF3B]/20"></div>

              {/* Modal Header */}
              <div className="p-6 sm:p-7 bg-[#141414] border-b border-white/10 flex items-start justify-between gap-4 shrink-0">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-0.5 rounded-full bg-[#B6FF3B]/10 border border-[#B6FF3B]/30 text-[#B6FF3B] font-mono text-xs font-semibold">
                      {selectedExp.period}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 font-mono text-xs">
                      {selectedExp.type}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                    {selectedExp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1.5 text-zinc-400 text-sm">
                    <span className="text-emerald-400 font-medium">
                      {selectedExp.company}
                    </span>
                    {selectedExp.subRole && (
                      <>
                        <span>•</span>
                        <span className="italic">{selectedExp.subRole}</span>
                      </>
                    )}
                    <span>•</span>
                    <span className="flex items-center gap-1 font-mono text-xs text-zinc-400">
                      <MapPin className="w-3 h-3 text-[#B6FF3B]" />
                      {selectedExp.location}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedExp(null)}
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors cursor-pointer shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body with Full Details */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-sans text-zinc-300">
                
                {/* Executive Summary */}
                <div>
                  <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#B6FF3B] mb-2 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    ROLE OVERVIEW
                  </h4>
                  <p className="text-sm sm:text-base text-zinc-200 leading-relaxed bg-[#141414] p-4 rounded-2xl border border-white/5">
                    {selectedExp.summary}
                  </p>
                </div>

                {/* Key Deliverables & Responsibilities strictly from CV */}
                {selectedExp.bullets && selectedExp.bullets.length > 0 && (
                  <div>
                    <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#B6FF3B] mb-3 flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5" />
                      KEY DELIVERABLES & RESPONSIBILITIES (CV)
                    </h4>
                    <div className="space-y-3">
                      {selectedExp.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                          <CheckCircle2 className="w-4 h-4 text-[#B6FF3B] shrink-0 mt-0.5" />
                          <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Complete Tech Stack */}
                {selectedExp.skills && selectedExp.skills.length > 0 && (
                  <div>
                    <h4 className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-2.5">
                      // TECHNOLOGIES & TOOLS UTILIZED
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedExp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1 rounded-full bg-black/80 border border-white/10 text-[#B6FF3B] font-mono text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Modal Footer Bar */}
              <div className="p-4 sm:p-5 bg-[#141414] border-t border-white/10 flex items-center justify-between gap-3 shrink-0">
                {selectedExp.projectId && onSelectProject ? (
                  <button
                    onClick={() => {
                      const projId = selectedExp.projectId;
                      setSelectedExp(null);
                      onSelectProject(projId);
                    }}
                    className="px-4 py-2 rounded-full bg-[#B6FF3B] hover:bg-[#a6ee29] text-black font-semibold text-xs flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                  >
                    <span>View Project Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <div></div>
                )}

                <button
                  onClick={() => setSelectedExp(null)}
                  className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors cursor-pointer ml-auto"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
