import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Globe, Wrench, Database } from "lucide-react";

export default function Skills({ dark }) {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "Python", "C/C++", "JavaScript", "SQL"],
    },
    {
      title: "Frameworks",
      icon: Server,
      skills: ["Spring", "Spring Boot"],
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: ["HTML5", "CSS3", "React", "Node.js", "Express"],
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["Git", "IntelliJ IDEA", "VS Code", "Postman"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB"],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-20 ${dark ? "bg-slate-950" : "bg-slate-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className={`h-full ${
                      dark
                        ? "bg-slate-800/50 border-slate-700 hover:border-indigo-500/50"
                        : "bg-white border-slate-200 hover:border-indigo-500/50"
                    } transition-all duration-300 hover:shadow-xl`}
                  >
                    <CardContent className="p-6">
                      {/* Icon and Title */}
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`p-3 rounded-lg ${
                            dark ? "bg-indigo-500/20" : "bg-indigo-100"
                          }`}
                        >
                          <IconComponent
                            className={`w-6 h-6 ${
                              dark ? "text-indigo-400" : "text-indigo-600"
                            }`}
                          />
                        </div>
                        <h3
                          className={`text-lg font-bold ${
                            dark ? "text-slate-100" : "text-slate-900"
                          }`}
                        >
                          {category.title}
                        </h3>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.3,
                              delay: index * 0.1 + skillIndex * 0.05,
                            }}
                            whileHover={{ scale: 1.1 }}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                              dark
                                ? "bg-slate-700 text-slate-200"
                                : "bg-slate-100 text-slate-700"
                            } cursor-default`}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Skills Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Card
              className={`inline-block ${
                dark
                  ? "bg-slate-800/50 border-slate-700"
                  : "bg-white border-slate-200"
              }`}
            >
              <CardContent className="p-6">
                <p className={`text-sm ${dark ? "text-slate-300" : "text-slate-700"}`}>
                  <span className="font-semibold text-indigo-500">Core Strengths:</span> Arrays,
                  Strings, Stacks, Queues, Trees, Hashing
                </p>
                <p
                  className={`text-sm mt-2 ${dark ? "text-slate-300" : "text-slate-700"}`}
                >
                  <span className="font-semibold text-indigo-500">Currently Improving:</span>{" "}
                  Graphs, Dynamic Programming
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
