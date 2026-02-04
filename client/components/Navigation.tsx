import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  ChevronDown,
  Menu,
  X,
  Search,
  Phone,
  Mail,
  Globe,
  ArrowRight
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Web Design",
      href: "/web-design",
      description: "Beautiful, responsive websites",
      icon: "🎨"
    },
    {
      title: "Web Development", 
      href: "/web-development",
      description: "Custom web applications",
      icon: "💻"
    },
    {
      title: "Graphics Design",
      href: "/graphics-design", 
      description: "Visual identity & branding",
      icon: "🎭"
    },
    {
      title: "PC Building",
      href: "/pc-building",
      description: "Custom gaming & workstations",
      icon: "🖥️"
    },
    {
      title: "PC Repair",
      href: "/pc-repair",
      description: "Hardware & software support", 
      icon: "🔧"
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-gray-900 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>hello@techforgepro.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Badge variant="secondary" className="bg-primary text-white">
              🔥 Limited Time: 25% Off All Services
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-black/20 backdrop-blur-xl shadow-2xl border-b border-white/10'
          : 'bg-transparent backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Code2 className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <span className={`text-2xl font-bold transition-all duration-300 ${
                  isScrolled
                    ? 'text-dark drop-shadow-lg'
                    : 'text-dark drop-shadow-2xl'
                }`}>
                  Spark-Verse
                </span>
                <div className={`text-xs font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'text-dark/80'
                    : 'text-dark/90 drop-shadow-lg'
                }`}>Digital Solutions</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">

              {/* Home Link */}
              <Link
                to="/"
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                  isActive('/')
                    ? 'text-accent bg-accent/20 backdrop-blur-sm'
                    : isScrolled
                      ? 'text-dark hover:text-accent hover:bg-dark/10'
                      : 'text-dark drop-shadow-lg hover:text-accent hover:bg-dark/20'
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`flex items-center space-x-1 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                  services.some(service => isActive(service.href))
                    ? 'text-accent bg-accent/20 backdrop-blur-sm'
                    : isScrolled
                      ? 'text-dark hover:text-accent hover:bg-dark/10'
                      : 'text-dark drop-shadow-lg hover:text-accent hover:bg-dark/20'
                }`}>
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'services' ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Mega Menu */}
                <div className={`absolute top-full left-0 mt-2 w-96 bg-dark-secondary rounded-2xl shadow-2xl border border-light/10 transition-all duration-300 ${
                  activeDropdown === 'services' 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible translate-y-2'
                }`}>
                  <div className="p-6">
                    <div className="grid grid-cols-1 gap-2">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 group ${
                            isActive(service.href)
                              ? 'bg-accent/10 text-accent'
                              : 'hover:bg-light/5'
                          }`}
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="text-2xl">{service.icon}</div>
                          <div className="flex-1">
                            <div className="font-semibold text-light group-hover:text-accent transition-colors">
                              {service.title}
                            </div>
                            <div className="text-sm text-light/70">{service.description}</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-light/50 group-hover:text-accent transition-colors" />
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-light/10">
                      <Link 
                        to="/portfolio" 
                        className="flex items-center justify-center w-full p-3 bg-gradient-to-r from-accent to-purple-500 text-dark rounded-xl font-medium hover:shadow-lg transition-all duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        View All Work
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regular Navigation Links */}
              <Link
                to="/portfolio"
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                  isActive('/portfolio')
                    ? 'text-accent bg-accent/20 backdrop-blur-sm'
                    : isScrolled
                      ? 'text-dark hover:text-accent hover:bg-dark/10'
                      : 'text-dark drop-shadow-lg hover:text-accent hover:bg-dark/20'
                }`}
              >
                Portfolio
              </Link>

              <Link
                to="/about"
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                  isActive('/about')
                    ? 'text-accent bg-accent/20 backdrop-blur-sm'
                    : isScrolled
                      ? 'text-dark hover:text-accent hover:bg-dark/10'
                      : 'text-dark drop-shadow-lg hover:text-accent hover:bg-dark/20'
                }`}
              >
                About
              </Link>

              <Link
                to="/contact"
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                  isActive('/contact')
                    ? 'text-accent bg-accent/20 backdrop-blur-sm'
                    : isScrolled
                      ? 'text-dark hover:text-accent hover:bg-dark/10'
                      : 'text-dark drop-shadow-lg hover:text-accent hover:bg-dark/20'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              
              {/* Search Button */}
              <Button variant="ghost" size="sm" className={`hidden md:flex rounded-xl transition-all duration-200 ${
                isScrolled
                  ? 'text-dark hover:bg-dark/10'
                  : 'text-dark drop-shadow-lg hover:bg-dark/20'
              }`}>
                <Search className="w-5 h-5" />
              </Button>

              {/* Language Selector */}
              <Button variant="ghost" size="sm" className={`hidden md:flex rounded-xl transition-all duration-200 ${
                isScrolled
                  ? 'text-dark hover:bg-dark/10'
                  : 'text-dark drop-shadow-lg hover:bg-dark/20'
              }`}>
                <Globe className="w-5 h-5" />
                <span className="ml-1">EN</span>
              </Button>

              {/* CTA Button */}
              <Link to="/contact">
                <Button className="hidden md:flex bg-gradient-to-r from-accent to-purple-500 hover:from-accent/90 hover:to-purple-500/90 text-dark shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl px-6">
                  Get Free Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className={`lg:hidden rounded-xl transition-all duration-200 ${
                  isScrolled
                    ? 'text-dark hover:bg-dark/10'
                    : 'text-dark drop-shadow-lg hover:bg-dark/20'
                }`}
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-dark/95 backdrop-blur-xl border-t border-light/10">
            <div className="container mx-auto px-4 py-6">
              
              {/* Mobile Services */}
              <div className="mb-6">
                <div className="text-sm font-semibold text-light/70 uppercase tracking-wider mb-3">Services</div>
                <div className="space-y-1">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 ${
                        isActive(service.href)
                          ? 'bg-accent/10 text-accent'
                          : 'text-light hover:bg-light/5'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="text-xl">{service.icon}</div>
                      <div>
                        <div className="font-semibold">{service.title}</div>
                        <div className="text-sm text-light/70">{service.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Other Links */}
              <div className="space-y-1 mb-6">
                <Link
                  to="/"
                  className={`block p-4 rounded-xl font-medium transition-all duration-200 ${
                    isActive('/')
                      ? 'text-accent bg-accent/10'
                      : 'text-light hover:bg-light/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                <Link
                  to="/portfolio"
                  className={`block p-4 rounded-xl font-medium transition-all duration-200 ${
                    isActive('/portfolio')
                      ? 'text-accent bg-accent/10'
                      : 'text-light hover:bg-light/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Portfolio
                </Link>
                
                <Link 
                  to="/about" 
                  className={`block p-4 rounded-xl font-medium transition-all duration-200 ${
                    isActive('/about')
                      ? 'text-accent bg-accent/10'
                      : 'text-light hover:bg-light/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                
                <Link 
                  to="/contact" 
                  className={`block p-4 rounded-xl font-medium transition-all duration-200 ${
                    isActive('/contact')
                      ? 'text-accent bg-accent/10'
                      : 'text-light hover:bg-light/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>

              {/* Mobile CTA */}
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-accent to-purple-500 text-dark shadow-lg rounded-xl">
                  Get Free Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
