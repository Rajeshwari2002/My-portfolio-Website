import { Code2, Palette, Zap, Users, Target, Heart } from "lucide-react"

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable solutions",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: Palette,
      title: "UI Focus",
      description: "Creating beautiful and intuitive interfaces",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and efficiency",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative and communicative approach",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering exceptional results",
      color: "from-red-400 to-rose-500",
    },
    {
      icon: Heart,
      title: "Passionate",
      description: "Love for continuous learning and innovation",
      color: "from-pink-400 to-purple-500",
    },
  ]

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">Crafting Digital Experiences with Passion</h3>

            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a dedicated Frontend Developer with over 2 years of experience in creating exceptional digital
              experiences. My journey in web development has been driven by a passion for combining technical expertise
              with creative design to build applications that users love.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              I specialize in modern frontend technologies including React.js, Flutter, and TypeScript. From e-commerce
              platforms to educational applications, I focus on creating seamless user experiences with clean,
              maintainable code.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or mentoring
              fellow developers. I believe in continuous learning and staying ahead of industry trends.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 px-6 py-3 rounded-full">
                <span className="text-cyan-300 font-semibold">2+ Years Experience</span>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 px-6 py-3 rounded-full">
                <span className="text-purple-300 font-semibold">4+ Projects</span>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 px-6 py-3 rounded-full">
                <span className="text-green-300 font-semibold">Full Stack Certified</span>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
