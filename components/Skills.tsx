"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Wrench, Database, Brain, Palette } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: any;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code,
    skills: [
      "JavaScript/TypeScript",
      "Python",
      "Go",
      "Java",
      "SQL",
      "HTML/CSS",
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Wrench,
    skills: [
      "React/Next.js",
      "Node.js/Express",
      "React Native/Flutter",
      "TensorFlow/PyTorch",
      "Tailwind CSS",
      "FastAPI/Django",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Database,
    skills: [
      "Git/GitHub",
      "Docker/Kubernetes",
      "PostgreSQL/MongoDB",
      "Redis",
      "AWS/GCP",
      "Firebase",
    ],
  },
  {
    title: "Graphic Design",
    icon: Palette,
    skills: [
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Blender (3D)",
      "UI/UX Design",
      "Motion Graphics",
    ],
  },
  {
    title: "Concepts",
    icon: Brain,
    skills: [
      "Data Structures & Algorithms",
      "System Design",
      "Machine Learning",
      "RESTful APIs",
      "Microservices",
      "CI/CD",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-purple-200">
            Tech Arsenal
          </h2>
          <p className="text-light-300 max-w-2xl mx-auto">
            My toolkit for building digital experiences, from pixel-perfect designs to scalable backends.
          </p>
        </motion.div>

        <motion.div 
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
            <motion.div
              key={index}
              variants={item}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                  <div className="w-12 h-12 bg-dark-200 rounded-lg flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-300 border border-white/5 shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-200 transition-colors">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1.5 bg-dark-300/50 border border-white/5 text-light-200 text-xs font-medium rounded-md group-hover:bg-dark-300 group-hover:border-white/10 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
              </div>
            </motion.div>
          )})}
        </motion.div>
      </div>
    </section>
  );
}
