import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen, Users, Briefcase } from "lucide-react"

export default function Achievements() {
  const categories = [
    {
      title: "Awards & Achievements",
      icon: <Award className="h-10 w-10 text-foreground" />,
      items: [
        "Top 12 Finalist – Smart India Internal Hackathon, 2024",
        "GirlScript Summer of Code Contributor",
        "Samarambh 2024 – Culturals & Design Lead",
        "Raised funds at Muskurahat Foundation for child education",
      ],
    },
    {
      title: "Leadership & Community",
      icon: <Users className="h-10 w-10 text-foreground" />,
      items: [
        "Vice President, LMCC – Hosted and organized literature fests, anchored events",
        "GFG Campus Body Technical Head at SRU", // Added
        "IEEE NTC Lead – Published technical newsletters under Hyderabad Subsection",
        "Event Designer – Cultural lead for Samarambh 2024",
        "SheFi Fellow (Season 12) – Certified in Blockchain & Crypto for Women",
        "U and I NGO Volunteer", // Added
      ],
    },
    {
      title: "Research & Innovation",
      icon: <BookOpen className="h-10 w-10 text-foreground" />,
      items: [
        "Explainable AI for Iris Classification using K-Medoids",
        "Hybrid CNN + RNN for Bio-data Classification",
        "Patent in Progress: See For Me – AI for Visually Impaired",
        "Patent in Progress: Text-to-Animation Generator",
      ],
    },
    {
      title: "Professional Development",
      icon: <Briefcase className="h-10 w-10 text-foreground" />,
      items: [
        "Academic Trainee", // Added
        "ISRO – AI/ML on Geospatial Data",
        "Google, Microsoft, Forage – AI/ML, Data Visualization, M365",
        "Multiple industry certifications in emerging technologies",
        "Continuous learning in AI/ML and software development",
      ],
    },
  ]

  return (
    <section className="py-16 section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-foreground mx-auto mb-6"></div>
          <p className="font-sans text-foreground max-w-2xl mx-auto">
            A collection of my professional achievements, leadership roles, research work, and professional development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-none bg-background card-hover">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="text-foreground">{category.icon}</div>
                  <h3 className="font-serif text-xl font-semibold ml-3 text-foreground">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 rounded-full mr-2 mt-2 bg-foreground"></div>
                      <span className="font-sans text-foreground">{item}</span>
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
