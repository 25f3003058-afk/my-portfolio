"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight, FolderGit2 } from "lucide-react";

interface Project {
  name: string;
  problem: string;
  techStack: string[];
  role: string;
  impact: string;
  liveUrl?: string;
  githubUrl?: string;
  highlight?: boolean;
  color: string;
}

const projects: Project[] = [
  {
    name: "Spllit",
    problem: "Streamlining shared expenses for groups with a focus on simple UX.",
    techStack: ["React Native", "Node.js", "PostgreSQL", "Supabase"],
    role: "Co-Founder & CTO",
    impact: "Scaling MVP infrastructure on a budget.",
    liveUrl: "https://spllit.app",
    highlight: true,
    color: "from-blue-600 to-indigo-600"
  },
  {
    name: "Water Mobility System",
    problem: "Inefficient urban water transportation and lack of real-time booking.",
    techStack: ["React Native", "Node.js", "PostgreSQL", "Google Maps"],
    role: "Lead Developer",
    impact: "Reduced booking time by 70%, serving daily commuters.",
    highlight: true,
    color: "from-cyan-500 to-blue-500"
  },
  {
    name: "Community Marketplace",
    problem: "Lack of trusted local platforms for peer-to-peer commerce.",
    techStack: ["React", "Node.js", "PostgreSQL", "AWS S3"],
    role: "Founder",
    impact: "Connected 300+ local sellers with buyers.",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Ride Booking Backend",
    problem: "Need for scalable, real-time ride matching with low latency.",
    techStack: ["Go", "Redis", "PostgreSQL", "WebSocket", "Docker"],
    role: "Backend Engineer",
    impact: "Handles 10K+ concurrent connections.",
    githubUrl: "https://github.com/ankit/ride-backend",
    color: "from-emerald-500 to-green-600"
  },
  {
    name: "ML Price Prediction",
    problem: "Dynamic pricing optimization for ride-sharing markets.",
    techStack: ["Python", "TensorFlow", "Pandas", "FastAPI"],
    role: "Data Scientist",
    impact: "Improved pricing accuracy by 35%.",
    color: "from-orange-500 to-red-500"
  },
  {
    name: "Graphic Design Portfolio",
    problem: "Visual storytelling and brand identity design.",
    techStack: ["Canva", "Adobe Creative Suite", "Figma", "Design Theory"],
    role: "Graphic Designer",
    impact: "Created visual assets for startups and marketing campaigns.",
    liveUrl: "/graphics", // Internal Link
    isInternal: true, // Custom flag to handle internal links differently if needed
    color: "from-pink-500 to-rose-500"
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Decorative floating cubes for "Logic" theme
  const FloatingCube = ({ className, delay = 0 }: { className: string, delay?: number }) => (
    <motion.div
        animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
        }}
        transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay
        }}
        className={`absolute pointer-events-none opacity-20 ${className}`}
    >
        <div className="w-16 h-16 border border-white/20 rounded-xl bg-white/5 backdrop-blur-sm transform rotate-45 shadow-2xl" />
    </motion.div>
  );

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden bg-black/40">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Elements / Characters */}
      <FloatingCube className="top-20 left-10" delay={0} />
      <FloatingCube className="bottom-40 right-20 w-24 h-24 border-blue-400/20" delay={2} />
      <FloatingCube className="top-1/3 right-10 w-12 h-12 border-purple-400/20" delay={1} />


      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center mb-16 relative">
             {/* Section Character/Icon */}
             <div className="absolute -top-12 opacity-10">
                <FolderGit2 className="w-64 h-64 text-white" />
             </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60 relative z-10">
              Selected Works
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4 relative z-10" />
            <p className="text-light-300 text-center max-w-2xl mx-auto relative z-10">
              Real-world products solving genuine problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative bg-dark-100 rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10 ${
                  project.highlight ? "ring-1 ring-white/10" : ""
                }`}
              >
                {/* Image Placeholder Gradient with Custom Color */}
                <div 
                    className={`h-48 w-full relative overflow-hidden group-hover:scale-105 transition-all duration-500 bg-gradient-to-br ${project.color}`}
                >
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,.3)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite]" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-40">
                         {/* Dynamic Icon based on project type if possible, else generic folder */}
                         <FolderGit2 className="w-16 h-16 text-white drop-shadow-lg" />
                    </div>
                    {project.highlight && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-xs font-medium text-white shadow-lg">
                            Featured
                        </div>
                    )}
                </div>

                <div className="p-6 relative">
                  <h3 className="font-display text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors flex items-center justify-between">
                    {project.name}
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>

                  <p className="text-light-300 text-sm mb-4 line-clamp-2 h-10">
                    {project.problem}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-white/5 border border-white/5 text-light-200 text-xs rounded-md group-hover:border-white/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                        <span className="px-2.5 py-1 text-light-300 text-xs">+ {project.techStack.length - 4}</span>
                    )}
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-white/5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target={project.name === "Graphic Design Portfolio" ? "_self" : "_blank"}
                        rel={project.name === "Graphic Design Portfolio" ? "" : "noopener noreferrer"}
                        className="flex-1 px-4 py-2.5 bg-white text-black text-sm font-semibold rounded-lg hover:bg-light-200 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-lg shadow-white/5"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {project.name === "Graphic Design Portfolio" ? "View Gallery" : "Live Demo"}
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2.5 bg-dark-200 text-white border border-white/10 text-sm font-medium rounded-lg hover:bg-dark-300 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
