import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import { 
  Code2, 
  Mail, 
  Phone, 
  MapPin,
  Clock,
  ArrowRight,
  MessageSquare,
  Send,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  const contactMethods = [
    {
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours",
      icon: Mail,
      value: "hello@techforgepro.com",
      action: "mailto:hello@techforgepro.com"
    },
    {
      title: "Call Us",
      description: "Speak directly with our team during business hours",
      icon: Phone,
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      title: "Visit Us",
      description: "Come see us at our office for in-person consultations",
      icon: MapPin,
      value: "123 Tech Street, Digital City, DC 12345",
      action: "#"
    },
    {
      title: "Business Hours",
      description: "We're available during these hours for immediate support",
      icon: Clock,
      value: "Mon-Fri: 9AM-6PM PST",
      action: "#"
    }
  ];

  const services = [
    { name: "Web Design", price: "Starting at $799" },
    { name: "Web Development", price: "Starting at $1,999" },
    { name: "Graphics Design", price: "Starting at $299" },
    { name: "PC Building", price: "Starting at $1,299" },
    { name: "PC Repair", price: "Starting at $99" },
    { name: "Custom Solutions", price: "Quote on request" }
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on scope. Web design projects typically take 2-4 weeks, development projects 4-8 weeks, and PC builds 1-2 weeks."
    },
    {
      question: "Do you offer support after project completion?",
      answer: "Yes! We provide ongoing support and maintenance for all our projects. Web projects include 30 days of free support, and PC builds come with warranty coverage."
    },
    {
      question: "Can you work with my existing brand/design?",
      answer: "Absolutely! We can work with your existing brand guidelines and design assets, or help you create new ones if needed."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we offer flexible payment plans for larger projects. We typically require 50% upfront with the remainder due upon completion."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <MessageSquare className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Let's Build Something{" "}
              <span className="text-primary">Amazing Together</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Ready to start your project? We'd love to hear about your ideas and 
              discuss how we can help bring them to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Ways to Reach Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the method that works best for you. We're here to help!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <method.icon className="w-8 h-8 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{method.description}</p>
                  <p className="text-primary font-medium">{method.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone (Optional)</label>
                    <Input type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>Select a service</option>
                      <option>Web Design</option>
                      <option>Web Development</option>
                      <option>Graphics Design</option>
                      <option>PC Building</option>
                      <option>PC Repair</option>
                      <option>Multiple Services</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Budget</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>Select budget range</option>
                      <option>Under $1,000</option>
                      <option>$1,000 - $5,000</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                    <Textarea 
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      rows={5}
                    />
                  </div>
                  
                  <Button className="w-full">
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Services & FAQ */}
            <div className="space-y-8">
              {/* Service Pricing */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Pricing</h2>
                  <div className="space-y-4">
                    {services.map((service, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                        <span className="font-medium text-gray-900">{service.name}</span>
                        <span className="text-primary font-semibold">{service.price}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-6">
                    All prices are starting rates. Final pricing depends on project scope and requirements. 
                    Contact us for a detailed quote.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index}>
                        <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here's what you can expect when you choose TechForge Pro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Free Consultation", description: "No cost initial discussion about your project" },
              { title: "Transparent Pricing", description: "Clear quotes with no hidden fees or surprises" },
              { title: "Quality Guarantee", description: "We stand behind our work with comprehensive warranties" },
              { title: "Ongoing Support", description: "Continued support even after project completion" }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Don't wait! Contact us today for a free consultation and let's bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                Call Now: (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
