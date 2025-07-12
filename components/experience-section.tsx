"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Building, Zap } from "lucide-react"

const experiences = [
  {
    title: "AI Project Intern ",
    company: "Bharat Dynamics Limited – Ministry of Defence",
    location: "Hyderabad, Telangana",
    period: "May 2025 – June 2025",
    type: "Internship",
    description: "Developing cutting-edge AI solutions for defense applications in secure, offline environments.",
    achievements: [
      "Developed a Multi-Agent AI system for 30+ defence engineers in offline, air-gapped environments",
      "Integrated TensorRT-optimized local LLMs and fallback Ollama runtime for GPU-accelerated inference",
      "Built scalable backend with FastAPI supporting isolated user sessions and concurrent client handling",
      "Engineered tools for RAG-based document processing and secure multi-language code execution",
    ],
    technologies: ["Python", "FastAPI", "TensorRT", "LangGraph", "Ollama", "RAG", "Multi-Agent Systems"],
  },
  {
    title: "Technical Head",
    company: "ADGVIT",
    location: "Vellore, Tamil Nadu",
    period: "2024",
    type: "Leadership",
    description: "Leading technical initiatives and mentoring students in machine learning and web development.",
    achievements: [
      "Led 15+ members to conduct ML and Web Dev workshops for 600+ students",
      "Mentored juniors and helped secure nomination for Best Technical Club",
      "Organized hackathons and technical events to foster innovation",
      "Developed curriculum for emerging technologies workshops",
    ],
    technologies: ["Leadership", "Machine Learning", "Web Development", "Mentoring", "Event Management"],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" ref={ref} className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-light text-neutral-900 mb-8 tracking-tight">EXPERIENCE</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light">
            Building the future through innovative AI solutions and technical leadership
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="flex justify-center"
            >
              <Card className="bg-white border border-neutral-200 hover:border-neutral-900 transition-all duration-300 max-w-4xl w-full">
                <CardContent className="p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                    <div className="flex-1">
                      <motion.div
                        className="inline-block px-4 py-2 bg-neutral-900 text-white text-sm font-light tracking-wide mb-6"
                        whileHover={{ scale: 1.02 }}
                      >
                        {exp.type}
                      </motion.div>
                      <h3 className="text-3xl font-light text-neutral-900 mb-4 tracking-tight">{exp.title}</h3>
                      <div className="flex items-center text-neutral-600 mb-2 font-light">
                        <Building className="w-4 h-4 mr-3" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center text-neutral-600 mb-2 font-light">
                        <MapPin className="w-4 h-4 mr-3" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center text-neutral-600 mb-6 font-light">
                        <Calendar className="w-4 h-4 mr-3" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-neutral-700 mb-8 leading-relaxed font-light text-lg">{exp.description}</p>

                  <div className="mb-8">
                    <h4 className="text-lg font-medium text-neutral-900 mb-6 flex items-center tracking-wide">
                      <Zap className="w-5 h-5 mr-3" />
                      KEY ACHIEVEMENTS
                    </h4>
                    <ul className="space-y-4">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                          className="text-neutral-700 flex items-start font-light leading-relaxed"
                        >
                          <span className="w-2 h-2 bg-neutral-900 rounded-full mr-4 mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-neutral-900 mb-4 tracking-wide">TECHNOLOGIES</h4>
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.2 + i * 0.05 }}
                          whileHover={{ y: -2 }}
                          className="px-4 py-2 border border-neutral-200 text-neutral-700 text-sm font-light tracking-wide hover:border-neutral-900 hover:text-neutral-900 transition-all duration-300"
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
