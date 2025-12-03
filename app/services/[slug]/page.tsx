import { notFound } from 'next/navigation'
import { servicesData } from "@/lib/services-data"
import Header from "@/components/vob/header"
import Footer from "@/components/vob/footer"
import ServiceHero from "@/components/vob/service-detail/hero"
import ServiceOverview from "@/components/vob/service-detail/overview"
import ServiceOfferings from "@/components/vob/service-detail/offerings"
import ServiceBenefits from "@/components/vob/service-detail/benefits"
import ServiceProcess from "@/components/vob/service-detail/process"
import ServiceFAQ from "@/components/vob/service-detail/faq"
import ServiceCTA from "@/components/vob/service-detail/cta"

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-white dark:bg-gray-950">
        <ServiceHero service={service} />
        <ServiceOverview service={service} />
        <ServiceOfferings service={service} />
        <ServiceBenefits service={service} />
        <ServiceProcess service={service} />
        <ServiceFAQ service={service} />
        <ServiceCTA />
      </main>
      <Footer />
    </div>
  )
}
