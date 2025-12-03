import Header from "@/components/vob/header"
import Footer from "@/components/vob/footer"
import WhatsAppButton from "@/components/vob/whatsapp-button"
import ServicesHero from "@/components/vob/services/hero"
import ServicesGrid from "@/components/vob/services/services-grid"
import ServicesCTA from "@/components/vob/services/services-cta"

export const metadata = {
  title: "Our Services - VOB Ventures | Comprehensive Business Solutions",
  description: "Explore our wide range of business services including company formation, accounting, branding, digital marketing, and more.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServicesHero />
        <ServicesGrid />
        <ServicesCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
