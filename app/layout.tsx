import type React from "react"
import type { Metadata } from "next"
import { Bricolage_Grotesque, Lato } from "next/font/google"
import "./globals.css"

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-lato",
})

export const metadata: Metadata = {
  title: "Blizon - Software And Saas Development",
  description:
    "Blizon builds scalable SaaS platforms, intelligent automations, and custom software that powers growth.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <style>{`
html {
  font-family: ${lato.style.fontFamily};
  --font-sans: ${lato.variable};
  --font-serif: ${bricolageGrotesque.variable};
}
        `}</style>
      </head>
      <body className={`${bricolageGrotesque.variable} ${lato.variable} antialiased bg-[#0F1419]`}>{children}</body>
    </html>
  )
}
