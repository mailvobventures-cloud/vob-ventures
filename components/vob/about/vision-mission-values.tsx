"use client"

import { motion } from "framer-motion"
import { Eye, Target, Heart } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const items = [
  {
    icon: Eye,
    title: "Vision",
    description:
      "To be Kerala's most trusted and comprehensive business services partner, empowering entrepreneurs and companies to achieve their full potential.",
    color: "from-[#0C6CE8] to-[#0C6CE8]/80",
  },
  {
    icon: Target,
    title: "Mission",
    description:
      "To simplify business operations by providing end-to-end solutions that enable our clients to focus on what they do best—growing their business.",
    color: "from-[#62C834] to-[#62C834]/80",
  },
  {
    icon: Heart,
    title: "Values",
    description:
      "Integrity, Excellence, Client-Centricity, Innovation, and Reliability. These core values guide every decision we make and every service we deliver.",
    color: "from-[#FF8A00] to-[#FF8A00]/80",
  },
]

export default function VisionMissionValues() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-balance">
            Vision, Mission & Values
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} mb-6`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-pretty">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
