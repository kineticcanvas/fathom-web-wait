export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-40 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black text-slate-900 tracking-tight">
          FATHOM
        </div>
        <a href="/privacy" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
          Privacy
        </a>
      </div>
    </nav>
  )
}