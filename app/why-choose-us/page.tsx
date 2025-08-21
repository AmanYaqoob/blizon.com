"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StarBorder } from "@/components/ui/star-border"
import { motion } from "framer-motion"
import { 
  Clock, 
  Shield, 
  Users, 
  TrendingUp, 
  Award, 
  Zap, 
  CheckCircle, 
  Target,
  Code,
  Lightbulb,
  HeartHandshake,
  Rocket
} from "lucide-react"

export default function WhyChooseUsPage() {
  const advantages = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Proven Track Record",
      description: "100% project success rate with over 50+ delivered solutions across diverse industries.",
      color: "blue"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Rapid Delivery",
      description: "From concept to deployment in record time without compromising on quality or functionality.",
      color: "green"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Cutting-Edge Technology",
      description: "We use the latest technologies and frameworks to ensure your solution is future-ready.",
      color: "purple"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated Team",
      description: "Expert developers, designers, and strategists focused exclusively on your project's success.",
      color: "orange"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scalable Solutions",
      description: "Built to grow with your business, from startup MVP to enterprise-scale applications.",
      color: "teal"
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Partnership Approach",
      description: "We're not just vendors—we're your technology partners invested in your long-term success.",
      color: "pink"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We dive deep into your business goals, challenges, and vision to create a comprehensive strategy.",
      icon: <Target className="w-6 h-6" />
    },
    {
      step: "02", 
      title: "Design & Architecture",
      description: "Our experts design scalable architecture and user experiences that drive engagement and growth.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with continuous testing ensures high-quality, bug-free solutions.",
      icon: <Code className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Seamless deployment with ongoing support and optimization to ensure continued success.",
      icon: <Rocket className="w-6 h-6" />
    }
  ]

  const testimonialStats = [
    { number: "100%", label: "Client Satisfaction Rate" },
    { number: "24h", label: "Average Response Time" },
    { number: "50+", label: "Successful Projects" },
    { number: "99.8%", label: "Uptime Guarantee" }
  ]

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
              Why Choose Blizon
            </h1>
            <StarBorder
              as="div"
              className="mb-6"
              color="hsl(var(--primary))"
            >
              Discover Our Advantage
            </StarBorder>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              When you need technology that transforms challenges into competitive advantages, you need a partner who delivers excellence at every step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Advantages Grid */}
      <section 
        className="py-24 px-4 snap-start"
        style={{ background: `linear-gradient(180deg, #1A2947 0%, #16325B 50%, #0F1419 100%)` }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Blizon Advantage</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What sets us apart from other development teams and makes us the ideal choice for your next project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-[0_8px_32px_rgba(255,255,255,0.06)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-2xl mb-6 bg-white/10 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 ${
                  advantage.color === 'blue' ? 'text-blue-400' :
                  advantage.color === 'green' ? 'text-green-400' :
                  advantage.color === 'purple' ? 'text-purple-400' :
                  advantage.color === 'orange' ? 'text-orange-400' :
                  advantage.color === 'teal' ? 'text-teal-400' :
                  'text-pink-400'
                }`}>
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{advantage.title}</h3>
                <p className="text-gray-300 leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Proven Process</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              A systematic approach that ensures every project delivers exceptional results on time and within budget.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#16325B]/50 to-[#1A2947]/50 rounded-2xl p-8 border border-white/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full border border-blue-500/30">
                    {step.icon}
                  </div>
                  <div>
                    <div className="text-blue-400 font-bold text-sm mb-1">STEP {step.step}</div>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Results That Speak</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers don't lie. Our track record demonstrates consistent excellence and client satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {testimonialStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-[0_8px_32px_rgba(255,255,255,0.06)] hover:-translate-y-1 transition-all duration-300">
                  <div className="text-5xl font-bold text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Badges */}
      <section 
        className="py-24 px-4 snap-start"
        style={{ background: `linear-gradient(180deg, #1A2947 0%, #16325B 50%, #0F1419 100%)` }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Join the growing list of successful companies who chose Blizon as their technology partner.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <StarBorder
                as="button"
                color="#60A5FA"
                speed="6s"
                className="group"
              >
                <div className="flex items-center gap-3 px-8 py-4">
                  <CheckCircle className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <span className="text-white font-bold text-lg">Start Your Project</span>
                </div>
              </StarBorder>

              <StarBorder
                as="button"
                color="#34D399"
                speed="7s"
                className="group"
              >
                <div className="flex items-center gap-3 px-8 py-4">
                  <Award className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors" />
                  <span className="text-white font-bold text-lg">Get Free Consultation</span>
                </div>
              </StarBorder>

              <StarBorder
                as="button"
                color="#F59E0B"
                speed="8s"
                className="group"
              >
                <div className="flex items-center gap-3 px-8 py-4">
                  <Zap className="w-5 h-5 text-orange-400 group-hover:text-orange-300 transition-colors" />
                  <span className="text-white font-bold text-lg">View Our Work</span>
                </div>
              </StarBorder>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}