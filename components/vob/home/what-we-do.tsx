"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Building2, Calculator, Palette, Megaphone, Code, FileCheck, Users, TrendingUp, DollarSign, Scale, ArrowRight } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Building2,
    title: "Company Formation",
    description: "Complete registration services for all business structures",
    href: "/services/company-formation",
  },
  {
    icon: Calculator,
    title: "Accounting & Compliance",
    description: "Professional bookkeeping, GST filing, and audit support",
    href: "/services/accounting-compliance",
  },
  {
    icon: Palette,
    title: "Brand Development",
    description: "Strategic branding and creative design services",
    href: "/services/branding-creative",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Comprehensive online presence and growth solutions",
    href: "/services/digital-marketing",
  },
  {
    icon: Code,
    title: "IT Solutions",
    description: "Custom software and technology implementations",
    href: "/services/it-software",
  },
  {
    icon: FileCheck,
    title: "Licensing & Permits",
    description: "All regulatory approvals and certifications",
    href: "/services/licensing",
  },
  {
    icon: Users,
    title: "HR Services",
    description: "Talent acquisition and workforce management",
    href: "/services/hr-recruitment",
  },
  {
    icon: TrendingUp,
    title: "Business Consulting",
    description: "Strategic guidance for sustainable growth",
    href: "/services/consulting",
  },
  {
    icon: DollarSign,
    title: "Funding Support",
    description: "Investment readiness and capital connection",
    href: "/services/funding",
  },
  {
    icon: Scale,
    title: "Legal Services",
    description: "Contracts, agreements, and IP protection",
    href: "/services/legal",
  },
]

export default function WhatWeDo() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Comprehensive Business Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Everything you need to establish, operate, and scale your business—all under one roof
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link href={service.href} className="block h-full group">
                <Card className="h-full hover:shadow-lg transition-all duration-300 border hover:border-primary/30 bg-card">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/15 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2 text-balance group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed text-pretty flex-grow">
                      {service.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center text-primary font-semibold hover:underline"
          >
            View all services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
