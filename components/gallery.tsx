"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger, DialogClose, DialogTitle } from "@/components/ui/dialog"
import { VisuallyHidden } from "@/components/ui/visually-hidden"
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      src: "/iloveindoreWinning_photo.png",
      alt: "Hackathon Team",
      caption: "Winning the I Love Hackathon with Stock Saarthi project",
    },
    {
      src: "/Volvo-img.png",
      alt: "E-Clutch Project",
      caption: "Volvo Eicher Soil Symposium 2024 - E-Clutch project",
    },
    {
      src: "/bike-side.jpg",
      alt: "ETWDC Competition",
      caption: "ETWDC 2025 Competition - 2nd Prize (Special Category)",
    },
    {
      src: "/siep2.jpg",
      alt: "SIEP eBike Competition",
      caption: "SIEP - 2025 eBike Competition with Spark Ignited team",
    },
    {
      src: "/DUAA_PHOTO.jpg",
      alt: "DAVV Youth Fest",
      caption: "Organizing the DAVV State-Level Youth Fest",
    },
    {
      src: "/TSI.jpg",
      alt: "Team Spark Ignited",
      caption: "Team Spark Ignited group photo - (2nd year Electronic and PR Team)",
    },
    {
      src: "/ANURAG%20TIWARI.png",
      alt: "GDSC Code Series",
      caption: "GDSC IET DAVV Code Series competition",
    },
    {
      src: "/Chennai%20photo.jpg",
      alt: "IIT Chennai Hackathon",
      caption: "Finalist at IIT Chennai Hackathon (APPIAN AI CHALLENGE)",
    },
  ]

  const nextImage = () => {
    if (selectedImage === null) return
    setSelectedImage((selectedImage + 1) % images.length)
  }

  const prevImage = () => {
    if (selectedImage === null) return
    setSelectedImage((selectedImage - 1 + images.length) % images.length)
  }

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
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
  }

  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Event <span className="text-purple-600">Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Moments captured from hackathons, competitions, and team events.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {images.map((image, index) => (
            <Dialog
              key={index}
              open={selectedImage === index}
              onOpenChange={(open) => {
                if (!open) setSelectedImage(null)
              }}
            >
              <DialogTrigger asChild>
                <motion.div 
                  variants={item} 
                  className="cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-3">
                      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{image.caption}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
                <DialogTitle>
                  <VisuallyHidden>
                    {selectedImage !== null ? `Image: ${images[selectedImage].alt}` : "Gallery Image"}
                  </VisuallyHidden>
                </DialogTitle>
                <div className="relative flex flex-col items-center justify-center">
                  <DialogClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white z-10 backdrop-blur"
                    >
                      <XIcon className="h-5 w-5" />
                    </Button>
                  </DialogClose>
                  <div className="relative flex items-center justify-center w-full">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white z-10 backdrop-blur"
                      onClick={(e) => {
                        e.stopPropagation()
                        prevImage()
                      }}
                    >
                      <ChevronLeftIcon className="h-6 w-6" />
                    </Button>
                    <div className="rounded-2xl shadow-2xl bg-white/10 dark:bg-gray-900/40 backdrop-blur-lg border border-white/20 p-2 transition-transform duration-300 hover:scale-105" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
                      <img
                        src={selectedImage !== null ? images[selectedImage].src : "/placeholder.svg"}
                        alt={selectedImage !== null ? images[selectedImage].alt : "Gallery Image"}
                        className="max-h-[70vh] max-w-[80vw] object-contain rounded-xl shadow-lg"
                        style={{filter: 'drop-shadow(0 4px 24px rgba(0,0,0,0.25))'}}
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white z-10 backdrop-blur"
                      onClick={(e) => {
                        e.stopPropagation()
                        nextImage()
                      }}
                    >
                      <ChevronRightIcon className="h-6 w-6" />
                    </Button>
                  </div>
                  <div className="mt-4 px-4 py-2 rounded-xl bg-white/70 dark:bg-gray-900/80 shadow text-center backdrop-blur-md border border-white/20">
                    <p className="text-gray-900 dark:text-white font-semibold">
                      {selectedImage !== null ? images[selectedImage].caption : ""}
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
