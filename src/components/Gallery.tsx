import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GALLERY_IMAGES } from "../data";
import { Camera, Maximize2, X } from "lucide-react";

export default function Gallery() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Labels for gallery items to make the cinematic hover overlay outstanding!
  const getLabel = (path: string) => {
    if (path.includes("PLN")) return "PLN SustainAction 2025 // 3rd Place Winner";
    if (path.includes("TECHNODAY")) return "UNNES Technoday 2025 // Top 16 Robotic Run";
    if (path.includes("TECHNOCORNER")) return "UGM Technocorner 2025 // Core Robot Arena";
    if (path.includes("simaku")) return "SIMAKU Financial Management Workspace App";
    if (path.includes("pln.png")) return "National Grand Finals PLN Presentation Pitch";
    if (path.includes("prc.png")) return "Polines Robotic Contest Research & Assembly";
    if (path.includes("beswan")) return "Beswan Djarum National Gathering Workshop";
    if (path.includes("sto")) return "Organizational Seminar Outreach Assembly";
    return "Robotics & Innovation Collaboration Moment";
  };

  return (
    <section className="py-24 relative overflow-hidden bg-black grid-bg border-t border-white/[0.03]">
      {/* Decorative side accent flare */}
      <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[140px] animate-glow-pulse pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-card border-white/5 text-[#B6FF3B] text-[10px] uppercase font-mono tracking-widest"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>CINEMATIC HIGHLIGHTS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight text-white"
          >
            My Activity <span className="text-[#B6FF3B]">Gallery</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 font-sans leading-relaxed text-sm md:text-base"
          >
            A collection of moments from my journey through competitions, projects, and organizational activities over the past few years.
          </motion.p>
        </div>

        {/* Gallery Grid: Elegant Masonry Grid with Zoom effects */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {GALLY_WRAPPERS.map((gridItem, idx) => {
            const imagePath = GALLERY_IMAGES[idx];
            if (!imagePath) return null;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative group rounded-2xl overflow-hidden aspect-square h-full w-full bg-[#111] border border-white/5 cursor-zoom-in group shadow-lg ${gridItem.class}`}
              >
                <img
                  src={imagePath}
                  alt={`Gallery moment ${idx}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  onError={(e) => {
                    // elegant fallback
                    e.currentTarget.src = `https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&sig=${idx}`;
                  }}
                />
                
                {/* Visual Glassmorphic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-1.5">
                    <Maximize2 className="w-4 h-4 text-[#B6FF3B]" />
                    <p className="text-[10px] font-mono text-white/95 uppercase tracking-wider block font-bold">
                      {getLabel(imagePath)}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Cinematic Modal Lightbox layer */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
            onClick={() => setActiveImageIndex(null)}
          >
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-neutral-900 border border-white/10 hover:border-[#B6FF3B] text-white hover:text-[#B6FF3B] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[80vh] w-full aspect-video rounded-3xl overflow-hidden glass-card border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY_IMAGES[activeImageIndex]}
                alt="Active moment enlarged"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1000";
                }}
              />
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black via-black/80 to-transparent">
                <span className="text-xs font-mono text-[#B6FF3B] uppercase tracking-widest block mb-1">MOMENT HIGHLIGHT // 0{activeImageIndex + 1}</span>
                <p className="text-sm font-semibold text-white tracking-wide">
                  {getLabel(GALLERY_IMAGES[activeImageIndex])}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// Masonry aspect/span wrapper list
const GALLY_WRAPPERS = [
  { class: "md:col-span-1" },
  { class: "md:col-span-1" },
  { class: "md:col-span-1" },
  { class: "md:col-span-1" },
  { class: "md:col-span-1" },
  { class: "md:col-span-1" },
  { class: "md:col-span-1" },
  { class: "md:col-span-1" },
];
