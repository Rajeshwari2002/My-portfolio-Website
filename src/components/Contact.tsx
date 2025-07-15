
"use client"
import { Mail, Phone, Linkedin,BookOpen } from "lucide-react"


const Contact = () => {



   




  return (
    <section id="contact" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Ready to collaborate? Let's discuss your next project or opportunity.
          </p>
        </div>

        <div className="lg:px-80">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 hover:border-slate-600 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
                  <a
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                    href="mailto:rajeshwari.2342002@gmail.com"
                  >
                    rajeshwari.2342002@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 hover:border-slate-600 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Phone</h4>
                  <a className="text-slate-400 hover:text-green-400 transition-colors" href="tel:8015246179">
                    +91 80152 46179
                  </a>
                </div>
              </div>
            </div>
                   <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 hover:border-slate-600 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <BookOpen className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Medium</h4>
                  <a
                    className="text-slate-400 hover:text-blue-400 transition-colors break-all"
                    href="https://medium.com/@rajeshwari.2342002"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/rajeshwari-g-619b7729b
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 hover:border-slate-600 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Linkedin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">LinkedIn</h4>
                  <a
                    className="text-slate-400 hover:text-blue-400 transition-colors break-all"
                    href="https://www.linkedin.com/in/rajeshwari-g-619b7729b/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/rajeshwari-g-619b7729b
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-8">
            <div className="flex items-center mb-6">
              <MessageCircle className="text-cyan-400 mr-3" size={24} />
              <h3 className="text-2xl font-bold text-white">Send Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              {submitted && (
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                  <p className="text-green-400 text-sm font-medium">
                    ✨ Thank you for reaching out! I'll get back to you soon.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={submitted}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
              >
                <Send size={18} />
                <span>{submitted ? "Message Sent!" : "Send Message"}</span>
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Contact
