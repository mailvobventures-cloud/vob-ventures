"use client"

import { MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function WhatsAppButton() {
  const whatsappNumber = "+916282660237"    // TODO: Replace with actual number from the database
  const whatsappMessage = "Hi! I'd like to know more about VOB Ventures services."

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, "_blank")
  }

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#25D366]/90 shadow-lg hover:shadow-xl transition-all duration-300 p-0"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </Button>
  )
}
