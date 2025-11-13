"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Pricing from "@/components/pricing"
import FAQ from "@/components/faq"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

export default function Page() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen overflow-hidden">
        <Header />
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <Newsletter />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
