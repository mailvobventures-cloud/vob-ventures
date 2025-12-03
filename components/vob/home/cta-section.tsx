import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Phone } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0C6CE8] via-[#0C6CE8] to-[#62C834] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Ready to Start Your Business Journey?
          </h2>
          <p className="text-xl mb-10 opacity-90 text-pretty">
            Get expert guidance and comprehensive support for all your business needs. Let's build something great
            together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#0C6CE8] hover:bg-gray-100 text-lg h-14 px-8"
            >
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Talk to an Expert
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0C6CE8] text-lg h-14 px-8"
            >
              <Link href="/services">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
