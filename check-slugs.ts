
import { projects } from "./src/constants/projects";

console.log("Projects count:", projects.length);
const slugs = projects.map(p => p.slug);
console.log("Slugs:", slugs);

const uniqueSlugs = new Set(slugs);
if (uniqueSlugs.size !== slugs.length) {
    console.error("DUPLICATE SLUGS FOUND!");
} else {
    console.log("All slugs are unique.");
}

const ids = projects.map(p => (p as any).id);
console.log("IDs (should be undefined):", ids);
