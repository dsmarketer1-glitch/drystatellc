import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { serviceData } from '../data/serviceData';

// Figma Icons & Assets
const imgChevronDown = "/assets/ef74b27bad5b0ac472b7502ff0c515fd7d313c64.svg";
const imgCheckCircle = "/assets/1a1982fb2a687bc31f7fadb7b9d6db584203743c.svg";
const imgMapPlaceholder = "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200";

const ServicePage = () => {
  const { serviceId } = useParams();
  const data = serviceData[serviceId];
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!data) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-[102px]">
        {/* HERO SECTION */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#081b4d]">
          <div className="absolute inset-0 z-0">
            <img 
              src={data.heroImage} 
              alt={data.title} 
              className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#081b4d] via-[#081b4d]/60 to-transparent" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-[850px] space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#b81c2f] animate-ping" />
                <span className="text-[12px] font-bold text-white/80 tracking-[2px] uppercase">
                  24/7 RAPID DEPLOYMENT ACTIVE
                </span>
              </div>
              
              <h1 className="text-white text-[64px] lg:text-[72px] font-extrabold leading-[1.1] tracking-tight">
                {data.titlePrefix} <br/>
                <span className="text-[#5dd8e2]">{data.titleHighlight}</span>
              </h1>
              
              <p className="text-[#e2e8f0] text-[20px] max-w-[650px] leading-relaxed font-light">
                {data.description}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="tel:2147851130" 
                  className="bg-[#b81c2f] hover:bg-[#a11828] text-white px-10 py-5 rounded-md font-bold text-lg transition-all flex items-center gap-3 shadow-xl"
                >
                  <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">📞</span>
                  Immediate Dispatch
                </a>
                <button className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 text-white px-10 py-5 rounded-md font-bold text-lg transition-all">
                  View Our Process
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SIGNS BENTO GRID */}
        <section className="py-32 bg-[#faf8ff]">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
              <div className="space-y-4">
                <span className="text-[#b81c2f] text-[12px] font-black tracking-[3px] uppercase">WHAT TO LOOK FOR</span>
                <h2 className="text-[#081b4d] text-[48px] font-bold tracking-tight leading-none">
                  Early Warning Signs of <br/> {data.title}
                </h2>
              </div>
              <p className="text-[#64748b] max-w-[400px] text-lg">
                Early detection prevents structural failure and microbial colonization. If you observe these, call us immediately.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[650px]">
              {/* Bento Item 1 */}
              <div className="md:col-span-4 bg-[#f3f2ff] p-10 rounded-2xl relative overflow-hidden group">
                <span className="text-[48px] font-black text-[#081b4d]/5 relative z-10">01</span>
                <div className="relative z-10 space-y-4 mt-4">
                  <h3 className="text-[#081b4d] text-[24px] font-bold">{data.signs[0].title}</h3>
                  <p className="text-[#475569] leading-relaxed">{data.signs[0].text}</p>
                </div>
                <div className="absolute bottom-[-20px] right-[-20px] opacity-10 group-hover:rotate-12 transition-transform duration-500">
                    <img src={data.secondaryImage} className="w-48 h-48 object-cover rounded-full" />
                </div>
              </div>

              {/* Bento Item 2 */}
              <div className="md:col-span-8 bg-[#213163] p-10 rounded-2xl flex flex-col justify-end text-white relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-8">
                    <div className="w-16 h-1 bg-white/20" />
                </div>
                <div className="space-y-4 max-w-[500px] relative z-10">
                  <span className="text-[48px] font-black text-white/10">02</span>
                  <h3 className="text-[32px] font-bold leading-tight">{data.signs[1].title}</h3>
                  <p className="text-white/70 text-lg leading-relaxed">{data.signs[1].text}</p>
                </div>
              </div>

              {/* Bento Item 3 */}
              <div className="md:col-span-7 bg-[#e3e7ff] p-10 rounded-2xl flex items-center gap-8 group">
                <div className="flex-1 space-y-4">
                  <span className="text-[48px] font-black text-[#081b4d]/5">03</span>
                  <h3 className="text-[#081b4d] text-[24px] font-bold">{data.signs[2].title}</h3>
                  <p className="text-[#475569] leading-relaxed">{data.signs[2].text}</p>
                </div>
                <div className="hidden lg:block w-48 h-48 border-[8px] border-white rounded-2xl shadow-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                  <img src={data.heroImage} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Bento Item 4 */}
              <div className="md:col-span-5 bg-[#003a3e] p-10 rounded-2xl text-white flex flex-col justify-between group">
                <span className="text-[48px] font-black text-white/5">04</span>
                <div className="space-y-4">
                  <h3 className="text-[#7df4ff] text-[24px] font-bold">{data.signs[3].title}</h3>
                  <p className="text-[#5dd8e2]/70 leading-relaxed">{data.signs[3].text}</p>
                </div>
                <div className="flex justify-end pt-4">
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#003a3e] transition-all">→</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section className="py-32 bg-[#f1f5f9]/50">
          <div className="container mx-auto px-6">
            <div className="text-center space-y-4 mb-24">
              <span className="text-[#081b4d] text-[12px] font-black tracking-[4px] uppercase">OUR PROVEN METHOD</span>
              <h2 className="text-[#081b4d] text-[60px] font-bold tracking-tight">{data.processTitle}</h2>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute top-[32px] left-0 right-0 h-[2px] bg-[#e2e8f0]" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
                {data.processSteps.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center group">
                    <div className="mb-6 relative">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${idx === 2 ? 'bg-[#081b4d] text-white shadow-2xl scale-110' : 'bg-white border-2 border-[#081b4d] text-[#081b4d]'}`}>
                        <span className="font-bold">{idx + 1}</span>
                      </div>
                    </div>
                    <h3 className="text-[#081b4d] text-[18px] font-bold mb-2">{step.title}</h3>
                    <p className="text-[#64748b] text-[14px] leading-relaxed">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES GRID */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4 space-y-8">
                <h2 className="text-[#081b4d] text-[40px] font-black leading-tight">
                    {data.title} <br/> Recovery Experts
                </h2>
                <p className="text-[#64748b] text-lg leading-relaxed">
                  Every recovery is different. Our team uses the latest technology to ensure your home is safe and dry again quickly.
                </p>
                <div className="flex items-center gap-3 text-[#081b4d] font-bold group cursor-pointer">
                  <span>Full Capability List</span>
                  <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#081b4d] group-hover:text-white transition-all">→</div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100 border border-slate-100 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
                  {data.subServices.map((sub, idx) => (
                    <div key={idx} className="bg-white p-10 hover:bg-slate-50 transition-colors group">
                      <div className="w-12 h-12 bg-[#f3f2ff] rounded-lg mb-6 group-hover:scale-110 transition-transform" />
                      <h3 className="text-[#081b4d] text-xl font-bold mb-4">{sub.title}</h3>
                      <p className="text-[#64748b] leading-relaxed text-[14px]">{sub.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINANCING & INSURANCE */}
        <section className="py-32 bg-[#081b4d] relative overflow-hidden">
           <div className="container mx-auto px-6 relative z-10">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-10">
                 <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                    <span className="text-[10px] font-black text-white tracking-widest uppercase">PREFERRED PROVIDER STATUS</span>
                 </div>
                 <h2 className="text-white text-[48px] font-bold leading-tight">We Handle the Claims, <br/> You Regain Your Home</h2>
                 <p className="text-slate-300 text-lg leading-relaxed">
                   DryState provides direct-to-carrier billing for all major insurance providers. No up-front costs for covered repairs for non-insured restoration needs.
                 </p>
                 
                 <div className="grid grid-cols-2 gap-10">
                   <div className="space-y-2">
                     <h4 className="text-white text-2xl font-bold">$0 Down</h4>
                     <p className="text-slate-400">Financing available for emergency repairs.</p>
                   </div>
                   <div className="space-y-2">
                     <h4 className="text-white text-2xl font-bold">100% Direct</h4>
                     <p className="text-slate-400">Billing sent straight to your insurance adjuster.</p>
                   </div>
                 </div>
               </div>

               <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl space-y-8">
                 <div className="h-[300px] rounded-2xl overflow-hidden">
                   <img src={data.secondaryImage} className="w-full h-full object-cover" />
                 </div>
                 <div className="space-y-4">
                   {[
                     "Assisted documentation for all structural loss",
                     "Negotiation with adjusters for maximum coverage"
                   ].map((item, idx) => (
                     <div key={idx} className="flex gap-4 items-center bg-white/5 p-5 rounded-xl border border-white/5">
                       <div className="w-6 h-6 rounded-full bg-[#b81c2f] flex items-center justify-center text-white text-[10px]">✓</div>
                       <p className="text-white font-medium">{item}</p>
                     </div>
                   ))}
                 </div>
               </div>
             </div>
           </div>
        </section>

        {/* MAP & AREAS */}
        <section className="py-32 bg-[#faf8ff]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-4 space-y-8">
                <div className="space-y-2">
                  <span className="text-[#b81c2f] text-[12px] font-black tracking-[2px] uppercase">SERVICE AREA</span>
                  <h2 className="text-[#081b4d] text-4xl font-bold tracking-tight">Rapid Response in <br/> DFW Metroplex</h2>
                </div>
                
                <div className="space-y-4 border-t border-slate-200 pt-8">
                  {[
                    {name: "Dallas", time: "15 Min Response"},
                    {name: "Fort Worth", time: "22 Min Response"},
                    {name: "Irving", time: "18 Min Response"},
                    {name: "Arlington", time: "Headquarters Area"}
                  ].map((area, idx) => (
                    <div key={idx} className="flex justify-between items-center py-4 border-b border-slate-100">
                      <span className="text-[#081b4d] font-bold text-lg">{area.name}</span>
                      <span className="text-slate-400 font-medium">{area.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-8 h-[550px] bg-slate-200 rounded-3xl overflow-hidden shadow-2xl relative">
                  <img src={imgMapPlaceholder} className="w-full h-full object-cover grayscale opacity-80" />
                  <div className="absolute inset-0 bg-[#081b4d]/10" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 bg-[#b81c2f]/20 rounded-full animate-ping flex items-center justify-center">
                        <div className="w-10 h-10 bg-[#b81c2f] border-4 border-white rounded-full shadow-2xl" />
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-32 bg-[#f8fafc]">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center space-y-4 mb-20">
              <span className="text-[#b81c2f] text-[12px] font-black tracking-[3px] uppercase">COMMON QUESTIONS</span>
              <h2 className="text-[#081b4d] text-[48px] font-bold leading-tight">Everything You Need <br/> to Know</h2>
            </div>

            <div className="space-y-4">
              {data.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-[#081b4d] font-bold text-lg">{faq.question}</span>
                    <span className={`w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 bg-[#081b4d] text-white' : ''}`}>
                      ↓
                    </span>
                  </button>
                  {activeFaq === idx && (
                    <div className="px-8 pb-8 animate-in slide-in-from-top-2 duration-300">
                       <p className="text-slate-600 leading-relaxed pt-4 border-t border-slate-100">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EMERGENCY CTA */}
        <section className="py-32 bg-[#b81c2f] relative overflow-hidden group">
          <div className="container mx-auto px-6 relative z-10 text-center space-y-12">
            <h2 className="text-white text-[60px] font-black tracking-tighter uppercase leading-none">
              EMERGENCY RESPONSE HOT-LINE
            </h2>
            <a 
              href="tel:2147851130" 
              className="block text-white text-[80px] lg:text-[110px] font-bold tracking-tighter hover:scale-105 transition-transform duration-500 underline decoration-white/20 underline-offset-8"
            >
              214 785 1130
            </a>
            
            <div className="flex flex-wrap justify-center gap-12 pt-8">
              {[
                "LICENSED & BONDED",
                "60-MIN ARRIVAL",
                "IICRC CERTIFIED"
              ].map((cert, idx) => (
                <div key={idx} className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">✓</div>
                   <span className="text-white/70 font-bold tracking-[2px] text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0%,_transparent_70%)] opacity-30 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ServicePage;
