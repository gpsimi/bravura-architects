"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Bravura transformed our vision into reality. Their attention to detail and understanding of our lifestyle made all the difference. Our home is everything we dreamed of and more.",
    author: "James & Sarah Mitchell",
    project: "The Horizon House, Surrey",
  },
  {
    quote: "Working with Bravura on our corporate headquarters was seamless. They delivered a building that reflects our brand values while providing an inspiring workspace for our team.",
    author: "Adebayo Okonkwo",
    project: "Apex Tower, Lagos",
  },
  {
    quote: "The team's ability to blend contemporary design with traditional Nigerian elements exceeded our expectations. They truly understand how to create spaces that resonate with place and culture.",
    author: "Chief Emeka Nwosu",
    project: "Villa Serene, Ikoyi",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-primary">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote Icon */}
          <Quote size={48} className="text-primary-foreground/20 mx-auto mb-8" />

          {/* Testimonial */}
          <div className="min-h-[200px] flex items-center justify-center mb-8">
            <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl text-primary-foreground leading-relaxed italic">
              "{testimonials[activeIndex].quote}"
            </blockquote>
          </div>

          {/* Author */}
          <div className="mb-12">
            <p className="font-body text-primary-foreground font-medium text-lg">
              {testimonials[activeIndex].author}
            </p>
            <p className="font-body text-primary-foreground/60 text-sm">
              {testimonials[activeIndex].project}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevTestimonial}
              className="p-3 border border-primary-foreground/30 rounded-full text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2 px-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "bg-primary-foreground w-6"
                      : "bg-primary-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 border border-primary-foreground/30 rounded-full text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
