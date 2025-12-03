"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone } from 'lucide-react'

export default function ServicesCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0C6CE8] via-[#0C6CE8] to-[#62C834] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Not Sure What You Need?
          </h2>
          <p className="text-xl mb-10 opacity-90 text-pretty">
            Our experts are here to help you identify the right services for your business stage and goals.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-[#0C6CE8] hover:bg-gray-100 text-lg h-14 px-8"
          >
            <Link href="/contact">
              <Phone className="mr-2 h-5 w-5" />
              Book a Free Consultation
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
