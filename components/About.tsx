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
              By day, I'm a <strong>B.S. in Data Science & AI student at IIT Madras</strong>. By night, I'm a 
              <strong>UI/UX & Graphic Designer</strong> obsessed with crafting intuitive interfaces and impactful visual identities.
              I combine analytical thinking with modern design principles to build products that look good and work even better.
            </p>
            
            <p>
              My journey is fueled by a mix of creative design, frontend wizardry, and startup grit. 
              I have a strong foundation in user flow design, wireframing, and brand identity creation. 
              From producing digital assets to mocking up websites in **Figma** and **Canva**, I turn abstract ideas into pixels.
            </p>
            
            <p>
              Currently, I'm building solutions that matter—whether it's designing clean web UI screens for student platforms 
              like <strong>SkillBee</strong>, developing futuristic splitting services like **Spllit**, or creating cohesive 
              branding for food businesses like **Alpha Kitchen**. I learn by building, failing fast, and iterating faster.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
