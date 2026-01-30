"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

interface AcademicItem {
  degree: string;
  institute: string;
  year: string;
  coursework: string[];
}

const academics: AcademicItem[] = [
  {
    degree: "Bachelor of Science in Data Science and Applications",
    institute: "Indian Institute of Technology Madras",
    year: "2024 - 2028",
    coursework: ["Data Structures & Algorithms", "Machine Learning", "Database Systems", "Web Development"],
  },
  {
    degree: "Higher Secondary Education",
    institute: "N.N International School",
    year: "2021 - 2023",
    coursework: ["Mathematics", "Physics", "Computer Science"],
  },
];

export default function Academics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="academics" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-center">
            Academics
          </h2>

          <div className="space-y-8">
            {academics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-8 border-l-2 border-dark-100 hover:border-light-300 transition-colors"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-black" />
                </div>

                <div className="bg-dark-100 p-6 rounded-lg hover:bg-dark-200 transition-colors">
                  <h3 className="font-display text-xl md:text-2xl font-semibold mb-2">
                    {item.degree}
                  </h3>
                  <p className="text-light-300 mb-2">{item.institute}</p>
                  <p className="text-light-200 text-sm mb-4">{item.year}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-dark-300 text-light-200 text-sm rounded-full"
                      >
                        {course}
                      </span>
                    ))}
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
