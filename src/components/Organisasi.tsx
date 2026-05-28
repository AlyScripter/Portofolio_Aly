import React from "react";
import { motion } from "motion/react";
import { ORGANISASI } from "../data";
import { Users2, Calendar, CheckCircle2 } from "lucide-react";

export default function Organisasi() {
  return (
    <section className="py-24 relative overflow-hidden bg-black grid-bg border-t border-white/[0.03]">
      {/* Dynamic blurred color elements */}
      <div className="absolute top-1/4 -left-20 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[130px] animate-glow-pulse"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Block: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative flex justify-center lg:justify-start"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-[#B6FF3B]/5 rounded-[40px] blur-3xl opacity-70"></div>

            <div className="relative p-3 rounded-[38px] glass-card border-white/10 overflow-hidden w-full max-w-[450px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] aspect-square lg:aspect-[4/5]">
              {/* Internal decorative lines */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#B6FF3B]/60"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#B6FF3B]/60"></div>

              <div className="w-full h-full rounded-[28px] overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-black -z-10 flex items-center justify-center font-mono text-[10px] text-zinc-600">
                  MEDIA ASSET LOADING
                </div>
                <img
                  src="image/foto organisasi.png"
                  alt="Team Organization Experience"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
                
                {/* Embedded Card Accent */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-card border-white/5 flex gap-3 items-center">
                  <div className="p-2.5 rounded-xl bg-[#B6FF3B] text-black">
                    <Users2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">UKM Pengembangan Pengetahuan</h4>
                    <span className="text-[10px] font-mono text-[#B6FF3B] tracking-wider uppercase">Active Researcher & Lead</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Block: Content Cards */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex flex-col space-y-8"
          >
            {/* Header segment */}
            <div className="space-y-3">
              <span className="text-xs uppercase font-mono tracking-widest text-zinc-500">// INTEGRATED CONTRIBUTION</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight text-white">
                Organizational <span className="text-[#B6FF3B]">Experience</span>
              </h2>
              <div className="w-12 h-1 bg-[#B6FF3B]/30 rounded-full"></div>
            </div>

            {/* List of Experience blocks */}
            <div className="space-y-8">
              {ORGANISASI.map((role, idx) => (
                <div key={idx} className="relative pl-6 group">
                  {/* Timeline pointer */}
                  <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-[#B6FF3B] group-hover:scale-150 transition-all duration-300 shadow-[0_0_8px_#B6FF3B]"></div>
                  {/* Vertical rule line */}
                  {idx < ORGANISASI.length - 1 && (
                    <div className="absolute left-[3px] top-4 bottom-[-2.5rem] w-[1px] bg-gradient-to-b from-[#B6FF3B]/30 to-transparent"></div>
                  )}

                  <div className="space-y-3">
                    {/* Position & Time */}
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-mono text-[#B6FF3B]/80 flex items-center gap-1.5 uppercase tracking-widest">
                        <Calendar className="w-3.5 h-3.5" />
                        {role.period}
                      </span>
                      <h3 className="text-lg sm:text-xl font-display font-semibold text-white tracking-wide group-hover:text-[#B6FF3B] transition-colors">
                        {role.title}
                      </h3>
                    </div>

                    {/* Bullet List */}
                    <ul className="space-y-2.5">
                      {role.bullets.map((bullet, bulkIdx) => (
                        <li key={bulkIdx} className="flex gap-2 text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#B6FF3B]/50 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
