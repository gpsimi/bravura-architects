import Link from "next/link";
import { ArrowRight, Building2, Palette, Trees, ClipboardCheck, Cog, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Building2,
    title: "Architectural Design",
    description: "From concept to completion, we create innovative buildings that balance form, function, and sustainability. Our architectural designs respond to site, context, and the unique needs of each client.",
    features: [
      "Residential Architecture",
      "Commercial Buildings",
      "Mixed-Use Developments",
      "Sustainable Design",
      "Heritage & Renovation",
    ],
  },
  {
    icon: Palette,
    title: "Interior Design",
    description: "Our interior design team creates spaces that are both beautiful and functional. We consider lighting, materials, acoustics, and flow to deliver interiors that enhance daily life.",
    features: [
      "Space Planning",
      "Material Selection",
      "Custom Furniture Design",
      "Lighting Design",
      "Art Curation",
    ],
  },
  {
    icon: Trees,
    title: "Landscape & Urban Planning",
    description: "We design outdoor spaces that complement and enhance the built environment. Our landscape architects create gardens, public spaces, and master plans that connect people with nature.",
    features: [
      "Garden Design",
      "Public Realm",
      "Master Planning",
      "Sustainable Landscapes",
      "Urban Design",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    description: "Our experienced project managers ensure your project is delivered on time, on budget, and to the highest standards. We coordinate all parties and manage every detail.",
    features: [
      "Contract Administration",
      "Cost Management",
      "Quality Control",
      "Timeline Management",
      "Stakeholder Coordination",
    ],
  },
  {
    icon: Cog,
    title: "Engineering",
    description: "Our in-house engineering team provides structural and MEP solutions that bring architectural visions to life while ensuring safety, efficiency, and buildability.",
    features: [
      "Structural Engineering",
      "MEP Design",
      "Sustainability Engineering",
      "Building Services",
      "Technical Coordination",
    ],
  },
  {
    icon: Landmark,
    title: "Civic & Institutional Design",
    description: "We design public buildings that serve communities with dignity and purpose. Our civic projects include schools, libraries, healthcare facilities, and cultural institutions.",
    features: [
      "Educational Facilities",
      "Healthcare Buildings",
      "Cultural Institutions",
      "Government Buildings",
      "Community Centers",
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="font-body text-primary tracking-[0.2em] uppercase text-sm mb-4">
              Our Services
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-heading leading-tight mb-6">
              Comprehensive Design Solutions
            </h1>
            <p className="text-foreground text-xl leading-relaxed">
              From initial concept to final delivery, we provide a full spectrum of architectural 
              and design services tailored to each project's unique requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon size={32} className="text-primary" />
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl text-heading mb-4">
                    {service.title}
                  </h2>
                  <p className="text-foreground text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-secondary rounded-lg aspect-[4/3] flex items-center justify-center ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}>
                  <service.icon size={120} className="text-primary/20" />
                </div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-foreground text-lg mb-8">
              Contact us to discuss how our services can bring your vision to life.
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
