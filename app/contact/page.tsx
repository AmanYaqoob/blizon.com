"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StarBorder } from "@/components/ui/star-border"
import { motion } from "framer-motion"
import { 
  Mail, 
  Send,
  CheckCircle,
  Clock,
  MessageSquare
} from "lucide-react"

export default function ContactPage() {

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-24 px-4 snap-start"
        style={{ background: `linear-gradient(180deg, #16325B 0%, #0F1419 50%, #1A2947 100%)` }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wide">
              Contact Us
            </h1>
            <StarBorder
              as="div"
              className="mb-6"
              color="hsl(var(--primary))"
            >
              Get In Touch
            </StarBorder>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your vision into reality? Reach out to us and let's discuss how we can help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Email Contact Section */}
      <section 
        className="py-24 px-4 snap-start"
        style={{ background: `linear-gradient(180deg, #1A2947 0%, #16325B 50%, #0F1419 100%)` }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Have a project in mind? We'd love to hear from you. Send us an email and we'll respond within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12 shadow-xl hover:shadow-[0_8px_32px_rgba(255,255,255,0.06)] hover:-translate-y-1 transition-all duration-300 text-center"
          >
            <div className="inline-flex p-4 rounded-xl mb-6 bg-white/10 hover:bg-white/20 transition-all duration-300">
              <Mail className="w-8 h-8 text-blue-400" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">Email Us</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ready to discuss your project? Drop us a line and let's start building something amazing together.
            </p>
            
            <div className="mb-6">
              <a 
                href="mailto:ahmed@blizon.tech"
                className="text-lg font-semibold text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2 group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                ahmed@blizon.tech
              </a>
            </div>

            <StarBorder
              as="a"
              href="mailto:ahmed@blizon.tech"
              color="#60A5FA"
              speed="4s"
              className="group inline-block"
            >
              <div className="flex items-center gap-2 px-6 py-3">
                <Send className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span className="text-white font-medium">Send Email Now</span>
              </div>
            </StarBorder>
          </motion.div>
        </div>
      </section>

      {/* Response Info Section */}
      <section 
        className="py-24 px-4 snap-start"
        style={{ background: `linear-gradient(180deg, #0F1419 0%, #1A2947 50%, #16325B 100%)` }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What Happens Next?</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Here's our simple process to get your project started quickly and efficiently.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-[0_8px_32px_rgba(255,255,255,0.06)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                  <span className="text-blue-400 font-bold text-sm">1</span>
                </div>
                <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                  <Clock className="w-3 h-3 text-blue-400" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Quick Response</h3>
              <p className="text-gray-300 leading-relaxed">
                We'll respond to your email within 24 hours to acknowledge your inquiry and schedule a discovery call.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-[0_8px_32px_rgba(255,255,255,0.06)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                  <span className="text-green-400 font-bold text-sm">2</span>
                </div>
                <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-3 h-3 text-green-400" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Discovery Call</h3>
              <p className="text-gray-300 leading-relaxed">
                We'll dive deep into your project requirements, goals, and technical specifications during our discussion.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-[0_8px_32px_rgba(255,255,255,0.06)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-500/30">
                  <span className="text-purple-400 font-bold text-sm">3</span>
                </div>
                <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-purple-400" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Let's Build</h3>
              <p className="text-gray-300 leading-relaxed">
                Once we align on the project scope and timeline, we'll start building your solution with regular updates.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}