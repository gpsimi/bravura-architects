import Link from "next/link";
import { ArrowRight, Building2, Palette, Trees, ClipboardCheck, Cog, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Building2,
    title: "Architectural Design",
    description: "Innovative residential and commercial architecture that balances form, function, and sustainability.",
  },
  {
    icon: Palette,
    title: "Interior Design",
    description: "Thoughtful interior spaces that reflect our clients' vision while maximizing comfort and aesthetics.",
  },
  {
    icon: Trees,
    title: "Landscape & Urban Planning",
    description: "Integrated landscape solutions that enhance the built environment and connect with nature.",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    description: "End-to-end project oversight ensuring quality, timeline adherence, and budget control.",
  },
  {
    icon: Cog,
    title: "Engineering",
    description: "Structural and MEP engineering services that bring architectural visions to life.",
  },
  {
    icon: Landmark,
    title: "Civic & Institutional",
    description: "Public buildings that serve communities with dignity, accessibility, and lasting impact.",
  },
];

export function ServicesSnapshot() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="font-body text-primary tracking-[0.2em] uppercase text-sm mb-4">
            What We Do
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-heading leading-tight mb-6">
            Comprehensive Design Services
          </h2>
          <p className="text-foreground text-lg">
            From initial concept to final delivery, we provide a full spectrum of 
            architectural and design services tailored to each project's unique requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-background border border-border rounded hover:border-primary/30 hover:shadow-medium transition-all duration-300"
            >
              <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl text-heading mb-3">
                {service.title}
              </h3>
              <p className="text-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="subtle" size="lg" asChild>
            <Link href="/services">
              Explore All Services
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}