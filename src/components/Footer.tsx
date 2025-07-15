import { Heart } from "lucide-react"

const Footer = () => (
  <footer className="bg-slate-900 border-t border-slate-800 py-8">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <div className="flex items-center justify-center mb-4">
        <span className="text-slate-400">Made with</span>
        <Heart className="text-red-400 mx-2" size={16} />
        <span className="text-slate-400">by</span>
        <span className="text-cyan-400 font-semibold ml-2">Rajeshwari G</span>
      </div>
     
    </div>
  </footer>
)

export default Footer
