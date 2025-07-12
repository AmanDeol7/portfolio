"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Users, Code } from "lucide-react"

const stats = [
  { label: "CGPA", value: "9.28", icon: GraduationCap },
  { label: "PROJECTS", value: "15+", icon: Code },
  { label: "STUDENTS MENTORED", value: "600+", icon: Users },
  { label: "CERTIFICATIONS", value: "5+", icon: Award },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-light text-neutral-900 mb-8 tracking-tight">ABOUT</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
            A passionate Computer Science student specializing in Information Security, currently pushing the boundaries
            of AI and web development at Bharat Dynamics Limited.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -4 }}
              className="group cursor-pointer"
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
              <Card className="bg-white border border-neutral-200 hover:border-neutral-900 transition-all duration-300 h-full">
                <CardContent className="p-8 text-center">
                  <motion.div
                    className="w-12 h-12 mx-auto mb-6 flex items-center justify-center border border-neutral-200 group-hover:border-neutral-900 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-6 h-6 text-neutral-600 group-hover:text-neutral-900 transition-colors" />
                  </motion.div>
                  <div className="text-4xl font-light text-neutral-900 mb-2">{stat.value}</div>
                  <p className="text-neutral-500 text-sm font-light tracking-wide">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Education & Achievements */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <Card className="bg-white border border-neutral-200 h-full">
              <CardContent className="p-10">
                <h3 className="text-2xl font-light text-neutral-900 mb-8 tracking-wide">EDUCATION</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-medium text-neutral-900 mb-2">
                      Bachelor of Technology - CSE (Information Security)
                    </h4>
                    <p className="text-neutral-600 mb-2 font-light">Vellore Institute of Technology</p>
                    <p className="text-neutral-500 text-sm mb-3 font-light">2022 - 2026</p>
                    <div className="inline-block px-3 py-1 bg-neutral-100 text-neutral-700 text-sm font-light">
                      CGPA: 9.28
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-neutral-900 mb-2">Intermediate (MPC)</h4>
                    <p className="text-neutral-600 mb-2 font-light">Sri Chaitanya Junior College</p>
                    <p className="text-neutral-500 text-sm mb-3 font-light">2020 - 2022</p>
                    <div className="inline-block px-3 py-1 bg-neutral-100 text-neutral-700 text-sm font-light">
                      Grade: 984/1000
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <Card className="bg-white border border-neutral-200 h-full">
              <CardContent className="p-10">
                <h3 className="text-2xl font-light text-neutral-900 mb-8 tracking-wide">ACHIEVEMENTS</h3>
                <div className="space-y-6">
                  <motion.div
                    className="p-6 border border-neutral-100 hover:border-neutral-200 transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <h4 className="font-medium text-neutral-900 mb-2">AWS Solutions Architect</h4>
                    <p className="text-neutral-600 text-sm font-light">
                      Certified in cloud architecture and security best practices
                    </p>
                  </motion.div>
                  <motion.div
                    className="p-6 border border-neutral-100 hover:border-neutral-200 transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <h4 className="font-medium text-neutral-900 mb-2">Merit Scholarship</h4>
                    <p className="text-neutral-600 text-sm font-light">Top 10 in Information Security Specialization</p>
                  </motion.div>
                  <motion.div
                    className="p-6 border border-neutral-100 hover:border-neutral-200 transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <h4 className="font-medium text-neutral-900 mb-2">Technical Head - ADGVIT</h4>
                    <p className="text-neutral-600 text-sm font-light">
                      Led 15+ members, conducted workshops for 600+ students
                    </p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
