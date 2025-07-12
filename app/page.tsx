"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = document.createElement("div")
    const cursorDot = document.createElement("div")
    cursor.className = "custom-cursor"
    cursorDot.className = "cursor-dot"
    document.body.appendChild(cursor)
    document.body.appendChild(cursorDot)

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px"
      cursor.style.top = e.clientY + "px"
      cursorDot.style.left = e.clientX + "px"
      cursorDot.style.top = e.clientY + "px"
    }

    document.addEventListener("mousemove", moveCursor)

    return () => {
      document.removeEventListener("mousemove", moveCursor)
      if (document.body.contains(cursor)) document.body.removeChild(cursor)
      if (document.body.contains(cursorDot)) document.body.removeChild(cursorDot)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative min-h-screen bg-neutral-50 text-neutral-900 overflow-x-hidden">
      {/* Custom Cursor */}
      <style jsx global>{`
        .custom-cursor {
          position: fixed;
          width: 40px;
          height: 40px;
          border: 1px solid rgba(23, 23, 23, 0.2);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          transform: translate(-50%, -50%);
        }
        
        .cursor-dot {
          position: fixed;
          width: 4px;
          height: 4px;
          background: #171717;
          border-radius: 50%;
          pointer-events: none;
          z-index: 10000;
          transition: all 0.1s ease;
          transform: translate(-50%, -50%);
        }
        
        body {
          cursor: none;
        }
        
        .custom-cursor.hover {
          width: 60px;
          height: 60px;
          background: rgba(23, 23, 23, 0.05);
        }
        
        .cursor-dot.hover {
          opacity: 0;
        }
      `}</style>

      {/* Sophisticated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-neutral-50" />
        <div className="absolute inset-0">
          {/* Geometric patterns */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#171717" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Subtle animated elements */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-neutral-900 rounded-full opacity-20">
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            className="w-full h-full bg-neutral-900 rounded-full"
          />
        </div>
        <div className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-neutral-700 rounded-full opacity-30">
          <motion.div
            animate={{ scale: [1, 2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
            className="w-full h-full bg-neutral-700 rounded-full"
          />
        </div>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </div>
  )
}
