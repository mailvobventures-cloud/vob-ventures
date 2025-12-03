import Header from "@/components/vob/header"
import Footer from "@/components/vob/footer"
import WhatsAppButton from "@/components/vob/whatsapp-button"
import Hero from "@/components/vob/home/hero"
import Stats from "@/components/vob/home/stats"
import WhatWeDo from "@/components/vob/home/what-we-do"
import WhyChooseUs from "@/components/vob/home/why-choose-us"
import Testimonials from "@/components/vob/home/testimonials"
import ProcessFlow from "@/components/vob/home/process-flow"
import CTASection from "@/components/vob/home/cta-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <WhatWeDo />
        <WhyChooseUs />
        <ProcessFlow />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
