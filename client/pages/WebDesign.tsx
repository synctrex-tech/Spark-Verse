import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { 
  Code2, 
  Palette, 
  Monitor, 
  Smartphone,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Zap,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

export default function WebDesign() {
  const features = [
    {
      title: "Responsive Design",
      description: "Websites that look perfect on all devices and screen sizes",
      icon: Smartphone
    },
    {
      title: "Modern UI/UX",
      description: "Contemporary design trends with optimal user experience",
      icon: Palette
    },
    {
      title: "Fast Loading",
      description: "Optimized for speed and performance across all platforms",
      icon: Zap
    },
    {
      title: "SEO Optimized",
      description: "Built with search engine optimization best practices",
      icon: Globe
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "$799",
      description: "Perfect for small businesses and startups",
      features: [
        "5 Pages Website",
        "Responsive Design",
        "Basic SEO Setup",
        "Contact Form",
        "Social Media Integration",
        "30 Days Support"
      ]
    },
    {
      name: "Professional",
      price: "$1,499",
      description: "Ideal for growing businesses",
      features: [
        "10 Pages Website",
        "Advanced UI/UX Design",
        "SEO Optimization",
        "CMS Integration",
        "Analytics Setup",
        "90 Days Support",
        "Performance Optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      description: "Complete solution for large businesses",
      features: [
        "Unlimited Pages",
        "Custom Design System",
        "Advanced SEO",
        "E-commerce Integration",
        "Performance Monitoring",
        "12 Months Support",
        "Priority Updates"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 min-h-[80vh] flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 via-blue-900/50 to-primary/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/90 text-gray-900 border-white/20">
              <Palette className="w-4 h-4 mr-2" />
              Web Design Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Stunning Websites That{" "}
              <span className="text-primary drop-shadow-2xl">Convert Visitors</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              We create beautiful, responsive websites that not only look amazing
              but also drive results for your business. From concept to launch,
              we handle everything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Why Choose Our Web Design</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine creativity with functionality to deliver websites that exceed expectations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Web Design Packages</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect package for your business needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-primary' : ''} border-0 shadow-lg hover:shadow-xl transition-all duration-300`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-primary mb-2">{pkg.price}</div>
                    <p className="text-gray-600">{pkg.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact">
                    <Button className={`w-full ${pkg.popular ? 'bg-primary' : ''}`}>
                      Get Started
                    </Button>
                  </Link>
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
              From initial consultation to final launch, we follow a proven process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We learn about your business, goals, and target audience" },
              { step: "02", title: "Design", description: "Create wireframes and design mockups for your approval" },
              { step: "03", title: "Development", description: "Build your website with clean, modern code" },
              { step: "04", title: "Launch", description: "Test, optimize, and launch your new website" }
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
              Ready to Launch Your Website?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create something amazing together. Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
