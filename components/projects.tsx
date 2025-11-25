"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GithubIcon, ExternalLinkIcon, AwardIcon } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    // Projects with live demos first
    {
      title: "Antim Sewa - अंतिम सेवा",
      description:
        "A comprehensive funeral services website providing essential items and services for final rites. Features include user authentication, product catalog, shopping cart system, and bilingual support (Hindi/English).",
      image: "/antim-sewa.png",
      tags: ["Next.js 15", "MongoDB", "TypeScript", "Tailwind CSS", "JWT Auth"],
      github: "https://github.com/AnuragTiwari1508/Antim-Sewa",
      link: "https://antim-sewa-gamma.vercel.app/",
      category: "web",
    },
    {
      title: "Spark Ignited Website",
      description:
        "Official website for Team Spark Ignited at IET DAVV, showcasing team projects, events, and achievements.",
      image: "/TSI_SS.png",
      tags: ["Web Development", "Next.js", "UI/UX"],
      link: "https://spark-eta-eight.vercel.app/",
      category: "web",
    },
    {
      title: "DUAA DAVV Website",
      description:
        "Official website for DUAA (DAVV University Alumni Association) managing alumni relations and networking events.",
      image: "/DUAA_SS.png",
      tags: ["Web Development", "Content Strategy", "SEO"],
      link: "https://duaa.dauniv.ac.in/",
      category: "web",
    },
    // Projects with GitHub repos only
    {
      title: "Xplora - Adventure Reward Gaming Platform",
      description:
        "An adventure-based reward gaming platform with location-based challenges, daily rewards, and gamification elements. Built with modern web technologies and responsive design.",
      image: "/SS_prototype.png",
      tags: ["React", "JavaScript", "Gaming", "Rewards", "Adventure", "Hackathon"],
      github: "https://github.com/AnuragTiwari1508/Xplora",
      link: "https://xploraaaaaaaa.vercel.app",
      category: "hackathon",
      achievement: "1st Position, DevCraft Hackathon (IIT Indore)",
    },
    {
      title: "DhanSetu Gateway",
      description:
        "A comprehensive crypto payment system with Next.js 15 and multi-blockchain support. Enables secure crypto payments, subscriptions, and invoicing across 6 blockchains including Ethereum, Polygon, BSC, Arbitrum, Optimism, and Solana.",
      image: "/Dhansetu.png",
      tags: ["Next.js 15", "TypeScript", "Multi-Chain", "Crypto", "Web3", "Hackathon"],
      github: "https://github.com/AnuragTiwari1508/dhan-setu",
      category: "hackathon",
    },
    {
      title: "AgentSync",
      description:
        "AgentSync is a multi-agent AI platform designed to automate and assist with a variety of tasks such as email summarization, calendar planning, video summarization, chat assistance, and social media analytics. This dashboard integrates intelligent agents to enhance productivity and streamline user interactions.",
      image: "/Agen_sync.png",
      tags: ["AI", "Next.js", "React", "Dashboard", "Multi-agent"],
      github: "https://github.com/AnuragTiwari1508/Agent-sync",
      category: "web",
    },
    {
      title: "Stock Saarthi",
      description:
        "A Web3-based platform for tokenizing stocks and real estate assets, enabling fractional ownership through blockchain-powered smart contracts.",
      image: "/stocksaarthi_ss.png",
      tags: ["Web3", "Blockchain", "Smart Contracts", "Hackathon"],
      github: "https://github.com/AnuragTiwari1508/Stock-Saarthi",
      category: "hackathon",
      achievement: "Winner, I Love Hackathon",
    },
    {
      title: "Geolocation Attendance System",
      description: "Flutter-based application with API integration for tracking attendance using geolocation services.",
      image: "/geoattendance.png",
      tags: ["Flutter", "API", "Geolocation", "Mobile App"],
      category: "app",
      github: "https://github.com/AnuragTiwari1508",
    },
    {
      title: "RSSI Signal Detection",
      description:
        "Research project using ESP32 for activity classification and localization through WiFi RSSI signal variations, with ML model for motion detection.",
      image: "/RSSI.png",
      tags: ["ESP32", "ML", "Arduino", "Python", "Signal Processing"],
      category: "research",
    },
    {
      title: "E-Clutch Project",
      description: "Innovative electronic clutch system for automobiles that won the Volvo Eicher Soil Symposium 2024.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Electronics", "Embedded Systems", "Automotive"],
      category: "electronics",
      achievement: "Winner, Volvo Eicher Soil Symposium 2024",
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { 
      opacity: 0, 
      y: 60, 
      scale: 0.8,
      rotateX: -15
    },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8
      }
    },
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            My <span className="gradient-text-animate">Projects</span>
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1.5 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          />
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            A collection of <span className="text-purple-600 dark:text-purple-400 font-semibold">innovative projects</span> showcasing expertise in web development, mobile apps, blockchain, electronics, and AI/ML technologies.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12"
        >
          <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full max-w-4xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-purple-200 dark:border-purple-800 rounded-2xl p-2">
              <TabsTrigger 
                value="all" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white font-semibold rounded-xl transition-all duration-300"
              >
                All
              </TabsTrigger>
              <TabsTrigger 
                value="hackathon" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white font-semibold rounded-xl transition-all duration-300"
              >
                🏆 Hackathons
              </TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="electronics">Electronics</TabsTrigger>
            <TabsTrigger value="web">Web</TabsTrigger>
            <TabsTrigger value="app">Apps</TabsTrigger>
          </TabsList>
        </Tabs>

        <motion.div
          key={activeTab} /* Add key prop to force re-render when tab changes */
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }} /* Change to false to allow re-animation */
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                    {project.achievement && (
                      <div className="flex items-center text-yellow-500 text-sm">
                        <AwardIcon className="h-4 w-4 mr-1" />
                        <span>Award</span>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  {project.achievement && (
                    <p className="text-sm text-purple-600 dark:text-purple-400 mb-4 italic">{project.achievement}</p>
                  )}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex gap-2">
                  {project.github && (
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="h-4 w-4 mr-1" />
                        GitHub
                      </Link>
                    </Button>
                  )}
                  {project.link && (
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLinkIcon className="h-4 w-4 mr-1" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
