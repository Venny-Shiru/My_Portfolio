import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "RESTful APIs", "Python", "MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git & GitHub", "Docker", "AWS Basics", "Jenkins", "Vercel", "Render", "Railway", "Firebase"],
  },
  {
    title: "Testing & AI",
    skills: ["Jest", "Postman", "Unit Testing", "Debugging", "TensorFlow", "API Integration"],
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Problem Solving", "Teamwork", "Adaptability", "Time Management", "Critical Thinking", "Leadership"],
  },
  {
    title: "Professional",
    skills: ["Agile/Scrum", "UI/UX Collaboration", "End-User Support", "Networking", "Troubleshooting"],
  },
];

// Update heading from "Technical Skills" to simply "Skills" for clarity

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-background p-6 rounded-xl card-shadow hover:card-shadow-hover transition-all duration-300 ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.45, delay: sIndex * 0.03 }}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-full hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
