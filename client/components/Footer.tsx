import { Mail, Phone, Twitter, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
  ];

  const footerLinks = {
    "Services": [
      { title: "Web Design", href: "/web-design" },
      { title: "Web Development", href: "/web-development" },
      { title: "Graphics Design", href: "/graphics-design" },
      { title: "PC Building", href: "/pc-building" },
      { title: "PC Repair", href: "/pc-repair" },
    ],
    "Company": [
      { title: "About Us", href: "/about" },
      { title: "Portfolio", href: "/portfolio" },
      { title: "Careers", href: "/careers" },
      { title: "Contact", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-primary-foreground py-12 text-primary">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and Socials */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Spark-Verse</h3>
            <p className="text-sm text-primary/80 mb-4">
              Crafting digital excellence and custom computing solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-primary/80 hover:text-primary">
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.title}>
                    <Link to={link.href} className="text-sm text-primary/80 hover:text-primary">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-primary/80">
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                <span>contact@spark-verse.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                <span>+1 (234) 567-890</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-primary/20 pt-6 text-center text-sm text-primary/60">
          <p>&copy; {new Date().getFullYear()} Spark-Verse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
