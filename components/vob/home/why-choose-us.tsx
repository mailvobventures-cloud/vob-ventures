"use client"

import { motion } from "framer-motion"
import { Shield, Clock, Users, Award, HeartHandshake, Zap } from 'lucide-react'

const benefits = [
  {
    icon: Shield,
    title: "Proven Reliability",
    description: "A decade of consistent service delivery with zero compromises on quality or integrity",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Certified professionals with deep domain knowledge across all business functions",
  },
  {
    icon: HeartHandshake,
    title: "Client-Centric Approach",
    description: "Customized solutions tailored to your specific business requirements and goals",
  },
  {
    icon: Clock,
    title: "Efficient Execution",
    description: "Streamlined processes ensuring timely delivery without compromising quality",
  },
  {
    icon: Zap,
    title: "Integrated Solutions",
    description: "Seamless coordination across all services for maximum operational efficiency",
  },
  {
    icon: Users,
    title: "Dedicated Partnership",
    description: "Long-term relationships built on trust, transparency, and mutual success",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-muted/30 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Why Partner With Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We combine expertise, reliability, and personalized service to drive your business forward
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border rounded-xl p-8 hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-6">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
