import React, { useEffect } from "react";
import { motion } from "motion/react";
import { Project } from "../types";
import { ArrowLeft, Target, Award, Rocket, CheckCircle } from "lucide-react";

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  // Automatically scroll to the top of the detail page on mount!
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [project.id]);

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-16 grid-bg">
      {/* Back button flotation layer */}
      <div className="container mx-auto px-6 max-w-5xl mb-8">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={onBack}
          className="group px-5 py-2.5 rounded-full glass-card border-white/5 hover:border-[#B6FF3B] text-zinc-400 hover:text-[#B6FF3B] text-xs font-mono tracking-widest flex items-center gap-2 transition-all duration-300 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>BACK TO COLLECTION</span>
        </motion.button>
      </div>

      {/* Hero Header Section */}
      <section className="container mx-auto px-6 max-w-5xl mb-12">
        <div className="relative p-10 rounded-[40px] glass-card border-white/5 overflow-hidden text-center space-y-6">
          {/* Subtle decoration dots */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#B6FF3B]/5 to-transparent rounded-full blur-2xl"></div>

          {/* Subtitle */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-mono text-[#B6FF3B] uppercase tracking-[0.3em] block"
          >
            {project.subtitle}
          </motion.span>

          {/* Title with radiant gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-glow"
          >
            {project.title}
          </motion.h1>

          {/* Sizable Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="flex flex-wrap justify-center gap-2.5 pt-2"
          >
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-[#111111] hover:bg-[#B6FF3B] border border-white/5 hover:border-[#B6FF3B] text-zinc-300 hover:text-black rounded-full text-xs font-mono transition-colors duration-300 shadow-md cursor-default"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Large Showcase Image Section */}
      <section className="container mx-auto px-6 max-w-5xl mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative p-3 rounded-[40px] glass-card border-white/10 overflow-hidden shadow-2xl aspect-video md:max-h-[500px]"
        >
          {/* Edge cross decals */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#B6FF3B]/40"></div>
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#B6FF3B]/40"></div>

          <div className="w-full h-full rounded-[28px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <img
              src={project.image}
              alt={`${project.title} Preview Frame`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000";
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* Structured Copy Section Grids */}
      <section className="container mx-auto px-6 max-w-4xl space-y-16">
        
        {/* Project Overview Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-[32px] glass-card border-white/5 space-y-4 hover:border-zinc-800 transition-all duration-300"
        >
          <div className="flex items-center gap-3 text-[#B6FF3B] font-display font-medium text-lg uppercase tracking-wider border-b border-white/5 pb-3">
            <Rocket className="w-5 h-5" />
            <h3>Project Overview</h3>
          </div>
          <div className="font-sans text-zinc-300 leading-relaxed space-y-4 text-xs sm:text-sm">
            {project.overview.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </motion.div>

        {/* The Challenge Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-[32px] glass-card border-white/5 space-y-4 hover:border-zinc-800 transition-all duration-300"
        >
          <div className="flex items-center gap-3 text-emerald-400 font-display font-medium text-lg uppercase tracking-wider border-b border-white/5 pb-3">
            <Target className="w-5 h-5" />
            <h3>The Challenge</h3>
          </div>
          <div className="font-sans text-zinc-300 leading-relaxed text-xs sm:text-sm">
            {project.challenges.map((line, i) => {
              if (i === 0) return <p key={i} className="mb-4">{line}</p>;
              return (
                <div key={i} className="flex gap-2.5 items-start mb-3 pl-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                  <p>{line}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Our Solution Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-[32px] glass-card border-white/5 space-y-4 hover:border-zinc-800 transition-all duration-300"
        >
          <div className="flex items-center gap-3 text-[#B6FF3B] font-display font-medium text-lg uppercase tracking-wider border-b border-white/5 pb-3">
            <CheckCircle className="w-5 h-5" />
            <h3>Our Solution</h3>
          </div>
          <div className="font-sans text-zinc-300 leading-relaxed text-xs sm:text-sm">
            {project.solutions.map((line, i) => {
              if (i === 0) return <p key={i} className="mb-4">{line}</p>;
              return (
                <div key={i} className="flex gap-2.5 items-start mb-3 pl-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF3B] mt-2 shrink-0"></span>
                  <p>{line}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Results & Impact Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-[32px] glass-card border-white/5 space-y-4 hover:border-zinc-800 transition-all duration-300"
        >
          <div className="flex items-center gap-3 text-teal-400 font-display font-medium text-lg uppercase tracking-wider border-b border-white/5 pb-3">
            <Award className="w-5 h-5" />
            <h3>Results & Impact</h3>
          </div>
          <div className="font-sans text-zinc-300 leading-relaxed text-xs sm:text-sm">
            {project.results.map((line, i) => {
              if (i === 0) return <p key={i} className="mb-4">{line}</p>;
              return (
                <div key={i} className="flex gap-2.5 items-start mb-3 pl-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></span>
                  <p>{line}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Gallery Grid Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="border-b border-white/5 pb-3 flex justify-between items-center">
            <h3 className="text-[#B6FF3B] font-display font-semibold text-lg uppercase tracking-wider">
              Project Gallery
            </h3>
            <span className="text-[10px] font-mono text-zinc-500">CAPTURE FRAMES // {project.gallery.length}</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.gallery.map((galleryImg, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="group relative h-48 rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 shadow-md flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-neutral-950 flex items-center justify-center font-mono text-[80%] text-zinc-700 pointer-events-none">
                  ASSET NO // 0{i + 1}
                </div>
                <img
                  src={galleryImg}
                  alt={`${project.title} Gallery Frame ${i + 1}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10"
                  onError={(e) => {
                    // responsive mock images based on project ID
                    e.currentTarget.src = `https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&sig=${i}`;
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Back Button Centered bottom */}
        <div className="text-center pt-10">
          <button
            onClick={onBack}
            className="group px-8 py-4 rounded-full bg-[#B6FF3B] text-black font-semibold tracking-wider text-xs flex items-center justify-center gap-2.5 mx-auto transition-transform hover:scale-105 active:scale-95 shadow-md hover:shadow-[0_0_30px_rgba(182,255,59,0.3)] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>BACK TO LANDING</span>
          </button>
        </div>

      </section>
    </div>
  );
}
