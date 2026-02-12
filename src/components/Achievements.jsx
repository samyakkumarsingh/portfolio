import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award } from "lucide-react";

export default function Achievements({ dark }) {
  const achievements = [
    {
      title: "Coding Competition - E-Box 2025",
      icon: Trophy,
      description: "Ranked 4th among 300 participants in a university-level coding competition",
      year: "2025",
      highlight: "4th Rank",
    },
    {
      title: "Core Java Certification",
      icon: Award,
      description: "Completed comprehensive Core Java certification program",
      year: "2025",
      highlight: "Infosys Springboard",
    },
  ];

  return (
    <section
      id="achievements"
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
            <span className="gradient-text">Achievements</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card
                    className={`h-full relative overflow-hidden ${
                      dark
                        ? "bg-slate-800/50 border-slate-700 hover:border-indigo-500/50"
                        : "bg-white border-slate-200 hover:border-indigo-500/50"
                    } transition-all duration-300`}
                  >
                    <CardContent className="p-8">
                      {/* Icon */}
                      <div
                        className={`inline-flex p-4 rounded-full mb-4 ${
                          dark
                            ? "bg-gradient-to-r from-indigo-500/20 to-purple-500/20"
                            : "bg-gradient-to-r from-indigo-100 to-purple-100"
                        }`}
                      >
                        <IconComponent
                          className={`w-8 h-8 ${
                            dark ? "text-indigo-400" : "text-indigo-600"
                          }`}
                        />
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-2xl font-bold mb-2 ${
                          dark ? "text-slate-100" : "text-slate-900"
                        }`}
                      >
                        {achievement.title}
                      </h3>

                      {/* Highlight Badge */}
                      <div className="mb-4">
                        <span
                          className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold ${
                            dark
                              ? "bg-indigo-500/20 text-indigo-400"
                              : "bg-indigo-100 text-indigo-700"
                          }`}
                        >
                          {achievement.highlight}
                        </span>
                      </div>

                      {/* Description */}
                      <p
                        className={`text-base leading-relaxed ${
                          dark ? "text-slate-300" : "text-slate-700"
                        }`}
                      >
                        {achievement.description}
                      </p>

                      {/* Year */}
                      <div className="mt-4">
                        <span
                          className={`text-sm font-medium ${
                            dark ? "text-slate-400" : "text-slate-600"
                          }`}
                        >
                          {achievement.year}
                        </span>
                      </div>

                      {/* Decorative gradient */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl -z-10"></div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* LeetCode Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
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
                <h4 className={`font-bold text-lg mb-2 ${dark ? "text-slate-100" : "text-slate-900"}`}>
                  LeetCode Progress
                </h4>
                <p className={`${dark ? "text-slate-300" : "text-slate-700"}`}>
                  <span className="font-bold text-indigo-500">200+</span> problems solved
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
