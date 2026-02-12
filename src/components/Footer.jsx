import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer({ dark }) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/samyakkumarsingh",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/samyak-kumar-singh",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:samyakthakur250@gmail.com",
    },
  ];

  return (
    <footer
      className={`py-12 border-t ${
        dark ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all hover:scale-110 ${
                    dark
                      ? "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                      : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 shadow-md"
                  }`}
                  aria-label={link.label}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className={`flex items-center gap-2 ${dark ? "text-slate-400" : "text-slate-600"}`}>
              Designed and built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by{" "}
              <span className="font-semibold gradient-text">Samyak Kumar Singh</span>
            </p>
            <p className={`text-sm ${dark ? "text-slate-500" : "text-slate-500"}`}>
              © {currentYear} Samyak Kumar Singh. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
