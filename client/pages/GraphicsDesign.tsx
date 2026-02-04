import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Palette, 
  Image, 
  FileText,
  ArrowRight,
  CheckCircle,
  Eye,
  Layers,
  Award,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

export default function GraphicsDesign() {
  const services = [
    {
      title: "Logo & Brand Identity",
      description: "Create memorable logos and comprehensive brand identity packages",
      icon: Award,
      features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography Selection"]
    },
    {
      title: "Marketing Materials",
      description: "Eye-catching designs for all your marketing and promotional needs",
      icon: FileText,
      features: ["Brochures", "Flyers", "Business Cards", "Banners"]
    },
    {
      title: "Digital Graphics",
      description: "Stunning graphics for web, social media, and digital platforms",
      icon: Image,
      features: ["Social Media Graphics", "Web Banners", "Digital Ads", "Icons"]
    },
    {
      title: "Print Design",
      description: "Professional print materials that make a lasting impression",
      icon: Layers,
      features: ["Posters", "Magazines", "Packaging", "Stationery"]
    }
  ];

  const portfolioItems = [
    { category: "Logo Design", title: "Tech Startup Branding", description: "Complete brand identity for a fintech company" },
    { category: "Marketing", title: "Product Launch Campaign", description: "Multi-channel marketing materials" },
    { category: "Digital", title: "Social Media Package", description: "Consistent visual identity across platforms" },
    { category: "Print", title: "Corporate Brochure", description: "Premium print materials for B2B sales" }
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
            <Link to="/graphics-design" className="text-primary font-medium">Graphics Design</Link>
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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <Palette className="w-4 h-4 mr-2" />
              Graphics Design Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Visual Designs That{" "}
              <span className="text-primary">Tell Your Story</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              From logos to marketing materials, we create compelling visual designs 
              that communicate your brand message and captivate your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Start Design Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Design Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive graphics design solutions for all your visual communication needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Recent Design Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our latest graphics design projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Palette className="w-16 h-16 text-primary" />
                  </div>
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-2">{item.category}</Badge>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Our Design Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From concept to final delivery, we follow a structured approach
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Brief", description: "Understanding your vision and requirements" },
              { step: "02", title: "Concept", description: "Creating initial design concepts and ideas" },
              { step: "03", title: "Design", description: "Developing the chosen concept into final design" },
              { step: "04", title: "Deliver", description: "Final review, revisions, and file delivery" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
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
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's bring your ideas to life with stunning visual designs that make an impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Start Design Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                  View Our Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
