"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/constants/projects";

const categories = ["All", "Residential", "Commercial"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="font-body text-primary tracking-[0.2em] uppercase text-sm mb-4">
              Our Work
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-heading leading-tight mb-6">
              Selected Projects
            </h1>
            <p className="text-foreground text-xl leading-relaxed">
              Explore our portfolio of residential and commercial projects across the United Kingdom and Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border">
        <div className="container-wide">
          <div className="flex gap-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-body text-sm tracking-wide transition-colors pb-2 border-b-2 ${
                  activeCategory === category
                    ? "text-primary border-primary"
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group project-card aspect-[4/5] rounded-lg overflow-hidden block relative"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-primary-foreground/70 text-sm uppercase tracking-wider mb-2">
                    {project.category} • {project.location}
                  </p>
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-xl text-primary-foreground">
                      {project.title}
                    </h3>
                    <ArrowUpRight size={20} className="text-primary-foreground" />
                  </div>
                </div>
                {/* Static overlay for non-hover state */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-500">
                  <p className="text-primary-foreground/70 text-sm uppercase tracking-wider mb-1">
                    {project.category}
                  </p>
                  <h3 className="font-heading text-lg text-primary-foreground">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
