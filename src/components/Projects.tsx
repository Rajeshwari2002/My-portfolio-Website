import {
  Calendar,
  Users,
  Code,
  Globe,
  ShoppingCart,
  BookOpen,
  MapPin,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Bookeezy",
      role: "Frontend Lead",
      duration: "June 2024 - Nov 2024",
      description:
        "A car booking service application that allows users to search, book, and manage car rentals with ease.",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs"],
      features: [
        "Car browsing with filters by type, brand, and price",
        "Real-time availability and booking confirmation",
        "Secure online payment integration",
        "User profile with booking history",
        "Responsive design for mobile and desktop",
      ],
      icon: ShoppingCart,
      color: "from-cyan-400 to-blue-500",
      category: "Web App",
    },
    {
      title: "Voyager",
      role: "Frontend Developer",
      duration: "Mar 2024 - May 2024",
      description:
        "A student transportation tracking app designed to ensure school commute safety through real-time monitoring, ID-based check-ins, and instant parent-teacher notifications.",
      technologies: ["Flutter", "Dart"],
      features: [
        "Real-time GPS tracking of school buses",
        "Student ID scan system for boarding and drop-off",
        "Instant notifications to class teachers and parents",
        "Safety monitoring with emergency alert features",
        "Optimized route tracking for efficient commute",
      ],
      icon: MapPin,
      color: "from-purple-400 to-pink-500",
      category: "Mobile App",
    },
    {
      title: "WowCygnus",
      role: "Frontend Developer",
      duration: "Dec 2024 - Mar 2025",
      description:
        "E-commerce platform offering a seamless shopping experience with advanced product and order features.",
      technologies: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "TypeScript",
        "REST APIs",
      ],
      features: [
        "Product browsing and detailed view",
        "Add to cart and shopping cart management",
        "Order placement and cancellation",
        "Secure checkout and payment flow",
        "User order history and tracking",
      ],
      icon: Globe,
      color: "from-green-400 to-emerald-500",
      category: "E-commerce",
    },
    {
      title: "QuizCircles",
      role: "Frontend Lead",
      duration: "Sept 2023 - Feb 2024",
      description:
        "An interactive online quiz platform enabling hosts to create, manage, and conduct real-time multiplayer quizzes with analytics and leaderboard tracking.",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs"],
      features: [
        "Quiz creation with multiple question types",
        "Real-time multiplayer gameplay with live score updates",
        "Live leaderboard for hosts and participants",
        "Player analytics and performance tracking",
        "Drag-and-drop question ordering and preview",
        "Host and player dashboards with responsive UI",
      ],
      icon: BookOpen,
      color: "from-orange-400 to-red-500",
      category: "Education",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A showcase of my recent work and contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden hover:border-slate-600 transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Header */}
              <div
                className={`bg-gradient-to-r ${project.color} p-6 text-white relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <project.icon size={32} />
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center text-white/90 text-sm">
                    <Users size={16} className="mr-2" />
                    <span className="mr-4">{project.role}</span>
                    <Calendar size={16} className="mr-2" />
                    <span>{project.duration}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3 flex items-center">
                    <Code size={18} className="mr-2" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${project.color} rounded-full mt-2 mr-3 flex-shrink-0`}
                        ></div>
                        <span className="text-slate-400 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-sm font-medium border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
