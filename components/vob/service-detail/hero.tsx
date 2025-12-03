import Link from "next/link"
import { ChevronRight } from 'lucide-react'
import { cn } from "@/lib/utils"

interface ServiceHeroProps {
  service: any
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  const Icon = service.icon

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(${service.color.replace('text-', '')} 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <Link href="/" className="hover:text-[#0C6CE8] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-[#0C6CE8] transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className={cn("font-medium", service.color)}>{service.title}</span>
          </div>

          <div className={cn(
            "inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 shadow-lg",
            service.bgColor
          )}>
            <Icon className={cn("w-10 h-10", service.color)} />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            {service.title}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </section>
  )
}
