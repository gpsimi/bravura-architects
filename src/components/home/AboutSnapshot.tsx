import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "20+", label: "Years of Excellence" },
  { value: "150+", label: "Projects Delivered" },
  { value: "2", label: "Global Offices" },
  { value: "35+", label: "Awards Won" },
];

export function AboutSnapshot() {
  return (
    <section className="section-padding bg-surface-warm">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="font-body text-primary tracking-[0.2em] uppercase text-sm mb-4">
              About Bravura
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-heading leading-tight mb-6">
              Two Decades of Architectural Excellence
            </h2>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              Founded in 2005, Bravura Architects has grown from a small London studio 
              into an internationally recognized practice with offices in the United 
              Kingdom and Nigeria. We believe that great architecture emerges from a 
              deep understanding of place, purpose, and the people who will inhabit 
              our designs.
            </p>
            <p className="text-foreground leading-relaxed mb-8">
              Our multidisciplinary team brings together architects, interior designers, 
              landscape architects, and project managers to deliver comprehensive 
              solutions that exceed expectations.
            </p>
            <Button variant="subtle" size="lg" asChild>
              <Link href="/about">
                Learn More About Us
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-background p-8 rounded shadow-soft border border-border hover:shadow-medium transition-shadow duration-300"
              >
                <p className="font-heading text-4xl md:text-5xl text-primary mb-2">
                  {stat.value}
                </p>
                <p className="font-body text-muted-foreground text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}