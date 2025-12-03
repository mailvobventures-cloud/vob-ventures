"use client"

import { motion } from "framer-motion"
import { MapPin, Users, TrendingUp, Heart } from 'lucide-react'

const reasons = [
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "Deep understanding of Kerala's business landscape, regulations, and market dynamics",
  },
  {
    icon: Users,
    title: "Trusted by 500+ Businesses",
    description: "Proven track record of helping businesses across various industries succeed in Kerala",
  },
  {
    icon: TrendingUp,
    title: "Comprehensive Solutions",
    description: "One-stop shop for all business needs, saving time and ensuring consistency",
  },
  {
    icon: Heart,
    title: "Personalized Approach",
    description: "We treat your business like our own, providing dedicated support and guidance",
  },
]

export default function WhyKerala() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-balance">
            Why Kerala Chooses VOB Ventures
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-pretty">
            We understand the unique challenges and opportunities of doing business in Kerala
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#0C6CE8]/10 mb-6">
                <reason.icon className="h-8 w-8 text-[#0C6CE8]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{reason.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-pretty">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
