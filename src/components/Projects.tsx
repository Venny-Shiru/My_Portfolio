import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Canvas Crafters",
    description:
      "A full-stack, real-time collaborative digital canvas application that enables multiple users to create, edit, and interact on shared canvases simultaneously. Features 30+ professional tools, real-time cursor tracking, chat, and permission-based collaboration using WebSockets.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Tailwind CSS"],
    liveUrl: "https://canvas-crafters.vercel.app/",
    color: "from-primary/20 to-accent/20",
  },
  {
    title: "Kilimo AI",
    description:
      "An AI-powered platform for monitoring land degradation and planning sustainable restoration initiatives. Integrated geospatial mapping, satellite-derived environmental metrics, and machine learning models to analyze soil health, vegetation indices, and erosion risk.",
    tech: ["Next.js", "TypeScript", "Supabase", "Leaflet", "OpenAI", "Vercel AI SDK", "Recharts"],
    liveUrl: "https://v0-remix-of-agri-protect-ai-dashboa.vercel.app/",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Road Maintenance System",
    description:
      "An end-to-end, AI-powered web application for detecting, measuring, and managing road defects from dashcam footage. Features a Python-based computer vision pipeline using YOLOv8 for pothole detection with severity classification.",
    tech: ["Python", "YOLOv8", "OpenCV", "PyTorch", "Node.js", "Express", "MongoDB", "React", "Leaflet"],
    liveUrl: "https://road-maintenance-dashboard.netlify.app/",
    color: "from-blue-500/20 to-indigo-500/20",
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
                <div className={`p-8 md:p-10 bg-gradient-to-br ${project.color}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-background/80 backdrop-blur-sm rounded-xl">
                      <Layers className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-background transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLink size={18} className="text-foreground" />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-background/80 backdrop-blur-sm text-foreground text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button variant="default" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      View Project
                      <ExternalLink size={14} className="ml-2" />
                    </a>
                  </Button>
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
