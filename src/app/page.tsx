import { clientData } from '../data/config';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="border-b border-slate-100 py-4 px-8 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="font-bold text-xl tracking-tighter text-blue-900">
          {clientData.name}
        </div>
        <button className="bg-blue-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-800 transition">
          Contact Me
        </button>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-6">
          <h1 className="text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            {clientData.title}
          </h1>
          <p className="text-2xl text-slate-500 font-light italic">
            "{clientData.slogan}"
          </p>
          <div className="h-1 w-20 bg-blue-900"></div>
          <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
            Supporting non-profits with their transitional leadership needs. 
            I specialize in clearing chaos and bringing sustainable clarity to organizations.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold shadow-lg shadow-blue-900/20 hover:scale-105 transition">
              View Services
            </button>
            <button className="border border-slate-200 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition">
              Download CV
            </button>
          </div>
        </div>
        
        <div className="flex-1 relative">
          <div className="aspect-[4/5] bg-slate-100 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
             <div className="flex items-center justify-center h-full text-slate-400 font-medium uppercase tracking-widest text-sm">
                Professional Headshot
             </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-50 -z-10 rounded-full"></div>
        </div>
      </section>

      {/* Trust Bar (Optional) */}
      <section className="bg-slate-50 py-12 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">Trusted by organizations including</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
             {/* Use text placeholders until you have logos */}
             <span className="font-bold text-xl">MPJI</span>
             <span className="font-bold text-xl">SAFE SCHOOLS</span>
             <span className="font-bold text-xl">PROJECT FIERCE</span>
             <span className="font-bold text-xl">CRS</span>
          </div>
        </div>
      </section>
    </main>
  );
}