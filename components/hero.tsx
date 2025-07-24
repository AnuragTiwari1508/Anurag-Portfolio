"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDownIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Electronics Engineer & Web Developer"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I&apos;m <span className="text-purple-600">Anurag Tiwari</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 h-8">
              {typedText}
              <span className="animate-pulse">|</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              A passionate tech enthusiast from Indore, India, with expertise in web development, electronics, and a
              track record of winning hackathons and leading technical teams.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <Link href="#contact">Get In Touch</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
            <div className="flex mt-8 space-x-4">
              <Button asChild variant="ghost" size="icon" aria-label="GitHub">
                <Link href="https://github.com/AnuragTiwari1508" target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
                <Link
                  href="https://www.linkedin.com/in/anurag-tiwari-4b664627b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" aria-label="Email">
                <Link href="mailto:tiwarianurag342409@gmail.com">
                  <MailIcon className="h-5 w-5" />
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
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-600 shadow-xl">
              <img
                src="/my photo(1111).png"
                alt="Anurag Tiwari"
                className="w-full h-full object-cover"
              />
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
