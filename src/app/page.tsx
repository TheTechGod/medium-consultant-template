import { clientData } from '../data/config.ts';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-slate-900 leading-tight">
            {clientData.name}
          </h1>
          <p className="text-xl text-blue-800 font-semibold mt-2">
            {clientData.title}
          </p>
          <h2 className="text-3xl italic text-slate-600 mt-6">
            "{clientData.slogan}"
          </h2>
          <button className="mt-8 bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition">
            Book a Consultation
          </button>
        </div>
        
        <div className="flex-1 bg-slate-300 w-full h-[400px] rounded-lg shadow-xl">
           {/* Placeholder for Headshot */}
           <div className="flex items-center justify-center h-full text-slate-500">Photo Here</div>
        </div>
      </section>
    </main>
    
  );
  {/* Proven Track Record Section */}
<section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-4">
    <h3 className="text-center text-3xl font-bold mb-12 uppercase tracking-widest text-slate-800">
      Proven Track Record
    </h3>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Example Card 1 */}
      <div className="border border-slate-200 p-8 rounded-sm hover:shadow-lg transition">
        <div className="h-12 w-12 bg-blue-100 mb-4 rounded italic flex items-center justify-center">Logo</div>
        <h4 className="font-bold text-lg">MPJI/Social Good Fund</h4>
        <p className="text-slate-600 mt-2">Interim Executive Director</p>
        <p className="text-sm italic mt-4">"Result-focused leader... capable of turning around troubled situations."</p>
      </div>
      
      {/* You can duplicate this card for other projects */}
    </div>
  </div>
</section>
}