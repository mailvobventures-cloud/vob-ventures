import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "VOB Ventures - Vanguard of Business | Kerala's All-in-One Business Partner",
  description:
    "Kerala's all-in-one partner for starting, running, and growing your business. Expert services in company formation, compliance, branding, digital marketing, IT solutions, and more.",
  keywords: [
    "business services Kerala",
    "company formation",
    "GST registration",
    "business consulting",
    "startup support",
    "VOB Ventures"
  ],
  authors: [{ name: "VOB Ventures" }],
  generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0C6CE8",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
