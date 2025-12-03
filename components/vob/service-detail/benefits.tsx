import { Star } from 'lucide-react'
import { cn } from "@/lib/utils"

interface ServiceBenefitsProps {
  service: any
}

export default function ServiceBenefits({ service }: ServiceBenefitsProps) {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose Our {service.title}?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                We bring expertise, reliability, and a customer-centric approach to every project.
              </p>
              
              <div className="space-y-6">
                {service.benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0", service.bgColor)}>
                      <Star className={cn("w-5 h-5", service.color)} />
                    </div>
                    <span className="text-lg text-gray-800 dark:text-gray-200 font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={cn(
              "rounded-3xl p-8 lg:p-12 bg-gradient-to-br text-white",
              service.gradient
            )}>
              <h3 className="text-2xl font-bold mb-6">Ready to get started?</h3>
              <p className="text-white/90 mb-8 text-lg leading-relaxed">
                Take the first step towards optimizing your business operations. Our team is ready to assist you with tailored solutions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold mb-1">100%</div>
                  <div className="text-sm text-white/80">Compliance</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-sm text-white/80">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
