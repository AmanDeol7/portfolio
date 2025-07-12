"use client"

import { motion, useScroll } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-neutral-900 transform-origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
