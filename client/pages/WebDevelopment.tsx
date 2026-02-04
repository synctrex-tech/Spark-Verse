import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Cloud, 
  Shield,
  ArrowRight,
  CheckCircle,
  Zap,
  Globe,
  Settings,
  Smartphone
} from "lucide-react";
import { Link } from "react-router-dom";

export default function WebDevelopment() {
  const technologies = [
    { name: "React/Next.js", description: "Modern frontend frameworks", icon: Code2 },
    { name: "Node.js", description: "Server-side JavaScript", icon: Settings },
    { name: "Databases", description: "MySQL, PostgreSQL, MongoDB", icon: Database },
    { name: "Cloud Services", description: "AWS, Azure, Google Cloud", icon: Cloud }
  ];

  const services = [
    {
      title: "Custom Web Applications",
      description: "Tailored solutions built from scratch to meet your specific business requirements",
      features: ["Full-Stack Development", "API Integration", "Real-time Features", "Scalable Architecture"]
    },
    {
      title: "E-commerce Development",
      description: "Complete online stores with payment processing and inventory management",
      features: ["Shopping Cart", "Payment Gateway", "Inventory System", "Admin Dashboard"]
    },
    {
      title: "CMS Development",
      description: "Content management systems that are easy to use and maintain",
      features: ["User-Friendly Interface", "Content Editor", "Media Management", "SEO Tools"]
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
            <Link to="/web-development" className="text-primary font-medium">Web Development</Link>
            <Link to="/graphics-design" className="text-gray-600 hover:text-primary transition-colors">Graphics Design</Link>
            <Link to="/pc-building" className="text-gray-600 hover:text-primary transition-colors">PC Building</Link>
            <Link to="/pc-repair" className="text-gray-600 hover:text-primary transition-colors">PC Repair</Link>
            <Link to="/portfolio" className="text-gray-600 hover:text-primary transition-colors">Portfolio</Link>
            <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link>
          </nav>

          <Link to="/contact">
            <Button className="hidden lg:flex">Get Quote</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <Code2 className="w-4 h-4 mr-2" />
              Web Development Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Powerful Web Applications That{" "}
              <span className="text-primary">Scale</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              We build robust, scalable web applications using cutting-edge technologies. 
              From simple websites to complex enterprise solutions, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Start Development
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We work with the latest and most reliable technologies to build your applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <tech.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Development Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive web development solutions for every business need
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Why Choose Our Development</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We focus on quality, performance, and security in every project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Fast Performance", description: "Optimized code for lightning-fast loading", icon: Zap },
              { title: "Secure Code", description: "Built with security best practices", icon: Shield },
              { title: "Responsive Design", description: "Works perfectly on all devices", icon: Smartphone },
              { title: "SEO Ready", description: "Optimized for search engines", icon: Globe }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
              Ready to Build Your Application?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss your project requirements and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Get Development Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                  See Our Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
