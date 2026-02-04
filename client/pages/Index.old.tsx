import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AdvancedNavigation from "@/components/AdvancedNavigation";
import { 
  ChevronRight, 
  Code2, 
  Smartphone, 
  Monitor, 
  Palette, 
  Settings,
  ArrowRight,
  Users,
  Award,
  Building2,
  Wrench,
  Cpu,
  Star,
  CheckCircle,
  Clock,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: Award },
    { number: "300+", label: "Happy Clients", icon: Users },
    { number: "5+", label: "Years Experience", icon: Clock },
    { number: "24/7", label: "Support Available", icon: Shield }
  ];

  const services = [
    {
      title: "Web Design",
      description: "Modern, responsive websites that captivate your audience and drive conversions",
      icon: Palette,
      features: ["Responsive Design", "UI/UX Optimization", "Brand Integration"],
      link: "/web-design"
    },
    {
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies and best practices",
      icon: Code2,
      features: ["Full-Stack Development", "E-commerce Solutions", "CMS Integration"],
      link: "/web-development"
    },
    {
      title: "Graphics Design",
      description: "Eye-catching visual designs that communicate your brand message effectively",
      icon: Monitor,
      features: ["Logo Design", "Branding Materials", "Digital Graphics"],
      link: "/graphics-design"
    },
    {
      title: "PC Building",
      description: "Custom-built computers tailored to your specific needs and performance requirements",
      icon: Cpu,
      features: ["Gaming PCs", "Workstations", "Budget Builds"],
      link: "/pc-building"
    },
    {
      title: "PC Repair & Support",
      description: "Professional computer repair and technical support services for all your devices",
      icon: Wrench,
      features: ["Hardware Repair", "Software Issues", "Performance Optimization"],
      link: "/pc-repair"
    }
  ];

  const portfolioItems = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      description: "Complete online store with payment integration"
    },
    {
      title: "Corporate Branding",
      category: "Graphics Design",
      description: "Full brand identity package for tech startup"
    },
    {
      title: "Gaming Workstation",
      category: "PC Building",
      description: "High-performance custom build for content creator"
    }
  ];

  const testimonials = [
    {
      quote: "Exceptional service! They built exactly what I envisioned and delivered on time. Highly recommended!",
      author: "Alex Johnson",
      position: "Business Owner",
      rating: 5
    },
    {
      quote: "The team's expertise in both web development and PC building is unmatched. Great experience overall.",
      author: "Sarah Mitchell",
      position: "Startup Founder",
      rating: 5
    },
    {
      quote: "Professional, reliable, and talented. They transformed our online presence completely.",
      author: "David Chen",
      position: "Marketing Director",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Full-Screen Video Background */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" type="video/mp4" />
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>

        {/* Subtle overlay for better navigation visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Floating Animated Particles */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-white/30 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-primary/60 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-white/20 rounded-full animate-pulse delay-3000"></div>
        <div className="absolute top-1/3 left-3/4 w-1.5 h-1.5 bg-blue-400/50 rounded-full animate-ping delay-4000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-purple-400/30 rounded-full animate-bounce delay-5000"></div>
      </div>

      {/* Advanced Navigation - Only Component Visible */}
      <AdvancedNavigation />

    </div>
  );
}
