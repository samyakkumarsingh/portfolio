import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code, BookOpen, Award, Sun, Moon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Portfolio() {
  const [dark, setDark] = useState(true);

  const sectionBg = (darkMode) => (darkMode ? "bg-slate-900" : "bg-white");
  const sectionBorder = (darkMode) => (darkMode ? "border-slate-800" : "border-slate-200");

  const skills = [
    { title: "Languages", items: ["Java", "JavaScript", "SQL"] },
    { title: "Backend", items: ["Spring Boot (learning)", "REST APIs", "Auth (RBAC)"] },
    { title: "Database", items: ["MySQL", "DBMS fundamentals"] },
    { title: "Tools", items: ["Git", "VS Code", "Postman"] }
  ];

  const highlights = [
    { label: "LeetCode", value: "150+ solved" },
    { label: "Core strengths", value: "Arrays • Strings • Trees" },
    { label: "Currently improving", value: "Graphs • DP" },
    { label: "CGPA", value: "7.6" }
  ];

  return (
    <div
      className={
        dark
          ? "min-h-screen bg-slate-950 text-slate-100 scroll-smooth"
          : "min-h-screen bg-slate-100 text-slate-900 scroll-smooth"
      }
    >
      {/* Header */}
      <header
        className={
          dark
            ? "sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur"
            : "sticky top-0 z-50 border-b border-slate-200/70 bg-slate-100/70 backdrop-blur"
        }
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => scrollToId("top")}
            className="font-semibold tracking-tight"
            aria-label="Go to top"
          >
            Samyak
          </button>
          <nav className="hidden md:flex items-center gap-6 text-sm opacity-90">
            <button type="button" onClick={() => scrollToId("projects")} className="hover:opacity-100 opacity-80">
              Projects
            </button>
            <button type="button" onClick={() => scrollToId("skills")} className="hover:opacity-100 opacity-80">
              Skills
            </button>
            <button type="button" onClick={() => scrollToId("education")} className="hover:opacity-100 opacity-80">
              Education
            </button>
            <button type="button" onClick={() => scrollToId("profiles")} className="hover:opacity-100 opacity-80">
              Profiles
            </button>
            <button type="button" onClick={() => scrollToId("contact")} className="hover:opacity-100 opacity-80">
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/samyakkumarsingh"
              target="_blank"
              rel="noreferrer"
              className={dark ? "p-2 rounded-md hover:bg-slate-800/40" : "p-2 rounded-md hover:bg-slate-900/5"}
              aria-label="GitHub"
              title="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/samyak-kumar-singh"
              target="_blank"
              rel="noreferrer"
              className={dark ? "p-2 rounded-md hover:bg-slate-800/40" : "p-2 rounded-md hover:bg-slate-900/5"}
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <button
              onClick={() => setDark(!dark)}
              className={
                dark
                  ? "p-2 rounded-md border border-slate-800 hover:bg-slate-800/40"
                  : "p-2 rounded-md border border-slate-300 hover:bg-slate-900/5"
              }
              aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
              title={dark ? "Light mode" : "Dark mode"}
              type="button"
            >
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section (No Photo) */}
      <section id="top" className="max-w-5xl mx-auto px-6 py-24 md:py-28 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-sm uppercase tracking-widest opacity-70">Java • Full‑stack • Spring Boot (learning)</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">Samyak Kumar Singh</h1>
          <p className="mt-6 text-lg opacity-85 max-w-3xl mx-auto">
            Computer Science Engineering student focused on building clean web applications, strengthening Java + backend
            fundamentals, and consistent DSA practice.
          </p>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {highlights.map((h) => (
              <div
                key={h.label}
                className={
                  dark
                    ? "rounded-xl border border-slate-800/60 bg-slate-900/30 p-4"
                    : "rounded-xl border border-slate-200 bg-white/70 p-4"
                }
              >
                <div className="text-xs uppercase tracking-wider opacity-70">{h.label}</div>
                <div className="mt-2 font-semibold">{h.value}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center gap-4">
            <Button onClick={() => scrollToId("projects")}>View Projects</Button>
            <Button variant="outline" onClick={() => scrollToId("contact")}>Contact</Button>
            <a
              href="https://drive.google.com/file/d/1_NtXn4xZHXAhtMXTKIsYqC-_QWUQyeOu/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="outline">Download Resume</Button>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className={`${sectionBg(dark)} py-20 border-y ${sectionBorder(dark)}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold">Projects</h2>
              <p className="mt-2 opacity-75">A couple of focused builds demonstrating backend fundamentals and system design basics.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className={dark ? "bg-slate-950/10" : "bg-white"}>
              <CardContent>
                <h3 className="text-xl font-semibold">Student Management System</h3>
                <p className="mt-2 opacity-80">
                  Web application with authentication and role-based access for students and professors to manage section
                  change requests.
                </p>
                <ul className="text-sm mt-3 space-y-1 opacity-80">
                  <li>• Role-based access control & authentication</li>
                  <li>• Approval workflow with status tracking</li>
                  <li>• Duplicate/invalid request prevention</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  {[
                    "Java",
                    "Spring Boot (learning)",
                    "MySQL",
                    "RBAC",
                    "REST",
                    "DBMS"
                  ].map((t) => (
                    <span
                      key={t}
                      className={
                        dark
                          ? "rounded-full border border-slate-800/70 bg-slate-900/30 px-3 py-1"
                          : "rounded-full border border-slate-200 bg-slate-50 px-3 py-1"
                      }
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className={dark ? "bg-slate-950/10" : "bg-white"}>
              <CardContent>
                <h3 className="text-xl font-semibold">DSA Practice Tracker</h3>
                <p className="mt-2 opacity-80">Java-based system to track consistency and progress in DSA preparation.</p>
                <ul className="text-sm mt-3 space-y-1 opacity-80">
                  <li>• Tracks streaks, topic coverage, and revision</li>
                  <li>• Helps maintain consistency for interview preparation</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  {["Java", "Data Structures", "Algorithms"].map((t) => (
                    <span
                      key={t}
                      className={
                        dark
                          ? "rounded-full border border-slate-800/70 bg-slate-900/30 px-3 py-1"
                          : "rounded-full border border-slate-200 bg-slate-50 px-3 py-1"
                      }
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Skills</h2>
          <p className="mt-2 opacity-75">Focused stack with strong fundamentals and active learning.</p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {skills.map((group) => (
              <Card key={group.title} className={dark ? "bg-slate-950/10" : "bg-white"}>
                <CardContent>
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2 text-sm">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className={
                          dark
                            ? "rounded-full border border-slate-800/70 bg-slate-900/30 px-3 py-1"
                            : "rounded-full border border-slate-200 bg-slate-50 px-3 py-1"
                        }
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className={`${sectionBg(dark)} py-20 border-y ${sectionBorder(dark)}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Experience</h2>
          <p className="mt-2 opacity-75">Project-driven experience through academic builds and consistent practice.</p>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <Card className={dark ? "bg-slate-950/10" : "bg-white"}>
              <CardContent>
                <h3 className="text-xl font-semibold">Academic Projects</h3>
                <p className="mt-2 opacity-80">
                  Designed and built small-to-medium projects focusing on backend workflows, authentication, and clean UI.
                </p>
                <ul className="text-sm mt-4 space-y-1 opacity-85">
                  <li>• Implemented role-based flows and status-driven approvals</li>
                  <li>• Worked with relational data modeling and validations</li>
                  <li>• Practiced writing clear, maintainable components</li>
                </ul>
              </CardContent>
            </Card>

            <Card className={dark ? "bg-slate-950/10" : "bg-white"}>
              <CardContent>
                <h3 className="text-xl font-semibold">DSA Practice</h3>
                <p className="mt-2 opacity-80">
                  Consistent interview prep with a focus on problem solving patterns and time/space tradeoffs.
                </p>
                <ul className="text-sm mt-4 space-y-1 opacity-85">
                  <li>• Solved 150+ problems on LeetCode (Java)</li>
                  <li>• Strengthened core topics: arrays, strings, trees</li>
                  <li>• Improving: graphs and dynamic programming</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <p className="opacity-80">
            <strong>B.Tech – Computer Science & Engineering</strong>
            <br />
            United Institute of Technology, Prayagraj
            <br />
            Dr. A. P. J. Abdul Kalam Technical University
            <br />
            CGPA: 7.6 | 3rd Year (5th Sem) | Graduation: 2027
          </p>
        </div>
      </section>

      {/* Coding Profiles */}
      <section id="profiles" className={`${sectionBg(dark)} py-20 border-y ${sectionBorder(dark)}`}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Coding Profiles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className={dark ? "bg-slate-950/10" : "bg-white"}>
              <CardContent>
                <div className="flex items-center gap-3">
                  <Code className="h-5 w-5" />
                  <h3 className="font-semibold">LeetCode</h3>
                </div>
                <p className="mt-2 opacity-80">150+ solved (Java)</p>
                <a
                  className="mt-4 inline-block text-sm underline opacity-80 hover:opacity-100"
                  href="https://leetcode.com/u/samyakkumarsingh/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View profile
                </a>
              </CardContent>
            </Card>

            <Card className={dark ? "bg-slate-950/10" : "bg-white"}>
              <CardContent>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5" />
                  <h3 className="font-semibold">GeeksforGeeks</h3>
                </div>
                <p className="mt-2 opacity-80">Active practice</p>
                <a
                  className="mt-4 inline-block text-sm underline opacity-80 hover:opacity-100"
                  href="https://www.geeksforgeeks.org/profile/samyakth5n1f"
                  target="_blank"
                  rel="noreferrer"
                >
                  View profile
                </a>
              </CardContent>
            </Card>

            <Card className={dark ? "bg-slate-950/10" : "bg-white"}>
              <CardContent>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5" />
                  <h3 className="font-semibold">Highlights</h3>
                </div>
                <ul className="mt-3 text-sm space-y-1 opacity-85">
                  <li>• Strong Java fundamentals</li>
                  <li>• Learning Spring Boot</li>
                  <li>• Consistent DSA practice</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="opacity-80">Open to internships and full‑stack roles</p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <Card className={dark ? "bg-slate-950/10" : "bg-white"}>
              <CardContent>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="mt-2 opacity-80">Best way to reach me:</p>
                <a className="mt-3 inline-flex items-center gap-2 underline" href="mailto:samyakhakur250@gmail.com">
                  <Mail className="h-5 w-5" />
                  samyakhakur250@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className={dark ? "bg-slate-950/10" : "bg-white"}>
              <CardContent>
                <h3 className="text-lg font-semibold">Social</h3>
                <p className="mt-2 opacity-80">Profiles and platforms:</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="https://github.com/samyakkumarsingh"
                    target="_blank"
                    rel="noreferrer"
                    className={dark ? "p-2 rounded-md border border-slate-800/70 hover:bg-slate-800/30" : "p-2 rounded-md border border-slate-200 hover:bg-slate-900/5"}
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/samyak-kumar-singh"
                    target="_blank"
                    rel="noreferrer"
                    className={dark ? "p-2 rounded-md border border-slate-800/70 hover:bg-slate-800/30" : "p-2 rounded-md border border-slate-200 hover:bg-slate-900/5"}
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://leetcode.com/u/samyakkumarsingh/"
                    target="_blank"
                    rel="noreferrer"
                    className={dark ? "p-2 rounded-md border border-slate-800/70 hover:bg-slate-800/30" : "p-2 rounded-md border border-slate-200 hover:bg-slate-900/5"}
                    aria-label="LeetCode"
                    title="LeetCode"
                  >
                    <Code className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.geeksforgeeks.org/profile/samyakth5n1f"
                    target="_blank"
                    rel="noreferrer"
                    className={dark ? "p-2 rounded-md border border-slate-800/70 hover:bg-slate-800/30" : "p-2 rounded-md border border-slate-200 hover:bg-slate-900/5"}
                    aria-label="GeeksforGeeks"
                    title="GeeksforGeeks"
                  >
                    <BookOpen className="h-5 w-5" />
                  </a>
                  <a
                    href="https://x.com/SamyakSingh250?s=08"
                    target="_blank"
                    rel="noreferrer"
                    className={dark ? "p-2 rounded-md border border-slate-800/70 hover:bg-slate-800/30" : "p-2 rounded-md border border-slate-200 hover:bg-slate-900/5"}
                    aria-label="X"
                    title="X"
                  >
                    <Award className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="text-center py-6 opacity-60">© 2025 Samyak Kumar Singh</footer>
    </div>
  );
}
