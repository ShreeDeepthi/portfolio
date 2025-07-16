export default function About() {
  return (
    <section id="about" className="py-16 section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-foreground mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              B.Tech in CSE – AI & ML | B.A. in Psychology
            </h3>

            <p className="font-sans text-foreground mb-4">
              Hi! I'm Nimmagadda Shree Deepthi, a passionate Computer Science Developer, AI/ML Researcher, and Creative
              Writer currently pursuing B.Tech in Computer Science – AI & ML at SR University (GPA: 9.6/10) and a
              parallel B.A. in Psychology out of deep curiosity for human behavior and cognition.
            </p>

            <p className="font-sans text-foreground mb-4">
              I also serve as a Podcast Spokesperson for SR University, where I discuss emerging technologies, research
              innovations, and student achievements, helping to amplify our university's voice in the tech community.
            </p>

            <p className="font-sans text-foreground mb-4">
              I bring ideas to life by blending creativity with computation — from building AI-powered tools to
              emotion-driven design, from authoring books to uplifting women through tech-for-good projects.
            </p>

            <p className="font-sans text-foreground mb-6">
              As the Vice President of LMCC, I'm also deeply rooted in storytelling, public speaking, and community
              building.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-background p-4 rounded-lg shadow-md card-hover">
                <h4 className="font-serif font-bold text-foreground">Education</h4>
                <p className="text-foreground">B.Tech in CSE – AI & ML</p>
                <p className="text-foreground">GPA: 9.6/10</p>
              </div>

              <div className="bg-background p-4 rounded-lg shadow-md card-hover">
                <h4 className="font-serif font-bold text-foreground">Leadership</h4>
                <p className="text-foreground">Vice President, LMCC</p>
                <p className="text-foreground">IEEE NTC Lead</p>
              </div>

              <div className="bg-background p-4 rounded-lg shadow-md card-hover">
                <h4 className="font-serif font-bold text-foreground">Publications</h4>
                <p className="text-foreground">4 Published Works</p>
                <p className="text-foreground">Solo Author & Co-author</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="bg-background p-6 rounded-lg shadow-lg">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">My Journey</h3>
              <p className="font-sans text-foreground mb-3">
                My academic journey combines technical expertise with a deep understanding of human psychology, allowing
                me to create technology that truly resonates with users on an emotional level.
              </p>
              <p className="font-sans text-foreground mb-3">
                I'm particularly interested in the intersection of AI and human creativity, exploring how technology can
                enhance rather than replace our uniquely human capabilities.
              </p>
              <p className="font-sans text-foreground">
                When I'm not coding or researching, you'll find me writing poetry, participating in literary events, or
                working on community projects that empower women in technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
