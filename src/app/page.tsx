import { clientData } from "../data/clientData";

// reusable Header for the "Social Proof" sections
const SectionHeader = ({ title }: { title: string }) => (
  <div className="bg-slate-900 text-white py-2 px-6 inline-block mb-8 skew-x-[-12deg]">
    <h2 className="text-xl font-bold uppercase tracking-widest skew-x-[12deg]">
      {title}
    </h2>
  </div>
);

export default function Home() {
  return (
    <main className="bg-slate-100 text-slate-900">

      {/* HERO SECTION: Master's Absolute Left-Aligned Executive Layout */}
<section className="relative bg-gradient-to-r from-[#0b1e3c] to-[#1e3a5f] text-white py-32 overflow-hidden border-b border-slate-800">
  
  {/* 1. THE CONTAINER: 
      We use 'w-full' and 'pl-[20px]' to push the photo to the far left edge.
      We use 'flex-row' to keep everything on one line.
  */}
  <div className="w-full pl-[20px] flex flex-col md:flex-row items-center justify-start gap-16 lg:gap-24">

    {/* PHOTO: Pushed to the far left with 20px padding */}
    <div className="flex-shrink-0">
      <div className="bg-white p-3 border-[6px] border-[#c49a6c] shadow-[20px_20px_60px_rgba(0,0,0,0.5)] transform -rotate-1">
        <div className="w-64 h-64 bg-slate-200 flex items-left justify-left text-center text-slate-700 font-bold uppercase tracking-tighter leading-tight p-10">
          YOUR<br/>PHOTO<br/>HERE
        </div>
      </div>
    </div>

    {/* TEXT AREA: Sitting directly to the right of the photo */}
    <div className="flex flex-col items-start text-left">
      <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-4">
        ALEXIS STRATTON, PHD
      </h1>

      <p className="text-xl md:text-2xl text-[#d6a77a] font-semibold tracking-[0.2em] uppercase mb-12">
        Stabilizing Organizations, Empowering Leadership
      </p>

      {/* 2X SIZE BUTTON: Massive padding and text for executive presence */}
      <button className="px-20 py-10 text-3xl rounded-full bg-[#c49a6c] hover:bg-[#b4885c] text-black font-black uppercase tracking-[0.4em] shadow-[0_20px_60px_rgba(196,154,108,0.4)] hover:scale-105 transition-all border-4 border-white/20">
        CONTACT ME
      </button>
    </div>

  </div>
</section>


      {/* ABOUT & MISSION */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="bg-slate-900 text-white inline-block px-6 py-2 mb-8 font-semibold">
          ABOUT & MISSION
        </div>

        <h2 className="text-3xl font-bold mb-4">
          YOUR TRANSITIONAL LEADERSHIP PARTNER
        </h2>

        <p className="mb-6 text-slate-700">
          Interim Executive Director inspired by transitional leadership.
          Helping organizations stabilize and grow through strategy,
          operations, and strong partnerships.
        </p>

        <ul className="space-y-3">
          <li>✔ <strong>Leadership</strong> – Stabilizing organizations during critical gaps</li>
          <li>✔ <strong>Strategic Planning</strong> – Driving revenue development and partnerships</li>
          <li>✔ <strong>Operational Change</strong> – Improving communication and processes</li>
          <li>✔ <strong>Operational Innovation</strong> – Reorganization and efficiency</li>
          <li>✔ <strong>Project Management</strong> – Executing major initiatives</li>
        </ul>

      </section>


      {/* SERVICES */}
      <section className="bg-slate-200 py-16">

        <div className="max-w-6xl mx-auto px-6">

          <h3 className="text-center text-2xl font-bold mb-12">
            SERVICES OFFERED
          </h3>

          <div className="grid md:grid-cols-3 gap-6">

            {/* CARD 1 */}
            <div className="bg-slate-900 text-white p-8 rounded shadow">
              <h4 className="text-xl font-bold mb-3">
                Interim Executive Director
              </h4>

              <p className="text-slate-300">
                Stepping in to stabilize organizations, strengthen teams,
                and guide strategic outcomes.
              </p>
            </div>


            {/* CARD 2 */}
            <div className="bg-slate-900 text-white p-8 rounded shadow">
              <h4 className="text-xl font-bold mb-3">
                Non-profit Consulting
              </h4>

              <p className="text-slate-300">
                Strategic advice on governance, nonprofit operations,
                and community engagement.
              </p>
            </div>


            {/* CARD 3 */}
            <div className="bg-slate-900 text-white p-8 rounded shadow">
              <h4 className="text-xl font-bold mb-3">
                Non-profit Facilitating
              </h4>

              <p className="text-slate-300">
                Guiding boards and organizations through impact initiatives
                and strategic growth.
              </p>
            </div>

          </div>

        </div>

      </section>



      {/* TRACK RECORD */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h3 className="text-center text-2xl font-bold mb-12">
          PROVEN TRACK RECORD
        </h3>


        <div className="grid md:grid-cols-3 gap-6">

          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white p-6 shadow rounded border">

              <div className="bg-slate-200 h-12 flex items-center justify-center mb-4 text-sm">
                CLIENT LOGO
              </div>

              <h4 className="font-bold mb-2">
                Interim Executive Director – NON-PROFIT
              </h4>

              <p className="text-sm text-slate-600 mb-3">
                Stabilized operations, improved governance,
                and helped drive revenue growth.
              </p>

              <p className="text-sm font-semibold">
                Board President, Client Name
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-6 text-center text-sm">
        © 2026 Consultant Name — All Rights Reserved
      </footer>


    </main>
  )
}