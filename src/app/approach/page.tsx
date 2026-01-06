import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Concept",
    subtitle: "Discovery & Vision",
    description: "Every project begins with deep listening. We meet with you to understand your aspirations, lifestyle, functional needs, and budget. We study the site—its orientation, views, neighbours, and history. We explore precedents and references that resonate with your vision. The outcome is a clear project brief that guides all subsequent design decisions.",
    details: [
      "Initial consultation and brief development",
      "Site analysis and contextual research",
      "Budget and timeline planning",
      "Vision and inspiration gathering",
    ],
  },
  {
    number: "02",
    title: "Design",
    subtitle: "Creativity & Refinement",
    description: "With a clear brief in hand, our design team develops multiple concept options. We present these as sketches, 3D models, and visualizations, and work with you to refine the preferred direction. Through iterative design development, we resolve spatial layouts, material palettes, and technical systems to create a comprehensive design package.",
    details: [
      "Concept design and options",
      "3D visualization and modeling",
      "Material and finishes selection",
      "Planning and regulatory approvals",
    ],
  },
  {
    number: "03",
    title: "Execution",
    subtitle: "Precision & Craft",
    description: "Our technical team produces detailed construction documentation, specifying every element from structural systems to door handles. We assist with contractor selection and remain involved throughout construction, conducting regular site visits to ensure quality and resolve any issues that arise. Our project managers coordinate all parties and track progress against schedule and budget.",
    details: [
      "Technical documentation",
      "Contractor procurement",
      "Construction administration",
      "Quality control and site supervision",
    ],
  },
  {
    number: "04",
    title: "Delivery",
    subtitle: "Completion & Beyond",
    description: "As construction concludes, we conduct comprehensive inspections to ensure every detail meets our standards. We walk you through the completed space, explaining systems and finishes. But our relationship doesn't end at handover—we're available for post-occupancy support and take pride in maintaining long-term relationships with our clients.",
    details: [
      "Final inspections and snagging",
      "Client walkthrough and handover",
      "Documentation and warranties",
      "Post-occupancy support",
    ],
  },
];

export default function Approach() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="font-body text-primary tracking-[0.2em] uppercase text-sm mb-4">
              Our Approach
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-heading leading-tight mb-6">
              A Refined Design Process
            </h1>
            <p className="text-foreground text-xl leading-relaxed">
              Every project follows our proven four-stage methodology, ensuring clarity, 
              collaboration, and exceptional results from initial concept to final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={step.number} className="grid lg:grid-cols-12 gap-12">
                {/* Number */}
                <div className="lg:col-span-2">
                  <span className="font-heading text-8xl text-primary/10">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-6">
                  <p className="font-body text-primary tracking-[0.2em] uppercase text-sm mb-2">
                    {step.subtitle}
                  </p>
                  <h2 className="font-heading text-3xl md:text-4xl text-heading mb-6">
                    {step.title}
                  </h2>
                  <p className="text-foreground text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Details */}
                <div className="lg:col-span-4">
                  <div className="bg-secondary rounded-lg p-8">
                    <h3 className="font-heading text-lg text-heading mb-4">
                      Key Activities
                    </h3>
                    <ul className="space-y-3">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3 text-foreground text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Divider */}
                {index < steps.length - 1 && (
                  <div className="lg:col-span-12">
                    <div className="h-px bg-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-surface-warm">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-heading leading-tight mb-6">
              Ready to Begin?
            </h2>
            <p className="text-foreground text-lg mb-8">
              Let's discuss how our approach can bring your project to life.
            </p>
            <Button variant="accent" size="xl" asChild>
              <Link href="/contact">
                Start the Conversation
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
