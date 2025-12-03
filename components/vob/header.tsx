"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation'
import { Menu, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import ThemeToggle from "@/components/vob/theme-toggle"

const serviceCategories = [
  { title: "Company Formation & Registration", href: "/services/company-formation" },
  { title: "Accounting & Compliance", href: "/services/accounting-compliance" },
  { title: "Branding & Creative Services", href: "/services/branding-creative" },
  { title: "Digital Marketing", href: "/services/digital-marketing" },
  { title: "IT & Software Solutions", href: "/services/it-software" },
  { title: "Business Licensing", href: "/services/licensing" },
  { title: "HR & Recruitment", href: "/services/hr-recruitment" },
  { title: "Business Consulting", href: "/services/consulting" },
  { title: "Funding & Investment", href: "/services/funding" },
  { title: "Legal Support", href: "/services/legal" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/98 dark:bg-gray-950/98 backdrop-blur-sm shadow-sm"
          : "bg-white dark:bg-gray-950"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-[180px] h-[80px]">
              <Image 
                src="/images/vob-logo.png" 
                alt="VOB Ventures" 
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                pathname === "/" 
                  ? "text-primary bg-primary/10" 
                  : "text-foreground hover:text-primary hover:bg-muted"
              )}
            >
              Home
            </Link>
            
            <Link
              href="/about"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                pathname === "/about" 
                  ? "text-primary bg-primary/10" 
                  : "text-foreground hover:text-primary hover:bg-muted"
              )}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "text-sm font-medium bg-transparent hover:bg-muted data-[state=open]:bg-muted",
                      pathname.startsWith("/services") ? "text-primary" : "text-foreground hover:text-primary"
                    )}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] gap-3 p-6 md:grid-cols-2">
                      {serviceCategories.map((service) => (
                        <li key={service.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-primary"
                            >
                              <div className="text-sm font-medium leading-none">{service.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              href="/contact"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                pathname === "/contact" 
                  ? "text-primary bg-primary/10" 
                  : "text-foreground hover:text-primary hover:bg-muted"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <ThemeToggle />
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-primary/30 text-primary hover:bg-primary hover:text-white"
            >
              <Link href="/contact">Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white shadow-sm"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium px-4 py-2 rounded-lg transition-colors",
                    pathname === "/" ? "bg-[#0C6CE8]/10 text-[#0C6CE8]" : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium px-4 py-2 rounded-lg transition-colors",
                    pathname === "/about" ? "bg-[#0C6CE8]/10 text-[#0C6CE8]" : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                >
                  About
                </Link>
                
                <div className="space-y-2">
                  <div className="text-lg font-medium px-4 py-2 text-gray-900 dark:text-white">Services</div>
                  <div className="pl-4 space-y-1">
                    {serviceCategories.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium px-4 py-2 rounded-lg transition-colors",
                    pathname === "/contact" ? "bg-[#0C6CE8]/10 text-[#0C6CE8]" : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                >
                  Contact
                </Link>

                <div className="pt-4 space-y-2">
                  <div className="flex items-center justify-between px-4 py-2">
                    <span className="text-sm font-medium">Theme</span>
                    <ThemeToggle />
                  </div>
                  <Button asChild className="w-full bg-[#0C6CE8] hover:bg-[#0C6CE8]/90">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Free Consultation
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
