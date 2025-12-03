import Header from "@/components/vob/header"
import Footer from "@/components/vob/footer"
import WhatsAppButton from "@/components/vob/whatsapp-button"
import AboutHero from "@/components/vob/about/hero"
import CompanyStory from "@/components/vob/about/company-story"
import VisionMissionValues from "@/components/vob/about/vision-mission-values"
import WhyKerala from "@/components/vob/about/why-kerala"
import Leadership from "@/components/vob/about/leadership"
import Timeline from "@/components/vob/about/timeline"
import Commitment from "@/components/vob/about/commitment"

export const metadata = {
  title: "About Us - VOB Ventures | Kerala's Leading Business Services Provider",
  description: "Learn about VOB Ventures, Kerala's trusted partner for business services. Our story, mission, values, and commitment to helping businesses succeed.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <CompanyStory />
        <VisionMissionValues />
        <WhyKerala />
        <Timeline />
        <Leadership />
        <Commitment />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
