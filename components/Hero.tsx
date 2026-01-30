"use client";

import { motion } from "framer-motion";
import { ArrowDown, Palette, PenTool, Layout } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Frontend Developer | Graphic Designer | Startup Builder";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with Logic/Tech Grid */}
      <div className="absolute inset-0 bg-dark-300">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Text Area */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              Ankit Raj Choudhari
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-block px-4 py-2 border border-dark-100 rounded-full bg-dark-200/50 backdrop-blur-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block mr-2 animate-pulse"></span>
              <span className="text-sm font-mono text-light-200">Open to work</span>
            </div>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-light-300 font-light min-h-[40px] font-mono">
              <span className="text-blue-400">&gt;</span> {text}
              <span className="inline-block w-2 h-6 sm:h-8 bg-blue-500 ml-1 animate-pulse" />
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-light-200 transition-colors w-full sm:w-auto hover:scale-105 active:scale-95 transform duration-200"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-4 border border-light-300 text-white font-medium rounded-lg hover:bg-dark-100 transition-colors w-full sm:w-auto flex items-center justify-center gap-2 group"
            >
              Download Resume
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Character Image Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          className="flex-shrink-0 relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
        >
           <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
           <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/10 ring-1 ring-white/20 bg-dark-200">
             {/* Replace src with your actual image */}
             <Image 
               src="https://github.com/shadcn.png" 
               alt="Profile"
               fill
               className="object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-105 hover:scale-110"
               unoptimized // For external placeholder
             />
           </div>
           
           {/* Floating Logic Elements */}
           <motion.div 
             animate={{ y: [0, -10, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute -right-8 top-10 bg-dark-100 p-3 rounded-lg border border-dark-200 shadow-xl"
           >
             <div className="flex gap-2">
               <div className="w-3 h-3 rounded-full bg-red-500" />
               <div className="w-3 h-3 rounded-full bg-yellow-500" />
               <div className="w-3 h-3 rounded-full bg-green-500" />
             </div>
           </motion.div>

           <motion.div 
             animate={{ y: [0, 10, 0] }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             className="absolute -left-6 bottom-10 bg-dark-100 px-4 py-2 rounded-lg border border-dark-200 shadow-xl"
           >
             <code className="text-xs text-blue-400">git commit -m "feat: design + code"</code>
           </motion.div>

           {/* Graphic Design Logic Element */}
           <motion.div 
             animate={{ x: [0, 15, 0], rotate: [0, 10, 0] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
             className="absolute -right-8 bottom-16 bg-gradient-to-br from-dark-100 to-dark-200 p-4 rounded-xl border border-light-300/20 shadow-2xl flex flex-col gap-3 items-center backdrop-blur-md z-20"
           >
             <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-pink-500/20 border border-pink-500 flex items-center justify-center">
                    <Palette className="w-4 h-4 text-pink-500" />
                </div>
                <div className="w-8 h-8 rounded bg-cyan-500/20 border border-cyan-500 flex items-center justify-center">
                    <Layout className="w-4 h-4 text-cyan-500" />
                </div>
             </div>
             <div className="text-xs font-mono text-light-300 px-2 py-1 bg-black/30 rounded w-full text-center border border-white/5">
                design.tsx
             </div>
           </motion.div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-light-300 hover:text-white transition-colors cursor-pointer">
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent" />
        </a>
      </motion.div>
    </section>
  );
}
