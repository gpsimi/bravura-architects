"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll be in touch shortly.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="font-body text-primary tracking-[0.2em] uppercase text-sm mb-4">
              Contact Us
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-heading leading-tight mb-6">
              Let's Work Together
            </h1>
            <p className="text-foreground text-xl leading-relaxed">
              We'd love to hear about your project. Reach out to discuss how we can 
              bring your architectural vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl text-heading mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-body text-sm text-heading mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-body text-sm text-heading mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block font-body text-sm text-heading mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="+44 20 1234 5678"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block font-body text-sm text-heading mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded font-body text-foreground focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="interior">Interior Design</option>
                      <option value="renovation">Renovation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-body text-sm text-heading mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl text-heading mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">
                {/* London Office */}
                <div className="p-6 bg-secondary rounded-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-heading text-lg text-heading mb-1">
                        London Office
                      </h3>
                      <p className="text-foreground text-sm">
                        123 Architecture Lane<br />
                        London EC1A 1BB<br />
                        United Kingdom
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <Phone size={18} className="text-primary flex-shrink-0" />
                    <a
                      href="tel:+442012345678"
                      className="text-foreground hover:text-primary transition-colors text-sm"
                    >
                      +44 20 1234 5678
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail size={18} className="text-primary flex-shrink-0" />
                    <a
                      href="mailto:london@bravura-architects.com"
                      className="text-foreground hover:text-primary transition-colors text-sm"
                    >
                      london@bravura-architects.com
                    </a>
                  </div>
                </div>

                {/* Lagos Office */}
                <div className="p-6 bg-secondary rounded-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-heading text-lg text-heading mb-1">
                        Lagos Office
                      </h3>
                      <p className="text-foreground text-sm">
                        456 Design Avenue<br />
                        Victoria Island<br />
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <Phone size={18} className="text-primary flex-shrink-0" />
                    <a
                      href="tel:+2341234567890"
                      className="text-foreground hover:text-primary transition-colors text-sm"
                    >
                      +234 1 234 567 890
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail size={18} className="text-primary flex-shrink-0" />
                    <a
                      href="mailto:lagos@bravura-architects.com"
                      className="text-foreground hover:text-primary transition-colors text-sm"
                    >
                      lagos@bravura-architects.com
                    </a>
                  </div>
                </div>

                {/* General Inquiry */}
                <div className="pt-4 border-t border-border">
                  <p className="text-muted-foreground text-sm mb-4">
                    For general inquiries:
                  </p>
                  <a
                    href="mailto:hello@bravura-architects.com"
                    className="text-primary hover:underline font-medium"
                  >
                    hello@bravura-architects.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Consultation CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground leading-tight mb-6">
              Prefer a Face-to-Face Meeting?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Book a consultation at one of our offices to discuss your project in detail.
            </p>
            <Button variant="heroOutline" size="xl">
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
