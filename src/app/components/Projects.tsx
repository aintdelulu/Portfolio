import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ExternalLink, Github, Smartphone, Globe, Wrench, ChevronLeft, ChevronRight } from "lucide-react";

type ProjectCategory = "Mobile App" | "Web App" | "IT Support";

function MobileAppShowcase({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-[98%] aspect-[9/19.5] bg-gray-950 rounded-[1.5rem] border-[6px] border-gray-800 overflow-hidden shadow-2xl z-10 group-hover:scale-105 transition-transform duration-500 group/slider">
      <div className="absolute top-0 inset-x-0 h-4 bg-gray-800 rounded-b-xl w-1/2 mx-auto z-20" />

      {images.map((img, idx) => (
        <motion.img
          key={img}
          src={img}
          alt={`App screen ${idx + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentIndex === idx ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      ))}

      {/* Slider Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 z-30">
        <button onClick={prevImage} className="p-1.5 rounded-full bg-black/50 text-white hover:bg-black/80 backdrop-blur-sm transition-colors">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button onClick={nextImage} className="p-1.5 rounded-full bg-black/50 text-white hover:bg-black/80 backdrop-blur-sm transition-colors">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 inset-x-0 flex justify-center gap-1.5 z-30">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${currentIndex === idx ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}

function WebAppShowcase({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-[95%] aspect-[16/10] bg-gray-900 rounded-lg border border-gray-700 overflow-hidden shadow-2xl z-10 group-hover:scale-105 transition-transform duration-500 flex flex-col group/slider">
      {/* Browser Bar */}
      <div className="h-6 bg-gray-800 border-b border-gray-700 flex items-center px-3 gap-1.5 shrink-0 z-30">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
      </div>
      {/* Content */}
      <div className="relative flex-1 bg-black">
        {images.map((img, idx) => (
          <motion.img
            key={img}
            src={img}
            alt={`Web screen ${idx + 1}`}
            className="absolute inset-0 w-full h-full object-cover object-top"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentIndex === idx ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
        ))}

        {/* Slider Controls */}
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 z-30">
          <button onClick={prevImage} className="p-2 rounded-full bg-black/60 text-white hover:bg-black/90 backdrop-blur-sm transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={nextImage} className="p-2 rounded-full bg-black/60 text-white hover:bg-black/90 backdrop-blur-sm transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2 z-30">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full transition-colors ${currentIndex === idx ? "bg-white" : "bg-white/40 shadow-sm"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const projects: {
    title: string;
    description: string;
    tech: string[];
    image?: string | string[];
    github: string;
    live: string;
    category: ProjectCategory;
    frame?: "mobile" | "web";
  }[] = [
      {
        title: "E-Commerce Mobile App",
        description: "A full-featured cross-platform e-commerce mobile application built with Flutter and Dart. Includes product listings, cart management, user authentication, and a smooth checkout flow.",
        tech: ["Flutter", "Dart", "Mobile UI", "REST API"],
        image: [
          "/projects/ecommerce/01-welcome.png",
          "/projects/ecommerce/02-splash.png",
          "/projects/ecommerce/03-login.png",
          "/projects/ecommerce/04-home.png",
          "/projects/ecommerce/05-detail.png"
        ],
        github: "https://github.com/aintdelulu",
        live: "",
        category: "Mobile App"
      },
      {
        title: "Valentine's Day Website",
        description: "An interactive and animated Valentine's Day website crafted with React, Vite, and TypeScript. Features smooth animations, heartfelt messages, and a romantic user experience.",
        tech: ["React", "TypeScript", "Vite", "CSS Animations"],
        image: [
          "/projects/valentine/01-home.png",
          "/projects/valentine/02-story.png",
          "/projects/valentine/03-note.png"
        ],
        github: "https://github.com/aintdelulu",
        live: "",
        category: "Web App"
      },
      {
        title: "E-Wallet Web App",
        description: "A digital wallet web application inspired by GCash and PayMaya, supporting cash-in and cash-out transactions. Built with React, TypeScript, and Vite for a fast, responsive experience.",
        tech: ["React", "TypeScript", "Vite", "Fintech UI"],
        image: [
          "/projects/ewallet/01.png",
          "/projects/ewallet/02.png",
          "/projects/ewallet/03.png",
          "/projects/ewallet/04.png"
        ],
        github: "https://github.com/aintdelulu",
        live: "",
        category: "Web App",
        frame: "mobile"
      },
      {
        title: "Hardware Troubleshooting & Repair",
        description: "Hands-on experience diagnosing and repairing various computer hardware issues — including RAM replacements, SSD installations, GPU reseating, and cooling system maintenance.",
        tech: ["Hardware Diagnostics", "Component Replacement", "RAM/SSD Upgrade", "Testing"],
        github: "",
        live: "",
        category: "IT Support"
      },
      {
        title: "OS Deployment & Integration",
        description: "Experienced in deploying and configuring operating systems including Windows 10/11 and Linux distros. Managed OS installations, driver updates, and system configuration for multiple machines.",
        tech: ["Windows 10/11", "Linux/Ubuntu", "OS Installation", "System Config"],
        github: "",
        live: "",
        category: "IT Support"
      },
      {
        title: "Network Setup & Troubleshooting",
        description: "Set up and maintained local area networks including basic router configuration, cable management, and Wi-Fi troubleshooting to ensure stable connectivity for users.",
        tech: ["Network Config", "Router Setup", "Cable Management", "Wi-Fi Diagnostics"],
        github: "",
        live: "",
        category: "IT Support"
      }
    ];

  const categoryColors: Record<ProjectCategory, string> = {
    "Mobile App": "text-purple-400 bg-purple-500/10 border-purple-500/20",
    "Web App": "text-blue-400 bg-blue-500/10 border-blue-500/20",
    "IT Support": "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
  };

  const categoryIcons: Record<ProjectCategory, React.ElementType> = {
    "Mobile App": Smartphone,
    "Web App": Globe,
    "IT Support": Wrench
  };

  return (
    <section id="projects" className="min-h-screen px-6 py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl mb-6 text-white">My Projects</h2>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl">
            A mix of software development and IT support work — showcasing both my coding abilities and technical expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const CategoryIcon = categoryIcons[project.category];
            return (
              <motion.div
                key={project.title}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-500 transition-all group flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {project.image && (
                  <div className="relative overflow-hidden aspect-[4/3] bg-gray-900">
                    {(() => {
                      const frameType = project.frame || (project.category === "Mobile App" ? "mobile" : project.category === "Web App" ? "web" : "none");

                      if (frameType === "mobile" && Array.isArray(project.image)) {
                        return (
                          <>
                            <div
                              className="absolute inset-0 bg-cover bg-center blur-2xl opacity-40 scale-125"
                              style={{ backgroundImage: `url(${project.image[0]})` }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center py-3">
                              <MobileAppShowcase images={project.image} />
                            </div>
                          </>
                        );
                      }

                      if (frameType === "web" && Array.isArray(project.image)) {
                        return (
                          <>
                            <div
                              className="absolute inset-0 bg-cover bg-center blur-2xl opacity-40 scale-125"
                              style={{ backgroundImage: `url(${project.image[0]})` }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center py-3">
                              <WebAppShowcase images={project.image} />
                            </div>
                          </>
                        );
                      }

                      return (
                        <img
                          src={Array.isArray(project.image) ? project.image[0] : project.image as string}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      );
                    })()}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent z-20 pointer-events-none" />
                    <div className={`absolute top-3 right-3 z-30 flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs backdrop-blur-md bg-gray-950/80 ${categoryColors[project.category]}`}>
                      <CategoryIcon className="w-3 h-3" />
                      {project.category}
                    </div>
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  {!project.image && (
                    <div className={`self-start mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs bg-gray-900/50 ${categoryColors[project.category]}`}>
                      <CategoryIcon className="w-4 h-4" />
                      {project.category}
                    </div>
                  )}
                  <h3 className="text-2xl mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {(project.github || project.live) && (
                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                          Code
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}