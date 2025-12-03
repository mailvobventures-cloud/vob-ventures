import Header from "@/components/vob/header"
import Footer from "@/components/vob/footer"
import WhatsAppButton from "@/components/vob/whatsapp-button"
import ContactHero from "@/components/vob/contact/hero"
import ContactForm from "@/components/vob/contact/contact-form"
import ContactInfo from "@/components/vob/contact/contact-info"
import MapSection from "@/components/vob/contact/map-section"

export const metadata = {
  title: "Contact Us - VOB Ventures | Get in Touch with Our Experts",
  description: "Contact VOB Ventures for business services in Kerala. Get free consultation and expert guidance for your business needs.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ContactHero />
        <div className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </div>
        <MapSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
