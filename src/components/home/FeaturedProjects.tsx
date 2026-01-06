"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/constants/projects";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

export function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <FadeIn className="max-w-xl" direction="right">
            <p className="font-body text-primary tracking-[0.2em] uppercase text-sm mb-4">
              Featured Work
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-heading leading-tight">
              Selected Projects
            </h2>
          </FadeIn>
          <FadeIn direction="left" delay={0.2}>
            <Button variant="subtle" size="lg" asChild>
              <Link href="/projects">
                View All Projects
                <ArrowRight size={16} />
              </Link>
            </Button>
          </FadeIn>
        </div>

        {/* Projects Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {/* Featured Large Project */}
          <StaggerItem className="md:row-span-2 h-full">
            <Link
              href={`/projects/${featuredProjects[0].slug}`}
              className="group project-card aspect-[4/5] md:aspect-auto h-full rounded-lg overflow-hidden block relative"
            >
              <Image
                src={featuredProjects[0].image}
                alt={featuredProjects[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-primary-foreground/70 text-sm uppercase tracking-wider mb-2">
                  {featuredProjects[0].category} • {featuredProjects[0].location}
                </p>
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-2xl md:text-3xl text-primary-foreground">
                    {featuredProjects[0].title}
                  </h3>
                  <ArrowUpRight size={24} className="text-primary-foreground" />
                </div>
              </div>
               {/* Static overlay for non-hover state */}
               <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-500">
                    <p className="text-primary-foreground/70 text-sm uppercase tracking-wider mb-1">
                      {featuredProjects[0].category}
                    </p>
                    <h3 className="font-heading text-2xl md:text-3xl text-primary-foreground">
                      {featuredProjects[0].title}
                    </h3>
                  </div>
            </Link>
          </StaggerItem>

          {/* Other Projects */}
          {featuredProjects.slice(1).map((project, index) => (
            <StaggerItem key={project.slug || index}>
              <Link
                href={`/projects/${project.slug}`}
                className="group project-card aspect-[4/3] rounded-lg overflow-hidden block relative"
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
                    <h3 className="font-heading text-xl text-primary-foreground">
                      {project.title}
                    </h3>
                  </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}