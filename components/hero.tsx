"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDownIcon, GithubIcon, LinkedinIcon, MailIcon, SparklesIcon, CodeIcon } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "2X Hackathon Winner & Full Stack Developer"
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prevText) => prevText + fullText[textIndex])
        setTextIndex((prevText) => prevText + 1)
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [textIndex, fullText])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 pb-8 px-4 overflow-hidden">
      {/* Spectacular Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        </div>
        
        {/* Floating Code Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-purple-400/30 dark:text-purple-300/20 font-mono text-sm"
            initial={{ 
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 800,
              opacity: 0 
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          >
            {['{ }', '< />', '[ ]', '( )', '=>', '&&', '||', '==='][Math.floor(Math.random() * 8)]}
          </motion.div>
        ))}
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -100, rotateY: -45 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ 
              duration: 1.2,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
          >
            {/* Greeting Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-400/20 dark:to-pink-400/20 rounded-full backdrop-blur-sm border border-purple-200/50 dark:border-purple-400/30 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <SparklesIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span className="text-purple-700 dark:text-purple-300 font-medium">Welcome to my digital universe</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="text-gray-900 dark:text-white">Hey, I'm </span>
              <motion.span 
                className="prismatic-text inline-block"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(139, 92, 246, 0.8)"
                }}
                transition={{ duration: 0.3 }}
              >
                Anurag Tiwari
              </motion.span>
            </motion.h1>
            
            <motion.h2 
              className="text-lg md:text-xl lg:text-2xl mb-8 font-semibold min-h-[3rem] flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 font-bold"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              >
                {typedText}
              </motion.span>
              <motion.span 
                className="text-purple-600 dark:text-purple-400 ml-2 text-3xl font-thin"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                |
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              I'm a{" "}
              <motion.span 
                className="text-purple-600 dark:text-purple-400 font-bold"
                whileHover={{ 
                  scale: 1.1,
                  textShadow: "0 0 10px rgba(147, 51, 234, 0.8)"
                }}
              >
                passionate creator
              </motion.span>
              {" "}from Indore, India 🇮🇳 who transforms{" "}
              <motion.span 
                className="text-pink-600 dark:text-pink-400 font-bold"
                whileHover={{ 
                  scale: 1.1,
                  textShadow: "0 0 10px rgba(236, 72, 153, 0.8)"
                }}
              >
                coffee into code
              </motion.span>
              {" "}and{" "}
              <motion.span 
                className="text-blue-600 dark:text-blue-400 font-bold"
                whileHover={{ 
                  scale: 1.1,
                  textShadow: "0 0 10px rgba(59, 130, 246, 0.8)"
                }}
              >
                ideas into reality
              </motion.span>
              . A 2X hackathon champion crafting extraordinary digital experiences! ✨
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-6 mb-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button asChild className="morphing-gradient text-white px-10 py-4 text-lg font-bold rounded-full shadow-2xl border-2 border-white/20 backdrop-blur-sm">
                  <Link href="#contact" className="flex items-center gap-3">
                    <MailIcon className="w-5 h-5" />
                    Let's Connect
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button asChild variant="outline" className="border-3 border-purple-500/50 text-purple-700 dark:text-purple-300 hover:bg-purple-500/10 dark:hover:bg-purple-400/20 px-10 py-4 text-lg font-bold rounded-full backdrop-blur-sm hover:border-purple-400 transition-all duration-300">
                  <Link href="#projects" className="flex items-center gap-3">
                    <CodeIcon className="w-5 h-5" />
                    Explore Work
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div 
              className="flex space-x-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              {[
                { href: "https://github.com/AnuragTiwari1508", icon: GithubIcon, label: "GitHub", color: "hover:text-gray-800 dark:hover:text-white" },
                { href: "https://drive.google.com/file/d/1d1m9G3ANaOS1YZNtq9lbs91hCy20Ad2g/view?usp=drive_link", icon: () => <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M16 13H8"></path><path d="M16 17H8"></path><path d="M10 9H8"></path></svg>, label: "Resume", color: "hover:text-blue-600 dark:hover:text-blue-400" },
                { href: "https://www.linkedin.com/in/anurag-tiwari-4b664627b/", icon: LinkedinIcon, label: "LinkedIn", color: "hover:text-blue-600 dark:hover:text-blue-400" },
                { href: "mailto:tiwarianurag342409@gmail.com", icon: MailIcon, label: "Email", color: "hover:text-green-600 dark:hover:text-green-400" }
              ].map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, y: 30, scale: 0.5 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    delay: 1.1 + index * 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -8,
                    rotate: 5,
                    boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button asChild variant="ghost" size="icon" className={`relative rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border border-purple-200/50 dark:border-purple-400/30 backdrop-blur-sm transition-all duration-300 ${social.color} glow-pulse`} aria-label={social.label}>
                    <Link href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-7 w-7 text-gray-700 dark:text-gray-300" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Spectacular Profile Image Section */}
          <motion.div
            className="md:w-1/2 flex justify-center relative"
            initial={{ opacity: 0, x: 100, rotateY: 45 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ 
              duration: 1.2,
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.4
            }}
          >
            <div className="relative">
              {/* Holographic Background Ring */}
              <motion.div 
                className="absolute -inset-8 rounded-full holographic opacity-50 blur-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Main Image Container */}
              <motion.div 
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden p-2 levitate"
                style={{
                  background: 'conic-gradient(from 0deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe, #667eea)',
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 15,
                  boxShadow: "0 30px 60px rgba(139, 92, 246, 0.4)"
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900 border-4 border-white/50 dark:border-gray-800/50">
                  <motion.img
                    src="/my photo(1111).png"
                    alt="Anurag Tiwari - Full Stack Developer"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>
                
                {/* Floating Particles around image */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                    style={{
                      top: `${20 + Math.sin(i * 45 * Math.PI / 180) * 180}px`,
                      left: `${20 + Math.cos(i * 45 * Math.PI / 180) * 180}px`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.5, 1, 0.5],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                      duration: 3 + i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3
                    }}
                  />
                ))}
              </motion.div>

              {/* Enhanced Achievement Badge */}
              <motion.div 
                className="absolute -top-8 -right-8 w-28 h-28 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-white/80 dark:border-gray-800/80 glow-pulse"
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ 
                  scale: 1.3, 
                  rotate: 360,
                  boxShadow: "0 0 50px rgba(251, 191, 36, 0.8)"
                }}
              >
                <span className="text-4xl">🏆</span>
                <span className="text-sm font-bold text-white">2X</span>
                <span className="text-xs font-semibold text-white/90">WINNER</span>
              </motion.div>

              {/* Status Badge */}
              <motion.div 
                className="absolute -bottom-8 -left-8 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-4 rounded-2xl text-sm font-bold shadow-2xl border-4 border-white/80 dark:border-gray-800/80 flex items-center gap-3 backdrop-blur-sm"
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 40px rgba(34, 197, 94, 0.6)"
                }}
              >
                <motion.div 
                  className="w-4 h-4 bg-white rounded-full"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span>Available for Work</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center mt-16">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <Link href="#about">
              <Button variant="ghost" size="icon" aria-label="Scroll down">
                <ArrowDownIcon className="h-6 w-6" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}