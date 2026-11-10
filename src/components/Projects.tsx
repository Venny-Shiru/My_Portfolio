import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectCanvasCrafters from "@/assets/project-canvas-crafters.jpg";
import projectKilimoAi from "@/assets/project-kilimo-ai.jpg";
import projectRoadMaintenance from "@/assets/project-road-maintenance.jpg";
import projectAspirea from "@/assets/project-aspirea.svg";

const projects = [
  {
    title: "Canvas Crafters",
    description:
      "A full-stack, real-time collaborative digital canvas application that enables multiple users to create, edit, and interact on shared canvases simultaneously. Features 30+ professional tools, real-time cursor tracking, chat, and permission-based collaboration using WebSockets.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Tailwind CSS"],
    liveUrl: "https://canvas-crafters.vercel.app/",
    image: projectCanvasCrafters,
  },
  {
    title: "Kilimo AI",
    description:
      "An AI-powered platform for monitoring land degradation and planning sustainable restoration initiatives. Integrated geospatial mapping, satellite-derived environmental metrics, and machine learning models to analyze soil health, vegetation indices, and erosion risk.",
    tech: ["Next.js", "TypeScript", "Supabase", "Leaflet", "OpenAI", "Vercel AI SDK", "Recharts"],
    liveUrl: "https://v0-remix-of-agri-protect-ai-dashboa.vercel.app/",
    image: projectKilimoAi,
  },
  {
    title: "Road Maintenance System",
    description:
      "An end-to-end, AI-powered web application for detecting, measuring, and managing road defects from dashcam footage. Features a Python-based computer vision pipeline using YOLOv8 for pothole detection with severity classification.",
    tech: ["Python", "YOLOv8", "OpenCV", "PyTorch", "Node.js", "Express", "MongoDB", "React", "Leaflet"],
    liveUrl: "https://road-maintenance-dashboard.netlify.app/",
    image: projectRoadMaintenance,
  },
  {
    title: "Aspirea Career Portal",
    description:
      "A digital career companion for Kenyan learners, helping students explore careers, choose supporting subjects, assess their interests, and compare universities and TVET institutions as they plan their futures.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Career Assessment", "Education Platform"],
    liveUrl: "https://aspirea.netlify.app/",
    image: projectAspirea,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing full-stack development, AI integration, and real-time collaboration.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-background rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className={`relative h-64 md:h-auto overflow-hidden ${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-background/20" />
                  </div>

                  {/* Content */}
                  <div className={`p-6 md:p-8 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Layers className="w-5 h-5 text-primary" />
                      </div>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-5 leading-relaxed text-sm md:text-base line-clamp-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.slice(0, 6).map((tech) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, y: 6 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.05 }}
                          whileHover={{ scale: 1.03 }}
                          className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.tech.length > 6 && (
                        <motion.span
                          initial={{ opacity: 0, y: 6 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.05 }}
                          className="px-2.5 py-1 bg-secondary text-muted-foreground text-xs rounded-full"
                        >
                          +{project.tech.length - 6} more
                        </motion.span>
                      )}
                    </div>

                    <Button variant="default" size="sm" className="w-fit" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        View Project
                        <ExternalLink size={14} className="ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
