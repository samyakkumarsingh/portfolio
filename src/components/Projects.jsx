import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

export default function Projects({ dark }) {
  const projects = [
    {
      title: "Student Management System",
      tech: ["Core Java", "OOP", "Console-Based"],
      year: "2024",
      description: [
        "Developed a console-based system to manage student attendance, grades, and academic records.",
        "Applied OOP principles to ensure modular, maintainable code structure.",
        "Implemented role-based workflows for administrative operations.",
      ],
      githubUrl: "https://github.com/samyakkumarsingh",
    },
    {
      title: "DSA Problem Solving Tracker",
      tech: ["Java", "Data Structures", "Algorithms"],
      year: "2024",
      description: [
        "Solved 200+ problems across arrays, strings, stacks, queues, trees, and hashing.",
        "Applied optimized approaches including sliding window, two pointers, recursion, and greedy techniques.",
      ],
      githubUrl: "https://github.com/samyakkumarsingh",
    },
    {
      title: "Task Management REST API",
      tech: ["Spring Boot", "MySQL", "REST API", "JPA"],
      year: "2025",
      description: [
        "Built a RESTful backend service supporting task creation, updates, and status tracking.",
        "Implemented CRUD APIs using Spring Boot, JPA, and MySQL with layered architecture.",
      ],
      githubUrl: "https://github.com/samyakkumarsingh",
    },
  ];

  return (
    <section
      id="projects"
      className={`py-20 ${dark ? "bg-slate-900" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card
                  className={`h-full group relative overflow-hidden ${
                    dark
                      ? "bg-slate-800/50 border-slate-700 hover:border-indigo-500/50"
                      : "bg-slate-50 border-slate-200 hover:border-indigo-500/50"
                  } transition-all duration-300`}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Year Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          dark
                            ? "bg-indigo-500/20 text-indigo-400"
                            : "bg-indigo-100 text-indigo-700"
                        }`}
                      >
                        {project.year}
                      </span>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full transition-colors ${
                          dark
                            ? "hover:bg-slate-700 text-slate-400 hover:text-white"
                            : "hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                        }`}
                        aria-label="View on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-xl font-bold mb-3 ${
                        dark ? "text-slate-100" : "text-slate-900"
                      }`}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <ul
                      className={`space-y-2 mb-6 flex-grow ${
                        dark ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      {project.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-indigo-500 mt-1">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            dark
                              ? "bg-slate-700 text-slate-300"
                              : "bg-white text-slate-700 border border-slate-200"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Hover Overlay */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ${
                        dark ? "bg-slate-900/90" : "bg-white/90"
                      }`}
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors"
                      >
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
