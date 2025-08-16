"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  CodeIcon,
  ServerIcon,
  SmartphoneIcon,
  ComponentIcon as ChipIcon,
  BrainCircuitIcon,
  UsersIcon,
} from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Web Development",
      icon: <CodeIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      skills: ["HTML/CSS", "JavaScript", "React", "Next.js", "Express.js", "Google OAuth", "API Development"],
    },
    {
      title: "Mobile Development",
      icon: <SmartphoneIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      skills: ["Flutter", "Android Studio"],
    },
    {
      title: "Electronics",
      icon: <ChipIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      skills: ["Embedded C", "PCB Designing", "Arduino", "ESP32", "SimulIDE"],
    },
    {
      title: "Programming & Web3",
      icon: <ServerIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      skills: ["Python", "C/C++", "Ethereum", "Polygon", "Smart Contracts", "VS Code", "Atmel Studio-7"],
    },
    {
      title: "AI & ML",
      icon: <BrainCircuitIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      skills: ["Prompt Engineering", "AI Workflows", "ML Model Training"],
    },
    {
      title: "Soft Skills",
      icon: <UsersIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      skills: ["Leadership", "Team Management", "Communication", "Microsoft Suite", "Adaptability"],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/30 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mb-6"></div>
          <p className="text-slate-700 dark:text-gray-400 max-w-2xl mx-auto">
            A diverse set of technical and soft skills that I've developed through education, projects, and hackathons.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-2xl transition-all duration-500 border-t-4 border-t-purple-600 bg-white/90 dark:bg-card backdrop-blur-lg hover:transform hover:scale-105 hover:bg-white/95 dark:hover:bg-card/90 group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 mr-3">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center text-slate-700 dark:text-gray-400 group-hover:text-slate-800 dark:group-hover:text-gray-300 transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 mr-3 animate-pulse"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
