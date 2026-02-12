import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero({ dark }) {
  const [typewriterText, setTypewriterText] = useState("");
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const roles = [
    "Full Stack Developer",
    "Java Enthusiast",
    "Problem Solver",
    "CSE Student @ AKTU",
  ];

  useEffect(() => {
    const currentRole = roles[loopNum % roles.length];
    const typingSpeed = isDeleting ? 50 : 150;

    const timer = setTimeout(() => {
      if (!isDeleting && typewriterIndex < currentRole.length) {
        setTypewriterText(currentRole.substring(0, typewriterIndex + 1));
        setTypewriterIndex(typewriterIndex + 1);
      } else if (isDeleting && typewriterIndex > 0) {
        setTypewriterText(currentRole.substring(0, typewriterIndex - 1));
        setTypewriterIndex(typewriterIndex - 1);
      } else if (!isDeleting && typewriterIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typewriterIndex === 0) {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typewriterText, typewriterIndex, isDeleting, loopNum]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        dark ? "bg-slate-950" : "bg-slate-50"
      }`}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              dark ? "bg-indigo-500/20" : "bg-indigo-500/10"
            }`}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="gradient-text animate-gradient">Samyak Kumar Singh</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="h-8">
            <p
              className={`text-xl sm:text-2xl md:text-3xl font-medium ${
                dark ? "text-indigo-400" : "text-indigo-600"
              }`}
            >
              {typewriterText}
              <span className="animate-pulse">|</span>
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className={`max-w-2xl mx-auto text-lg sm:text-xl ${
              dark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Computer Science Engineering Student | Full Stack Developer | Problem Solver
          </motion.p>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center gap-4">
            <a
              href="https://github.com/samyakkumarsingh"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all hover:scale-110 ${
                dark
                  ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  : "bg-white text-slate-700 hover:bg-slate-100 shadow-md"
              }`}
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/samyak-kumar-singh"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all hover:scale-110 ${
                dark
                  ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  : "bg-white text-slate-700 hover:bg-slate-100 shadow-md"
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:samyakthakur250@gmail.com"
              className={`p-3 rounded-full transition-all hover:scale-110 ${
                dark
                  ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  : "bg-white text-slate-700 hover:bg-slate-100 shadow-md"
              }`}
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="tel:+919450566849"
              className={`p-3 rounded-full transition-all hover:scale-110 ${
                dark
                  ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  : "bg-white text-slate-700 hover:bg-slate-100 shadow-md"
              }`}
              aria-label="Phone"
            >
              <Phone className="w-6 h-6" />
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => scrollToSection("#projects")}
              className="px-8 py-6 text-base"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="px-8 py-6 text-base"
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className={`w-8 h-8 ${dark ? "text-slate-400" : "text-slate-600"}`} />
        </motion.div>
      </div>
    </section>
  );
}
