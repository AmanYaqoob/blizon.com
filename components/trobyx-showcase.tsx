"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { StarBorder } from "@/components/ui/star-border";

// --- Data for the Trobyx features accordion ---
const accordionItems = [
  {
    id: 1,
    title: 'Compliance Dashboard',
    imageUrl: '/Compliance Dashboard.png',
  },
  {
    id: 2,
    title: 'Professional Network',
    imageUrl: '/Professional Network.png',
  },
  {
    id: 3,
    title: 'Smart Automation',
    imageUrl: '/Smart Automation.png',
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    imageUrl: '/Analytics Dashboard.png',
  },
  {
    id: 5,
    title: 'Template Library',
    imageUrl: '/Template Library.png',
  },
];

// --- Accordion Item Component ---
const AccordionItem = ({ item, isActive, onMouseEnter }) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out border border-white/20
        ${isActive ? 'w-[400px]' : 'w-[60px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image with gradient overlay */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => { 
          e.target.onerror = null; 
          e.target.src = 'https://placehold.co/400x450/16325B/ffffff?text=Trobyx+Feature'; 
        }}
      />
      {/* Gradient overlay matching website theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#16325B]/80 to-[#1A2947]/80"></div>

      {/* Caption Text */}
      <span
        className={`
          absolute text-white text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0' // Active state: horizontal, bottom-center
              // Inactive state: vertical, positioned at the bottom
              : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};

// --- Main Trobyx Showcase Component ---
export function TrobyxShowcase() {
  const [activeIndex, setActiveIndex] = useState(2); // Default to Smart Automation

  const handleItemHover = (index) => {
    setActiveIndex(index);
  };

  return (
    <section 
      className="py-24 snap-start"
      style={{ background: `linear-gradient(135deg, #16325B 0%, #0F1419 50%, #1A2947 100%)` }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-block bg-[#1A2947] text-white px-4 py-2 rounded-full text-sm mb-6 border border-white/20">
              Proof, Not Promises
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-wide mb-6">
              Trobyx: Empowering Professional Growth
            </h1>
            <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              We built, launched, and scaled our own platform. From concept to market in 2 months using the same technology we deliver to our clients.
            </p>
            
            {/* Key metrics */}
            <div className="grid grid-cols-2 gap-6 mb-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white mb-1">99.8%</div>
                <div className="text-gray-400 text-sm">Uptime</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white mb-1">2 Months</div>
                <div className="text-gray-400 text-sm">To Market</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white mb-1">B2B Focus</div>
                <div className="text-gray-400 text-sm">Professional</div>
              </div>
            </div>

            <Button 
              className="bg-white text-[#16325B] hover:bg-gray-100 px-8 py-3 text-lg font-semibold transition-all duration-300" 
              size="lg" 
              asChild
            >
              <a href="https://trobyx.com" target="_blank" rel="noopener noreferrer">
                Explore Trobyx
              </a>
            </Button>
          </div>

          {/* Right Side: Feature Accordion */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto p-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section with professional glowing badges */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 max-w-6xl mx-auto">
            <StarBorder 
              as="div"
              color="#60A5FA"
              speed="8s"
              className="cursor-default"
            >
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Compliance First</h3>
                <p className="text-gray-300 text-sm max-w-xs">Cookie-based authentication and human-like patterns protect user accounts.</p>
              </div>
            </StarBorder>
            
            <StarBorder 
              as="div"
              color="#34D399"
              speed="7s"
              className="cursor-default"
            >
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Professional Focus</h3>
                <p className="text-gray-300 text-sm max-w-xs">Built for B2B professionals who value reputation and need compliant solutions.</p>
              </div>
            </StarBorder>
            
            <StarBorder 
              as="div"
              color="#F59E0B"
              speed="6s"
              className="cursor-default"
            >
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Results-Driven</h3>
                <p className="text-gray-300 text-sm max-w-xs">Real-time monitoring with measurable outcomes and clear ROI tracking.</p>
              </div>
            </StarBorder>
          </div>
        </div>
      </div>
    </section>
  );
}