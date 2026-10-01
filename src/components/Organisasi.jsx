import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ORGANISASI } from "../data";
import { 
  Users2, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Maximize2, 
  X, 
  Sparkles, 
  Award,
  ArrowUpRight 
} from "lucide-react";

export default function Organisasi() {
  const [selectedOrg, setSelectedOrg] = useState(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedOrg(null);
    };
    if (selectedOrg) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedOrg]);

  return (
    <section id="organization" className="py-24 relative overflow-hidden bg-black grid-bg border-t border-white/[0.03]">
      {/* Dynamic blurred color elements */}
      <div className="absolute top-1/4 -left-20 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[130px] animate-glow-pulse pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Image & Summary Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center lg:sticky lg:top-28"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-[#B6FF3B]/5 rounded-[40px] blur-3xl opacity-70"></div>

            <div className="relative p-3 rounded-[38px] glass-card border-white/10 overflow-hidden w-full max-w-[450px] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              {/* Internal decorative lines */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#B6FF3B]/60"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#B6FF3B]/60"></div>

              <div className="w-full h-80 sm:h-96 rounded-[28px] overflow-hidden relative group">
                <img
                  src="image/foto organisasi.png"
                  alt="Organization Leadership Experience"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
                
                {/* Embedded Card Accent */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-card border-white/10 flex gap-3 items-center backdrop-blur-md">
                  <div className="p-2.5 rounded-xl bg-[#B6FF3B] text-black shrink-0">
                    <Users2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">UKM Pengembangan Pengetahuan</h4>
                    <span className="text-[10px] font-mono text-[#B6FF3B] tracking-wider uppercase">Executive Governance & Robotics</span>
                  </div>
                </div>
              </div>

              {/* Leadership Badge Pill underneath image */}
              <div className="mt-3 p-3 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#B6FF3B]" />
                  <span className="text-xs font-medium text-white">Executive Board & Governance</span>
                </div>
                <span className="text-[9px] font-mono text-[#B6FF3B] bg-[#B6FF3B]/10 px-2.5 py-0.5 rounded border border-[#B6FF3B]/20">
                  2024 – 2026
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Block: Content Cards */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            {/* Header segment */}
            <div className="space-y-3">
              <span className="text-xs uppercase font-mono tracking-widest text-[#B6FF3B]">// LEADERSHIP & GOVERNANCE</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight text-white">
                Organizational <span className="text-[#B6FF3B]">Experience</span>
              </h2>
              <p className="text-zinc-400 font-sans text-xs sm:text-sm leading-relaxed max-w-xl">
                Demonstrated executive leadership, departmental governance, and technical research across university student activity units. Click any card to view detailed responsibilities.
              </p>
              <div className="w-12 h-1 bg-[#B6FF3B]/30 rounded-full"></div>
            </div>

            {/* List of Experience blocks */}
            <div className="space-y-4 pt-2">
              {ORGANISASI.map((role, idx) => (
                <motion.div
                  key={role.id || idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  onClick={() => setSelectedOrg(role)}
                  className="p-5 sm:p-6 rounded-3xl bg-[#111111]/70 glass-card border border-white/5 hover:border-[#B6FF3B]/40 hover-neon-glow transition-all duration-300 relative group overflow-hidden cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#B6FF3B]/10 text-[#B6FF3B] border border-[#B6FF3B]/30">
                        {role.badge || "Role"}
                      </span>
                      {role.organization && (
                        <span className="text-xs text-zinc-400 font-sans truncate max-w-[260px]">
                          {role.organization}
                        </span>
                      )}
                    </div>

                    <span className="text-[10px] font-mono text-zinc-400 flex items-center gap-1.5 shrink-0">
                      <Calendar className="w-3.5 h-3.5 text-[#B6FF3B]" />
                      {role.period}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-lg sm:text-xl font-display font-semibold text-white tracking-wide group-hover:text-[#B6FF3B] transition-colors">
                      {role.title}
                    </h3>
                    
                    {/* Pop-up cue button */}
                    <div className="shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 group-hover:border-[#B6FF3B] group-hover:bg-[#B6FF3B]/10 text-zinc-300 group-hover:text-[#B6FF3B] text-xs font-mono transition-all">
                      <span>Details</span>
                      <Maximize2 className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-zinc-400 font-sans line-clamp-2 leading-relaxed">
                    {role.summary || (role.bullets && role.bullets[0])}
                  </p>

                  {/* Skills pill preview */}
                  {role.skills && role.skills.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                      {role.skills.map((sk, sIdx) => (
                        <span key={sIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/50 text-zinc-400 border border-white/5">
                          {sk}
                        </span>
                      ))}
                    </div>
                  )}

                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>

      {/* POP-UP DETAIL MODAL */}
      <AnimatePresence>
        {selectedOrg && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedOrg(null)}
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
              <div className="h-1 w-full bg-gradient-to-r from-emerald-400 via-[#B6FF3B] to-emerald-500/20"></div>

              {/* Modal Header */}
              <div className="p-6 sm:p-7 bg-[#141414] border-b border-white/10 flex items-start justify-between gap-4 shrink-0">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-0.5 rounded-full bg-[#B6FF3B]/10 border border-[#B6FF3B]/30 text-[#B6FF3B] font-mono text-xs font-semibold">
                      {selectedOrg.badge || "Leadership"}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 font-mono text-xs flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#B6FF3B]" />
                      {selectedOrg.period}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                    {selectedOrg.title}
                  </h3>
                  <p className="text-emerald-400 font-medium text-sm mt-1">
                    {selectedOrg.organization}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedOrg(null)}
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors cursor-pointer shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-sans text-zinc-300">
                
                {/* Summary */}
                {selectedOrg.summary && (
                  <div>
                    <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#B6FF3B] mb-2 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      ROLE OVERVIEW
                    </h4>
                    <p className="text-sm sm:text-base text-zinc-200 leading-relaxed bg-[#141414] p-4 rounded-2xl border border-white/5">
                      {selectedOrg.summary}
                    </p>
                  </div>
                )}

                {/* Key Deliverables & Responsibilities */}
                {selectedOrg.bullets && selectedOrg.bullets.length > 0 && (
                  <div>
                    <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#B6FF3B] mb-3 flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      RESPONSIBILITIES & DELIVERABLES (CV)
                    </h4>
                    <div className="space-y-3">
                      {selectedOrg.bullets.map((bullet, bIdx) => (
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

                {/* Skills/Competencies */}
                {selectedOrg.skills && selectedOrg.skills.length > 0 && (
                  <div>
                    <h4 className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-2.5">
                      // COMPETENCIES & FOCUS AREAS
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedOrg.skills.map((skill, sIdx) => (
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
              <div className="p-4 sm:p-5 bg-[#141414] border-t border-white/10 flex items-center justify-end shrink-0">
                <button
                  onClick={() => setSelectedOrg(null)}
                  className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors cursor-pointer"
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
