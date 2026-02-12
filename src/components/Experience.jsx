import { motion } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";

export default function Experience({ dark }) {
  const experience = {
    title: "Web Developer Intern",
    company: "Code Resite",
    period: "June 2025 – July 2025",
    location: "Remote / On-site",
    credentialId: "CR012129",
    verificationUrl: "https://www.coderesite.com",
    responsibilities: [
      "Completed a two-month internship involving remote training followed by on-site development contributions.",
      "Developed and styled responsive web pages using HTML, CSS, and JavaScript.",
      "Worked on form handling, basic backend integration, and UI improvements.",
      "Demonstrated adaptability, professionalism, and task ownership across assigned responsibilities.",
    ],
  };

  return (
    <section
      id="experience"
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
            <span className="gradient-text">Experience</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pl-8 pb-12 border-l-2 border-indigo-500"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-indigo-500 -translate-x-[9px] ring-4 ring-indigo-500/20"></div>

              <div
                className={`p-8 rounded-xl ${
                  dark
                    ? "bg-slate-800/50 border border-slate-700"
                    : "bg-white border border-slate-200 shadow-lg"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      <Briefcase className="w-6 h-6 text-indigo-500" />
                      {experience.title}
                    </h3>
                    <p className={`text-lg mt-1 ${dark ? "text-indigo-400" : "text-indigo-600"}`}>
                      {experience.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${dark ? "text-slate-300" : "text-slate-700"}`}>
                      {experience.period}
                    </p>
                    <p className={`text-sm ${dark ? "text-slate-400" : "text-slate-600"}`}>
                      {experience.location}
                    </p>
                  </div>
                </div>

                <ul className={`space-y-3 mb-6 ${dark ? "text-slate-300" : "text-slate-700"}`}>
                  {experience.responsibilities.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-indigo-500 mt-1">▹</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <div
                  className={`pt-4 border-t ${
                    dark ? "border-slate-700" : "border-slate-200"
                  } flex flex-wrap gap-4 items-center justify-between`}
                >
                  <div className={`text-sm ${dark ? "text-slate-400" : "text-slate-600"}`}>
                    <span className="font-semibold">Certificate Credential ID:</span>{" "}
                    {experience.credentialId}
                  </div>
                  <a
                    href={experience.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-indigo-500 hover:text-indigo-400 transition-colors"
                  >
                    Verify Certificate
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
