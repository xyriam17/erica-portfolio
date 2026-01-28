import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const categories = ["All", "Website Dev", "GHL Automation", "Zapier Automation", "Make Automation"];

interface Project {
  id: number;
  title?: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  type: "website" | "automation";
  details?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "FreeStyle Libre System",
    category: "Website Dev",
    description:
      "A clean, patient-focused healthcare site showcasing the FreeStyle Libre continuous glucose monitoring system with easy-to-understand info, appointment booking, and seamless diabetes management support.",
    image: "/1.png",
    tags: ["GHL", "Website"],
    link: "https://activemedical.digilign.com/home",
    type: "website",
  },
  {
    id: 2,
    title: "Runpreneur",
    category: "Website Dev",
    description:
      "A personal charity challenge site chronicling Kevin’s ultra-distance run-vlogging journey to run 40,075 km barefoot while raising funds and awareness for children’s causes around the world.",
    image: "/2.png",
    tags: ["GHL", "Website"],
    link: "https://runpreneur.org.uk/",
    type: "website",
  },
  {
    id: 3,
    title: "UpRaise Construction",
    category: "Website Dev",
    description:
      "A professional GoHighLevel landing page template showcasing UpRaise Construction’s residential, commercial, and handyman services with clear calls‑to‑action for requesting a quote.",
    image: "/3.png",
    tags: ["GHL", "Landing Page"],
    link: "https://runpreneur.org.uk/",
    type: "website",
  },
  {
    id: 4,
    title: "Birdy Boost",
    category: "Website Dev",
    description:
      "A service landing page promoting Birdy Boost’s targeted digital marketing and AI‑powered lead generation solutions for mortgage brokers and real estate professionals.",
    image: "/4.png",
    tags: ["GHL", "Landing Page"],
    link: "https://birdyboost.com/fastgrowth-4247",
    type: "website",
  },
  {
    id: 5,
    title: "Two Chefs",
    category: "Website Dev",
    description:
      "A clean and appetizing website showcasing Two Chefs’ chef‑prepared healthy frozen meals, featuring menu highlights, ordering options, and clear calls‑to‑action for customers to explore and purchase meals online.",
    image: "/5.png",
    tags: ["GHL", "Ecommerce"],
    link: "https://app.gohighlevel.com/v2/preview/igfnwSNAJ0Kqj5mL98ZH",
    type: "website",
  },
  {
    id: 6,
    title: "Cafe @ Highgate",
    category: "Website Dev",
    description:
      "A full café website showcasing Cafe @ Highgate’s artisanal coffee, freshly baked goods, and seasonal menu, featuring online ordering, reservation options, and engaging content to attract visitors and build a loyal customer community.",
    image: "/6.png",
    tags: ["GHL", "Coffee"],
    link: "https://app.gohighlevel.com/v2/preview/igfnwSNAJ0Kqj5mL98ZH",
    type: "website",
  },
  {
    id: 7,
    title: "Social Housing Group",
    category: "Website Dev",
    description:
      "A professional real estate website highlighting property listings, agent profiles, services, and lead capture features to help buyers and sellers explore homes and connect with local realty experts.",
    image: "/7.png",
    tags: ["GHL", "Real State"],
    link: "https://app.gohighlevel.com/v2/preview/9WgMWE18fuLUKKzEk8Uo",
    type: "website",
  },
  {
    id: 8,
    title: "",
    category: "GHL Automation",
    description:
      "",
    image: "/9.png",
    tags: ["GoHighLevel","Automation"],
    type: "automation",
    details:
      "",
  },
  {
    id: 9,
    title: "",
    category: "GHL Automation",
    description:
      "",
    image: "/10.png",
    tags: ["GoHighLevel","Automation"],
    type: "automation",
    details:
      "",
  },
  {
    id: 10,
    title: "",
    category: "GHL Automation",
    description:
      "",
    image: "/11.png",
    tags: ["GoHighLevel","Automation"],
    type: "automation",
    details:
      "",
  },
  {
    id: 11,
    title: "",
    category: "GHL Automation",
    description:
      "",
    image: "/12.png",
    tags: ["GoHighLevel","Automation"],
    type: "automation",
    details:
      "",
  },
  
  {
    id: 12,
    title: "",
    category: "Make Automation",
    description:
      "",
    image: "/13.png",
    tags: ["Make.com","Automation"],
    type: "automation",
    details:
      "",
  },
  {
    id: 13,
    title: "",
    category: "Make Automation",
    description:
      "",
    image: "/14.png",
    tags: ["Make.com","Automation"],
    type: "automation",
    details:
      "",
  },
  {
    id: 14,
    title: "",
    category: "Make Automation",
    description:
      "",
    image: "/15.png",
    tags: ["Make.com","Automation"],
    type: "automation",
    details:
      "",
  },
  {
    id: 15,
    title: "",
    category: "Make Automation",
    description:
      "",
    image: "/16.png",
    tags: ["Make.com","Automation"],
    type: "automation",
    details:
      "",
  },
  {
    id: 16,
    title: "",
    category: "Make Automation",
    description:
      "",
    image: "/17.png",
    tags: ["Make.com","Automation"],
    type: "automation",
    details:
      "",
  },
  {
    id: 17,
    title: "",
    category: "Make Automation",
    description:
      "",
    image: "/18.png",
    tags: ["Make.com","Automation"],
    type: "automation",
    details:
      "",
  },
  {
    id: 6,
    title: "",
    category: "Zapier Automation",
    description:
      "",
    image: "/e.png",
    tags: ["Zapier", "Integration"],
    type: "automation",
    details:
      " ",
  },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const handleViewProject = (project: Project) => {
    if (project.type === "website" && project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer");
    } else {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };

  return (
    <section id="projects" className="section-padding bg-dark-surface">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A showcase of websites and automation systems I've built for clients across various industries.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 card-hover"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title || "Project Image"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    variant="default"
                    size="sm"
                    className="gap-2"
                    onClick={() => handleViewProject(project)}
                  >
                    {project.type === "website" ? (
                      <>
                        View Project <ExternalLink className="w-4 h-4" />
                      </>
                    ) : (
                      <>View Details</>
                    )}
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {project.category}
                </span>
                {project.title && (
                  <h3 className="text-lg font-display font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                )}
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl bg-card border-border">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider px-2 py-1 bg-primary/10 rounded">
                    {selectedProject.category}
                  </span>
                </div>
              </DialogHeader>

              <div className="w-full my-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title || "Project Image"}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <DialogDescription className="text-muted-foreground text-base leading-relaxed">
                {selectedProject.details || selectedProject.description}
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
