"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BriefcaseIcon, CalendarIcon, UsersIcon } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Team Spark Ignited (IET DAVV)",
      role: "PR, Electronics, and Website Development Team Lead",
      period: "2024 – Present",
      description: [
        "Managing PR, Electronics, and Website Development Team.",
        "Increased outreach, handled collaborations and event promotions by 30%.",
        "Maintained the official Spark Ignited website.",
        "Represented Spark Ignited at SIEP eBike Competition, played a key role in electronics and wiring harness team, ensuring system efficiency and safety.",
      ],
      achievements: [
        "Winner: Volvo Eicher Soil Symposium 2024 – E-Clutch project.",
        "2nd Prize: ETWDC 2025 (Special Category) – Ranked 7th overall.",
      ],
    },
    {
      title: "DUAA DAVV",
      role: "Team Member & Website Designer",
      period: "2024 – Present",
      description: [
        "Team member managing alumni relations and networking events across all DAVV departments.",
        "Designed and maintained the official DUAA website.",
        "Oversaw content strategy, SEO optimization, and alumni engagement initiatives.",
      ],
    },
    {
      title: "DAVV State-Level Youth Fest",
      role: "Core Organizing Team Member",
      period: "2024",
      description: [
        "Part of the Core Organizing Team for the state-level youth fest hosted by DAVV.",
        "Contributed to planning, logistics, and event execution, coordinating with multiple colleges across the state.",
      ],
    },
    {
      title: "GDGOC IET DAVV",
      role: "Core Tech Team Member | Social Media & Content Lead",
      period: "2024 – Present",
      description: [
        "Ranked 3rd in Code Series – Showcased coding and problem-solving proficiency.",
        "Built multiple Flutter and API-based projects including a Geolocation-based Attendance Tracking System.",
        "Led content strategy and social media initiatives to enhance community engagement.",
      ],
    },
    {
      title: "I LOVE HACKATHON",
      role: "Team Leader",
      period: "2024",
      description: [
        "Led a multidisciplinary team to victory in a Web3-based Hackathon sponsored by Venture Block.",
        "Designed Stock Saarthi, a platform for tokenizing stocks and real estate assets, enabling fractional ownership and enhanced liquidity through blockchain-powered smart contracts.",
      ],
      achievements: ["Winner of the hackathon"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Work <span className="text-purple-600">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey, leadership roles, and team experiences.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-purple-200 dark:bg-purple-900 transform md:translate-x-[-50%] hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:mb-8 ${
                index % 2 === 0 ? "md:pr-12 md:ml-auto md:mr-[50%]" : "md:pl-12 md:mr-auto md:ml-[50%]"
              }`}
            >
              {/* Timeline dot */}
              <div
                className="hidden md:block absolute top-6 w-5 h-5 rounded-full bg-purple-600 border-4 border-white dark:border-gray-950 z-10 
                              left-[-10px] md:left-auto md:right-[-10px] md:translate-x-[0%]
                              ${index % 2 === 0 ? 'md:left-auto md:right-[-10px]' : 'md:right-auto md:left-[-10px]'}"
              ></div>

              <Card className="border-l-4 border-l-purple-600">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-4 text-purple-600 dark:text-purple-400">
                    <BriefcaseIcon className="h-4 w-4 mr-1" />
                    <span>{exp.role}</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start">
                        <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 mr-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                        <UsersIcon className="h-4 w-4 mr-1 text-purple-600" />
                        Achievements
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-600 dark:text-gray-400 text-sm flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 mr-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
