"use client"

import { motion } from "framer-motion"
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Founder, Tech Startup",
    content:
      "VOB Ventures made our company registration process incredibly smooth. Their team handled everything from documentation to GST registration. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Menon",
    role: "Owner, Retail Business",
    content:
      "The accounting and compliance services are top-notch. They keep us updated on all deadlines and ensure we never miss any filing. Very professional team!",
    rating: 5,
  },
  {
    name: "Arun Nair",
    role: "CEO, Manufacturing Company",
    content:
      "From branding to digital marketing, VOB Ventures has been our one-stop solution. Their creative team delivered beyond our expectations.",
    rating: 5,
  },
  {
    name: "Lakshmi Pillai",
    role: "Director, Consulting Firm",
    content:
      "Excellent business consulting services. They helped us streamline our operations and develop a solid growth strategy. Worth every penny!",
    rating: 5,
  },
  {
    name: "Mohammed Rashid",
    role: "Founder, Food Business",
    content:
      "Getting FSSAI license and other approvals was hassle-free with VOB Ventures. They know the process inside out and saved us a lot of time.",
    rating: 5,
  },
  {
    name: "Sneha Thomas",
    role: "Startup Founder",
    content:
      "Their funding support service helped us create a compelling pitch deck and connect with the right investors. Truly grateful for their guidance!",
    rating: 5,
  },
]

export default function Testimonials() {
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
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-pretty">
            Don't just take our word for it—hear from businesses we've helped succeed
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-[#0C6CE8] mb-4" />
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-pretty">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#FF8A00] text-[#FF8A00]" />
                    ))}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
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
