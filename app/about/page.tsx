"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import TeamSection from "@/components/team-section"
import { StarBorder } from "@/components/ui/star-border"
import { motion } from "framer-motion"
import { Code, Rocket, Award } from "lucide-react"

export default function AboutPage() {
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
              About Blizon
            </h1>
            <StarBorder
              as="div"
              className="mb-6"
              color="hsl(var(--primary))"
            >
              Learn More About Us
            </StarBorder>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're not just developers. We're digital architects who transform ambitious visions into market-leading realities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section 
        className="py-24 px-4 snap-start"
        style={{ background: `linear-gradient(180deg, #1A2947 0%, #16325B 50%, #0F1419 100%)` }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and growth. 
                We believe every ambitious idea deserves world-class execution.
              </p>
              
              <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                To be the global leader in transformative software solutions, turning today's impossible challenges 
                into tomorrow's competitive advantages.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl"
            >
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                  <div className="text-gray-300">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
                  <div className="text-gray-300">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">24h</div>
                  <div className="text-gray-300">Response Time</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-400 mb-2">5+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section 
        className="py-24 px-4"
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Born from the belief that technology should empower, not complicate.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#16325B]/50 to-[#1A2947]/50 rounded-2xl p-8 border border-white/10"
            >
              <Code className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Founded on Excellence</h3>
              <p className="text-gray-300">
                Started with a simple mission: build software that doesn't just work, but transforms businesses 
                and creates lasting impact in the digital landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#16325B]/50 to-[#1A2947]/50 rounded-2xl p-8 border border-white/10"
            >
              <Rocket className="w-12 h-12 text-green-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Rapid Growth</h3>
              <p className="text-gray-300">
                Our commitment to innovation and client success has fueled exponential growth, 
                allowing us to tackle increasingly complex challenges across industries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#16325B]/50 to-[#1A2947]/50 rounded-2xl p-8 border border-white/10"
            >
              <Award className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Proven Track Record</h3>
              <p className="text-gray-300">
                With Trobyx as our flagship success story, we've proven our ability to build, scale, 
                and deliver platforms that achieve real market impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        className="py-24 px-4 snap-start"
        style={{ background: `linear-gradient(180deg, #16325B 0%, #0F1419 50%, #1A2947 100%)` }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide every decision, every line of code, and every client relationship.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Innovation First", desc: "We don't just follow trends—we create them. Every solution is built with cutting-edge technology and forward-thinking design." },
              { title: "Client Success", desc: "Your success is our success. We're not satisfied until your vision becomes a market-leading reality." },
              { title: "Quality Obsessed", desc: "We believe in doing things right the first time. Every deliverable meets the highest standards of excellence." },
              { title: "Transparent Partnership", desc: "Clear communication, honest feedback, and collaborative development throughout every project phase." },
              { title: "Continuous Learning", desc: "Technology evolves rapidly, and so do we. We're constantly upgrading our skills and knowledge." },
              { title: "Impact Driven", desc: "We measure success not just in code delivered, but in the real-world impact our solutions create." }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-[0_8px_32px_rgba(255,255,255,0.06)] hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      <Footer />
    </main>
  )
}