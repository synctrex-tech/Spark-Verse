import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Cpu, 
  HardDrive, 
  Monitor,
  ArrowRight,
  CheckCircle,
  Zap,
  Award,
  Shield,
  Gamepad2
} from "lucide-react";
import { Link } from "react-router-dom";

export default function PcBuilding() {
  const buildTypes = [
    {
      title: "Gaming PCs",
      description: "High-performance gaming rigs built for the ultimate gaming experience",
      icon: Gamepad2,
      features: ["Latest GPUs", "High-Refresh Displays", "RGB Lighting", "Overclocking Ready"],
      price: "From $1,200"
    },
    {
      title: "Workstations",
      description: "Professional workstations for content creation and productivity",
      icon: Monitor,
      features: ["Multi-Core CPUs", "Professional GPUs", "Large RAM", "Fast Storage"],
      price: "From $1,800"
    },
    {
      title: "Budget Builds",
      description: "Affordable custom PCs that don't compromise on quality",
      icon: Award,
      features: ["Value Components", "Reliable Performance", "Future Upgrades", "Warranty"],
      price: "From $600"
    }
  ];

  const components = [
    { name: "CPU/Processor", description: "Intel & AMD latest generation processors", icon: Cpu },
    { name: "Graphics Cards", description: "NVIDIA RTX & AMD Radeon GPUs", icon: Monitor },
    { name: "Memory/RAM", description: "High-speed DDR4 & DDR5 memory", icon: Zap },
    { name: "Storage", description: "Fast NVMe SSDs and reliable HDDs", icon: HardDrive }
  ];

  const packages = [
    {
      name: "Essential",
      price: "$1,299",
      description: "Perfect for gaming and general use",
      specs: [
        "AMD Ryzen 5 / Intel i5",
        "RTX 4060 / RX 7600",
        "16GB DDR4 RAM",
        "500GB NVMe SSD",
        "650W Power Supply",
        "Mid-Tower Case"
      ]
    },
    {
      name: "Performance",
      price: "$2,199",
      description: "High-end gaming and content creation",
      specs: [
        "AMD Ryzen 7 / Intel i7",
        "RTX 4070 / RX 7700 XT",
        "32GB DDR4 RAM",
        "1TB NVMe SSD",
        "750W Power Supply",
        "Full-Tower Case"
      ],
      popular: true
    },
    {
      name: "Extreme",
      price: "$3,599",
      description: "Ultimate performance for professionals",
      specs: [
        "AMD Ryzen 9 / Intel i9",
        "RTX 4080 / RX 7900 XTX",
        "64GB DDR5 RAM",
        "2TB NVMe SSD",
        "1000W Power Supply",
        "Premium Case"
      ]
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
            <Link to="/pc-building" className="text-primary font-medium">PC Building</Link>
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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              Custom PC Building Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Custom PCs Built For{" "}
              <span className="text-primary">Performance</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              From gaming beasts to professional workstations, we build custom PCs 
              tailored to your exact needs and budget. Quality components, expert assembly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Configure Your PC
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                View Builds
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Build Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">PC Build Categories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you're a gamer, content creator, or need a reliable workstation, we have the perfect build for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {buildTypes.map((build, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <build.icon className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">{build.price}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{build.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{build.description}</p>
                  <ul className="space-y-2">
                    {build.features.map((feature, featureIndex) => (
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

      {/* Components Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Quality Components</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We use only the best components from trusted brands to ensure reliability and performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {components.map((component, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <component.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{component.name}</h3>
                  <p className="text-gray-600">{component.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Built Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Pre-Built Packages</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready-to-order configurations for different performance levels and budgets
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
                    {pkg.specs.map((spec, specIndex) => (
                      <li key={specIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{spec}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact">
                    <Button className={`w-full ${pkg.popular ? 'bg-primary' : ''}`}>
                      Order This Build
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Why Choose Our PC Builds</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional assembly, quality testing, and comprehensive support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Expert Assembly", description: "Professional cable management and testing", icon: Award },
              { title: "Quality Testing", description: "Stress testing before delivery", icon: Zap },
              { title: "Warranty Support", description: "Comprehensive warranty coverage", icon: Shield },
              { title: "Free Consultation", description: "Help choosing the right components", icon: Cpu }
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
              Ready to Build Your Dream PC?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a custom quote for your perfect PC build. Free consultation and expert advice included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Get Custom Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                  See Our Builds
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
