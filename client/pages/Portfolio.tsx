import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Palette, 
  Monitor,
  Cpu,
  ExternalLink,
  ArrowRight,
  Filter
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      description: "Complete online store with payment integration and admin dashboard",
      image: "web-dev",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      title: "Restaurant Branding",
      category: "Graphics Design",
      description: "Full brand identity package including logo, menu design, and marketing materials",
      image: "graphics",
      technologies: ["Photoshop", "Illustrator", "InDesign"],
      link: "#"
    },
    {
      title: "Corporate Website",
      category: "Web Design",
      description: "Modern responsive website for a consulting firm",
      image: "web-design",
      technologies: ["Figma", "HTML", "CSS", "JavaScript"],
      link: "#"
    },
    {
      title: "Gaming Workstation",
      category: "PC Building",
      description: "High-performance custom build for content creator and gaming",
      image: "pc-build",
      technologies: ["RTX 4080", "AMD Ryzen 9", "64GB RAM", "Custom Loop"],
      link: "#"
    },
    {
      title: "SaaS Dashboard",
      category: "Web Development",
      description: "Analytics dashboard for business intelligence platform",
      image: "web-dev",
      technologies: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
      link: "#"
    },
    {
      title: "Brand Identity System",
      category: "Graphics Design",
      description: "Complete visual identity for tech startup including guidelines",
      image: "graphics",
      technologies: ["Brand Strategy", "Logo Design", "Style Guide"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      category: "Web Design",
      description: "Creative portfolio site for photographer with gallery features",
      image: "web-design",
      technologies: ["WordPress", "Custom Theme", "Lightbox"],
      link: "#"
    },
    {
      title: "Workstation Build",
      category: "PC Building",
      description: "Professional workstation for 3D rendering and video editing",
      image: "pc-build",
      technologies: ["Intel i9", "RTX 4090", "128GB RAM", "NVMe RAID"],
      link: "#"
    }
  ];

  const testimonials = [
    {
      quote: "The custom PC they built exceeded all my expectations. Gaming performance is incredible!",
      author: "Mike Johnson",
      project: "Gaming PC Build"
    },
    {
      quote: "Our new website has increased leads by 300%. Outstanding work and attention to detail.",
      author: "Sarah Chen",
      project: "Corporate Website"
    },
    {
      quote: "The branding package perfectly captured our vision. We love the new identity!",
      author: "David Rodriguez",
      project: "Restaurant Branding"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">TechForge Pro</span>
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/web-design" className="text-gray-600 hover:text-primary transition-colors">Web Design</Link>
            <Link to="/web-development" className="text-gray-600 hover:text-primary transition-colors">Web Development</Link>
            <Link to="/graphics-design" className="text-gray-600 hover:text-primary transition-colors">Graphics Design</Link>
            <Link to="/pc-building" className="text-gray-600 hover:text-primary transition-colors">PC Building</Link>
            <Link to="/pc-repair" className="text-gray-600 hover:text-primary transition-colors">PC Repair</Link>
            <Link to="/portfolio" className="text-primary font-medium">Portfolio</Link>
            <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link>
          </nav>

          <Link to="/contact">
            <Button className="hidden lg:flex">Get Quote</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Our Work Showcase
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Projects That{" "}
              <span className="text-primary">Inspire</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Explore our portfolio of successful projects across web design, development, 
              graphics design, and custom PC builds. Each project tells a story of innovation and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              All Projects
            </Button>
            <Button variant="ghost">Web Design</Button>
            <Button variant="ghost">Web Development</Button>
            <Button variant="ghost">Graphics Design</Button>
            <Button variant="ghost">PC Building</Button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {project.category === "Web Design" && <Palette className="w-16 h-16 text-primary" />}
                      {project.category === "Web Development" && <Code2 className="w-16 h-16 text-primary" />}
                      {project.category === "Graphics Design" && <Monitor className="w-16 h-16 text-primary" />}
                      {project.category === "PC Building" && <Cpu className="w-16 h-16 text-primary" />}
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" variant="secondary">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3">{project.category}</Badge>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real feedback from clients whose projects we've completed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-8">
                  <blockquote className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.project}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "300+", label: "Happy Clients" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join our growing list of satisfied clients. Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
