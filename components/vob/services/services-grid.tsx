"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { servicesData } from "@/lib/services-data"

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-[#0C6CE8]/20">
                <CardContent className="p-8 flex-grow">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.bgColor} mb-6`}>
                    <service.icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Mini list of offerings */}
                  <ul className="space-y-2 mb-6">
                    {service.offerings.slice(0, 3).map((offering, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <div className={`w-1.5 h-1.5 rounded-full mr-2 ${service.color.replace('text-', 'bg-')}`} />
                        {offering.title}
                      </li>
                    ))}
                    {service.offerings.length > 3 && (
                      <li className="text-sm text-gray-400 italic pl-3.5">
                        + {service.offerings.length - 3} more services
                      </li>
                    )}
                  </ul>
                </CardContent>
                <CardFooter className="p-8 pt-0">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group hover:bg-[#0C6CE8] hover:text-white hover:border-[#0C6CE8]"
                  >
                    <Link href={`/services/${service.slug}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
