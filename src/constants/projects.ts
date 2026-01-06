import { StaticImageData } from "next/image";
import projectInterior from "@/assets/project-interior.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectVilla from "@/assets/project-villa.jpg";
import projectResidential from "@/assets/project-residential.jpg";

export interface Project {
  slug: string;
  title: string;
  category: "Residential" | "Commercial" | "Mixed Use";
  location: string;
  year: string;
  image: StaticImageData;
  description: string;
  challenge: string;
  solution: string;
  stats: {
    client: string;
    size: string;
    services: string;
    status: string;
  };
}

export const projects: Project[] = [
  {
    slug: "the-horizon-house",
    title: "The Horizon House",
    category: "Residential",
    location: "Surrey, UK",
    year: "2023",
    image: projectInterior,
    description:
      "A stunning contemporary residence nestled in the Surrey Hills, designed to maximize panoramic views while maintaining privacy. The Horizon House represents a harmonious blend of modern minimalism and warm, natural materials.",
    challenge:
      "The primary challenge was to create a substantial family home on a steeply sloping site within a designated Area of Outstanding Natural Beauty (AONB). Strict planning restrictions required the building to sit low in the landscape while we aimed to provide expansive views from all key living areas.",
    solution:
      "We utilized a split-level design that cascades down the hillside. The lower levels are partially submerged, using local stone to ground the building visually. The upper level, featuring the main living spaces, is a lightweight glass and timber pavilion that floats above the landscape, capturing the light and views.",
    stats: {
      client: "Private Client",
      size: "450 sqm",
      services: "Architecture, Interior Design",
      status: "Completed",
    },
  },
  {
    slug: "apex-tower",
    title: "Apex Tower",
    category: "Commercial",
    location: "Lagos, Nigeria",
    year: "2022",
    image: projectCommercial,
    description:
      "Apex Tower stands as a new landmark in Lagos's business district. This 25-story mixed-use development combines Grade A office space with luxury retail and a rooftop sky garden.",
    challenge:
      "Designing a high-rise in a dense tropical city required innovative strategies for energy efficiency and climate control. We needed to mitigate solar gain while maintaining transparency and views, all within a constrained urban footprint.",
    solution:
      "The tower features a high-performance double-skin facade with integrated shading fins that are optimized based on solar orientation. This significantly reduces cooling loads. The podium level engages the street with active retail frontage, while the tower setback creates a public plaza.",
    stats: {
      client: "Apex Development Group",
      size: "25,000 sqm",
      services: "Architecture, Masterplanning",
      status: "Completed",
    },
  },
  {
    slug: "villa-serene",
    title: "Villa Serene",
    category: "Residential",
    location: "Ikoyi, Lagos",
    year: "2023",
    image: projectVilla,
    description:
      "A sanctuary of calm in the heart of Ikoyi, Villa Serene reinterprets traditional Nigerian courtyard housing for contemporary luxury living. The design centers around water and vegetation to create a cool microclimate.",
    challenge:
      "The site was relatively narrow and flanked by tall neighboring structures, raising concerns about privacy and natural light. The client desired an open, airy feel without compromising security or seclusion.",
    solution:
      "We turned the focus inward, creating a series of internal courtyards and light wells. The exterior facade is screened with decorative geometric blockwork that filters light and air while providing privacy. Inside, floor-to-ceiling glass walls open completely to the lush central garden.",
    stats: {
      client: "Private Client",
      size: "800 sqm",
      services: "Architecture, Landscape Design",
      status: "Completed",
    },
  },
  {
    slug: "the-quartyard",
    title: "The Quartyard",
    category: "Residential",
    location: "London, UK",
    year: "2021",
    image: projectResidential,
    description:
      "An award-winning multi-unit housing development in East London that prioritizes community and shared space. The Quartyard transforms a former industrial brownfield site into a vibrant residential community.",
    challenge:
      "The brief called for high-density housing on a brownfield site with a limited budget. We needed to foster a sense of community often missing in modern apartment blocks while adhering to strict local density and height regulations.",
    solution:
      "We arranged the units around a central, shared courtyard that serves as the social heart of the development. All apartments have dual aspects for cross-ventilation and overlook the green space. Generous balconies and walkways encourage interaction among residents.",
    stats: {
      client: "Urban Living Homes",
      size: "3,500 sqm (25 Units)",
      services: "Architecture",
      status: "Completed",
    },
  },
  {
    slug: "meadow-view-estate",
    title: "Meadow View Estate",
    category: "Residential",
    location: "Oxfordshire, UK",
    year: "2022",
    image: projectInterior,
    description:
      "A sustainable renovation and extension of a historic farmhouse. Meadow View Estate brings a 19th-century property into the 21st century with energy-efficient upgrades and a modern glass extension.",
    challenge:
      "Balancing the preservation of the historic fabric with the client's desire for open-plan modern living and high energy performance standards (Passivhaus equivalent).",
    solution:
      "The original farmhouse was meticulously restored using traditional lime renders and breathable insulation. A contrasting frameless glass link connects it to a new timber-clad extension that houses the kitchen and dining areas, creating a clear dialogue between old and new.",
    stats: {
      client: "Private Client",
      size: "350 sqm",
      services: "Architecture, Conservation",
      status: "Completed",
    },
  },
  {
    slug: "innovation-hub",
    title: "Innovation Hub",
    category: "Commercial",
    location: "Victoria Island, Lagos",
    year: "2023",
    image: projectCommercial,
    description:
      "A dynamic co-working and tech incubator space designed to foster collaboration. The Innovation Hub repurposes an existing warehouse into a vibrant ecosystem for startups.",
    challenge:
      "Transforming a dark, industrial warehouse into a bright, stimulating workspace on a tight budget. We needed flexible spaces that could adapt to teams of varying sizes.",
    solution:
      "We opened up the roof with skylights and introduced a mezzanine level to double the usable floor area. Shipping containers were retrofitted as private meeting pods and breakout rooms, providing a cost-effective and industrial-chic aesthetic.",
    stats: {
      client: "TechSpace Nigeria",
      size: "1,200 sqm",
      services: "Interior Design, Fit-out",
      status: "Completed",
    },
  },
];
