import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Concept",
    description: "We begin with deep listening—understanding your vision, needs, and the unique context of your project.",
  },
  {
    number: "02",
    title: "Design",
    description: "Our team develops comprehensive design solutions that balance aesthetics, functionality, and sustainability.",
  },
  {
    number: "03",
    title: "Execution",
    description: "Meticulous project management ensures every detail is executed with precision and quality.",
  },
  {
    number: "04",
    title: "Delivery",
    description: "We deliver spaces that exceed expectations and stand the test of time.",
  },
];

export function ApproachSnapshot() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="font-body text-primary tracking-[0.2em] uppercase text-sm mb-4">
            Our Process
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-heading leading-tight mb-6">
            Design Approach
          </h2>
          <p className="text-foreground text-lg">
            Every project follows our refined four-stage process, ensuring clarity, 
            collaboration, and exceptional results from concept to completion.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-1/2" />
              )}
              
              <div className="text-center lg:text-left">
                <span className="inline-block font-heading text-5xl text-primary/20 mb-4">
                  {step.number}
                </span>
                <h3 className="font-heading text-xl text-heading mb-3">
                  {step.title}
                </h3>
                <p className="text-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="subtle" size="lg" asChild>
            <Link href="/approach">
              Learn More About Our Approach
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}