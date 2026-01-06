import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Users, Globe, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-architecture.jpg";

const values = [
  {
    icon: Target,
    title: "Design Excellence",
    description: "We pursue exceptional design in every project, balancing aesthetics with functionality and sustainability.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We believe in deep collaboration, working closely with clients to understand and realize their vision.",
  },
  {
    icon: Globe,
    title: "Cultural Sensitivity",
    description: "Our work reflects and respects the cultural contexts in which we build, from London to Lagos.",
  },
  {
    icon: Award,
    title: "Lasting Impact",
    description: "We create buildings that endure—physically, environmentally, and in the lives of those who use them.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="font-body text-primary tracking-[0.2em] uppercase text-sm mb-4">
              About Us
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-heading leading-tight mb-6">
              Building Dreams Since 2005
            </h1>
            <p className="text-foreground text-xl leading-relaxed">
              Bravura Architects is an award-winning practice with offices in London and Lagos, 
              delivering exceptional residential and commercial architecture across two continents.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-heading text-3xl md:text-4xl text-heading leading-tight mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  Founded in London in 2005 by Principal Architect David Okonjo, Bravura Architects 
                  began as a small studio with a big vision: to create architecture that speaks to 
                  both place and purpose.
                </p>
                <p>
                  What started as a two-person practice has grown into a multidisciplinary team of 
                  over 40 professionals, including architects, interior designers, landscape architects, 
                  and project managers. In 2012, we opened our Lagos office, bringing our design 
                  philosophy to West Africa and expanding our understanding of what architecture can 
                  achieve across cultures.
                </p>
                <p>
                  Today, Bravura is recognized for its thoughtful approach to residential and commercial 
                  design, with projects ranging from bespoke family homes to major commercial developments. 
                  Our work has been featured in Architectural Digest, Dezeen, and numerous industry 
                  publications, and we've received over 35 design awards.
                </p>
                <p>
                  But our greatest achievement remains the trust of our clients—many of whom return 
                  to us for project after project, and who recommend us to their friends, family, 
                  and colleagues.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-large relative">
                <Image
                  src={heroImage}
                  alt="Bravura Architects office"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-surface-warm">
        <div className="container-wide">
          <div className="max-w-2xl mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-heading leading-tight mb-6">
              Our Values
            </h2>
            <p className="text-foreground text-lg">
              These principles guide everything we do, from initial concept sketches to final handover.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-background p-8 rounded shadow-soft border border-border"
              >
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl text-heading mb-3">
                  {value.title}
                </h3>
                <p className="text-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-heading leading-tight mb-6">
              Let's Work Together
            </h2>
            <p className="text-foreground text-lg mb-8">
              We'd love to hear about your project and explore how we can bring your vision to life.
            </p>
            <Button variant="accent" size="xl" asChild>
              <Link href="/contact">
                Get in Touch
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
