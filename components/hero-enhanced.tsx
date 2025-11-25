"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDownIcon, GithubIcon, LinkedinIcon, MailIcon, SparklesIcon } from "lucide-react"
import Link from "next/link"

export default function HeroEnhanced() {
  const [typedText, setTypedText] = useState("")
  const [currentRole, setCurrentRole] = useState(0)
  const roles = [
    "Software Developer & Electronics Engineer",
    "2X Hackathon Winner 🏆",
    "Full Stack Developer",
    "Tech Enthusiast & Innovator"
  ]
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const currentText = roles[currentRole]
    const typingSpeed = isDeleting ? 50 : 100
    const timeout = setTimeout(() => {
      if (!isDeleting && textIndex < currentText.length) {
        setTypedText(currentText.substring(0, textIndex + 1))
        setTextIndex(textIndex + 1)
      } else if (isDeleting && textIndex > 0) {
        setTypedText(currentText.substring(0, textIndex - 1))
        setTextIndex(textIndex - 1)
      } else if (!isDeleting && textIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && textIndex === 0) {
        setIsDeleting(false)
        setCurrentRole((prevRole) => (prevRole + 1) % roles.length)
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [textIndex, isDeleting, currentRole, roles])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 pb-8 px-4 overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="hero-particle absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 40 - 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Mouse follower effect */}
      <motion.div 
        className="fixed w-96 h-96 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.03) 0%, transparent 70%)',
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 1.2, 
              type: "spring", 
              stiffness: 100,
              damping: 20
            }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm{" "}
              <motion.span 
                className="text-shimmer neon-glow inline-block"
                animate={{ 
                  rotateX: [0, 10, 0],
                  rotateY: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Anurag Tiwari
              </motion.span>
            </motion.h1>
            
            <motion.div
              className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-10 font-medium min-h-[3rem] flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="gradient-text-animate font-bold">
                {typedText}
              </span>
              <motion.span 
                className="text-purple-600 dark:text-purple-400 ml-2 text-2xl"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                |
              </motion.span>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-700 dark:text-gray-400 mb-12 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              A passionate{" "}
              <motion.span 
                className="text-purple-600 dark:text-purple-400 font-bold"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                tech innovator
              </motion.span>
              {" "}and{" "}
              <motion.span 
                className="text-blue-600 dark:text-blue-400 font-bold"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                2X hackathon winner
              </motion.span>
              {" "}from Indore, India, specializing in full-stack development, electronics, and leading technical teams to victory.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="btn-enhanced text-white px-10 py-4 text-lg font-bold shadow-2xl rounded-full overflow-hidden">
                  <Link href="#contact" className="flex items-center gap-2">
                    <MailIcon className="w-5 h-5" />
                    Get In Touch
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="outline" className="magnetic-hover border-2 border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-500 hover:text-white px-10 py-4 text-lg font-bold rounded-full backdrop-blur-sm">
                  <Link href="#projects" className="flex items-center gap-2">
                    <SparklesIcon className="w-5 h-5" />
                    View Projects
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex mt-8 space-x-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              {[
                { href: "https://github.com/AnuragTiwari1508", icon: GithubIcon, label: "GitHub", color: "hover:text-purple-600 dark:hover:text-purple-400" },
                { href: "https://drive.google.com/file/d/1d1m9G3ANaOS1YZNtq9lbs91hCy20Ad2g/view?usp=drive_link", icon: null, label: "Resume", color: "hover:text-blue-600 dark:hover:text-blue-400" },
                { href: "https://www.linkedin.com/in/anurag-tiwari-4b664627b/", icon: LinkedinIcon, label: "LinkedIn", color: "hover:text-pink-600 dark:hover:text-pink-400" }
              ].map((social, index) => (
                <motion.div
                  key={social.label}
                  whileHover={{ 
                    scale: 1.2, 
                    rotateY: 10,
                    rotateX: 5
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button asChild variant="ghost" size="icon" className={`dynamic-card rounded-xl p-4 ${social.color}`} aria-label={social.label}>
                    <Link href={social.href} target="_blank" rel="noopener noreferrer">
                      {social.icon ? (
                        <social.icon className="h-7 w-7" />
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <path d="M14 2v6h6"></path>
                          <path d="M16 13H8"></path>
                          <path d="M16 17H8"></path>
                          <path d="M10 9H8"></path>
                        </svg>
                      )}
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 100, rotateY: 45 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ 
              duration: 1.5, 
              type: "spring", 
              stiffness: 80,
              damping: 20,
              delay: 0.3
            }}
          >
            <div className="relative card-3d">
              <motion.div
                className="card-3d-inner relative"
                animate={{
                  rotateY: [0, 5, -5, 0],
                  rotateX: [0, 2, -2, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-80 h-80 md:w-96 md:h-96 relative">
                  {/* Animated rings around profile */}
                  <motion.div 
                    className="absolute inset-0 rounded-full border-4 border-purple-500/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div 
                    className="absolute inset-4 rounded-full border-2 border-pink-500/20"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Main profile container */}
                  <motion.div 
                    className="w-full h-full rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 p-1.5 shadow-2xl"
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 15,
                      rotateX: 10
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-2 overflow-hidden">
                      <motion.img
                        src="/my photo(1111).png"
                        alt="Anurag Tiwari"
                        className="w-full h-full object-cover rounded-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Floating achievement badges */}
              <motion.div 
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex flex-col items-center justify-center shadow-xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.2 }}
              >
                <span className="text-2xl">🏆</span>
                <span className="text-xs font-bold text-white">2X</span>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-xl"
                animate={{
                  y: [0, 10, 0],
                  x: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                whileHover={{ scale: 1.15 }}
              >
                <span className="text-xl">🚀</span>
              </motion.div>
              
              <motion.div 
                className="absolute top-8 -left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                whileHover={{ scale: 1.3 }}
              >
                <span className="text-lg">💡</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Button asChild variant="ghost" size="icon" className="dynamic-card rounded-full" aria-label="Scroll down">
            <Link href="#about">
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowDownIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              </motion.div>
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}