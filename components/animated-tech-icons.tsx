"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Code2, Database, FileJson, Blocks, Server, Braces, Layers, Cpu, GitBranch, Globe } from "lucide-react"

interface TechIcon {
  icon: React.ReactNode
  name: string
  color: string
}

export default function AnimatedTechIcons() {
  const [icons, setIcons] = useState<TechIcon[]>([])

  useEffect(() => {
    // Define icons
    const techIcons: TechIcon[] = [
      { icon: <Code2 size={32} />, name: "C#", color: "bg-purple-100 text-purple-600" },
      { icon: <Braces size={32} />, name: "React", color: "bg-blue-100 text-blue-600" },
      { icon: <Database size={32} />, name: "SQL", color: "bg-green-100 text-green-600" },
      { icon: <FileJson size={32} />, name: "JSON", color: "bg-yellow-100 text-yellow-600" },
      { icon: <Blocks size={32} />, name: ".NET", color: "bg-indigo-100 text-indigo-600" },
      { icon: <Server size={32} />, name: "REST API", color: "bg-red-100 text-red-600" },
      { icon: <Layers size={32} />, name: "MVC", color: "bg-teal-100 text-teal-600" },
      { icon: <Cpu size={32} />, name: "Azure", color: "bg-sky-100 text-sky-600" },
      { icon: <GitBranch size={32} />, name: "Git", color: "bg-orange-100 text-orange-600" },
      { icon: <Globe size={32} />, name: "Web", color: "bg-pink-100 text-pink-600" },
    ]

    setIcons(techIcons)
  }, [])

  return (
    <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
      {icons.map((tech, index) => (
        <motion.div
          key={index}
          className={`flex flex-col items-center p-4 rounded-lg ${tech.color} w-28 h-28 justify-center`}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{
            scale: 1.1,
            rotate: [0, -5, 5, -5, 0],
            transition: { duration: 0.5 },
          }}
        >
          {tech.icon}
          <span className="mt-2 font-medium">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  )
}
