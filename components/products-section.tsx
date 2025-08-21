"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Fintech SaaS Platform",
    client: "Quantum Analytics",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "A comprehensive financial analytics platform with real-time data processing and advanced reporting capabilities.",
  },
  {
    title: "E-commerce Automation Suite",
    client: "RetailFlow",
    image: "/placeholder.svg?height=300&width=400",
    description: "Intelligent inventory management and order processing automation that increased efficiency by 300%.",
  },
  {
    title: "AI-Powered CRM",
    client: "SalesForce Pro",
    image: "/placeholder.svg?height=300&width=400",
    description: "Customer relationship management system with AI-driven insights and predictive analytics.",
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-24 px-4 md:px-6 bg-[#1A2947]">
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-white">Innovation in Action</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-[#16325B]/80 border-white/10 backdrop-blur-sm hover:bg-[#16325B] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold font-serif mb-2 text-white">{project.title}</h3>
                  <p className="text-sm text-gray-300 mb-3">{project.client}</p>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  <Button variant="ghost" className="group p-0 h-auto text-white hover:text-gray-300">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
