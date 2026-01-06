import { Hero } from "@/components/home/Hero";
import { AboutSnapshot } from "@/components/home/AboutSnapshot";
import { ServicesSnapshot } from "@/components/home/ServicesSnapshot";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ApproachSnapshot } from "@/components/home/ApproachSnapshot";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSnapshot />
      <ServicesSnapshot />
      <FeaturedProjects />
      <ApproachSnapshot />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
