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
      icon: <CodeIcon className="h-6 w-6 text-purple-600" />,
      skills: ["HTML/CSS", "JavaScript", "React", "Next.js", "API Development"],
    },
    {
      title: "Mobile Development",
      icon: <SmartphoneIcon className="h-6 w-6 text-purple-600" />,
      skills: ["Flutter", "Android Studio"],
    },
    {
      title: "Electronics",
      icon: <ChipIcon className="h-6 w-6 text-purple-600" />,
      skills: ["Embedded C", "PCB Designing", "Arduino", "ESP32", "SimulIDE"],
    },
    {
      title: "Programming",
      icon: <ServerIcon className="h-6 w-6 text-purple-600" />,
      skills: ["Python", "C/C++", "VS Code", "Atmel Studio-7"],
    },
    {
      title: "AI & ML",
      icon: <BrainCircuitIcon className="h-6 w-6 text-purple-600" />,
      skills: ["Prompt Engineering", "AI Workflows", "ML Model Training"],
    },
    {
      title: "Soft Skills",
      icon: <UsersIcon className="h-6 w-6 text-purple-600" />,
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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            My <span className="text-purple-600">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
              <Card className="h-full hover:shadow-lg transition-shadow border-t-4 border-t-purple-600">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-2">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center text-gray-600 dark:text-gray-400">
                        <div className="w-2 h-2 rounded-full bg-purple-600 mr-2"></div>
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
