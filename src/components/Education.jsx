import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education({ dark }) {
  const educationData = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Dr. A.P.J. Abdul Kalam Technical University",
      location: "Lucknow, UP",
      period: "2023 – Present",
      grade: "CGPA: 7.30/10.0",
      details: "Relevant Coursework: Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks",
    },
    {
      degree: "Senior Secondary (Class XII)",
      institution: "Ambika Devi High School",
      location: "UP",
      period: "2022",
      grade: "72%",
      details: "",
    },
    {
      degree: "Secondary (Class X)",
      institution: "Ambika Devi High School",
      location: "UP",
      period: "2020",
      grade: "84%",
      details: "",
    },
  ];

  return (
    <section
      id="education"
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
            <span className="gradient-text">Education</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            {/* Vertical Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div
                className={`absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 ${
                  dark ? "bg-indigo-500/30" : "bg-indigo-500/20"
                }`}
              ></div>

              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative mb-12 ${
                    index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:text-left"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-indigo-500 -translate-x-[7px] md:-translate-x-1/2 ring-4 ${
                      dark ? "ring-slate-900" : "ring-white"
                    }`}
                  ></div>

                  <div
                    className={`ml-8 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                    }`}
                  >
                    <div
                      className={`p-6 rounded-xl ${
                        dark
                          ? "bg-slate-800/50 border border-slate-700"
                          : "bg-slate-50 border border-slate-200"
                      }`}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <GraduationCap
                          className={`w-6 h-6 mt-1 ${
                            dark ? "text-indigo-400" : "text-indigo-600"
                          }`}
                        />
                        <div className="flex-1">
                          <h3
                            className={`text-xl font-bold ${
                              dark ? "text-slate-100" : "text-slate-900"
                            }`}
                          >
                            {edu.degree}
                          </h3>
                          <p
                            className={`text-lg mt-1 ${
                              dark ? "text-indigo-400" : "text-indigo-600"
                            }`}
                          >
                            {edu.institution}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm mb-3">
                        <span
                          className={`font-medium ${
                            dark ? "text-slate-300" : "text-slate-700"
                          }`}
                        >
                          {edu.period}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full font-medium ${
                            dark
                              ? "bg-indigo-500/20 text-indigo-400"
                              : "bg-indigo-100 text-indigo-700"
                          }`}
                        >
                          {edu.grade}
                        </span>
                      </div>

                      {edu.details && (
                        <p
                          className={`text-sm ${
                            dark ? "text-slate-400" : "text-slate-600"
                          }`}
                        >
                          {edu.details}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
