"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, TrendingUp, Users, Lightbulb, Code, Palette, Briefcase } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  learnings: string[];
  challenges: string;
  icon: any;
}

const experiences: Experience[] = [
  {
    company: "Spllit",
    role: "Founder & COO",
    period: "2025 - Present",
    learnings: [
      "Building MVP with limited resources",
      "User acquisition and retention strategies",
      "Managing small technical teams",
      "Scaling infrastructure on a budget",
    ],
    challenges: "Balanced product development with business operations while managing a team of 3 developers and handling customer feedback loops.",
    icon: Rocket,
  },
  {
    company: "Congnifyz Technology",
    role: "Frontend Developer",
    period: "2023 - 2024",
    learnings: [
      "Building responsive user interfaces with React",
      "Optimizing web performance and accessibility",
      "Collaborating with backend teams for API integration",
      "State management using Redux/Context API",
    ],
    challenges: "Delivered high-quality frontend code for multiple client projects under tight deadlines.",
    icon: Code,
  },
  {
    company: "Water Mobility Project",
    role: "Lead Developer",
    period: "2022 - 2023",
    learnings: [
      "Real-time systems and WebSocket architecture",
      "Connected officially with SeaBubble for water taxi logic",
      "Payment gateway integration",
      "User experience design for mobile",
    ],
    challenges: "Solved complex routing algorithms and ensured 99.9% uptime. Established official technical partnerships with SeaBubble.",
    icon: TrendingUp,
  },
  {
    company: "Mangus",
    role: "Graphic Designer",
    period: "2022 - 2023",
    learnings: [
      "Designed posters and pamphlets for marketing campaigns",
      "Managed social media reels and content creation",
      "LinkedIn branding and professional presence",
      "Visual storytelling through graphic design",
    ],
    challenges: "Created cohesive brand identity assets across print and digital media to increase engagement.",
    icon: Palette,
  },
  {
    company: "Joses Inculations",
    role: "Front Desk & Operations",
    period: "2021 - 2022",
    learnings: [
      "Office administration and paperwork management",
      "Customer service and client reception",
      "Organizational workflow optimization",
      "Handling sensitive documentation",
    ],
    challenges: "Streamlined office paperwork processes ensuring zero errors in daily operations.",
    icon: Briefcase,
  },
  {
    company: "Community Marketplace",
    role: "Founder & Developer",
    period: "2021 - 2022",
    learnings: [
      "Understanding user needs through interviews",
      "Iterative development and pivoting",
      "Basic business model validation",
      "Community building and engagement",
    ],
    challenges: "Validated product-market fit by talking to 100+ potential users before writing a single line of code.",
    icon: Users,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-center">
            Startup Journey
          </h2>
          <p className="text-light-300 text-center mb-16 max-w-2xl mx-auto">
            Learning by building, failing fast, and iterating
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-dark-100 rounded-lg p-6 md:p-8 hover:bg-dark-200 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-black" />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-semibold mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-light-300 mb-2">{exp.role}</p>
                      <p className="text-light-200 text-sm mb-4">{exp.period}</p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-light-100 mb-2 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4" />
                          Key Learnings
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {exp.learnings.map((learning, i) => (
                            <li
                              key={i}
                              className="text-sm text-light-200 flex items-start gap-2"
                            >
                              <span className="text-white mt-1">•</span>
                              <span>{learning}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-dark-300 p-4 rounded-lg border-l-4 border-white">
                        <p className="text-sm text-light-200">
                          <span className="font-semibold text-white">Challenge: </span>
                          {exp.challenges}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
