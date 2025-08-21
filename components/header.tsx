"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu } from "@/components/ui/dropdown-menu-custom"
import { Menu, MoveRight, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"  
import logo from '../public/logo.png';

function Header() {
  const [isOpen, setOpen] = useState(false)
  
  const servicesOptions = [
    {
      label: "SaaS Development",
      onClick: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      label: "Custom Automation", 
      onClick: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      label: "Web App Development",
      onClick: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      label: "AI & LLM Solutions",
      onClick: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      label: "API Integration",
      onClick: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      label: "Cloud & DevOps", 
      onClick: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
    }
  ]

  const companyOptions = [
    {
      label: "About us",
      onClick: () => window.location.href = '/about'
    },
    {
      label: "Our Products", 
      onClick: () => window.location.href = '/products'
    },
    {
      label: "Why Choose Us",
      onClick: () => window.location.href = '/why-choose-us'
    },
    {
      label: "Contact us",
      onClick: () => window.location.href = '/contact'
    }
  ]
  return (
    <header className="w-full z-50 fixed top-0 left-0 bg-black/10 backdrop-blur-sm border-b border-white/10">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          <Button variant="ghost" className="text-white hover:bg-white/10 border-none bg-transparent" asChild>
            <Link href="/">Home</Link>
          </Button>
          
          <DropdownMenu options={servicesOptions}>
            <span className="text-white">Services</span>
          </DropdownMenu>
          
          <DropdownMenu options={companyOptions}>
            <span className="text-white">Company</span>
          </DropdownMenu>
        </div>
        <div className="flex lg:justify-center">
          {/* <p className="font-semibold text-2xl font-serif text-white">Blizon</p> */}
          <a href="/"><Image src={logo} width={100} /></a>
        </div>

        <div className="flex justify-end w-full gap-4">
          <Button asChild className="bg-white text-[#16325B] hover:bg-white/90">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button
            variant="ghost"
            onClick={() => setOpen(!isOpen)}
            className="text-white hover:bg-white/10 border-none bg-transparent"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20 border-t border-white/10 flex flex-col w-full right-0 bg-black/20 backdrop-blur-sm shadow-lg py-4 container gap-6">
              <Link href="/" className="flex justify-between items-center text-white hover:text-white/70">
                <span className="text-lg">Home</span>
                <MoveRight className="w-4 h-4 stroke-1 text-white/70" />
              </Link>
              
              <div className="flex flex-col gap-4">
                <p className="text-lg text-white">Services</p>
                <div className="flex flex-col gap-2 ml-4">
                  {servicesOptions.map((option) => (
                    <button
                      key={option.label}
                      onClick={option.onClick}
                      className="flex justify-between items-center text-white hover:text-white/70 text-left"
                    >
                      <span>{option.label}</span>
                      <MoveRight className="w-4 h-4 stroke-1 text-white/70" />
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <p className="text-lg text-white">Company</p>
                <div className="flex flex-col gap-2 ml-4">
                  {companyOptions.map((option) => (
                    <button
                      key={option.label}
                      onClick={() => {
                        option.onClick();
                        setOpen(false);
                      }}
                      className="flex justify-between items-center text-white hover:text-white/70 text-left"
                    >
                      <span>{option.label}</span>
                      <MoveRight className="w-4 h-4 stroke-1 text-white/70" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export { Header }
