import { Button } from "@/components/ui/button";
import { Code2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderProps {
  title: string;
  description: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">DigitalCraft</span>
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/services" className="text-gray-600 hover:text-primary transition-colors">Services</Link>
            <Link to="/solutions" className="text-gray-600 hover:text-primary transition-colors">Solutions</Link>
            <Link to="/industries" className="text-gray-600 hover:text-primary transition-colors">Industries</Link>
            <Link to="/works" className="text-gray-600 hover:text-primary transition-colors">Works</Link>
            <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">About</Link>
            <Link to="/careers" className="text-gray-600 hover:text-primary transition-colors">Careers</Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link>
          </nav>

          <Button className="hidden lg:flex">
            Get in Touch
          </Button>
        </div>
      </header>

      {/* Placeholder Content */}
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="text-center max-w-2xl mx-auto px-4">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Code2 className="w-10 h-10 text-primary" />
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {description}
          </p>
          
          <p className="text-gray-500 mb-8">
            This page is coming soon! Continue prompting to have us build out this section with detailed content.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" variant="outline">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Button size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
