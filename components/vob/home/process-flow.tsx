"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { Rocket, FileCheck, TrendingUp, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import { cn } from "@/lib/utils"

const steps = [
  {
    icon: Rocket,
    title: "Start",
    description: "Launch your business with proper registration and legal foundation. We handle all the paperwork while you focus on your vision.",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-100 dark:border-blue-800",
    shadow: "shadow-blue-500/10 hover:shadow-blue-500/20",
    gradient: "from-blue-500 to-indigo-600",
    delay: 0.2
  },
  {
    icon: FileCheck,
    title: "Comply",
    description: "Stay compliant with accounting, GST filing, and regulatory requirements. Our experts ensure you never miss a deadline.",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    border: "border-emerald-100 dark:border-emerald-800",
    shadow: "shadow-emerald-500/10 hover:shadow-emerald-500/20",
    gradient: "from-emerald-500 to-teal-600",
    delay: 0.4
  },
  {
    icon: TrendingUp,
    title: "Grow",
    description: "Scale your business with marketing, consulting, and funding support. We provide the strategic push your business needs.",
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    border: "border-orange-100 dark:border-orange-800",
    shadow: "shadow-orange-500/10 hover:shadow-orange-500/20",
    gradient: "from-orange-500 to-amber-600",
    delay: 0.6
  },
]

export default function ProcessFlow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden bg-gray-50/50 dark:bg-gray-950">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm text-primary px-6 py-2 rounded-full text-sm font-medium mb-8 border border-primary/20 shadow-sm hover:shadow-md transition-shadow">
            <Sparkles className="w-4 h-4" />
            <span>Simple 3-Step Process</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Your Journey to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Success</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We've streamlined the complex business landscape into a simple, manageable journey designed for your growth.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-16 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-emerald-500 to-orange-500 origin-left"
              style={{ scaleX }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: step.delay }}
                className="relative group"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl rotate-45 flex items-center justify-center shadow-lg bg-gradient-to-br border-2 border-white dark:border-gray-900",
                    step.gradient
                  )}>
                    <span className="-rotate-45 text-lg font-bold text-white">{index + 1}</span>
                  </div>
                </div>

                {/* Card */}
                <div className={cn(
                  "h-full rounded-3xl p-8 pt-16 border transition-all duration-500 group-hover:-translate-y-2 backdrop-blur-xl",
                  "bg-white/60 dark:bg-gray-900/60",
                  step.border,
                  step.shadow
                )}>
                  {/* Icon */}
                  <div className={cn(
                    "w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                    step.bg
                  )}>
                    <step.icon className={cn("h-10 w-10", step.color)} />
                  </div>

                  <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>

                  <p className="text-center text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                    {step.description}
                  </p>

                  <div className="space-y-3 bg-gray-50/50 dark:bg-gray-800/50 rounded-xl p-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <div className={cn("p-1 rounded-full mr-3 bg-white dark:bg-gray-900 shadow-sm", step.color)}>
                          <CheckCircle2 className="h-3 w-3" />
                        </div>
                        <span className="font-medium">Key feature point {i}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow (Desktop only, except last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 -right-6 lg:-right-8 z-10 text-gray-300 dark:text-gray-700">
                    <ArrowRight className="h-8 w-8 animate-pulse" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
