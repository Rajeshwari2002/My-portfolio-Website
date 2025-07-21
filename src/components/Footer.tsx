
"use client"

import { Heart, Github, Linkedin, Mail, Phone, Code, Coffee } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rajeshwari-g-619b7729b/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: Github,
      href: "https://github.com/Rajeshwari2002",
      label: "GitHub",
      color: "hover:text-slate-300",
    },
    {
      icon: Mail,
      href: "mailto:rajeshwari.2342002@gmail.com",
      label: "Email",
      color: "hover:text-red-400",
    }
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ]

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollToSection = (href:any) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Rajeshwari G
            </div>
            <p className="text-slate-400 leading-relaxed">
              Frontend Developer passionate about creating beautiful, responsive web applications with modern
              technologies. Let's build something amazing together!
            </p>
            <div className="flex items-center text-slate-400">
              <Code className="mr-2" size={16} />
              <span className="text-sm">Built with React & Tailwind CSS</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-left text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info
</h3>
            <div className="space-y-3">
              <div className="flex items-center text-slate-400">
                <Mail className="mr-3" size={16} />
                <a
                  href="mailto:rajeshwari.2342002@gmail.com"
                  className="hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  rajeshwari.2342002@gmail.com
                </a>
              </div>
              <div className="flex items-center text-slate-400">
                <Phone className="mr-3" size={16} />
                <a href="tel:8015246179" className="hover:text-green-400 transition-colors duration-300 text-sm">
                  +91 80152 46179
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 bg-slate-800/50 rounded-lg border border-slate-700 text-slate-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:border-slate-600`}
                    title={social.label}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center text-slate-500 text-sm">
              <span>© {currentYear} Rajeshwari G. All rights reserved.</span>
            </div>

            {/* Made with love */}
            <div className="flex items-center text-slate-500 text-sm">
              <span>Made with</span>
              <Heart className="text-red-400 mx-2 animate-pulse" size={16} />
              <span>and</span>
              <Coffee className="text-amber-400 mx-2" size={16} />
              <span>by Rajeshwari</span>
            </div>

            {/* Tech Stack */}
            <div className="flex items-center space-x-4 text-slate-500 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>React</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Tailwind</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Vite</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 text-sm font-medium"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
