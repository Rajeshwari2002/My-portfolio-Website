import { Award, ExternalLink, BookOpen, Code, Smartphone } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Web Development Bootcamp | MERN Stack",
      provider: "Professional Bootcamp",
      description:
        "Comprehensive certification covering MERN stack development with hands-on projects and real-world applications.",
      skills: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JavaScript",
        "REST APIs",
      ],
      icon: Code,
      color: "from-cyan-400 to-blue-500",
      category: "Full Stack",
      link: "https://drive.google.com/file/d/1X5ZDAVT9j-P_WMWR20UPN5XCeMJFNpby/view",
    },
    {
      title: "Introduction to Flutter Course",
      provider: "Simplilearn SkillUp",
      description:
        "Complete Flutter development course covering cross-platform mobile app development fundamentals.",
      skills: ["Flutter", "Dart"],
      icon: Smartphone,
      color: "from-purple-400 to-pink-500",
      category: "Mobile Dev",
      link: "https://drive.google.com/file/d/1JaJwcwPdTt3OaY83-09USctYnluXsGvP/view",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden hover:border-slate-600 transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Header */}
              <div
                className={`bg-gradient-to-r ${cert.color} p-6 text-white relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <cert.icon size={32} />
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      {cert.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <div className="flex items-center text-white/90 text-sm">
                    <BookOpen size={16} className="mr-2" />
                    <span>{cert.provider}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3 flex items-center">
                    <Award size={18} className="mr-2" />
                    Skills Acquired
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-sm font-medium border border-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex bg-gradient-to-r ${cert.color} text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg items-center justify-center group-hover:shadow-lg`}
                >
                  <ExternalLink size={18} className="mr-2" />
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
