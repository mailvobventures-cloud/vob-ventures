import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function ServiceCTA() {
  return (
    <section className="py-24 bg-[#0C6CE8]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to take your business to the next level?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Get in touch with our experts today for a free consultation and customized solution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-[#0C6CE8] hover:bg-gray-100 text-lg px-8 h-14 rounded-full"
          >
            <Link href="/contact">
              Get Started Now
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white/10 text-lg px-8 h-14 rounded-full"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
