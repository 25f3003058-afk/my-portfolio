"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 bg-dark-300">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-center">
            About Me
          </h2>
          
          <div className="space-y-6 text-light-200 text-lg leading-relaxed">
            <p>
              I'm a tech enthusiast passionate about solving real-world problems through technology. 
              As a student and startup builder, I focus on creating products that make a tangible impact.
            </p>
            
            <p>
              My journey combines creative design, frontend development, and entrepreneurship. 
              I thrive on building solutions from the ground up—whether it's designing intuitive interfaces, 
              crafting pixel-perfect frontends, or launching startups that address genuine market needs.
            </p>
            
            <p>
              I believe in learning by doing. Every project I take on teaches me something new about 
              technology, people, and business. My goal is to build products that matter and solve 
              problems that people actually face.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
