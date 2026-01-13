import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Building2 } from "lucide-react";

const experiences = [
  {
    title: "Assistant ICT Officer",
    company: "Kenya National Highways Authority",
    period: "Jun 2025 - Nov 2025",
    highlights: [
      "Improved network uptime by 20% through secure network configuration and proactive monitoring for 30+ staff",
      "Managed domain accounts and access rights, streamlining user onboarding for 30+ new employees yearly",
      "Resolved hardware, software, and network issues with an average same-day resolution rate of 90%",
      "Supported digital collaboration by configuring virtual meeting systems used across 5 departments",
      "Performed system updates and workstation optimizations, improving device performance by 15%",
    ],
  },
  {
    title: "Administrative Trainee",
    company: "Kenya National Highways Authority",
    period: "Apr 2024 - Mar 2025",
    highlights: [
      "Maintained ICT equipment and network infrastructure, supporting 30+ end users daily",
      "Reduced support resolution time by 30% through quick troubleshooting of connectivity and device issues",
      "Managed electronic/manual records with 100% data accuracy, improving reporting efficiency",
      "Enhanced workflow efficiency by digitizing 400+ documents and organizing office data systems",
    ],
  },
  {
    title: "ICT Intern",
    company: "Kenya National Highways Authority",
    period: "Apr 2023 - Mar 2024",
    highlights: [
      "Assisted in network configuration and troubleshooting, contributing to consistent connectivity uptime of 95%+",
      "Supported domain user management for 30+ staff, improving access and account reliability",
      "Identified and documented equipment faults, reducing downtime by 25%",
      "Performed software installations and updates, boosting workstation efficiency",
    ],
  },
  {
    title: "ICT Attachee",
    company: "Kenya National Highways Authority",
    period: "May 2022 - Aug 2022",
    highlights: [
      "Installed operating systems and essential applications for 10+ workstations",
      "Conducted hardware maintenance and connectivity setup, reducing incident recurrence by 15%",
      "Generated vehicle tracking reports supporting operational planning",
      "Assisted with ICT asset tracking and documentation, improving inventory accuracy",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.title}-${exp.period}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative grid md:grid-cols-2 gap-8 mb-12 ${
                index % 2 === 0 ? "" : "md:direction-rtl"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-[7px] md:-translate-x-1/2 z-10" />

              {/* Content */}
              <div
                className={`pl-8 md:pl-0 ${
                  index % 2 === 0
                    ? "md:pr-12 md:text-right"
                    : "md:col-start-2 md:pl-12 md:text-left"
                }`}
              >
                <div
                  className={`bg-background p-6 rounded-xl card-shadow hover:card-shadow-hover transition-all duration-300 ${
                    index % 2 === 0 ? "md:ml-auto" : ""
                  } max-w-xl`}
                >
                  <div className={`flex items-center gap-2 text-primary mb-2 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}>
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  
                  <div className={`flex items-center gap-2 text-muted-foreground mb-4 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}>
                    <Building2 size={14} />
                    <span className="text-sm">{exp.company}</span>
                  </div>

                  <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    {exp.highlights.slice(0, 3).map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="text-sm text-muted-foreground leading-relaxed"
                      >
                        • {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
