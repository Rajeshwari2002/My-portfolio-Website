import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Perfectz Digital",
      position: "Frontend Software Developer",
      duration: "June 2023 - June 2025",
      location: "Remote",
      type: "Full-time",
      description:
        "Leading frontend development initiatives and contributing to various web development projects.",
      achievements: [
        "Developed responsive web applications using modern frontend technologies",
        "Collaborated with cross-functional teams to deliver high-quality solutions",
        "Maintained and improved existing codebases for better performance",
        "Participated in code reviews and technical discussions",
      ],
      color: "from-cyan-400 to-blue-500",
    },
    {
      company: "WowCygnus",
      position: "Frontend Developer",
      duration: "Dec 2024 - Mar 2025",
      location: "Remote",
      type: "Full-time",
      description:
        "Built comprehensive e-commerce platform with advanced admin dashboard functionality.",
      achievements: [
        "Developed User Interface for e-commerce platform management",
        "Integrated UI components with backend APIs seamlessly",
        "Implemented responsive design principles across all components",
        "Optimized application performance and enhanced user experience",
      ],
      color: "from-purple-400 to-pink-500",
    },
    {
      company: "QuizCircles",
      position: "Frontend Lead",
      duration: "Sept 2023 - Feb 2024",
      location: "Remote",
      type: "Project-based",
      description:
        "Led frontend development team for interactive quiz platform with real-time features.",
      achievements: [
        "Led frontend development team for quiz application",
        "Developed interactive UI interfaces for quiz functionality",
        "Integrated real-time features for live quiz sessions",
        "Optimized application performance and enhanced user experience",
      ],
      color: "from-green-400 to-emerald-500",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            My professional journey and key contributions in frontend
            development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r ${exp.color} rounded-full border-4 border-slate-900 shadow-lg z-10 flex items-center justify-center`}
                >
                  <Briefcase className="text-white" size={16} />
                </div>

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700 p-8 hover:border-slate-600 transition-all duration-300 transform hover:scale-105">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-white">
                          {exp.position}
                        </h3>
                        <span
                          className={`px-3 py-1 bg-gradient-to-r ${exp.color} text-white text-xs font-semibold rounded-full`}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <h4 className="text-xl font-semibold text-cyan-400 mb-3">
                        {exp.company}
                      </h4>

                      <div className="flex flex-wrap gap-4 text-slate-400 text-sm">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h5 className="font-semibold text-white mb-3">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div
                              className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mt-2 mr-3 flex-shrink-0`}
                            ></div>
                            <span className="text-slate-400 text-sm">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
