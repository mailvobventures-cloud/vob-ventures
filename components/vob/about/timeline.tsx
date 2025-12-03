"use client"

import { motion } from "framer-motion"
import { Calendar } from 'lucide-react'

const milestones = [
  {
    year: "2014",
    title: "Company Founded",
    description: "VOB Ventures was established with a vision to simplify business operations in Kerala",
  },
  {
    year: "2016",
    title: "100+ Clients Milestone",
    description: "Crossed the 100-client mark, establishing ourselves as a reliable business partner",
  },
  {
    year: "2018",
    title: "Service Expansion",
    description: "Expanded services to include digital marketing, IT solutions, and business consulting",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Enhanced our digital capabilities to serve clients better during challenging times",
  },
  {
    year: "2022",
    title: "500+ Clients Milestone",
    description: "Reached 500+ satisfied clients across various industries in Kerala",
  },
  {
    year: "2024",
    title: "Industry Leadership",
    description: "Recognized as one of Kerala's leading comprehensive business services providers",
  },
]

export default function Timeline() {
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
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-pretty">
            Key milestones that have shaped VOB Ventures into what it is today
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0C6CE8] via-[#62C834] to-[#FF8A00]" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"} pl-20 md:pl-0`}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                    <div className="text-[#0C6CE8] font-bold text-lg mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                  </div>
                </div>

                {/* Circle Marker */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-8 h-8 bg-gradient-to-br from-[#0C6CE8] to-[#62C834] rounded-full border-4 border-white dark:border-gray-900">
                  <Calendar className="h-4 w-4 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
