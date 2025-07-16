export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="font-cursive text-3xl text-foreground">Shree Deepthi</h2>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <a href="#home" className="font-serif text-foreground hover:opacity-80 transition-colors">
              Home
            </a>
            <a href="#about" className="font-serif text-foreground hover:opacity-80 transition-colors">
              About
            </a>
            <a href="#skills" className="font-serif text-foreground hover:opacity-80 transition-colors">
              Skills
            </a>
            <a href="#certifications" className="font-serif text-foreground hover:opacity-80 transition-colors">
              Certifications
            </a>
            <a href="#projects" className="font-serif text-foreground hover:opacity-80 transition-colors">
              Projects
            </a>
            <a href="#publications" className="font-serif text-foreground hover:opacity-80 transition-colors">
              Publications
            </a>
            <a href="#contact" className="font-serif text-foreground hover:opacity-80 transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="border-t border-foreground border-opacity-20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground opacity-80 text-sm">
            &copy; {new Date().getFullYear()} Shree Deepthi. All rights reserved.
          </p>

          <p className="text-foreground opacity-80 text-sm mt-4 md:mt-0">
            <span className="text-foreground">❤</span> B.Tech in CSE – AI & ML | B.A. in Psychology
          </p>
        </div>
      </div>
    </footer>
  )
}
