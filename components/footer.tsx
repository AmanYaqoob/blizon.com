"use client"
import Link from "next/link"
import { motion } from "framer-motion"

const services = [
  "SaaS Development",
  "Custom Automation",
  "Software Development",
  "Web App Development",
  "API Integration & Creation",
  "Complex Data Scraping",
  "AI & LLM Solutions",
  "Cloud & DevOps",
]

export function Footer() {
  return (
    <footer className="bg-[#0F1419] border-t border-white/10 snap-start">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold font-serif text-white mb-4">Blizon</div>
            <p className="text-gray-300">Engineering Your Digital Future</p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold font-serif mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold font-serif mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold font-serif mb-4 text-white">Connect</h4>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">hello@blizon.tech</p>
              <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Blizon. All Rights Reserved. |
            <Link href="#" className="hover:text-white transition-colors ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="#" className="hover:text-white transition-colors ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
