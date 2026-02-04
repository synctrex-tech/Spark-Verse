import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Wrench, 
  Shield, 
  Clock,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Zap,
  HardDrive,
  Wifi
} from "lucide-react";
import { Link } from "react-router-dom";

export default function PcRepair() {
  const services = [
    {
      title: "Hardware Repair",
      description: "Professional repair for all computer hardware components",
      icon: Wrench,
      issues: ["Component Replacement", "Motherboard Repair", "Power Supply Issues", "Cooling Problems"]
    },
    {
      title: "Software Troubleshooting",
      description: "Fix software issues, viruses, and operating system problems",
      icon: Shield,
      issues: ["Virus Removal", "OS Reinstallation", "Driver Issues", "Performance Optimization"]
    },
    {
      title: "Data Recovery",
      description: "Recover important data from damaged or corrupted storage devices",
      icon: HardDrive,
      issues: ["Hard Drive Recovery", "SSD Data Rescue", "File Restoration", "Backup Solutions"]
    },
    {
      title: "Network Issues",
      description: "Resolve connectivity and network-related problems",
      icon: Wifi,
      issues: ["WiFi Problems", "Network Setup", "Internet Issues", "Router Configuration"]
    }
  ];

  const commonIssues = [
    {
      problem: "Computer Won't Start",
      description: "Power issues, hardware failures, or startup problems",
      urgency: "High",
      estimate: "1-2 days"
    },
    {
      problem: "Slow Performance",
      description: "System running slowly, freezing, or taking too long to boot",
      urgency: "Medium",
      estimate: "Same day"
    },
    {
      problem: "Blue Screen Errors",
      description: "System crashes, error messages, or unexpected shutdowns",
      urgency: "High",
      estimate: "1-2 days"
    },
    {
      problem: "Overheating",
      description: "Computer getting too hot, loud fans, or thermal shutdowns",
      urgency: "Medium",
      estimate: "Same day"
    }
  ];

  const pricing = [
    {
      service: "Diagnostic",
      price: "Free",
      description: "Complete system analysis and problem identification"
    },
    {
      service: "Software Repair",
      price: "$99",
      description: "OS repair, virus removal, driver updates"
    },
    {
      service: "Hardware Repair",
      price: "$149+",
      description: "Component replacement and hardware fixes"
    },
    {
      service: "Data Recovery",
      price: "$199+",
      description: "Professional data recovery from damaged drives"
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
            <Link to="/pc-repair" className="text-primary font-medium">PC Repair</Link>
            <Link to="/portfolio" className="text-gray-600 hover:text-primary transition-colors">Portfolio</Link>
            <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link>
          </nav>

          <Link to="/contact">
            <Button className="hidden lg:flex">Get Help Now</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <Wrench className="w-4 h-4 mr-2" />
              PC Repair & Support Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Fast & Reliable{" "}
              <span className="text-primary">PC Repair</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Expert computer repair services for all your hardware and software problems. 
              Quick diagnosis, professional solutions, and competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Schedule Repair
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Emergency Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Repair Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive computer repair solutions for all your technical problems
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
                    {service.issues.map((issue, issueIndex) => (
                      <li key={issueIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        {issue}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Common PC Problems</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We fix the most common computer issues with quick turnaround times
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonIssues.map((issue, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">{issue.problem}</h3>
                    <Badge variant={issue.urgency === 'High' ? 'destructive' : 'secondary'}>
                      {issue.urgency} Priority
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{issue.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      Estimated: {issue.estimate}
                    </div>
                    <Link to="/contact">
                      <Button size="sm" variant="outline">Get Help</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No hidden fees. You'll know the cost upfront before any work begins.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {pricing.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.service}</h3>
                  <div className="text-3xl font-bold text-primary mb-3">{item.price}</div>
                  <p className="text-sm text-gray-600">{item.description}</p>
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
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Why Choose Our Repair Service</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional service with guarantees and competitive pricing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Free Diagnosis", description: "No charge for problem identification", icon: Zap },
              { title: "Quick Turnaround", description: "Most repairs completed same day", icon: Clock },
              { title: "30-Day Warranty", description: "All repairs backed by warranty", icon: Shield },
              { title: "Data Protection", description: "Your files are safe with us", icon: HardDrive }
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

      {/* Emergency Section */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AlertTriangle className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Computer Emergency?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Critical business systems down? We offer emergency repair services with priority handling.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 bg-white text-red-600 hover:bg-gray-100">
                Emergency Repair Request
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Get Your Computer Fixed Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Don't let computer problems slow you down. Contact us for fast, reliable repair services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Schedule Repair
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                Call for Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
