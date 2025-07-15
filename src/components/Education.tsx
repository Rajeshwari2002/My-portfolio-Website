import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering (BE)",
      institution: "Arunachala College of Engineering For Women",
      location: "Vellichanthai",
      duration: "July 2019 - June 2023",
      cgpa: "8.34",
      description:
        "Comprehensive engineering education with focus on technical skills and practical applications.",

      color: "from-cyan-400 to-blue-500",
      icon: GraduationCap,
    },
    {
      degree: "12th Standard",
      institution: "Evans Matric Higher Secondary School",
      location: "Nagercoil",
      duration: "April 2018 - March 2019",
      cgpa: "8.5",
      description:
        "Excellent academic performance in higher secondary education.",

      color: "from-purple-400 to-pink-500",
      icon: BookOpen,
    },
  ];

  return (
    <section id="education" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            My academic journey and educational background
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 bg-gradient-to-r ${edu.color} rounded-full border-4 border-slate-900 shadow-lg z-10 flex items-center justify-center`}
                >
                  <edu.icon className="text-white" size={20} />
                </div>

                {/* Content Card */}
                <div
                  className={`ml-20 md:ml-0 md:w-5/12 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700 p-8 hover:border-slate-600 transition-all duration-300 transform hover:scale-105">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {edu.degree}
                      </h3>
                      <h4 className="text-xl font-semibold text-cyan-400 mb-3">
                        {edu.institution}
                      </h4>

                      <div className="flex flex-wrap gap-4 text-slate-400 text-sm mb-4">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          {edu.location}
                        </div>
                      </div>

                      {/* CGPA Badge */}
                      <div
                        className={`inline-block bg-gradient-to-r ${edu.color} text-white px-4 py-2 rounded-full font-semibold`}
                      >
                        CGPA: {edu.cgpa}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {edu.description}
                    </p>
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

export default Education;
