import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About({ dark }) {
  const stats = [
    { label: "DSA Problems", value: "200+" },
    { label: "Projects Built", value: "3+" },
    { label: "CGPA", value: "7.30" },
    { label: "E-Box Rank", value: "4th" },
  ];

  const techStack = [
    "Java",
    "Python",
    "C/C++",
    "JavaScript",
    "React",
    "Node.js",
    "Spring Boot",
    "MySQL",
    "MongoDB",
    "Git",
  ];

  return (
    <section
      id="about"
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
            <span className="gradient-text">About Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Avatar Section */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-2xl opacity-30 animate-pulse`}
                ></div>
                <img
                  src="https://avatars.githubusercontent.com/u/115411154?v=4"
                  alt="Samyak Kumar Singh"
                  className="relative w-64 h-64 rounded-full border-4 border-indigo-500/50 shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className={`text-lg leading-relaxed ${dark ? "text-slate-300" : "text-slate-700"}`}>
                I'm a passionate Computer Science Engineering student at Dr. A.P.J. Abdul Kalam
                Technical University with a strong focus on full-stack development and problem-solving.
                I thrive on building clean, efficient applications and continuously improving my skills
                in Java, Spring Boot, and modern web technologies.
              </p>
              <p className={`text-lg leading-relaxed ${dark ? "text-slate-300" : "text-slate-700"}`}>
                With over 200 DSA problems solved and hands-on experience in both frontend and backend
                development, I'm dedicated to crafting robust solutions and staying current with
                industry best practices.
              </p>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card
                  className={`text-center p-6 ${
                    dark
                      ? "bg-slate-800/50 border-slate-700"
                      : "bg-slate-50 border-slate-200"
                  } hover:scale-105 transition-transform`}
                >
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                    <div
                      className={`mt-2 text-sm ${
                        dark ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <h3
              className={`text-2xl font-semibold text-center mb-6 ${
                dark ? "text-slate-200" : "text-slate-800"
              }`}
            >
              Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    dark
                      ? "bg-slate-800 text-indigo-300 border border-indigo-500/30"
                      : "bg-indigo-50 text-indigo-700 border border-indigo-200"
                  } cursor-default`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
