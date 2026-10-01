import React from "react";
import { motion } from "motion/react";
import { ACHIEVEMENTS } from "../data";
import { Award, Trophy, Medal, Sparkles } from "lucide-react";

export default function Achievements() {
  const getBadgeIcon = (idx) => {
    switch (idx) {
      case 0:
        return <Trophy className="w-5 h-5 text-[#B6FF3B]" />;
      case 1:
        return <Medal className="w-5 h-5 text-emerald-400" />;
      case 2:
        return <Award className="w-5 h-5 text-teal-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-lime-400" />;
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-black grid-bg border-t border-white/[0.03]">
      {/* Decorative background blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-[#B6FF3B]/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-card border-white/5 text-[#B6FF3B] text-[10px] uppercase font-mono tracking-widest"
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS & COMPETITIVE TRACK RECORD</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight text-white"
          >
            Achievements & <span className="text-[#B6FF3B]">Awards</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 font-sans leading-relaxed text-sm md:text-base"
          >
            Verified recognitions from national innovation championships, national robotics contests (UGM & UNNES), and competitive grant funding programs.
          </motion.p>
        </div>

        {/* 2x2 Grid of Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group p-6 sm:p-8 rounded-[36px] bg-[#111111]/70 glass-card border border-white/5 hover:border-[#B6FF3B]/30 hover-neon-glow transition-all duration-500 relative flex flex-col justify-between overflow-hidden"
            >
              {/* Top ambient glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#B6FF3B]/5 rounded-full blur-3xl group-hover:bg-[#B6FF3B]/10 transition-all"></div>

              <div>
                {/* Header row with badge and category */}
                <div className="flex justify-between items-start mb-6 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-neutral-900 border border-white/5 group-hover:border-[#B6FF3B]/30 group-hover:shadow-[0_0_15px_rgba(182,255,59,0.2)] transition-all">
                      {getBadgeIcon(idx)}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#B6FF3B] uppercase block">
                        {item.category}
                      </span>
                      <span className="text-xs text-zinc-400 font-sans">
                        {item.organizer} • {item.year}
                      </span>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-[#B6FF3B]/10 border border-[#B6FF3B]/30 text-[#B6FF3B] font-mono text-[10px] font-semibold tracking-wider shrink-0">
                    {item.rank}
                  </span>
                </div>

                {/* Achievement Title */}
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-white tracking-wide group-hover:text-[#B6FF3B] transition-colors mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Card Footer with Image Preview */}
              {item.image && (
                <div className="relative h-36 rounded-2xl overflow-hidden border border-white/5 group/img mt-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[10px] font-mono text-zinc-300">
                    <span className="truncate max-w-[200px]">{item.event}</span>
                    <span className="text-[#B6FF3B] font-semibold">VERIFIED</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
