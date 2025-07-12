"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Play, X } from "lucide-react"

const projects = [
  {
    title: "Agentic AI System for Coding and Data Analysis",
    description:
      "A Multi-AI Agentic System specialized at code generation, analysis with the support of a code execution tool and Document/Data analysis using RAG. Deployable with a Client-Server Architecture using Docker.",
    longDescription:
      "Built a comprehensive repair platform using Next.js and Supabase, featuring real-time chat capabilities, secure authentication, role-based access control, and interactive job mapping. The platform achieved a 40% performance boost through optimized queries and caching strategies.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "FastAPI", "TensorRT-LLM", "LangGraph", "Ollama", "RAG", "Streamlit", "Docker"],
    features: [
      "Developed a Multi-Agent AI system for 30+ defence engineers in offline, air-gapped environments",
      "Integrated TensorRT-optimized local LLMs and fallback Ollama runtime for GPU-accelerated inference",
      "Built scalable backend with FastAPI supporting isolated user sessions and concurrent client handling",
      "Engineered tools for RAG-based document processing and secure multi-language code execution",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/AmanDeol7/Repair-Match",
    year: "2025",
  },
  {
    title: "Repair Match",
    description:
      "A full-stack repair platform connecting users with service providers through real-time chat and location-based matching.",
    longDescription:
      "Built a comprehensive repair platform using Next.js and Supabase, featuring real-time chat capabilities, secure authentication, role-based access control, and interactive job mapping. The platform achieved a 40% performance boost through optimized queries and caching strategies.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "Supabase", "PostgreSQL", "Mapbox API", "React Query", "TypeScript"],
    features: [
      "Real-time chat with Supabase Realtime",
      "Location-based job matching with Mapbox",
      "Secure authentication and role-based access",
      "40% performance improvement through optimization",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/AmanDeol7/Repair-Match",
    year: "2025",
  },
  {
    title: "CollegeThrift",
    description:
      "A full-stack e-commerce platform for college students to buy and sell second-hand items with secure payments.",
    longDescription:
      "Developed a comprehensive e-commerce solution using the MERN stack with JWT authentication, PayPal integration for secure payments, and Redux Toolkit for state management. Achieved 35% performance improvement through RTK Query caching and code splitting.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Redux Toolkit", "PayPal API"],
    features: [
      "JWT authentication with MongoDB Atlas",
      "PayPal sandbox integration for payments",
      "Redux Toolkit for state management",
      "35% performance boost through optimization",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/AmanDeol7",
    year: "2024",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section id="projects" ref={ref} className="py-32 px-6 relative bg-neutral-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-light text-neutral-900 mb-8 tracking-tight">PROJECTS</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light">
            Innovative solutions that showcase my expertise in full-stack development and AI integration
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <Card className="bg-white border border-neutral-200 hover:border-neutral-900 transition-all duration-300 overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-neutral-900/40 transition-all duration-300" />
                  <motion.div
                    className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-3 py-1"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    <span className="text-neutral-900 text-sm font-light">{project.year}</span>
                  </motion.div>
                </div>

                <CardContent className="p-8">
                  <motion.h3 className="text-2xl font-light text-neutral-900 mb-4 tracking-tight group-hover:text-neutral-700 transition-colors">
                    {project.title}
                  </motion.h3>

                  <p className="text-neutral-600 mb-6 leading-relaxed font-light">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.2 + i * 0.05 }}
                        className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm font-light"
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        onClick={() => setSelectedProject(index)}
                        className="bg-neutral-900 hover:bg-neutral-800 text-white flex items-center gap-2 px-6 py-2 rounded-none text-sm font-light tracking-wide"
                      >
                        <Play className="w-4 h-4" />
                        VIEW DETAILS
                      </Button>
                    </motion.div>

                    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        variant="outline"
                        className="border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white flex items-center gap-2 px-6 py-2 rounded-none text-sm font-light tracking-wide bg-transparent"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          CODE
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="bg-white rounded-none max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={projects[selectedProject].image || "/placeholder.svg"}
                    alt={projects[selectedProject].title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-neutral-900/30" />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white text-neutral-900 rounded-none"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="p-10">
                  <h3 className="text-4xl font-light text-neutral-900 mb-6 tracking-tight">
                    {projects[selectedProject].title}
                  </h3>

                  <p className="text-neutral-700 mb-8 leading-relaxed text-lg font-light">
                    {projects[selectedProject].longDescription}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xl font-medium text-neutral-900 mb-4 tracking-wide">KEY FEATURES</h4>
                    <ul className="space-y-3">
                      {projects[selectedProject].features.map((feature, i) => (
                        <li key={i} className="text-neutral-700 flex items-start font-light">
                          <span className="w-2 h-2 bg-neutral-900 rounded-full mr-4 mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-10">
                    <h4 className="text-xl font-medium text-neutral-900 mb-4 tracking-wide">TECHNOLOGIES USED</h4>
                    <div className="flex flex-wrap gap-3">
                      {projects[selectedProject].technologies.map((tech, i) => (
                        <div key={i} className="px-4 py-2 bg-neutral-100 text-neutral-700 text-sm font-light">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      className="bg-neutral-900 hover:bg-neutral-800 text-white flex items-center gap-2 px-6 py-3 rounded-none font-light tracking-wide"
                      asChild
                    >
                      <a href={projects[selectedProject].demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        LIVE DEMO
                      </a>
                    </Button>

                    <Button
                      variant="outline"
                      className="border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white flex items-center gap-2 px-6 py-3 rounded-none font-light tracking-wide bg-transparent"
                      asChild
                    >
                      <a href={projects[selectedProject].githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        VIEW CODE
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
