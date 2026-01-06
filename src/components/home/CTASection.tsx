import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="section-padding bg-surface-warm">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-heading leading-tight mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-foreground text-lg mb-10">
            Whether you're envisioning a new home, commercial space, or renovation, 
            our team is ready to bring your ideas to life. Let's create something 
            extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl" asChild>
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="subtle" size="xl" asChild>
              <Link href="/projects">Browse Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}