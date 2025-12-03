"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail } from 'lucide-react'

const team = [
  {
    name: "Rajesh Menon",
    role: "Founder & CEO",
    description: "15+ years of experience in business consulting and company formation services",
  },
  {
    name: "Priya Nair",
    role: "Head of Compliance",
    description: "Expert in accounting, taxation, and regulatory compliance with 12+ years experience",
  },
  {
    name: "Arun Kumar",
    role: "Head of Digital Services",
    description: "Leading our digital marketing and IT solutions division with innovative strategies",
  },
  {
    name: "Lakshmi Pillai",
    role: "Head of Creative",
    description: "Driving brand identity and creative solutions for businesses across industries",
  },
]

export default function Leadership() {
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
            Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-pretty">
            Meet the experts driving VOB Ventures forward
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  {/* Avatar Placeholder */}
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#0C6CE8] to-[#62C834] flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                  <div className="text-[#0C6CE8] font-medium mb-3">{member.role}</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-pretty">
                    {member.description}
                  </p>
                  <div className="flex justify-center space-x-3">
                    <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <Linkedin className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <Mail className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
