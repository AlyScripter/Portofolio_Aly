import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { STATS } from "../data";
import { Trophy, Compass, ShieldAlert } from "lucide-react";

export default function Stats() {
  return (
    <section className="relative py-20 bg-[#080808] border-y border-white/[0.04] overflow-hidden">
      {/* Decorative linear background pattern */}
      <div className="absolute inset-0 bg-grid-line opacity-[0.02] pointer-events-none"></div>
      
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#B6FF3B]/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Exactly 3 cards layout as in screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATS.map((stat, idx) => (
            <StatItem
              key={idx}
              target={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ target, suffix, label, index }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1600; // ms
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

  const getIcon = (idx) => {
    switch (idx) {
      case 0:
        return <Trophy className="w-5 h-5 text-[#B6FF3B]" />;
      case 1:
        return <Compass className="w-5 h-5 text-[#10b981]" />;
      default:
        return <ShieldAlert className="w-5 h-5 text-[#14b8a6]" />;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="relative flex flex-col justify-between p-8 rounded-[32px] bg-[#0d0d0d] border border-white/5 shadow-2xl overflow-hidden group hover:border-[#B6FF3B]/30 transition-all duration-300"
    >
      {/* Background glow hover effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B6FF3B]/5 to-transparent rounded-full blur-2xl group-hover:from-[#B6FF3B]/15 transition-all duration-500"></div>

      {/* Card Header: Icon on left, METRIC // 0X on right */}
      <div className="flex justify-between items-center mb-8">
        <div className="p-3 rounded-2xl bg-neutral-900/90 border border-white/5 shadow-inner">
          {getIcon(index)}
        </div>
        <span className="text-[11px] font-mono text-zinc-500 tracking-widest">
          METRIC // 0{index + 1}
        </span>
      </div>

      {/* Numeric Indicator */}
      <div className="mb-5">
        <span className="text-5xl md:text-6xl font-display font-medium text-white tracking-tight select-none">
          {count}
        </span>
        <span className="text-4xl md:text-5xl font-display font-medium text-[#B6FF3B]">
          {suffix}
        </span>
      </div>

      {/* Description Text matching screenshot */}
      <p className="text-zinc-400 font-sans text-xs uppercase tracking-wider leading-relaxed min-h-[38px]">
        {label}
      </p>

      {/* Bottom status line with green accent marker matching screenshot */}
      <div className="mt-8 w-full h-[1px] bg-neutral-800/80 relative">
        <div className="absolute left-0 top-0 h-[2px] w-12 bg-[#B6FF3B] rounded-full"></div>
      </div>
    </motion.div>
  );
}
