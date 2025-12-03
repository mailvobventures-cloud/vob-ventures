import { cn } from "@/lib/utils"

interface ServiceProcessProps {
  service: any
}

export default function ServiceProcess({ service }: ServiceProcessProps) {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A simple, transparent process designed for your convenience
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {service.process.map((step: any, index: number) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 dark:bg-gray-700" />
                )}
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white mb-6 shadow-lg transition-transform hover:scale-110",
                    index % 2 === 0 ? "bg-[#0C6CE8]" : "bg-[#62C834]"
                  )}>
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
