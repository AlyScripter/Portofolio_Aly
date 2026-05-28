import React from "react";
import { motion } from "motion/react";
import { ACTIVITIES } from "../data";
import { Zap } from "lucide-react";

export default function Activity() {
  return (
    <section id="activities" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Decorative glows */}
      <div className="absolute bottom-1/3 -right-24 w-[350px] h-[350px] bg-[#B6FF3B]/5 rounded-full blur-[120px] animate-glow-pulse"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-card border-white/5 text-[#B6FF3B] text-[10px] uppercase font-mono tracking-widest"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>EXHIBITIONS & COMPETITIONS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight text-white"
          >
            My <span className="text-[#B6FF3B]">Activity</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 font-sans leading-relaxed text-sm md:text-base"
          >
            A summary of my journey participating in various robotics, technology, and innovation project competitions. Each activity provided new experiences in developing automation systems and robot programming.
          </motion.p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACTIVITIES.map((activity, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -10 }}
              className="group p-4 bg-neutral-900/50 hover:bg-[#111111] glass-card rounded-3xl border-white/5 hover:border-[#B6FF3B]/30 hover-neon-glow transition-all duration-500 overflow-hidden"
            >
              {/* Card Image Container */}
              <div className="h-56 rounded-2xl overflow-hidden relative mb-6">
                <div className="absolute inset-0 bg-neutral-950 flex items-center justify-center font-mono text-[9px] text-zinc-600">
                  ASSET {activity.title}
                </div>
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                  onError={(e) => {
                    // Failback image if local fail
                    e.currentTarget.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800";
                  }}
                />
                
                {/* Visual Glass Tag */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[9px] font-mono tracking-widest text-zinc-300 border border-white/5 uppercase">
                  Robotics Hub
                </div>
              </div>

              {/* Card Detail Content */}
              <div className="p-2 space-y-3">
                <h3 className="text-xl font-display font-semibold text-white group-hover:text-[#B6FF3B] transition-colors duration-300">
                  {activity.title}
                </h3>
                <div className="w-8 h-[2px] bg-[#B6FF3B]/40 group-hover:w-full transition-all duration-500 rounded"></div>
                <p className="text-zinc-400 font-sans text-xs sm:text-sm leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
