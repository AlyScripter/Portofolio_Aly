import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { STATS } from "../data";
import { Trophy, Compass, ShieldAlert } from "lucide-react";

export default function Stats() {
  return (
    <section className="relative py-24 bg-[#0a0a0a] border-y border-white/[0.04] overflow-hidden">
      {/* Decorative linear line in back */}
      <div className="absolute inset-0 bg-grid-line opacity-[0.02]"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS.map((stat, idx) => {
            return (
              <StatItem
                key={idx}
                target={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={idx}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface StatItemProps {
  key?: number;
  target: number;
  suffix: string;
  label: string;
  index: number;
}

function StatItem({ target, suffix, label, index }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2500; // ms
      const incrementTime = 30; // ms
      const totalSteps = duration / incrementTime;
      const stepValue = target / totalSteps;
      
      const timer = setInterval(() => {
        start += stepValue;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  // Map indexes to cool futuristic icons from lucide
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Trophy className="w-5 h-5 text-[#B6FF3B]" />;
      case 1:
        return <Compass className="w-5 h-5 text-emerald-400" />;
      default:
        return <ShieldAlert className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="relative flex flex-col justify-between p-8 rounded-4xl glass-card border-white/5 shadow-2xl overflow-hidden group hover:border-[#B6FF3B]/20 transition-all duration-300"
    >
      {/* Background glow hover index */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B6FF3B]/5 to-transparent rounded-full blur-2xl group-hover:from-[#B6FF3B]/10 transition-all duration-500"></div>

      {/* Card Header (Icon + Modern Frame decoration) */}
      <div className="flex justify-between items-center mb-6">
        <div className="p-3.5 rounded-2xl bg-neutral-900/80 border border-white/5 shadow-inner">
          {getIcon(index)}
        </div>
        <span className="text-[10px] font-mono text-zinc-600 tracking-widest">METRIC // 0{index + 1}</span>
      </div>

      {/* Numeric Indicator */}
      <div className="mb-4">
        <span className="text-6xl md:text-7xl font-display font-medium text-white tracking-tight select-none select-none text-glow">
          {count}
        </span>
        <span className="text-4xl md:text-5xl font-display font-semibold text-[#B6FF3B]">
          {suffix}
        </span>
      </div>

      {/* Description Text */}
      <p className="text-zinc-400 font-sans text-xs uppercase tracking-widest leading-relaxed">
        {label}
      </p>

      {/* Bottom status line */}
      <div className="mt-6 w-full h-[1px] bg-neutral-900 overflow-hidden relative">
        <div className="absolute l-0 t-0 h-full w-12 bg-gradient-to-r from-transparent via-[#B6FF3B] to-transparent group-hover:animate-[scrollRight_2s_infinite] transition-all"></div>
      </div>
    </motion.div>
  );
}
