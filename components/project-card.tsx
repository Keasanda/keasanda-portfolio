"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
}

export default function ProjectCard({ title, description, technologies, imageUrl }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <Link href="#" className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium">
          View Project <ArrowUpRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  )
}
