"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:16px_16px] md:bg-[size:24px_24px]" />

      <div className="absolute top-0 right-0 w-2/3 md:w-1/3 h-1/2 md:h-1/3 bg-gradient-to-br from-primary/5 to-transparent blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6 md:space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold border border-primary/20">
              <span className="whitespace-nowrap">Trusted by 500+ Kerala Businesses</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] sm:leading-[1.15] tracking-tight text-balance">
              Your Partner in{" "}
              <span className="text-primary">Business Excellence</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              From company formation to compliance, digital presence to strategic growth—we provide comprehensive solutions that empower Kerala's businesses to thrive.
            </p>

            <div className="flex flex-col gap-2 sm:gap-3 pt-2">
              <div className="flex items-start sm:items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-xs sm:text-sm">10+ years of proven expertise</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-xs sm:text-sm">End-to-end business support</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-xs sm:text-sm">Personalized consultation approach</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base h-11 sm:h-12 px-6 sm:px-8 shadow-sm w-full sm:w-auto"
              >
                <Link href="/contact" className="flex items-center justify-center">
                  <span>Schedule Consultation</span>
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 text-sm sm:text-base h-11 sm:h-12 px-6 sm:px-8 w-full sm:w-auto"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/5 rounded-3xl" />

              <svg viewBox="0 0 400 400" className="w-full h-full p-12">
                {/* Main shield shape */}
                <path
                  d="M200 60 L310 100 L310 210 Q310 280 200 330 Q90 280 90 210 L90 100 Z"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  className="drop-shadow-sm"
                  opacity="0.3"
                />
                <path
                  d="M200 70 L300 105 L300 205 Q300 265 200 310 Q100 265 100 205 L100 105 Z"
                  fill="hsl(var(--primary))"
                  opacity="0.08"
                  className="drop-shadow-sm"
                />

                {/* Inner leaf accent - simplified */}
                <path
                  d="M200 130 Q230 145 238 175 Q230 195 200 205 Q170 195 162 175 Q170 145 200 130 Z"
                  fill="hsl(var(--secondary))"
                  opacity="0.15"
                />

                {/* Central elements - minimal */}
                <circle cx="200" cy="190" r="45" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.4" />
                <circle cx="200" cy="190" r="30" fill="hsl(var(--primary))" opacity="0.1" />

                {/* Professional corner accents */}
                <rect x="90" y="90" width="30" height="3" fill="hsl(var(--secondary))" opacity="0.3" />
                <rect x="90" y="90" width="3" height="30" fill="hsl(var(--secondary))" opacity="0.3" />

                <rect x="280" y="90" width="30" height="3" fill="hsl(var(--accent))" opacity="0.3" />
                <rect x="307" y="90" width="3" height="30" fill="hsl(var(--accent))" opacity="0.3" />
              </svg>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 md:pt-12 border-t"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1">10+</div>
            <div className="text-xs sm:text-sm text-muted-foreground font-medium leading-tight">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1">500+</div>
            <div className="text-xs sm:text-sm text-muted-foreground font-medium leading-tight">Active Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1">1000+</div>
            <div className="text-xs sm:text-sm text-muted-foreground font-medium leading-tight">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1">10</div>
            <div className="text-xs sm:text-sm text-muted-foreground font-medium leading-tight">Service Categories</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
