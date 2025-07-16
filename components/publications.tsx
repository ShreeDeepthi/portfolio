"use client"

import { BookOpen } from "lucide-react"
import Link from "next/link"

export default function Publications() {
  const publications = [
    {
      title: "Fold Me a Feeling",
      role: "Solo Author",
      publisher: "Coming Soon",
      description: "A forthcoming solo book exploring emotions and introspection through poetry and prose.",
      image: "/placeholder.svg?height=200&width=150",
      link: "#", // Placeholder link
    },
    {
      title: "Nostalgia",
      role: "Solo Author",
      publisher: "Amazon",
      description: "A heartfelt reflection on growing up and memories.",
      image: "/placeholder.svg?height=200&width=150",
      link: "https://www.amazon.in/Nostalgia-Nimmagadda-Shree-Deepthi/dp/B0DHPMZLYJ",
    },
    {
      title: "Plastic Flowers",
      role: "Anthology Contributor",
      publisher: "Writers Pocket",
      description: "A published poetic contribution.",
      image: "/placeholder.svg?height=200&width=150",
      link: "https://www.amazon.in/Poetry-Plastic-Flowers-Writers-Pocket/dp/936868104X/ref=sr_1_7?dib=eyJ2IjoiMSJ9.aZlbDYQxwR-vLo2OS4gxR2pJ_DVts74K3-uRa2lspTtpYyps21YlBCBSodyydPLdEB49Bm2ZJw_GvL57YMJKZhNaBZZQe8ypkMb-RrNB_4-Ac4qUYJuAcIWrIpgfmwFvnZ4S5aK_EcN3lkddeX2uv2v6g79TjS6SjxJsAemOD6lU4nJP2NhukHf9BuK1HjPJZQZvC3viuQBvuwwRGDCHy8mUi14uumQGBB9HE9CCx1w.Tq2RQeGIh2H3gA0AfBrZm6bgo_agdt9RZLbLsC8-hV0&dib_tag=se&qid=1746808879&refinements=p_27%3AWriters+Pocket&s=books&sr=1-7",
    },
    {
      title: "Aviral Dhara",
      role: "Poetry Anthology",
      publisher: "Maybeify",
      description: "Contributed a 5-page poem celebrating culture and introspection.",
      image: "/placeholder.svg?height=200&width=150",
      link: "https://www.amazon.in/Aviral-Dhara-Aarushi-Gambhir/dp/B0CJQ7QS8N",
    },
    {
      title: "The Untold Tales of Honour",
      role: "Co-author",
      publisher: "",
      description: "A collection of untold stories focused on courage and valor.",
      image: "/placeholder.svg?height=200&width=150",
      link: "https://www.amazon.in/UNTOLD-TALES-HONOUR-Vedharth-Vadluri/dp/9348104950",
    },
  ]

  return (
    <section id="publications" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Publications</h2>
          <div className="w-20 h-1 bg-foreground mx-auto mb-6"></div>
          <p className="font-sans text-foreground max-w-2xl mx-auto">
            Beyond technology, I'm passionate about writing and storytelling. Here are some of my published works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {publications.map((publication, index) => (
            <div key={index} className="bg-accent rounded-lg shadow-lg overflow-hidden card-hover">
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-center mb-4">
                  <BookOpen className="h-16 w-16 text-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-1 text-foreground text-center">
                  {publication.title}
                </h3>
                <p className="text-foreground mb-2 font-medium text-center">{publication.role}</p>
                {publication.publisher && (
                  <p className="text-foreground text-sm mb-3 text-center">{publication.publisher}</p>
                )}
                <p className="font-sans text-foreground text-sm flex-grow text-center mb-4">
                  {publication.description}
                </p>
                <Link
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background text-foreground py-2 px-4 rounded text-center hover:opacity-90 transition-opacity btn-hover"
                >
                  {publication.publisher === "Coming Soon" ? "Learn More" : "View on Amazon"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
