"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { FileDown } from "lucide-react"

export default function Hero() {
  const [typingComplete, setTypingComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingComplete(true)
    }, 3500) // Adjusted timing for shorter name

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="overflow-hidden">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="typewriter inline-block">Shree Deepthi</span>
              </h1>
            </div>
            <h2
              className={`font-serif text-2xl md:text-3xl text-foreground mb-2 ${typingComplete ? "fade-in" : "opacity-0"}`}
            >
              Computer Science Developer & AI/ML Researcher
            </h2>
            <p className={`cursive-accent mb-6 ${typingComplete ? "fade-in" : "opacity-0"}`}>
              Blending creativity with technology
            </p>
            <p
              className={`font-serif text-lg text-foreground mb-8 max-w-lg ${typingComplete ? "slide-up" : "opacity-0"}`}
            >
              Passionate about building AI-powered tools, emotion-driven design, authoring books, and uplifting women
              through tech-for-good projects.
            </p>
            <div className={`flex flex-wrap gap-4 ${typingComplete ? "fade-in" : "opacity-0"}`}>
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/80 text-secondary-foreground border-none btn-hover"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/80 text-secondary-foreground border-none btn-hover"
              >
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/80 text-secondary-foreground border-none flex items-center gap-2 btn-hover"
              >
                <a
                  href="https://drive.google.com/file/d/1sbQSSMMnInej42g8DoF5Z54tFbPfG-Mn/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileDown className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-foreground shadow-lg">
              <Image
                src="/images/linkedin.jpg"
                alt="Shree Deepthi"
                width={320}
                height={320}
                className="w-full h-full object-cover object-center"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
