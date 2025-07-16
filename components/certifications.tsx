import { Card, CardContent } from "@/components/ui/card"
import { Cloud, Shield, Code, Database, Brain, Globe } from "lucide-react"

export default function Certifications() {
  const certificationCategories = [
    {
      title: "AWS Certifications",
      icon: <Cloud className="h-10 w-10 text-foreground" />,
      items: ["Machine Learning Foundations", "Gen AI Fundamentals", "Data Engineering", "Cloud Fundamentals"],
    },
    {
      title: "Cisco Certifications",
      icon: <Shield className="h-10 w-10 text-foreground" />,
      items: [
        "Data Analytics",
        "End Point Security",
        "Cybersecurity Analyst Path",
        "Networking Basics",
        "Introduction to Networks",
        "Introduction to IoT",
        "Cyberthreat Management",
      ],
    },
    {
      title: "Google Certifications",
      icon: <Brain className="h-10 w-10 text-foreground" />,
      items: ["Certified AI Essentials", "Data Analytics Professional"],
    },
    {
      title: "Microsoft Certifications",
      icon: <Database className="h-10 w-10 text-foreground" />,
      items: ["DP-900 (Azure Fundamentals)"],
    },
    {
      title: "Programming & Development",
      icon: <Code className="h-10 w-10 text-foreground" />,
      items: [
        "HackerRank – Problem Solving (Basic & Intermediate)",
        "HackerRank – Java, Python, CSS",
        "MongoDB Certification",
        "UI Path Automation Development",
      ],
    },
    {
      title: "Academic & Cloud Platforms",
      icon: <Globe className="h-10 w-10 text-foreground" />,
      items: [
        "IBM Cloud Computing Fundamentals",
        "Saylor CS 401 – Operating System",
        "Saylor CS 402 – Computer Networking",
      ],
    },
  ]

  return (
    <section id="certifications" className="py-16 section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-foreground mx-auto mb-6"></div>
          <p className="font-sans text-foreground max-w-2xl mx-auto">
            A comprehensive collection of my professional certifications across cloud computing, cybersecurity, AI/ML,
            data analytics, and programming domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-none bg-background card-hover">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="text-foreground">{category.icon}</div>
                  <h3 className="font-serif text-xl font-semibold ml-3 text-foreground">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 rounded-full mr-2 mt-2 bg-foreground flex-shrink-0"></div>
                      <span className="font-sans text-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
