import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/approach", label: "Our Approach" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Architectural Design",
  "Interior Design",
  "Urban Planning",
  "Project Management",
  "Engineering",
];

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-divider">
      {/* Newsletter Section */}
      <div className="container-wide py-16 border-b border-divider">
        <div className="max-w-xl">
          <h3 className="font-heading text-2xl text-heading mb-3">
            Stay Updated
          </h3>
          <p className="text-foreground mb-6">
            Subscribe to receive insights, project updates, and architectural inspiration.
          </p>
          <form className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-background border border-border rounded text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <Button variant="accent" size="lg">
              Subscribe
              <ArrowRight size={16} />
            </Button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-heading text-2xl text-heading tracking-tight">
                Bravura
              </span>
              <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground ml-2">
                Architects
              </span>
            </Link>
            <p className="text-foreground text-sm leading-relaxed mb-6">
              Creating exceptional spaces that inspire and endure. Award-winning
              architecture across the UK and Nigeria since 2005.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg text-heading mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg text-heading mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg text-heading mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-heading font-medium mb-1">London Office</p>
                  <p className="text-foreground">123 Architecture Lane, London EC1A 1BB</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-heading font-medium mb-1">Lagos Office</p>
                  <p className="text-foreground">456 Design Avenue, Victoria Island, Lagos</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:hello@bravura-architects.com"
                  className="text-foreground hover:text-primary transition-colors text-sm"
                >
                  hello@bravura-architects.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a
                  href="tel:+442012345678"
                  className="text-foreground hover:text-primary transition-colors text-sm"
                >
                  +44 20 1234 5678
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-wide py-6 border-t border-divider">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Bravura Architects. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}