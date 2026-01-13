import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Target, Briefcase } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const highlights = [
  {
    icon: Target,
    title: "3+ Projects",
    description: "End-to-end software projects including real-time and AI-powered systems",
  },
  {
    icon: Briefcase,
    title: "20% Uptime Improvement",
    description: "Through secure network configuration and proactive monitoring",
  },
  {
    icon: Award,
    title: "90% Same-Day Resolution",
    description: "For hardware, software, and network issues",
  },
  {
    icon: GraduationCap,
    title: "Upper Division Honours",
    description: "B.Sc. Business Information Technology - JKUAT",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={profilePhoto}
                  alt="Venny Wanjiru"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative border */}
              <div className="absolute -bottom-4 -right-4 w-72 md:w-80 h-80 md:h-96 border-2 border-primary/30 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              Junior Full-Stack Developer based in Nairobi, Kenya
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a Junior Full-Stack Developer with hands-on experience building scalable web 
              applications using JavaScript, React, Node.js, Next.js, Express, and MongoDB. 
              My strong background in systems support and network operations has given me a 
              unique perspective on building reliable, user-centered solutions.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm skilled at designing responsive UIs, building robust RESTful APIs, and applying 
              clean code practices to solve real-world problems. I'm passionate about learning 
              emerging technologies and contributing to collaborative engineering teams.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <span className="text-muted-foreground">Email:</span>
                <a href="mailto:vennywanjiru@gmail.com" className="text-primary hover:underline">
                  vennywanjiru@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-muted-foreground">Phone:</span>
                <span className="text-foreground">(+254) 722-770319</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-muted-foreground">Location:</span>
                <span className="text-foreground">Nairobi, Kenya</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="bg-background p-6 rounded-xl card-shadow hover:card-shadow-hover transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
