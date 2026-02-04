import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Users, 
  Award, 
  Target,
  ArrowRight,
  Heart,
  Shield,
  Zap,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const values = [
    {
      title: "Quality First",
      description: "We never compromise on quality. Every project receives our full attention and expertise.",
      icon: Award
    },
    {
      title: "Client-Focused",
      description: "Your success is our success. We build lasting relationships through exceptional service.",
      icon: Heart
    },
    {
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions.",
      icon: Zap
    },
    {
      title: "Reliability",
      description: "Dependable service with timely delivery and ongoing support you can count on.",
      icon: Shield
    }
  ];

  const team = [
    {
      name: "Alex Rivera",
      role: "Founder & Lead Developer",
      bio: "10+ years experience in full-stack development and business strategy.",
      expertise: ["React", "Node.js", "System Architecture"]
    },
    {
      name: "Sarah Chen",
      role: "Creative Director",
      bio: "Award-winning designer with expertise in branding and user experience.",
      expertise: ["UI/UX Design", "Branding", "Adobe Creative Suite"]
    },
    {
      name: "Mike Johnson",
      role: "Hardware Specialist",
      bio: "PC building expert and certified technician with 8+ years experience.",
      expertise: ["PC Building", "Hardware Repair", "Performance Optimization"]
    },
    {
      name: "Emily Davis",
      role: "Project Manager",
      bio: "Ensuring projects are delivered on time and exceed client expectations.",
      expertise: ["Project Management", "Client Relations", "Quality Assurance"]
    }
  ];

  const timeline = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started as a small team with big dreams to help businesses succeed digitally."
    },
    {
      year: "2020",
      title: "First 100 Clients",
      description: "Reached our first major milestone and established our reputation for quality."
    },
    {
      year: "2021",
      title: "Service Expansion",
      description: "Added PC building and repair services to complement our digital offerings."
    },
    {
      year: "2022",
      title: "Team Growth",
      description: "Expanded our team to better serve our growing client base."
    },
    {
      year: "2023",
      title: "500+ Projects",
      description: "Celebrated completing over 500 successful projects across all services."
    },
    {
      year: "2024",
      title: "Looking Forward",
      description: "Continuing to innovate and serve our clients with the latest technologies."
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
            <Link to="/portfolio" className="text-gray-600 hover:text-primary transition-colors">Portfolio</Link>
            <Link to="/about" className="text-primary font-medium">About</Link>
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
              About TechForge Pro
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Building Tomorrow's{" "}
              <span className="text-primary">Technology Today</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              We're a passionate team of developers, designers, and tech enthusiasts 
              dedicated to bringing your digital dreams to life and building powerful custom solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses and individuals with innovative technology solutions 
                  that drive success and enhance digital experiences. We believe that great 
                  technology should be accessible, reliable, and tailored to your unique needs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  To be the premier technology partner for businesses looking to thrive in 
                  the digital age. We envision a world where every business has access to 
                  cutting-edge technology solutions that propel them toward their goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The talented individuals who make the magic happen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to serving hundreds of clients worldwide
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {timeline.map((item, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
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
              { number: "5+", label: "Years Experience" },
              { number: "98%", label: "Client Satisfaction" }
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
              Ready to Work Together?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how we can help bring your vision to life with our expertise and passion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Start Your Project
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
