"use client"
import { motion } from "framer-motion"

const pillars = [
  {
    title: "SaaS Mastery",
    description:
      "We don't just build products; we build businesses. Our end-to-end SaaS development lifecycle ensures market-ready solutions.",
  },
  {
    title: "Automation Architects",
    description:
      "From RPA to custom scripts, we identify and automate repetitive tasks, freeing up your team for high-value work.",
  },
  {
    title: "Agile Development",
    description:
      "Our agile methodology ensures transparency, flexibility, and a final product that perfectly aligns with your vision.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 px-4 md:px-6 bg-[#16325B]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold font-serif mb-4 text-white">{pillar.title}</h3>
              <p className="text-gray-300 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
