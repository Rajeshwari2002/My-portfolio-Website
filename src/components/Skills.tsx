/* eslint-disable @typescript-eslint/no-explicit-any */
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "from-cyan-400 to-blue-500",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "HTML5", level: 95 },

        { name: "Tailwind CSS", level: 95 },
      ],
    },
    {
      title: "Mobile",
      color: "from-purple-400 to-pink-500",
      skills: [
        { name: "Flutter", level: 40 },
        { name: "Dart", level: 40 },
      ],
    },
    {
      title: "Backend",
      color: "from-green-400 to-emerald-500",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "NestJS", level: 65 },
        { name: "MongoDB", level: 70 },
      ],
    },
    {
      title: "Tools",
      color: "from-orange-400 to-red-500",
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "Postman", level: 80 },
        { name: "Swagger", level: 80 },
        { name: "Jira", level: 95 },
      ],
    },
  ];

  const SkillBar = ({ skill, color }: { skill: any; color: any }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-slate-300 font-medium">{skill.name}</span>
        <span className="text-slate-400 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2">
        <div
          className={`bg-gradient-to-r ${color} h-2 rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-8 hover:border-slate-600 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-4 h-8 bg-gradient-to-b ${category.color} rounded-full mr-4`}
                ></div>
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    skill={skill}
                    color={category.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "REST APIs",
              "Redux",
              "Context API",
              "Responsive Design",
              "Performance Optimization",
              "SEO",
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-300 px-4 py-2 rounded-full text-sm font-medium hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
