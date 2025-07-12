"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const navHeight = 80 // Height of the fixed navigation (h-20 = 80px)
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - navHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white/90 backdrop-blur-md border-b border-neutral-200" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <motion.div whileHover={{ scale: 1.05 }} className="text-xl font-light tracking-widest text-neutral-900">
              Aman Deol
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-12">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-neutral-600 hover:text-neutral-900 transition-colors font-light tracking-wide text-lg"
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
                  {item.name}
                </motion.button>
              ))}
              <a href="/aman-resume-final.pdf" target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ y: -2 }}>
                <Button className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-2 rounded-none text-sm font-light tracking-wide">
                  RESUME
                </Button>
              </motion.div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-white" />
            <div className="absolute right-0 top-0 h-full w-full bg-white">
              <div className="flex flex-col h-full pt-24 px-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className="py-6 text-left text-2xl font-light text-neutral-900 border-b border-neutral-100"
                  >
                    {item.name}
                  </motion.button>
                ))}
                <a href="/aman-resume-final.pdf" target="_blank" rel="nnoopener noreferrer">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-12"
                >
                  <Button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-4 rounded-none text-base font-light tracking-wide">
                    DOWNLOAD RESUME
                  </Button>
                </motion.div>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
