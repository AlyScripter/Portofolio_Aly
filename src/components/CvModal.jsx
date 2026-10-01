import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, 
  ExternalLink, 
  Download, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Mail, 
  Phone,
  MapPin, 
  CheckCircle,
  FileCheck,
  Terminal
} from "lucide-react";
import { 
  CV_LINK, 
  USER_INFO, 
  WORK_EXPERIENCES, 
  ORGANISASI, 
  ACHIEVEMENTS, 
  CERTIFICATIONS,
  HARD_SKILLS, 
  SOFT_SKILLS 
} from "../data";

export default function CvModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-[32px] shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="p-6 bg-[#111111] border-b border-white/5 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#B6FF3B] shadow-[0_0_10px_#B6FF3B]"></div>
              <div>
                <h3 className="text-base font-display font-bold text-white tracking-wide">
                  Curriculum Vitae Preview
                </h3>
                <span className="text-[10px] font-mono text-zinc-400">
                  {USER_INFO.name} • {USER_INFO.role}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={CV_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#B6FF3B] hover:bg-[#a5f028] text-black text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Open / Download PDF</span>
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close CV Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body: Complete CV Content */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 font-sans text-zinc-300">
            {/* Top Identity Segment */}
            <div className="border-b border-white/5 pb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                  {USER_INFO.name}
                </h1>
                <p className="text-sm font-mono text-[#B6FF3B] mt-1 tracking-wider uppercase">
                  {USER_INFO.role}
                </p>
                <p className="text-xs text-zinc-400 mt-2 max-w-xl leading-relaxed">
                  {USER_INFO.bio}
                </p>
              </div>

              <div className="flex flex-col gap-2 text-xs font-mono text-zinc-400 shrink-0 bg-white/5 p-4 rounded-2xl border border-white/5">
                <span className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#B6FF3B]" />
                  {USER_INFO.email}
                </span>
                <span className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#B6FF3B]" />
                  {USER_INFO.phone}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#B6FF3B]" />
                  {USER_INFO.location}
                </span>
                <span className="flex items-center gap-2 text-[#B6FF3B]">
                  <GraduationCap className="w-3.5 h-3.5" />
                  GPA: {USER_INFO.education.gpa}
                </span>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#B6FF3B] flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                EDUCATION
              </h2>
              <div className="bg-[#111111]/80 p-5 rounded-2xl border border-white/5">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {USER_INFO.education.degree}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      {USER_INFO.education.institution}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-[#B6FF3B] bg-[#B6FF3B]/10 border border-[#B6FF3B]/30 px-2.5 py-1 rounded-full">
                      GPA: {USER_INFO.education.gpa}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2.5 py-1 rounded-full">
                      {USER_INFO.education.period}
                    </span>
                  </div>
                </div>
                <div className="mt-3 inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400">
                  Specialization: {USER_INFO.education.focus}
                </div>
              </div>
            </div>

            {/* Work & Research Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#B6FF3B] flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                WORK EXPERIENCE (CHRONOLOGICAL)
              </h2>
              <div className="space-y-4">
                {WORK_EXPERIENCES.map((exp, i) => (
                  <div key={i} className="bg-[#111111]/80 p-6 rounded-2xl border border-white/5 space-y-3">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                      <div>
                        <h3 className="text-base font-semibold text-white">{exp.role}</h3>
                        <p className="text-xs text-[#B6FF3B] font-mono">
                          {exp.company} • {exp.location}
                        </p>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 bg-white/5 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-300 italic">"{exp.summary}"</p>

                    <ul className="space-y-2 pt-1">
                      {exp.bullets.map((b, bi) => (
                        <li key={bi} className="text-xs text-zinc-400 flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#B6FF3B] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.skills.map((s, si) => (
                        <span key={si} className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-black border border-white/10 text-zinc-400">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership & Organization */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#B6FF3B] flex items-center gap-2">
                <Award className="w-4 h-4" />
                ORGANIZATIONAL EXPERIENCE
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ORGANISASI.map((org, i) => (
                  <div key={i} className="bg-[#111111]/80 p-5 rounded-2xl border border-white/5 space-y-2">
                    <div className="flex justify-between items-start">
                      <span className="text-[9px] font-mono text-[#B6FF3B] uppercase tracking-wider">
                        {org.badge || "Leadership"}
                      </span>
                      <span className="text-[9px] font-mono text-zinc-400">{org.period}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-white">{org.title}</h3>
                    <p className="text-xs text-zinc-500">{org.organization}</p>
                    <ul className="space-y-1.5 pt-2">
                      {org.bullets.map((b, bi) => (
                        <li key={bi} className="text-xs text-zinc-400 flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF3B] mt-1.5 shrink-0"></span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#B6FF3B] flex items-center gap-2">
                <Award className="w-4 h-4" />
                KEY HONORS & AWARDS
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ACHIEVEMENTS.map((ach, i) => (
                  <div key={i} className="bg-[#111111]/80 p-4 rounded-2xl border border-white/5 flex justify-between items-center gap-3">
                    <div>
                      <h4 className="text-xs font-semibold text-white">{ach.title}</h4>
                      <p className="text-[10px] text-zinc-500">{ach.organizer} • {ach.year}</p>
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-1 rounded bg-[#B6FF3B]/10 text-[#B6FF3B] shrink-0">
                      {ach.rank}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#B6FF3B] flex items-center gap-2">
                <FileCheck className="w-4 h-4" />
                VERIFIED CERTIFICATIONS
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CERTIFICATIONS.map((cert, i) => (
                  <div key={i} className="bg-[#111111]/80 p-3.5 rounded-2xl border border-white/5 flex justify-between items-center gap-2">
                    <div>
                      <h4 className="text-xs font-semibold text-white">{cert.title}</h4>
                      <p className="text-[10px] text-zinc-500">{cert.issuer}</p>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded shrink-0">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#B6FF3B]">
                // CORE TECHNICAL ARSENAL
              </h2>
              <div className="flex flex-wrap gap-2">
                {HARD_SKILLS.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-[#111111] border border-white/10 text-xs font-mono text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Bar */}
          <div className="p-4 sm:p-6 bg-[#111111] border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 shrink-0">
            <span className="text-[11px] font-mono text-zinc-500">
              Verified CV Profile of {USER_INFO.name} • {USER_INFO.location}
            </span>
            <div className="flex items-center gap-3">
              <a
                href={CV_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#B6FF3B] text-black font-semibold text-xs flex items-center gap-2 hover:shadow-[0_0_20px_rgba(182,255,59,0.3)] transition-all cursor-pointer"
              >
                <span>OPEN OFFICIAL CV</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white text-xs font-mono transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
