"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const contactDetails = [
  {
    icon: MapPin,
    title: "Address",
    details: ["VOB Ventures", "Kerala, India"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 XXX XXX XXXX", "+91 YYY YYY YYYY"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@vobventures.com", "support@vobventures.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
  },
]

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          Have questions? We're here to help. Reach out through any of the following channels.
        </p>
      </div>

      <div className="space-y-4">
        {contactDetails.map((item, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-[#0C6CE8]/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-[#0C6CE8]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 dark:text-gray-400">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Social Media */}
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#0C6CE8]/10 flex items-center justify-center hover:bg-[#0C6CE8] hover:text-white transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#0C6CE8]/10 flex items-center justify-center hover:bg-[#0C6CE8] hover:text-white transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#0C6CE8]/10 flex items-center justify-center hover:bg-[#0C6CE8] hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#0C6CE8]/10 flex items-center justify-center hover:bg-[#0C6CE8] hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
