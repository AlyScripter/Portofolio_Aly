import React from "react";
import { motion } from "motion/react";
import { HARD_SKILLS, SOFT_SKILLS } from "../data";
import { Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black grid-bg">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/3 -right-24 w-[400px] h-[400px] bg-[#B6FF3B]/5 rounded-full blur-[140px] animate-glow-pulse"></div>
      <div className="absolute bottom-1/4 -left-20 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1s" }}></div>

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
            {/* Tiny Header Indicator */}
            <div className="inline-flex items-center gap-2 text-[#B6FF3B] font-mono text-xs uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>WHO AM I?</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight text-white">
              About <span className="text-[#B6FF3B]">Me</span>
            </h2>

            {/* Narratives inside a sleek transparent box */}
            <div className="space-y-6 text-zinc-400 font-sans leading-relaxed text-sm sm:text-base">
              <p className="border-l-2 border-[#B6FF3B]/30 pl-4">
                Hello👋, you can call me <strong className="text-white font-medium">Aly</strong>😄. I am an undergraduate student majoring in Computer Engineering Technology with a strong passion for technology and innovation. My interests and expertise include web development, Internet of Things (IoT), application development, and machine learning.
              </p>
              <p className="pl-4">
                I continuously enhance my skills by exploring new technologies, working on hands-on projects, and keeping up with the rapid growth of the digital landscape. I am highly motivated to learn, adapt, and contribute to impactful digital solutions.
              </p>
            </div>

            {/* Technical Skills Pill Tags */}
            <div className="pt-8 space-y-6">
              {/* Hard Skills Wrapper */}
              <div>
                <h4 className="text-xs uppercase font-mono tracking-widest text-zinc-500 mb-4">// CORE STACK & EXPERTISE</h4>
                <div className="flex flex-wrap gap-2.5">
                  {HARD_SKILLS.map((skill, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-[#111111] hover:bg-[#B6FF3B] border border-white/5 hover:border-[#B6FF3B] text-zinc-300 hover:text-black rounded-full text-xs font-mono font-medium transition-all duration-300 shadow-md cursor-default flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF3B] group-hover:bg-black transition-colors"></span>
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Soft Skills Wrapper */}
              <div>
                <h4 className="text-xs uppercase font-mono tracking-widest text-zinc-500 mb-4">// PROFESSIONAL METHODOLOGY</h4>
                <div className="flex flex-wrap gap-2.5">
                  {SOFT_SKILLS.map((skill, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-[#111111]/40 hover:bg-neutral-800 border border-white/5 hover:border-zinc-500 text-zinc-400 hover:text-white rounded-full text-xs font-sans transition-all duration-300 shadow-sm cursor-default"
                    >
                      {skill}
                    </motion.span>
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
                {/* Loader / gradient backup in case img doesn't load */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-950 flex items-center justify-center -z-10">
                  <div className="text-center font-mono text-[10px] text-zinc-600">PHOTO BACKEND LOADED</div>
                </div>

                <img
                  src="image/foto aboutme.png"
                  alt="Aly Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to high quality unsplash dev photo if local photo fails
                    e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800";
                  }}
                />

                {/* Cyberpunk gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500"></div>

                {/* Interactive slide-up ribbon */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-card border-white/5 flex justify-between items-center transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div>
                    <h5 className="text-[11px] font-mono tracking-widest text-zinc-400">CURRENT ACADEMIC STATUS</h5>
                    <p className="text-xs font-semibold text-white">Undergrad in Computer Engineering</p>
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
