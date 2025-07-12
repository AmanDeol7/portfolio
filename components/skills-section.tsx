"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Cloud, Wrench, Brain, Shield } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Java", "Python", "JavaScript", "TypeScript", "C/C++", "SQL"],
  },
  {
    title: "Web & Frameworks",
    icon: Wrench,
    skills: ["Next.js", "React", "Node.js", "Express.js", "FastAPI", "TailwindCSS"],
  },
  {
    title: "Cloud & Databases",
    icon: Cloud,
    skills: ["AWS", "Supabase", "MongoDB", "PostgreSQL", "Firebase", "MySQL"],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: ["TensorRT", "LangGraph", "Ollama", "RAG Systems", "Multi-Agent AI", "NLP"],
  },
  {
    title: "Tools & DevOps",
    icon: Database,
    skills: ["Git", "Docker", "Prisma", "Redux Toolkit", "React Query", "Mongoose"],
  },
  {
    title: "Security & Others",
    icon: Shield,
    skills: [
      "Information Security",
      "Network Security",
      "JWT Authentication",
      "API Security",
      "Data Structures",
      "Algorithms",
    ],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)

  return (
    <section id="skills" ref={ref} className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-light text-neutral-900 mb-8 tracking-tight">SKILLS</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light">
            A comprehensive toolkit spanning full-stack development, AI/ML, and cybersecurity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1, ease: [0.23, 1, 0.32, 1] }}
              onHoverStart={() => setHoveredCategory(categoryIndex)}
              onHoverEnd={() => setHoveredCategory(null)}
              whileHover={{ y: -4 }}
            >
              <Card className="bg-white border border-neutral-200 hover:border-neutral-900 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-8">
                    <motion.div
                      className="w-10 h-10 border border-neutral-200 flex items-center justify-center mr-4"
                      animate={{
                        borderColor: hoveredCategory === categoryIndex ? "#171717" : "#e5e5e5",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <category.icon className="w-5 h-5 text-neutral-600" />
                    </motion.div>
                    <h3 className="text-lg font-light text-neutral-900 tracking-wide">{category.title}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="p-3 border border-neutral-100 hover:border-neutral-200 transition-all duration-300 text-center group cursor-pointer"
                      >
                        <span className="text-neutral-700 font-light text-sm group-hover:text-neutral-900 transition-colors">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Floating Skills Animation */}
        <div className="relative mt-20 h-20 overflow-hidden">
          <motion.div
            className="flex space-x-8 absolute"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            {[...skillCategories.flatMap((cat) => cat.skills), ...skillCategories.flatMap((cat) => cat.skills)].map(
              (skill, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 px-4 py-2 border border-neutral-200 text-neutral-600 font-light text-sm"
                  whileHover={{ y: -2 }}
                >
                  <span className="whitespace-nowrap">{skill}</span>
                </motion.div>
              ),
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
