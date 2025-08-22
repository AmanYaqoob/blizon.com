"use client"

import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title?: string
  description?: string
  testimonials?: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title = "The Decisive Partnership",
  description = "Real results from real clients who chose to build their future with us.",
  testimonials = [
    {
      author: {
        name: "Sarah Chen",
        title: "CTO",
        company: "Retreat Worldwide"
      },
      text: "Blizon transformed our entire infrastructure. What used to take us months now happens in weeks. Their technical expertise and strategic thinking are unmatched."
    },
    {
      author: {
        name: "Marcus Rodriguez", 
        title: "Founder",
        company: "Treasure Hunter"
      },
      text: "Working with Blizon was the best decision we made. They didn't just build our platform - they architected our success. 300% growth in 6 months."
    },
    {
      author: {
        name: "Emily Watson",
        title: "VP of Engineering", 
        company: "Polie.com"
      },
      text: "The level of automation Blizon delivered has revolutionized our operations. We've eliminated 80% of manual processes and scaled without adding headcount."
    },
    {
      author: {
        name: "David Kim",
        title: "CEO",
        company: "Nexus"
      },
      text: "Blizon's team feels like an extension of our own. Their deep understanding of our business needs and flawless execution made all the difference."
    },
    {
      author: {
        name: "Lisa Park",
        title: "Product Director",
        company: "Retreat Worldwide"
      },
      text: "From concept to deployment in record time. Blizon's expertise in AI integration gave us a competitive edge we never thought possible."
    },
    {
      author: {
        name: "James Thompson",
        title: "Operations Manager",
        company: "Treasure Hunter"
      },
      text: "The ROI on our Blizon partnership was immediate. Their automation solutions saved us 40 hours per week and improved accuracy by 95%."
    }
  ],
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "py-24 snap-start",
      "bg-gradient-to-b from-[#16325B] to-[#0F1419]",
      className
    )}>
      <div className="mx-auto flex w-full flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-8 text-center px-4">
          <h2 className="max-w-4xl text-4xl md:text-5xl font-bold text-white leading-tight tracking-wide">
            {title}
          </h2>
          <p className="text-lg max-w-2xl font-medium text-gray-300">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:20s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard 
                  key={`duplicate-${i}`}
                  {...testimonial}
                />
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#16325B] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#0F1419] to-transparent" />
        </div>

        <div className="text-center px-4">
          <p className="text-sm text-gray-400 mb-4">
            Join the companies that chose to build their future with us
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="text-gray-500 font-semibold">Retreat Worldwide</div>
            <div className="text-gray-500 font-semibold">Treasure Hunter</div>
            <div className="text-gray-500 font-semibold">Polie.com</div>
            <div className="text-gray-500 font-semibold">Nexus</div>
          </div>
        </div>
      </div>
    </section>
  )
}