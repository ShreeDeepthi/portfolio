import { Card, CardContent } from "@/components/ui/card"
import { Cpu, BookOpen, LineChart, Heart, DollarSign, MessageSquare, Brain, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "Dear Past",
      description:
        "AI-powered memory recall assistant for Alzheimer's patients, featuring storytelling journals, caregiver insights, and personalized memory aids.",
      icon: <Brain className="h-10 w-10 text-foreground" />,
      technologies: ["AI", "NLP", "Memory Recall", "Caregiver Support"],
      link: "https://github.com/ShreeDeepthi/Dear-Past",
    },
    {
      title: "MLOPS Stock Prediction",
      description:
        "An MLOps project for real-time stock price prediction, integrating data pipelines, model training, deployment, and monitoring for financial insights.",
      icon: <TrendingUp className="h-10 w-10 text-foreground" />,
      technologies: ["MLOps", "Machine Learning", "Stock Prediction", "Data Pipelines", "Deployment"],
      link: "https://github.com/ShreeDeepthi/MLOPS-Stock-Prediction",
    },
    {
      title: "Iris Species Classification",
      description:
        "Research papers on K-Medoids Clustering with Explainable AI (XAI) and CNN + RNN Deep Learning Hybrid Model. Used SHAP and LIME for interpretability.",
      icon: <Cpu className="h-10 w-10 text-foreground" />,
      technologies: ["Python", "TensorFlow", "XAI", "K-Medoids", "CNN", "RNN"],
    },
    {
      title: "Legal Document Summarizer",
      description:
        "AI model for summarizing legal documents using keyword extraction, sentiment analysis, and multilingual support. Helps reduce document analysis time by 60%.",
      icon: <BookOpen className="h-10 w-10 text-foreground" />,
      technologies: ["NLP", "Python", "Sentiment Analysis", "Multilingual"],
    },
    {
      title: "See For Me",
      description:
        "Object-detection + voice-narration assistant for the visually impaired. Uses real-time AI vision. Patent in Progress.",
      icon: <LineChart className="h-10 w-10 text-foreground" />,
      technologies: ["Computer Vision", "Voice Synthesis", "Accessibility", "AI"],
    },
    {
      title: "Text-to-Animation Generator",
      description:
        "Transforms textual input (like poems or scripts) into animated visuals. Combines NLP and Computer Vision for automated content creation. Patent in Progress.",
      icon: <BookOpen className="h-10 w-10 text-foreground" />,
      technologies: ["NLP", "Computer Vision", "Animation", "Creative AI"],
    },
    {
      title: "Financial Empowerment Platform for Women",
      description:
        "Designed for financial education & growth, offering learning resources, budget tools, and insights. Aims to enhance financial literacy for women in underserved regions.",
      icon: <DollarSign className="h-10 w-10 text-foreground" />,
      technologies: ["Web Development", "Financial Tools", "Education", "Social Impact"],
    },
    {
      title: "Your – Companion Chatbot",
      description: "A Python-based chatbot for offering emotional support using empathetic responses and GUI.",
      icon: <MessageSquare className="h-10 w-10 text-foreground" />,
      technologies: ["Python", "NLP", "GUI", "Emotional Intelligence"],
    },
    {
      title: "College Placement Assistance Tool",
      description: "Full-stack Java platform to help students track placement listings and progress.",
      icon: <Heart className="h-10 w-10 text-foreground" />,
      technologies: ["Java", "Full Stack", "Database", "Student Tools"],
    },
  ]

  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Highlight Projects</h2>
          <div className="w-20 h-1 bg-foreground mx-auto mb-6"></div>
          <p className="font-sans text-foreground max-w-2xl mx-auto">
            Here are some of the key projects I've worked on, showcasing my skills in AI/ML, development, and creative
            problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow border-none bg-accent card-hover"
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="text-accent-foreground">{project.icon}</div>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2 text-center text-accent-foreground">
                  {project.title}
                </h3>
                <p className="font-sans mb-4 text-accent-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 rounded-full text-xs bg-background text-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <div className="text-center mt-4">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:opacity-80 transition-colors font-medium"
                    >
                      View Project →
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="https://github.com/ShreeDeepthi"
            className="text-foreground hover:opacity-80 transition-colors font-medium"
          >
            View more projects on my GitHub →
          </Link>
        </div>
      </div>
    </section>
  )
}
