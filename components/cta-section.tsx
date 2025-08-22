"use client";
import { Button } from "@/components/ui/button";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function CTASection() {
  const words = [
    {
      text: "Your",
    },
    {
      text: "greatest",
    },
    {
      text: "challenge",
    },
    {
      text: "is",
    },
    {
      text: "our",
    },
    {
      text: "starting",
    },
    {
      text: "point.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <section className="py-24 px-4 md:px-6 relative overflow-hidden bg-[#0F1419]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#16325B]/30 via-[#1A2947]/20 to-[#16325B]/30" />
      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-white">
            Ready to Transform?
        </h2>
        <TypewriterEffectSmooth words={words} />
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
        Let's discuss the vision you've been told is impossible. We specialize in turning ambitious ideas into market-leading realities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white text-lg md:text-xl px-10 py-5 md:px-12 md:py-6" asChild>
            <a href="/contact">Start Your Project</a>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
            <div className="text-white">
                <p className="text-4xl font-bold">100%</p>
                <p className="text-lg">Project Success Rate</p>
            </div>
            <div className="text-white">
                <p className="text-4xl font-bold">24h</p>
                <p className="text-lg">Response Time</p>
            </div>
            <div className="text-white">
                <p className="text-4xl font-bold">∞</p>
                <p className="text-lg">Unlimited Possibilities</p>
            </div>
        </div>
      </div>
    </section>
  );
}