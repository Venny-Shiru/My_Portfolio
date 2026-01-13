import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Calendar } from "lucide-react";

import certSoftware from "@/assets/Full-Stack Development MERN Stack Certificate.pdf";
import certAI from "@/assets/OIAI-Certificate-Venny-Wanjiru.pdf";
import certHardware from "@/assets/Computer Hardware Basics Badge.pdf";

const certifications = [
  {
    title: "Software Development",
    issuer: "Power Learn Project Africa",
    period: "Feb 2025 - Jul 2025",
    file: certSoftware,
  },
  {
    title: "AI Literacy Certified Course",
    issuer: "Ottermans Institute",
    period: "Sep 2025 - Oct 2025",
    file: certAI,
  },
  {
    title: "Computer Hardware Certification",
    issuer: "CISCO Networking Academy",
    period: "Aug 2023 - Sep 2023",
    file: certHardware,
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background p-6 rounded-xl card-shadow hover:card-shadow-hover transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
              <div className="flex items-center gap-2 text-xs text-primary">
                <Calendar size={12} />
                <span>{cert.period}</span>
              </div>

              {cert.file && (
                <div className="mt-4">
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 bg-primary text-background rounded-md text-sm"
                  >
                    View Certificate
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
