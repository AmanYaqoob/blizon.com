import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ServicesSection } from "@/components/services-section"
import { TrobyxShowcase } from "@/components/trobyx-showcase"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth snap-y snap-mandatory overflow-y-auto h-screen">
      <Header />

      <Hero
        title="Engineering Your Digital Future"
        subtitle="Blizon builds scalable SaaS platforms, intelligent automations, and custom software that powers growth."
        actions={[
          {
            label: "Explore Our Services",
            href: "#services",
            variant: "default",
          },
          {
            label: "View Our Work",
            href: "#products",
            variant: "outline",
          },
        ]}
        className="pt-16 snap-start"
      />

      <ServicesSection />
      <TrobyxShowcase />
      <TestimonialsSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
