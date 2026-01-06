import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/constants/projects";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find next and previous projects for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end pb-20">
          <div className="container-wide">
            <div className="max-w-4xl animate-fade-up">
              <p className="text-primary-foreground/80 font-body tracking-[0.2em] uppercase text-sm mb-4">
                {project.category} — {project.location}
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl text-primary-foreground leading-tight">
                {project.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details & Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Sidebar / Stats */}
            <div className="lg:col-span-4 space-y-8">
              <div className="space-y-6 border-t border-border pt-6">
                <div>
                  <h3 className="font-heading text-sm text-muted-foreground uppercase tracking-widest mb-1">
                    Client
                  </h3>
                  <p className="font-body text-lg text-foreground">
                    {project.stats.client}
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-sm text-muted-foreground uppercase tracking-widest mb-1">
                    Location
                  </h3>
                  <p className="font-body text-lg text-foreground">
                    {project.location}
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-sm text-muted-foreground uppercase tracking-widest mb-1">
                    Year
                  </h3>
                  <p className="font-body text-lg text-foreground">
                    {project.year}
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-sm text-muted-foreground uppercase tracking-widest mb-1">
                    Services
                  </h3>
                  <p className="font-body text-lg text-foreground">
                    {project.stats.services}
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-sm text-muted-foreground uppercase tracking-widest mb-1">
                    Status
                  </h3>
                  <p className="font-body text-lg text-foreground">
                    {project.stats.status}
                  </p>
                </div>
                 <div>
                  <h3 className="font-heading text-sm text-muted-foreground uppercase tracking-widest mb-1">
                    Size
                  </h3>
                  <p className="font-body text-lg text-foreground">
                    {project.stats.size}
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 space-y-12">
              <div>
                <h2 className="font-heading text-3xl text-heading mb-6">
                  The Vision
                </h2>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-secondary p-8 rounded-lg">
                  <h3 className="font-heading text-xl text-heading mb-4">
                    The Challenge
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div className="bg-secondary p-8 rounded-lg">
                  <h3 className="font-heading text-xl text-heading mb-4">
                    The Solution
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

               {/* Placeholder for Gallery since we only have one image per project right now */}
               <div className="space-y-4">
                 <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={`${project.title} Detail View`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                 </div>
                 <p className="text-sm text-muted-foreground italic text-center">
                    Exterior view of {project.title}
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-border">
        <div className="grid grid-cols-2">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group block p-12 border-r border-border hover:bg-secondary transition-colors text-left"
          >
            <div className="flex items-center gap-2 mb-2 text-muted-foreground group-hover:text-primary transition-colors">
              <ArrowLeft size={16} />
              <span className="text-sm uppercase tracking-widest font-body">
                Previous Project
              </span>
            </div>
            <h3 className="font-heading text-2xl lg:text-3xl text-heading group-hover:text-primary transition-colors">
              {prevProject.title}
            </h3>
          </Link>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group block p-12 hover:bg-secondary transition-colors text-right"
          >
            <div className="flex items-center justify-end gap-2 mb-2 text-muted-foreground group-hover:text-primary transition-colors">
              <span className="text-sm uppercase tracking-widest font-body">
                Next Project
              </span>
              <ArrowRight size={16} />
            </div>
            <h3 className="font-heading text-2xl lg:text-3xl text-heading group-hover:text-primary transition-colors">
              {nextProject.title}
            </h3>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container-wide">
          <h2 className="font-heading text-3xl md:text-4xl mb-6">
            Ready to start your project?
          </h2>
          <p className="font-body text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Whether you have a specific vision or just an initial idea, we&apos;d love to discuss how we can help bring it to life.
          </p>
          <Button variant="heroOutline" size="xl" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
