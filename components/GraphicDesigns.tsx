"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Palette, Image as ImageIcon, Instagram, Linkedin, FileText, PenTool } from "lucide-react";
import Image from "next/image";

interface DesignProject {
  title: string;
  category: "Social Media" | "Poster" | "Branding" | "Office";
  description: string;
  icon: any;
  color: string;
}

const projects: DesignProject[] = [
  {
    title: "Mangus Brand Identity",
    category: "Branding",
    description: "Complete visual identity including posters and pamphlets for marketing campaigns.",
    icon: Palette,
    color: "bg-purple-500",
  },
  {
    title: "Social Media Reels",
    category: "Social Media",
    description: "Engaging short-form video content and static posts for Instagram and LinkedIn.",
    icon: Instagram,
    color: "bg-pink-500",
  },
  {
    title: "Professional Branding",
    category: "Branding",
    description: "LinkedIn profile optimization and professional banner designs.",
    icon: Linkedin,
    color: "bg-blue-500",
  },
  {
    title: "Office Documentation",
    category: "Office",
    description: "Structured and professionally designed office paperwork and forms.",
    icon: FileText,
    color: "bg-green-500",
  },
  {
    title: "Event Posters",
    category: "Poster",
    description: "Eye-catching event posters designed using Canva for various startups.",
    icon: ImageIcon,
    color: "bg-orange-500",
  },
];

export default function GraphicDesigns() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="graphics" className="py-24 px-6 relative overflow-hidden">
      {/* Cartoonist Logic / Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block p-4 bg-dark-100 rounded-full mb-6 border border-dark-200">
            <PenTool className="w-8 h-8 text-purple-400" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Creative <span className="text-purple-400">Hub</span>
          </h2>
          <p className="text-light-300 max-w-2xl mx-auto">
            Where logic meets creativity. A collection of my graphic design work, 
            branding assets, and visual storytelling created with Canva and precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative bg-dark-100 rounded-xl overflow-hidden border border-dark-200 hover:border-purple-500/50 transition-all duration-300"
              >
                {/* Card Header / "Canvas" */}
                <div className={`h-48 ${project.color}/20 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid-white/[0.05]" />
                  <motion.div
                    animate={hoveredIndex === index ? { rotate: [0, -10, 10, 0], scale: 1.1 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className={`w-16 h-16 ${project.color.replace('bg-', 'text-')}`} />
                  </motion.div>
                  
                  {/* "Logic" decoration */}
                  <div className="absolute top-2 right-2 flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${project.color}/10 ${project.color.replace('bg-', 'text-')} border border-${project.color.replace('bg-', '')}-500/20`}>
                      {project.category}
                    </span>
                    <span className="text-xs text-light-300 font-mono">CANVA</span>
                  </div>
                  
                  <h3 className="font-display text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-light-300 text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Hover Effect Light */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/20 rounded-xl pointer-events-none transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
