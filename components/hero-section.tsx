"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as any, { once: true })
  const controls = useAnimation()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* Floating elements that follow mouse */}
      <motion.div
        className="absolute w-96 h-96 border border-neutral-200 rounded-full pointer-events-none"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        style={{ top: "20%", left: "10%" }}
      />
      <motion.div
        className="absolute w-64 h-64 border border-neutral-300 rounded-full pointer-events-none"
        animate={{
          x: mousePosition.x * -0.01,
          y: mousePosition.y * -0.01,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 15 }}
        style={{ bottom: "20%", right: "15%" }}
      />

      {/* Main Content */}
      <motion.div
        className="text-center max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Name with sophisticated animation */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1 className="text-7xl md:text-9xl font-light tracking-tight text-neutral-900 mb-4">
            {"AMAN".split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.23, 1, 0.32, 1],
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h2 className="text-7xl md:text-9xl font-light tracking-tight text-neutral-400">
            {"DEOL".split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: (index + 4) * 0.1,
                  ease: [0.23, 1, 0.32, 1],
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>
        </motion.div>

        {/* Role with typewriter effect */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="text-xl md:text-2xl font-light text-neutral-600 h-8 flex items-center justify-center">
            <TypeAnimation
              sequence={[
                "AI Engineer",
                2000,
                "Full Stack Developer",
                2000,
                "Problem Solver",
                2000,
                "Innovation Catalyst",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-neutral-500 mb-16 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Crafting intelligent solutions at the intersection of AI and web development. Currently building multi-agent
          systems for defense applications while pursuing excellence in Computer Science at VIT.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 mb-20">
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onHoverStart={() => {
              const cursor = document.querySelector(".custom-cursor")
              const dot = document.querySelector(".cursor-dot")
              cursor?.classList.add("hover")
              dot?.classList.add("hover")
            }}
            onHoverEnd={() => {
              const cursor = document.querySelector(".custom-cursor")
              const dot = document.querySelector(".cursor-dot")
              cursor?.classList.remove("hover")
              dot?.classList.remove("hover")
            }}
          >
            <Button
              className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 rounded-none text-base font-light tracking-wide transition-all duration-300 border-0"
            >
              VIEW WORK
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onHoverStart={() => {
              const cursor = document.querySelector(".custom-cursor")
              const dot = document.querySelector(".cursor-dot")
              cursor?.classList.add("hover")
              dot?.classList.add("hover")
            }}
            onHoverEnd={() => {
              const cursor = document.querySelector(".custom-cursor")
              const dot = document.querySelector(".cursor-dot")
              cursor?.classList.remove("hover")
              dot?.classList.remove("hover")
            }}
          >
            <a href="/aman-resume-final.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                className="border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white px-8 py-4 rounded-none text-base font-light tracking-wide transition-all duration-300 bg-transparent"
              >
                <Download className="w-4 h-4 mr-2" />
                RESUME
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center space-x-8">
          {[
            { icon: Github, href: "https://github.com/AmanDeol7", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/aman-muppidi", label: "LinkedIn" },
            { icon: Mail, href: "mailto:amandeolm@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-neutral-200 hover:border-neutral-900 transition-all duration-300 group"
              whileHover={{ y: -2 }}
              onHoverStart={() => {
                const cursor = document.querySelector(".custom-cursor")
                const dot = document.querySelector(".cursor-dot")
                cursor?.classList.add("hover")
                dot?.classList.add("hover")
              }}
              onHoverEnd={() => {
                const cursor = document.querySelector(".custom-cursor")
                const dot = document.querySelector(".cursor-dot")
                cursor?.classList.remove("hover")
                dot?.classList.remove("hover")
              }}
            >
              <Icon className="w-5 h-5 text-neutral-600 group-hover:text-neutral-900 transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div variants={itemVariants} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center text-neutral-400"
          >
            <span className="text-xs font-light tracking-widest mb-2">SCROLL</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
