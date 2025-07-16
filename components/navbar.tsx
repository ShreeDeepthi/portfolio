"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex justify-between w-full md:w-auto items-center">
            <Link href="/" className="font-cursive text-3xl text-foreground">
              Shree Deepthi
            </Link>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-foreground">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 py-2">
            <Link
              href="#home"
              className="font-serif text-foreground hover:opacity-80 transition-colors nav-link relative"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="font-serif text-foreground hover:opacity-80 transition-colors nav-link relative"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="font-serif text-foreground hover:opacity-80 transition-colors nav-link relative"
            >
              Skills
            </Link>
            <Link
              href="#certifications"
              className="font-serif text-foreground hover:opacity-80 transition-colors nav-link relative"
            >
              Certifications
            </Link>
            <Link
              href="#projects"
              className="font-serif text-foreground hover:opacity-80 transition-colors nav-link relative"
            >
              Projects
            </Link>
            <Link
              href="#publications"
              className="font-serif text-foreground hover:opacity-80 transition-colors nav-link relative"
            >
              Publications
            </Link>
            <Link
              href="#contact"
              className="font-serif text-foreground hover:opacity-80 transition-colors nav-link relative"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-secondary py-4 px-4">
            <div className="flex flex-col space-y-4">
              <Link href="#home" className="font-serif text-foreground hover:opacity-80" onClick={toggleMenu}>
                Home
              </Link>
              <Link href="#about" className="font-serif text-foreground hover:opacity-80" onClick={toggleMenu}>
                About
              </Link>
              <Link href="#skills" className="font-serif text-foreground hover:opacity-80" onClick={toggleMenu}>
                Skills
              </Link>
              <Link href="#certifications" className="font-serif text-foreground hover:opacity-80" onClick={toggleMenu}>
                Certifications
              </Link>
              <Link href="#projects" className="font-serif text-foreground hover:opacity-80" onClick={toggleMenu}>
                Projects
              </Link>
              <Link href="#publications" className="font-serif text-foreground hover:opacity-80" onClick={toggleMenu}>
                Publications
              </Link>
              <Link href="#contact" className="font-serif text-foreground hover:opacity-80" onClick={toggleMenu}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
