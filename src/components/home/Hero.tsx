"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-architecture.jpg";

export function Hero() {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Modern architectural design by Bravura Architects"
          fill
          className="object-cover"
          priority
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide text-center">
        <div className="max-w-4xl mx-auto">
          <p className="font-body text-primary-foreground/70 tracking-[0.3em] uppercase text-sm mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Award-Winning Architecture
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-tight mb-8 animate-fade-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            Designing Spaces That
            <br />
            <span className="italic">Inspire & Endure</span>
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-fade-up opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            Creating exceptional residential and commercial architecture across the United Kingdom and Nigeria since 2005.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
            <Button variant="hero" size="xl" asChild>
              <Link href="/projects">
                View Projects
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-float"
        aria-label="Scroll to content"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}