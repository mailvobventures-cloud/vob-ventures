"use client"

import { motion } from "framer-motion"

export default function CompanyStory() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-balance">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              VOB Ventures was born from a simple yet powerful vision: to be the Vanguard of Business for entrepreneurs
              and companies across Kerala. We recognized that starting and running a business involves navigating
              complex regulations, compliance requirements, and operational challenges that can be overwhelming for
              founders.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Over the past decade, we've grown from a small team to a comprehensive business services provider,
              helping over 500 clients launch, manage, and scale their ventures. Our expertise spans company formation,
              compliance, branding, digital marketing, IT solutions, and much more—all under one roof.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              What sets us apart is our commitment to building lasting relationships with our clients. We don't just
              provide services; we partner with you throughout your business journey, offering personalized guidance and
              support at every stage.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
