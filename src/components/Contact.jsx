import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

export default function Contact({ dark }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "samyakthakur250@gmail.com",
      href: "mailto:samyakthakur250@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9450566849",
      href: "tel:+919450566849",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "samyak-kumar-singh",
      href: "https://linkedin.com/in/samyak-kumar-singh",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "samyakkumarsingh",
      href: "https://github.com/samyakkumarsingh",
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 ${dark ? "bg-slate-900" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p
            className={`text-center text-lg mb-12 ${
              dark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Feel free to reach out for opportunities, collaborations, or just to say hi!
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${
                  dark ? "text-slate-100" : "text-slate-900"
                }`}
              >
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card
                        className={`${
                          dark
                            ? "bg-slate-800/50 border-slate-700 hover:border-indigo-500/50"
                            : "bg-slate-50 border-slate-200 hover:border-indigo-500/50"
                        } transition-all duration-300`}
                      >
                        <CardContent className="p-4">
                          <a
                            href={info.href}
                            target={info.label === "Email" || info.label === "Phone" ? "_self" : "_blank"}
                            rel="noopener noreferrer"
                            className="flex items-center gap-4"
                          >
                            <div
                              className={`p-3 rounded-lg ${
                                dark ? "bg-indigo-500/20" : "bg-indigo-100"
                              }`}
                            >
                              <IconComponent
                                className={`w-5 h-5 ${
                                  dark ? "text-indigo-400" : "text-indigo-600"
                                }`}
                              />
                            </div>
                            <div>
                              <p
                                className={`text-sm ${
                                  dark ? "text-slate-400" : "text-slate-600"
                                }`}
                              >
                                {info.label}
                              </p>
                              <p
                                className={`font-medium ${
                                  dark ? "text-slate-200" : "text-slate-800"
                                }`}
                              >
                                {info.value}
                              </p>
                            </div>
                          </a>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card
                className={`${
                  dark
                    ? "bg-slate-800/50 border-slate-700"
                    : "bg-slate-50 border-slate-200"
                }`}
              >
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className={`block text-sm font-medium mb-2 ${
                          dark ? "text-slate-200" : "text-slate-800"
                        }`}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border ${
                          dark
                            ? "bg-slate-900 border-slate-700 text-slate-100 focus:border-indigo-500"
                            : "bg-white border-slate-300 text-slate-900 focus:border-indigo-500"
                        } outline-none transition-colors`}
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className={`block text-sm font-medium mb-2 ${
                          dark ? "text-slate-200" : "text-slate-800"
                        }`}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border ${
                          dark
                            ? "bg-slate-900 border-slate-700 text-slate-100 focus:border-indigo-500"
                            : "bg-white border-slate-300 text-slate-900 focus:border-indigo-500"
                        } outline-none transition-colors`}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className={`block text-sm font-medium mb-2 ${
                          dark ? "text-slate-200" : "text-slate-800"
                        }`}
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border ${
                          dark
                            ? "bg-slate-900 border-slate-700 text-slate-100 focus:border-indigo-500"
                            : "bg-white border-slate-300 text-slate-900 focus:border-indigo-500"
                        } outline-none transition-colors`}
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className={`block text-sm font-medium mb-2 ${
                          dark ? "text-slate-200" : "text-slate-800"
                        }`}
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          dark
                            ? "bg-slate-900 border-slate-700 text-slate-100 focus:border-indigo-500"
                            : "bg-white border-slate-300 text-slate-900 focus:border-indigo-500"
                        } outline-none transition-colors resize-none`}
                        placeholder="Your message..."
                      />
                    </div>

                    <Button type="submit" className="w-full py-6 text-base gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
