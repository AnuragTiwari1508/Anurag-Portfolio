"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCapIcon, MapPinIcon } from "lucide-react"

export default function About() {
  const education = [
    {
      institution: "Institute of Engineering & Technology (IET DAVV), Indore",
      degree: "Bachelor's Degree – Electronics & Telecommunication Engineering",
      period: "2023 – 2027",
    },
    {
      institution: "Rankers International School, Indore",
      degree: "Class XII (PCM) – 75.2%",
      period: "2022 – 2023",
    },
    {
      institution: "Kendriya Vidyalaya No. 1, Indore",
      degree: "Class X – 89.2%",
      period: "2013 – 2022",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:bg-[#0a0a16] dark:[background-image:none]"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mb-6"></div>
          <p className="text-slate-700 dark:text-gray-300 max-w-2xl mx-auto">
            Electronics and Telecommunication Engineering student with a passion for web development, embedded systems,
            and leading technical teams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <MapPinIcon className="mr-2 h-5 w-5 text-purple-600 dark:text-purple-400" />
              Personal Info
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong className="text-gray-900 dark:text-white">Name:</strong> Anurag Tiwari
              </p>
              <p>
                <strong className="text-gray-900 dark:text-white">Location:</strong> Indore, India
              </p>
              <p>
                <strong className="text-gray-900 dark:text-white">Email:</strong> tiwarianurag342409@gmail.com
              </p>
              <p>
                <strong className="text-gray-900 dark:text-white">Phone:</strong> +91-6261072872
              </p>
              <p>
                <strong className="text-gray-900 dark:text-white">Field:</strong> Electronics and Telecommunication
              </p>
              <p className="mt-4">
                I am a passionate tech enthusiast with a strong interest in web development, embedded systems, and
                electronics. I enjoy participating in hackathons, leading technical teams, and working on innovative
                projects that solve real-world problems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <GraduationCapIcon className="mr-2 h-5 w-5 text-purple-600 dark:text-purple-400" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((item, index) => (
                <Card
                  key={index}
                  className="border-l-4 border-l-purple-600 bg-white dark:bg-[#111827] transition-colors duration-300 dark:border-l-purple-500"
                >
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-slate-900 dark:text-white">{item.institution}</h4>
                    <p className="text-slate-700 dark:text-gray-300">{item.degree}</p>
                    <p className="text-sm text-slate-600 dark:text-gray-500">{item.period}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
