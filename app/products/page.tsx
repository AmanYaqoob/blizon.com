"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FeatureSection from "@/components/features-section"
import { StarBorder } from "@/components/ui/star-border"
import { BentoGrid } from "@/components/ui/bento-grid"
import { motion } from "framer-motion"
import { AlertTriangle, Construction, Sparkles } from "lucide-react"

export default function ProductsPage() {
  const storyItems = [
    {
      title: "The Problem",
      description: "Our founder was spending 3 hours every morning manually building prospect lists on LinkedIn. Copy-pasting profiles, sending connection requests one by one, and tracking everything in messy spreadsheets.",
      icon: <AlertTriangle className="w-4 h-4 text-red-500" />,
      status: "Pain Point",
      tags: ["Manual Work", "Time Consuming"],
      colSpan: 1,
      hasPersistentHover: false,
    },
    {
      title: "The Challenge", 
      description: "Existing automation tools were either too complicated (requiring coding skills), too risky (getting accounts banned), or too expensive for small businesses and freelancers.",
      icon: <Construction className="w-4 h-4 text-yellow-500" />,
      status: "Obstacles",
      tags: ["Complexity", "Risk", "Cost"],
      colSpan: 1,
      hasPersistentHover: false,
    },
    {
      title: "The Solution",
      description: "So we built Trobyx - the automation platform we wished existed. One that's safe, simple, and actually works. No coding required, no account suspensions, and priced fairly for everyone.",
      icon: <Sparkles className="w-4 h-4 text-green-500" />,
      status: "Success",
      tags: ["Safe", "Simple", "Affordable"],
      colSpan: 1,
      hasPersistentHover: true,
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-24 px-4 snap-start"
        style={{ background: `linear-gradient(135deg, #16325B 0%, #0F1419 50%, #1A2947 100%)` }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wide">
              Trobyx
            </h1>
            <StarBorder
              as="a"
              href="https://www.trobyx.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-6"
              color="hsl(var(--primary))"
            >
              Visit Trobyx
            </StarBorder>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The LinkedIn automation platform that transforms 3 hours of manual work into 3 minutes of smart automation. 
              Safe, simple, and built for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <FeatureSection />

      {/* Trobyx Story & Development Journey - Combined Section */}
      <section 
        className="py-24 px-4 snap-start"
        style={{ background: `linear-gradient(135deg, #0F1419 0%, #16325B 50%, #1A2947 100%)` }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Story Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">The Story Behind Trobyx</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Every great solution starts with a real problem. Here's how Trobyx came to life and evolved into the platform professionals trust today.
            </p>
          </motion.div>

          {/* Story Content with BentoGrid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <BentoGrid items={storyItems} />
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  )
}