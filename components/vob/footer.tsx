import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative w-[160px] h-[45px] rounded-lg px-2 py-1">
                <Image 
                  src="/images/vob-logo.png" 
                  alt="VOB Ventures" 
                  fill
                  className="object-contain"
                />
              </div>
             
            </div>
            <p className="text-sm leading-relaxed">
              Kerala's all-in-one partner for starting, running, and growing your business.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#0C6CE8] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#0C6CE8] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#0C6CE8] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#0C6CE8] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-[#0C6CE8] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-[#0C6CE8] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-[#0C6CE8] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-[#0C6CE8] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/company-formation" className="text-sm hover:text-[#0C6CE8] transition-colors">
                  Company Formation
                </Link>
              </li>
              <li>
                <Link href="/services/accounting-compliance" className="text-sm hover:text-[#0C6CE8] transition-colors">
                  Accounting & Compliance
                </Link>
              </li>
              <li>
                <Link href="/services/branding-creative" className="text-sm hover:text-[#0C6CE8] transition-colors">
                  Branding & Creative
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-sm hover:text-[#0C6CE8] transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="text-sm hover:text-[#0C6CE8] transition-colors">
                  Business Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#0C6CE8] flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Kerala, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#0C6CE8] flex-shrink-0" />
                <span className="text-sm">+91 XXX XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#0C6CE8] flex-shrink-0" />
                <span className="text-sm">info@vobventures.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} VOB Ventures. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-[#0C6CE8] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-[#0C6CE8] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
