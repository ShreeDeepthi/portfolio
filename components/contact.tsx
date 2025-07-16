"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-foreground mx-auto mb-6"></div>
          <p className="font-sans text-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to contact me using the form below or through any of the
            provided contact methods.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="bg-accent p-6 rounded-lg shadow-md card-hover">
              <h3 className="font-serif text-xl font-semibold mb-6 text-accent-foreground">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-background p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-accent-foreground">Email</h4>
                    <p className="text-accent-foreground opacity-80">shreedeepthi2005@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-background p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-accent-foreground">Location</h4>
                    <p className="text-accent-foreground opacity-80">SR University</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium text-accent-foreground mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/ShreeDeepthi"
                    className="bg-background p-2 rounded-full text-foreground hover:opacity-80 transition-colors btn-hover"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/shree-deepthi-nimmagadda-83835427b"
                    className="bg-background p-2 rounded-full text-foreground hover:opacity-80 transition-colors btn-hover"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com/dearlydeepthi"
                    className="bg-background p-2 rounded-full text-foreground hover:opacity-80 transition-colors btn-hover"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-accent p-6 rounded-lg shadow-md card-hover">
              <h3 className="font-serif text-xl font-semibold mb-6 text-accent-foreground">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-accent-foreground mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-background border-foreground text-foreground placeholder:text-foreground placeholder:opacity-60"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-accent-foreground mb-1">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-background border-foreground text-foreground placeholder:text-foreground placeholder:opacity-60"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-accent-foreground mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    required
                    className="bg-background border-foreground text-foreground placeholder:text-foreground placeholder:opacity-60"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-accent-foreground mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={6}
                    required
                    className="bg-background border-foreground text-foreground placeholder:text-foreground placeholder:opacity-60"
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-background hover:bg-background/80 text-foreground border border-foreground btn-hover"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
