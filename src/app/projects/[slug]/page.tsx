import { notFound } from "next/navigation";
import { projects } from "@/constants/projects";
import { ProjectDetails } from "@/components/project/ProjectDetails";

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
    <ProjectDetails 
      project={project} 
      nextProject={nextProject} 
      prevProject={prevProject} 
    />
  );
}
