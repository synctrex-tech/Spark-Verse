import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Search,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Zap,
  Globe,
  Phone,
  Mail,
  Sparkles,
  MousePointer,
  Users,
  Star,
  Wifi,
  Shield,
  Command
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function AdvancedNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showCommandPalette, setShowCommandPalette] = useState(false);
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
          setGlowPosition({ 
            x: e.clientX - rect.left, 
            y: e.clientY - rect.top 
          });
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setShowCommandPalette(true);
      }
      if (e.key === 'Escape') {
        setShowCommandPalette(false);
        setActiveDropdown(null);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const services = [
    {
      title: "Web Design",
      href: "/web-design",
      description: "Beautiful, responsive websites",
      icon: "🎨",
      gradient: "from-pink-500 to-purple-500",
      stats: "250+ Projects"
    },
    {
      title: "Web Development", 
      href: "/web-development",
      description: "Custom web applications",
      icon: "💻",
      gradient: "from-blue-500 to-cyan-500",
      stats: "150+ Apps"
    },
    {
      title: "Graphics Design",
      href: "/graphics-design", 
      description: "Visual identity & branding",
      icon: "🎭",
      gradient: "from-orange-500 to-red-500",
      stats: "300+ Designs"
    },
    {
      title: "PC Building",
      href: "/pc-building",
      description: "Custom gaming & workstations",
      icon: "🖥️",
      gradient: "from-green-500 to-emerald-500",
      stats: "100+ Builds"
    },
    {
      title: "PC Repair",
      href: "/pc-repair",
      description: "Hardware & software support", 
      icon: "🔧",
      gradient: "from-yellow-500 to-orange-500",
      stats: "500+ Fixes"
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Floating Status Bar */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[60] pointer-events-none">
        <div className="bg-black/80 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-2 flex items-center space-x-4 text-white text-sm shadow-2xl">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Online</span>
          </div>
          <div className="w-px h-4 bg-white/20"></div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>1,247 Active</span>
          </div>
          <div className="w-px h-4 bg-white/20"></div>
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 text-yellow-400" />
            <span>4.9/5 Rating</span>
          </div>
        </div>
      </div>

      {/* Main Floating Navigation */}
      <nav 
        ref={navRef}
        className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-out ${
          isScrolled 
            ? 'w-[95%] max-w-7xl' 
            : 'w-[90%] max-w-6xl'
        }`}
      >
        {/* Dynamic Glow Effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-60 transition-all duration-300"
          style={{
            background: `radial-gradient(600px circle at ${glowPosition.x}px ${glowPosition.y}px, rgba(255,107,74,0.15), transparent 40%)`
          }}
        ></div>

        {/* Main Navigation Container */}
        <div className={`relative bg-black/40 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-2xl transition-all duration-500 ${
          isScrolled ? 'py-3' : 'py-4'
        }`}>
          
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/30 via-purple-500/30 to-blue-500/30 opacity-50 blur-sm animate-pulse"></div>
          
          <div className="relative px-8 flex items-center justify-between">
            
            {/* Logo Section */}
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="relative">
                {/* Morphing Logo Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-500 to-blue-500 rounded-2xl blur-md opacity-60 group-hover:opacity-80 transition-all duration-500 group-hover:scale-110"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-6">
                  <Code2 className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-500" />
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-pulse" />
                </div>
                {/* Floating Particles */}
                <div className="absolute -top-2 -right-2 w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping"></div>
              </div>
              
              <div className="hidden md:block">
                <div className="text-2xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  TechForge Pro
                </div>
                <div className="text-xs text-white/60 font-medium tracking-wider">
                  Next-Gen Solutions
                </div>
              </div>
            </Link>

            {/* Center Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              
              {/* Home Link */}
              <Link 
                to="/" 
                className={`relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 group ${
                  isActive('/')
                    ? 'bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/30'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="relative z-10">Home</span>
                {isActive('/') && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-2xl animate-pulse opacity-50"></div>
                )}
                <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              {/* Advanced Services Mega Menu */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 group ${
                  services.some(service => isActive(service.href))
                    ? 'bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/30'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}>
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === 'services' ? 'rotate-180' : ''
                  }`} />
                  <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                {/* Futuristic Mega Menu */}
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-4 transition-all duration-500 ${
                  activeDropdown === 'services' 
                    ? 'opacity-100 visible translate-y-0 scale-100' 
                    : 'opacity-0 invisible translate-y-4 scale-95'
                }`}>
                  <div className="w-[600px] bg-black/60 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-2xl p-8">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-white">Our Services</h3>
                        <p className="text-white/60 text-sm">Choose your path to digital excellence</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">1200+</div>
                        <div className="text-white/60 text-xs">Projects Delivered</div>
                      </div>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                          
                          <div className="relative">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className="text-2xl">{service.icon}</div>
                              <div>
                                <h4 className="font-semibold text-white group-hover:text-primary transition-colors">
                                  {service.title}
                                </h4>
                                <p className="text-white/60 text-xs">{service.stats}</p>
                              </div>
                            </div>
                            <p className="text-white/70 text-sm mb-3">{service.description}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-white/50">Learn More</span>
                              <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-primary transition-colors" />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Footer CTA */}
                    <div className="bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-2xl p-4 border border-primary/30">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-white">Free Consultation</h4>
                          <p className="text-white/60 text-sm">Discuss your project with our experts</p>
                        </div>
                        <Button className="bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Navigation Links */}
              {[
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'About', href: '/about' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <Link 
                  key={link.name}
                  to={link.href} 
                  className={`relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 group ${
                    isActive(link.href)
                      ? 'bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/30'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive(link.href) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-2xl animate-pulse opacity-50"></div>
                  )}
                  <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              
              {/* Command Palette Trigger */}
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
                onClick={() => setShowCommandPalette(true)}
              >
                <Search className="w-4 h-4" />
                <span className="text-xs">Search</span>
                <div className="flex space-x-1">
                  <kbd className="px-1.5 py-0.5 text-xs bg-white/10 rounded border border-white/20">⌘</kbd>
                  <kbd className="px-1.5 py-0.5 text-xs bg-white/10 rounded border border-white/20">K</kbd>
                </div>
              </Button>

              {/* Language/Region */}
              <Button variant="ghost" size="sm" className="hidden md:flex text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300">
                <Globe className="w-4 h-4 mr-1" />
                <span className="text-sm">EN</span>
              </Button>

              {/* CTA Button */}
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 rounded-xl px-6 hover:scale-105">
                  <Zap className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
              </Link>

              {/* Mobile Menu */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Advanced Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" onClick={() => setIsOpen(false)}></div>
        
        <div className={`absolute top-40 left-4 right-4 bg-black/80 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-2xl transition-all duration-500 ${
          isOpen ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'
        }`}>
          <div className="p-8 space-y-6">
            
            {/* Mobile Services */}
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-primary" />
                Services
              </h3>
              <div className="space-y-2">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.href}
                    className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="text-xl">{service.icon}</div>
                    <div className="flex-1">
                      <div className="font-semibold text-white">{service.title}</div>
                      <div className="text-white/60 text-sm">{service.description}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/40" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Other Links */}
            <div className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'About', href: '/about' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block p-4 rounded-xl font-medium transition-all duration-300 ${
                    isActive(link.href)
                      ? 'bg-gradient-to-r from-primary to-purple-600 text-white'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg rounded-xl py-4 text-lg">
                <Zap className="w-5 h-5 mr-2" />
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Command Palette */}
      {showCommandPalette && (
        <div className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-xl flex items-start justify-center pt-32">
          <div className="w-full max-w-2xl bg-black/80 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-2xl">
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-6">
                <Search className="w-6 h-6 text-white/60" />
                <input 
                  type="text" 
                  placeholder="Search services, pages, or actions..."
                  className="flex-1 bg-transparent text-white placeholder-white/60 text-lg outline-none"
                  autoFocus
                />
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowCommandPalette(false)}
                  className="text-white/60 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="space-y-2">
                <div className="text-white/40 text-xs uppercase tracking-wider mb-3">Quick Actions</div>
                {[
                  { name: 'Book Consultation', icon: '📅', action: '/contact' },
                  { name: 'View Portfolio', icon: '📁', action: '/portfolio' },
                  { name: 'Get Quote', icon: '💰', action: '/contact' },
                  { name: 'About Us', icon: '👥', action: '/about' }
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.action}
                    className="flex items-center space-x-4 p-3 rounded-xl hover:bg-white/10 transition-all duration-200 text-white/80 hover:text-white"
                    onClick={() => setShowCommandPalette(false)}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Info Floater */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl">
          <div className="text-white text-sm space-y-2">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>hello@techforgepro.com</span>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <span className="text-white/60 text-xs">24/7 Support</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white/60 text-xs">Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
