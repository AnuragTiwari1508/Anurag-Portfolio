"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { AwardIcon, TrophyIcon, CodeIcon, GraduationCapIcon, UsersIcon, ZapIcon } from "lucide-react"

export default function Achievements() {
  const achievements = [
    {
      title: "Winner, I Love Hackathon",
      description: "Built a Web3-based stock advisory platform called Stock Saarthi",
      icon: <TrophyIcon className="h-10 w-10 text-yellow-500" />,
      link: "https://github.com/AnuragTiwari1508/Stock-Saarthi",
    },
    {
      title: "Winner, Volvo Eicher Soil Symposium 2024",
      description: "Developed E-Clutch project",
      icon: <AwardIcon className="h-10 w-10 text-yellow-500" />,
    },
    {
      title: "2nd Prize, ETWDC 2025 (Special Category)",
      description: "Ranked 7th overall in the competition",
      icon: <TrophyIcon className="h-10 w-10 text-yellow-500" />,
    },
    {
      title: "3rd Rank, Code Series (GDSC IET DAVV)",
      description: "Demonstrated problem-solving skills in coding competition",
      icon: <CodeIcon className="h-10 w-10 text-yellow-500" />,
    },
    {
      title: "Selected for Pariksha Pe Charcha 2020",
      description: "Recognized for content writing skills on MyGov.in",
      icon: <GraduationCapIcon className="h-10 w-10 text-yellow-500" />,
    },
    {
      title: "Finalist (Top 5) at IIT Chennai Hackathon",
      description: "Reached the final round with innovative solution",
      icon: <TrophyIcon className="h-10 w-10 text-yellow-500" />,
    },
    {
      title: "Tech. Team Member, Phenma INTERNATIONAL CONFERENCE",
      description: "This role boosted my technical and communication skills with global networking vibes",
      icon: <UsersIcon className="h-10 w-10 text-yellow-500" />,
    },
    {
      title: "SIEP eBike Competition Representative",
      description: "Led electronics and wiring harness systems for Spark Ignited team",
      icon: <ZapIcon className="h-10 w-10 text-yellow-500" />,
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
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            My <span className="text-purple-600">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recognition and awards received for technical excellence, leadership, and innovation.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="mb-4">{achievement.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{achievement.description}</p>
                  {achievement.link && (
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 text-sm mt-2"
                    >
                      View Project →
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
