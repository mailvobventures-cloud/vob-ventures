"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'

export default function Commitment() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-balance">
            Our Commitment to Startups & Businesses
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-pretty">
            At VOB Ventures, we believe that every business deserves the best chance to succeed. Whether you're a
            startup founder with a dream or an established company looking to scale, we're committed to providing
            transparent, reliable, and professional services that help you achieve your goals. Your success is our
            success, and we're with you every step of the way.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#0C6CE8] hover:bg-[#0C6CE8]/90 text-white text-lg h-14 px-8"
          >
            <Link href="/contact">
              Partner with Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
