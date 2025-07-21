"use client";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  BookOpen,
  ArrowDown,
} from "lucide-react";
import { useEffect, useState } from "react";
import myImage from "../assets/myPic.jpeg";
const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Software Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const handleDownloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/1LyyPwhV_5WAEj5N2_wGmxLcEi2nW6mvC/view",
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center ">
        {/* Profile Image */}

        <div className="w-40 h-40 mx-auto mb-8 mt-[80px] rounded-full overflow-hidden border-4 border-cyan-400">
          <img
            src={myImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Content */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent px-2">
          Rajeshwari G
        </h1>

        <div className="text-2xl md:text-4xl text-cyan-400 mb-4 font-light">
          <span className="border-r-2 border-cyan-400 animate-pulse">
            {text}
          </span>
        </div>

        <div className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Passionate about creating beautiful, responsive web applications with
          modern technologies. Specializing in React, Flutter, and full-stack
          development.
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-3 md:gap-8 mb-12 text-center ">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
            <div className="text-2xl font-bold text-cyan-400">2+</div>
            <div className="text-slate-400 text-sm">Years Experience</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
            <div className="text-2xl font-bold text-purple-400">4+</div>
            <div className="text-slate-400 text-sm">Projects</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
            <div className="text-2xl font-bold text-pink-400">6+</div>
            <div className="text-slate-400 text-sm">Technologies</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-5 md:px-0">
          <button
            onClick={handleDownloadResume}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </button>
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <Mail size={20} />
            <span>Get In Touch</span>
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          {[
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/rajeshwari-g-619b7729b/",
              color: "hover:text-blue-400",
            },
            {
              icon: Github,

              href: "https://github.com/Rajeshwari2002",
              // href: "https://github.com/Rajeshwari2002?tab=repositories",
              color: "hover:text-slate-300",
            },
            {
              icon: Mail,
              href: "mailto:rajeshwari.2342002@gmail.com",
              color: "hover:text-red-400",
            },
            {
              icon: BookOpen,
              href: "https://medium.com/@rajeshwari.2342002",
              color: "hover:text-green-400",
            },
          ].map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 text-slate-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="text-slate-400 mx-auto" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
