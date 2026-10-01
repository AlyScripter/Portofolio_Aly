import React from "react";
import { motion } from "motion/react";
import { HARD_SKILLS, SOFT_SKILLS, USER_INFO } from "../data";
import { Sparkles, GraduationCap, Award, Compass } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black grid-bg">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/3 -right-24 w-[400px] h-[400px] bg-[#B6FF3B]/5 rounded-full blur-[140px] animate-glow-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Block: Narrative & Biography */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            {/* Header Indicator */}
            <div className="inline-flex items-center gap-2 text-[#B6FF3B] font-mono text-xs uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT THE ENGINEER</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight text-white">
              About <span className="text-[#B6FF3B]">Me</span>
            </h2>

            {/* Narratives inside a sleek transparent box */}
            <div className="space-y-5 text-zinc-300 font-sans leading-relaxed text-sm sm:text-base">
              <p className="border-l-2 border-[#B6FF3B]/50 pl-4 text-white/90">
                Hello👋, I am <strong className="text-[#B6FF3B] font-semibold">{USER_INFO.name}</strong> (commonly known as <strong className="text-white">Aly</strong>). I am an undergraduate student in <strong>Computer Engineering Technology</strong> at <strong>Politeknik Negeri Semarang (Polines)</strong>.
              </p>
              <p className="pl-4 text-zinc-400">
                My engineering focus combines hardware intelligence and robust software systems: from conducting telemetry and 3D LiDAR sensor fusion research on NVIDIA Jetson edge systems at <strong>BRIN</strong>, to architecting reliable full-stack platforms like <strong>SIMAKU</strong> and engineering competitive robotics firmware.
              </p>
              <p className="pl-4 text-zinc-400">
                Driven by systemic curiosity and rigorous engineering practices, I focus on turning complex technical specifications into reliable, well-architected systems that solve tangible problems.
              </p>
            </div>

            {/* Quick Badges row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-[#111111]/80 border border-white/5 space-y-1">
                <GraduationCap className="w-4 h-4 text-[#B6FF3B]" />
                <h5 className="text-[11px] font-semibold text-white">Computer Engineering</h5>
                <p className="text-[10px] font-mono text-zinc-500">Polines Undergrad</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#111111]/80 border border-white/5 space-y-1">
                <Award className="w-4 h-4 text-emerald-400" />
                <h5 className="text-[11px] font-semibold text-white">Competitive Robotics</h5>
                <p className="text-[10px] font-mono text-zinc-500">National Podiums</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#111111]/80 border border-white/5 space-y-1 col-span-2 sm:col-span-1">
                <Compass className="w-4 h-4 text-teal-400" />
                <h5 className="text-[11px] font-semibold text-white">BRIN Research</h5>
                <p className="text-[10px] font-mono text-zinc-500">Autonomous Vehicles</p>
              </div>
            </div>

            {/* Technical Skills Pill Tags */}
            <div className="pt-4 space-y-6">
              {/* Hard Skills */}
              <div>
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#B6FF3B] mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF3B]"></span>
                  CORE TECHNICAL ARSENAL
                </h4>
                <div className="flex flex-wrap gap-2">
                  {HARD_SKILLS.map((skill, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3.5 py-1.5 bg-[#111111] hover:bg-[#B6FF3B] border border-white/5 hover:border-[#B6FF3B] text-zinc-300 hover:text-black rounded-full text-xs font-mono font-medium transition-all duration-200 shadow-sm cursor-default flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF3B] group-hover:bg-black transition-colors"></span>
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <h4 className="text-xs uppercase font-mono tracking-widest text-zinc-500 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
                  PROFESSIONAL METHODOLOGY
                </h4>
                <div className="flex flex-wrap gap-2">
                  {SOFT_SKILLS.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3.5 py-1.5 bg-[#111111]/50 border border-white/5 text-zinc-400 rounded-full text-xs font-sans"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Block: Image Presentation */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Ambient neon backdrop frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#B6FF3B]/10 to-teal-500/5 rounded-[40px] blur-3xl transform rotate-3 scale-95 opacity-70"></div>

            {/* Immersive card frame */}
            <div className="relative p-3 rounded-[38px] glass-card border-white/10 overflow-hidden w-full max-w-[450px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] aspect-[4/5]">
              {/* Corner tech decals */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#B6FF3B]/60"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#B6FF3B]/60"></div>

              <div className="w-full h-full rounded-[28px] overflow-hidden relative group">
                <img
                  src="image/foto aboutme.png"
                  alt="Muhammad Haidar Aly"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800";
                  }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500"></div>

                {/* Interactive slide-up ribbon in pure English */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-card border-white/10 flex justify-between items-center backdrop-blur-md">
                  <div>
                    <h5 className="text-[10px] font-mono tracking-widest text-[#B6FF3B]">POLITEKNIK NEGERI SEMARANG</h5>
                    <p className="text-xs font-semibold text-white">Computer Engineering Technology</p>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#B6FF3B] animate-ping"></div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
