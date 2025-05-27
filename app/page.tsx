import { ArrowRight, Code, Database, Github, Linkedin, Mail, Server } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import AnimatedTechIcons from "@/components/animated-tech-icons"
import MovingBackground from "@/components/moving-background"
import ProjectCard from "@/components/project-card"
import BwMovingBackground from "@/components/bw-moving-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Moving Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <MovingBackground />
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            <span className="text-orange-500">Kea</span>sanda
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white max-w-2xl mx-auto">
            Turning ideas into elegant code solutions
          </p>
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition-all"
          >
            View My Work <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 relative">
        <BwMovingBackground />
        <div className="container px-4 mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center">
            About <span className="text-orange-500">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-lg border-4 border-orange-500">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Profile"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/70 to-transparent opacity-30"></div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-orange-100">
              <h3 className="text-2xl font-semibold mb-4 text-orange-500">Hello, I'm Keasanda</h3>
              <p className="text-gray-800 mb-6">
                I'm a passionate software developer with a strong foundation in building robust and scalable
                applications. My journey in coding started with a curiosity about how things work, and it has evolved
                into a career where I create elegant solutions to complex problems.
              </p>
              <p className="text-gray-800 mb-6">
                With expertise in both frontend and backend technologies, I enjoy the full spectrum of software
                development - from designing intuitive user interfaces to architecting efficient database structures.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://github.com"
                  target="_blank"
                  className="p-3 bg-orange-100 hover:bg-orange-200 rounded-full transition-colors"
                >
                  <Github className="h-6 w-6 text-orange-500" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="p-3 bg-orange-100 hover:bg-orange-200 rounded-full transition-colors"
                >
                  <Linkedin className="h-6 w-6 text-orange-500" />
                </Link>
                <Link
                  href="mailto:contact@keasanda.com"
                  className="p-3 bg-orange-100 hover:bg-orange-200 rounded-full transition-colors"
                >
                  <Mail className="h-6 w-6 text-orange-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-orange-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            My <span className="text-orange-500">Experience</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 pb-12 border-l-2 border-orange-300">
              <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-[9px]"></div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500">Senior Software Developer</h3>
                <p className="text-gray-600 italic">TechInnovate Solutions • 2021 - Present</p>
                <p className="mt-3 text-gray-700">
                  Led the development of enterprise-level applications using C# and React. Designed and implemented SQL
                  database architectures for high-performance systems. Mentored junior developers and established coding
                  standards.
                </p>
              </div>
            </div>

            <div className="relative pl-8 pb-12 border-l-2 border-orange-300">
              <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-[9px]"></div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500">Full Stack Developer</h3>
                <p className="text-gray-600 italic">Digital Frontiers • 2018 - 2021</p>
                <p className="mt-3 text-gray-700">
                  Developed and maintained web applications using React for frontend and C# for backend services.
                  Implemented database solutions using SQL Server and optimized query performance. Collaborated with
                  UX/UI designers to create intuitive user interfaces.
                </p>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-orange-300">
              <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-[9px]"></div>
              <div>
                <h3 className="text-xl font-bold text-orange-500">Junior Developer</h3>
                <p className="text-gray-600 italic">CodeCraft Studios • 2016 - 2018</p>
                <p className="mt-3 text-gray-700">
                  Assisted in the development of web applications using C# and JavaScript. Gained experience in database
                  design and SQL query optimization. Participated in agile development processes and sprint planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Technologies <span className="text-orange-500">I Use</span>
          </h2>
          <div className="mb-12">
            <AnimatedTechIcons />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-orange-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Code className="h-8 w-8 text-orange-500 mr-3" />
                <h3 className="text-xl font-semibold">Frontend</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• React & Next.js</li>
                <li>• JavaScript/TypeScript</li>
                <li>• HTML5 & CSS3</li>
                <li>• Tailwind CSS</li>
                <li>• Responsive Design</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Server className="h-8 w-8 text-orange-500 mr-3" />
                <h3 className="text-xl font-semibold">Backend</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• C# & .NET Core</li>
                <li>• ASP.NET MVC/Web API</li>
                <li>• RESTful API Design</li>
                <li>• Node.js</li>
                <li>• Authentication & Security</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Database className="h-8 w-8 text-orange-500 mr-3" />
                <h3 className="text-xl font-semibold">Database</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• SQL Server</li>
                <li>• MySQL</li>
                <li>• PostgreSQL</li>
                <li>• Entity Framework</li>
                <li>• Database Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-orange-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            My <span className="text-orange-500">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="E-Commerce Platform"
              description="A full-stack e-commerce solution with C# backend, React frontend, and SQL database."
              technologies={["C#", "React", "SQL", "Azure"]}
              imageUrl="/placeholder.svg?height=200&width=300"
            />

            <ProjectCard
              title="Task Management App"
              description="A productivity application with real-time updates and collaborative features."
              technologies={["React", "Node.js", "MongoDB", "Socket.io"]}
              imageUrl="/placeholder.svg?height=200&width=300"
            />

            <ProjectCard
              title="Healthcare Portal"
              description="Secure patient management system with role-based access control and HIPAA compliance."
              technologies={["C#", ".NET Core", "SQL Server", "React"]}
              imageUrl="/placeholder.svg?height=200&width=300"
            />

            <ProjectCard
              title="Financial Dashboard"
              description="Interactive data visualization dashboard for financial metrics and reporting."
              technologies={["React", "D3.js", "ASP.NET", "SQL"]}
              imageUrl="/placeholder.svg?height=200&width=300"
            />

            <ProjectCard
              title="Inventory Management System"
              description="Warehouse and inventory tracking system with barcode scanning capabilities."
              technologies={["C#", "WPF", "SQL Server", "REST API"]}
              imageUrl="/placeholder.svg?height=200&width=300"
            />

            <ProjectCard
              title="Social Media Analytics"
              description="Platform for tracking and analyzing social media engagement and performance."
              technologies={["React", "Python", "PostgreSQL", "AWS"]}
              imageUrl="/placeholder.svg?height=200&width=300"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-orange-500 text-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">Keasanda</h2>
              <p>© {new Date().getFullYear()} All Rights Reserved</p>
            </div>
            <div className="flex gap-4">
              <Link
                href="https://github.com"
                target="_blank"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:contact@keasanda.com"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
