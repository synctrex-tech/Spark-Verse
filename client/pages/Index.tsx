import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ChevronRight, 
  Code2, 
  Palette, 
  ArrowRight,
  Building2,
  Wrench,
  Cpu,
  Briefcase,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Index() {
  const services = [
    {
      title: "Web Design",
      description: "Modern, responsive websites that captivate your audience.",
      icon: Palette,
      link: "/web-design"
    },
    {
      title: "Web Development",
      description: "Custom web applications with cutting-edge technologies.",
      icon: Code2,
      link: "/web-development"
    },
    {
      title: "Graphics Design",
      description: "Eye-catching visuals that communicate your brand message.",
      icon: Briefcase,
      link: "/graphics-design"
    },
    {
      title: "PC Building",
      description: "Custom-built computers tailored to your specific needs.",
      icon: Cpu,
      link: "/pc-building"
    },
    {
      title: "PC Repair",
      description: "Professional computer repair and technical support.",
      icon: Wrench,
      link: "/pc-repair"
    },
     {
      title: "Industries",
      description: "Innovative solutions for diverse industry needs.",
      icon: Building2,
      link: "/industries"
    }
  ];

  const portfolioItems = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "/placeholder.svg",
      link: "/works"
    },
    {
      title: "Corporate Branding",
      category: "Graphics Design",
      image: "/placeholder.svg",
      link: "/works"
    },
    {
      title: "Gaming Workstation",
      category: "PC Building",
      image: "/placeholder.svg",
      link: "/works"
    }
  ];

  const testimonials = [
    {
      quote: "Exceptional service! They built exactly what I envisioned and delivered on time. Highly recommended!",
      author: "Alex Johnson",
      position: "Business Owner",
      avatar: "/placeholder.svg"
    },
    {
      quote: "The team's expertise is unmatched. Great experience overall.",
      author: "Sarah Mitchell",
      position: "Startup Founder",
      avatar: "/placeholder.svg"
    },
    {
      quote: "Professional, reliable, and talented. They transformed our online presence.",
      author: "David Chen",
      position: "Marketing Director",
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <div className="bg-background text-foreground font-sans">
      <Navigation />

      {/* Hero Section */}
      <header className="py-24 md:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary opacity-50"></div>
        <div className="container relative">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4 animate-fade-in">Spark-Verse</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in delay-200">Your one-stop solution for digital excellence and custom computing.</p>
          <Button size="lg" className="bg-primary text-foreground hover:bg-primary/90 transition-all duration-300 animate-fade-in delay-400" asChild>
            <Link to="/contact">Get in Touch <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary">
        <div className="container mx-auto text-center animate-slide-up">
          <h2 className="text-4xl font-heading font-bold mb-4">About Us</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            We are a passionate team of developers, designers, and tech enthusiasts dedicated to crafting exceptional digital experiences and high-performance computing solutions. With a commitment to quality and innovation, we turn your ideas into reality.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 animate-slide-up">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Card key={service.title} className="bg-secondary border-border text-center p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-primary/10 animate-slide-up" style={{animationDelay: `${i * 100}ms`}}>
                <div className="mx-auto bg-primary/10 p-4 rounded-full mb-4 w-fit">
                  <service.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button variant="link" className="text-primary" asChild>
                  <Link to={service.link}>Learn More <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 animate-slide-up">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, i) => (
              <Card key={item.title} className="bg-background border-border overflow-hidden rounded-lg group transition-all duration-300 animate-slide-up" style={{animationDelay: `${i * 100}ms`}}>
                <div className="overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-56 object-cover group-hover:scale-110 transition-all duration-500" />
                </div>
                <CardContent className="p-6">
                  <Badge className="bg-primary text-foreground">{item.category}</Badge>
                  <h3 className="text-xl font-heading font-semibold my-2">{item.title}</h3>
                  <Button variant="link" className="text-primary p-0" asChild>
                    <Link to={item.link}>View Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12 animate-slide-up">
            <Button className="bg-primary text-foreground hover:bg-primary/90 transition-all duration-300" asChild>
              <Link to="/portfolio">View All Works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 animate-slide-up">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <Card key={testimonial.author} className="bg-secondary border-border p-6 rounded-lg animate-slide-up" style={{animationDelay: `${i * 100}ms`}}>
                 <div className="flex items-center mb-4">
                    <Avatar className="mr-4 h-12 w-12">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold font-heading text-lg">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                  <div className="flex text-primary mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                  </div>
                  <p className="text-muted-foreground">"{testimonial.quote}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 animate-slide-up">Get in Touch</h2>
          <Card className="max-w-2xl mx-auto bg-background border-border p-8 rounded-lg">
            <form className="space-y-6">
              <Input placeholder="Your Name" className="bg-secondary border-border" />
              <Input type="email" placeholder="Your Email" className="bg-secondary border-border" />
              <Textarea placeholder="Your Message" className="bg-secondary border-border" />
              <Button type="submit" size="lg" className="w-full bg-primary text-foreground hover:bg-primary/90 transition-all duration-300">Send Message</Button>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}