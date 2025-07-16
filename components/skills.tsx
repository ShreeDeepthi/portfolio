import { Card, CardContent } from "@/components/ui/card"
import { Code, Globe, Server, Cpu, Palette, Users } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-8 w-8 text-foreground" />,
      skills: ["Python", "Java", "C++", "JavaScript", "SQL"],
    },
    {
      title: "Frontend",
      icon: <Globe className="h-8 w-8 text-foreground" />,
      skills: ["React", "HTML/CSS", "Bootstrap", "Figma", "Canva"],
    },
    {
      title: "AI/ML & Data",
      icon: <Cpu className="h-8 w-8 text-foreground" />,
      skills: ["TensorFlow", "Keras", "Google Colab", "R", "NLP"],
    },
    {
      title: "Platforms",
      icon: <Server className="h-8 w-8 text-foreground" />,
      skills: ["Linux", "Windows", "AWS", "IBM Cloud", "Arduino"],
    },
    {
      title: "Design",
      icon: <Palette className="h-8 w-8 text-foreground" />,
      skills: ["UI/UX", "Graphic Design", "Visual Storytelling", "Branding"],
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-8 w-8 text-foreground" />,
      skills: ["Public Speaking", "Writing", "Leadership", "Time Management"],
    },
  ]

  return (
    <section id="skills" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-foreground mx-auto mb-6"></div>
          <p className="font-sans text-foreground max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my journey as a Computer Science Engineer and Creative
            Writer. Here are some of the key areas I specialize in:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-none bg-accent card-hover">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-accent-foreground">{category.icon}</div>
                  <h3 className="font-serif text-xl font-semibold ml-3 text-accent-foreground">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 rounded-full mr-2 bg-accent-foreground"></div>
                      <span className="font-sans text-accent-foreground">{skill}</span>
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
