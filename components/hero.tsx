"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDownIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Software Developer & Electronics Engineer"
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
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 animate-pulse">Anurag Tiwari</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-8 h-10 font-medium">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {typedText}
              </span>
              <span className="animate-pulse text-purple-500">|</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-lg leading-relaxed">
              A passionate <span className="text-purple-500 font-semibold">tech enthusiast</span> and <span className="text-blue-500 font-semibold">Open Source Contributor</span> from Indore, India, with expertise in web development, electronics, and a
              track record of winning hackathons and leading technical teams.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <Link href="#contact">Get In Touch</Link>
              </Button>
              <Button asChild variant="outline" className="border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
            <div className="flex mt-6 space-x-6">
              <Button asChild variant="ghost" size="icon" className="hover:bg-purple-100 dark:hover:bg-purple-900 transform hover:scale-110 transition-all duration-300" aria-label="GitHub">
                <Link href="https://github.com/AnuragTiwari1508" target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="h-6 w-6 text-gray-700 dark:text-gray-300 hover:text-purple-600" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="hover:bg-purple-100 dark:hover:bg-purple-900 transform hover:scale-110 transition-all duration-300" aria-label="Resume">
                <Link href="https://drive.google.com/file/d/1d1m9G3ANaOS1YZNtq9lbs91hCy20Ad2g/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-300 hover:text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <path d="M14 2v6h6"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                    <path d="M10 9H8"></path>
                  </svg>
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="hover:bg-purple-100 dark:hover:bg-purple-900 transform hover:scale-110 transition-all duration-300" aria-label="LinkedIn">
                <Link
                  href="https://www.linkedin.com/in/anurag-tiwari-4b664627b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon className="h-6 w-6 text-gray-700 dark:text-gray-300 hover:text-purple-600" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="hover:bg-purple-100 dark:hover:bg-purple-900 transform hover:scale-110 transition-all duration-300" aria-label="Email">
                <Link href="mailto:tiwarianurag342409@gmail.com">
                  <MailIcon className="h-6 w-6 text-gray-700 dark:text-gray-300 hover:text-purple-600" />
                </Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 p-1 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
              <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900">
                <img
                  src="/my photo(1111).png"
                  alt="Anurag Tiwari"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
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
