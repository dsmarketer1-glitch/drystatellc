import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Droplets, 
  Flame, 
  Wind, 
  ChevronDown, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Phone,
  Zap,
  CheckCircle2
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Assets
const imgHero = "/assets/hero-premium.png"; // Newly generated
const imgCardWater = "/assets/3b4cecbe6d3f444260bd1a4ec474733a631752bd.png";
const imgCardFire = "/assets/8d1a02761c159ddc7c66af1d44b5b9c6b73c2d64.png";
const imgCardMold = "/assets/9ef0da8c8dca2aff508fb0a5e6bdf0b71edbe983.png";
const imgDfwMap = "/assets/77e3b453581d8650c52a5b2c006f86e161d047b4.png";
const imgBlog1 = "/assets/f2f709722e2150b55d53da5ac55ca0861113e89f.png";
const imgBlog2 = "/assets/5b04fbb0c56b68992a9741353b09eb6afe2b821f.png";
const imgHelpBg = "/assets/70ea2b5ae8c7047bbd1190c0c6506e4e39a9571c.png";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);

  return (
    <div className="bg-white min-h-screen flex flex-col pt-[92px]">
      <Header />
      
      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#081b4d]">
          <motion.div 
            style={{ y: heroY, opacity: heroOpacity }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={imgHero} 
              className="w-full h-full object-cover" 
              alt="Hero Background"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#081b4d] via-[#081b4d]/40 to-transparent" />
          </motion.div>
          
          <div className="container mx-auto px-6 relative z-10 py-20">
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-4xl space-y-8"
            >
               <div className="inline-flex items-center gap-3 bg-[#b81c2f15] border border-[#b81c2f40] px-5 py-2.5 rounded-full backdrop-blur-md">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#b81c2f] animate-pulse" />
                  <span className="text-[11px] font-black text-white tracking-[2.5px] uppercase">60 MINUTE RESPONSE: DFW</span>
               </div>

               <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-extrabold leading-[0.85] tracking-tighter">
                  RESTORE <br/>
                  EXCELLENCE <br/>
                  <span className="text-[#b81c2f]">REFRESH</span> LIFE.
               </h1>

               <p className="text-[#8b9ad3] text-xl md:text-2xl max-w-2xl leading-relaxed font-medium">
                  Elite water, fire, and mold restoration across the Dallas-Fort Worth Metroplex. Fast, professional, and guaranteed.
               </p>

               <div className="flex flex-wrap gap-5 pt-4">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#b81c2f] text-white px-10 py-5 rounded-xl font-black text-[13px] tracking-[2px] uppercase shadow-2xl shadow-red-900/40"
                  >
                     Start Recovery Now
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white/20 text-white px-10 py-5 rounded-xl font-black text-[13px] tracking-[2px] uppercase backdrop-blur-sm"
                  >
                     See Our Expertise
                  </motion.button>
               </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
          >
            <span className="text-[10px] font-black tracking-[4px] uppercase">Scroll</span>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-px h-12 bg-gradient-to-b from-white to-transparent" 
            />
          </motion.div>
        </section>

        {/* CORE SERVICES */}
        <section className="py-32 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <motion.div 
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="lg:col-span-4 space-y-8 flex flex-col justify-center"
              >
                <div className="space-y-4">
                  <span className="text-[#b81c2f] text-[12px] font-black tracking-[4px] uppercase">OUR EXPERTISE</span>
                  <h2 className="text-[#081b4d] text-5xl md:text-6xl font-black leading-tight tracking-tighter">Precision Restoration</h2>
                </div>
                <p className="text-[#45464f] text-lg leading-relaxed font-medium">
                  We don't just clean; we restore. Using military-grade equipment and certified techniques to bring your property back to its pristine state.
                </p>
                <motion.a 
                  href="#" 
                  whileHover={{ x: 10 }}
                  className="inline-flex items-center gap-4 text-[#b81c2f] font-black text-sm tracking-[2px] uppercase"
                >
                  VIEW ALL CAPABILITIES
                  <ArrowRight size={20} />
                </motion.a>
              </motion.div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Water Damage", badge: "ELITE CLEANUP", img: imgCardWater, icon: Droplets },
                  { title: "Fire & Smoke", badge: "COMPLETE RECOVERY", img: imgCardFire, icon: Flame },
                  { title: "Mold Removal", badge: "BIO-TECH SAFETY", img: imgCardMold, icon: ShieldCheck }
                ].map((service, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -15 }}
                    className="group relative h-[550px] rounded-[32px] overflow-hidden shadow-2xl transition-all duration-500"
                  >
                    <img src={service.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={service.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081b4d] via-[#081b4d]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-10 left-10 right-10 space-y-4">
                       <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20">
                          <service.icon size={28} />
                       </div>
                       <div className="space-y-1">
                          <span className="text-[10px] text-white/50 font-black tracking-[2.5px] uppercase">{service.badge}</span>
                          <h3 className="text-white text-3xl font-black">{service.title}</h3>
                       </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PARALLAX STATS / PROCESS */}
        <section className="py-32 bg-[#081b4d] relative overflow-hidden">
           <div className="container mx-auto px-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
                 {[
                   { val: "24/7", label: "AVAILABILITY", icon: Clock },
                   { val: "60m", label: "AVG RESPONSE", icon: Zap },
                   { val: "100%", label: "CERTIFIED TEAMS", icon: ShieldCheck },
                   { val: "1k+", label: "HOMES RESTORED", icon: CheckCircle2 }
                 ].map((stat, idx) => (
                   <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1, type: "spring" }}
                    className="space-y-4"
                   >
                     <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center text-[#ff535c]">
                        <stat.icon size={32} />
                     </div>
                     <div className="text-white text-5xl font-black tracking-tighter">{stat.val}</div>
                     <div className="text-[#8b9ad3] text-[11px] font-black tracking-[3px] uppercase">{stat.label}</div>
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* SERVICE AREAS - DYNAMIC MAP */}
        <section className="py-32 bg-[#f8fafc] relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <motion.div 
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="space-y-12"
               >
                  <div className="space-y-6">
                    <span className="text-[#b81c2f] text-[12px] font-black tracking-[4px] uppercase">LOCALLY ROOTTED</span>
                    <h2 className="text-[#081b4d] text-6xl md:text-7xl font-black tracking-tight leading-none">
                      Hyper-Local <br/> DFW Network.
                    </h2>
                    <p className="text-[#45464f] text-xl leading-relaxed max-w-xl">
                       estrategically stationed across Richland Hills, Irving, and Dallas to ensure we're never more than 45 minutes away.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {[
                       { name: "Richland Hills", hub: "COMMAND CENTER", zips: "76118, 76180" },
                       { name: "Irving Hub", hub: "LAS COLINAS UNIT", zips: "75038, 75063" },
                       { name: "Dallas Metro", hub: "CITYWIDE DISPATCH", zips: "75201, 75219" },
                       { name: "Fort Worth", hub: "WESTERN RESPONSE", zips: "76102, 76107" }
                     ].map((loc, idx) => (
                       <motion.div 
                        key={idx}
                        whileHover={{ x: 10 }}
                        className="flex gap-5 group cursor-default"
                       >
                          <div className="w-12 h-12 bg-white shadow-xl rounded-2xl flex items-center justify-center text-[#b81c2f] group-hover:bg-[#b81c2f] group-hover:text-white transition-all">
                             <MapPin size={24} />
                          </div>
                          <div className="space-y-1">
                             <h4 className="text-[#081b4d] font-black text-lg uppercase tracking-tight">{loc.name}</h4>
                             <span className="text-[#757680] text-[10px] font-bold tracking-widest block uppercase">{loc.hub}</span>
                          </div>
                       </motion.div>
                     ))}
                  </div>
               </motion.div>

               <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative"
               >
                  <div className="bg-white rounded-[48px] p-6 shadow-[0_50px_100px_-20px_rgba(8,27,77,0.15)] border border-slate-100 overflow-hidden group">
                     <div className="relative aspect-square rounded-[40px] overflow-hidden">
                        <img 
                          src={imgDfwMap} 
                          className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-2000" 
                          alt="DFW Map"
                        />
                        <div className="absolute inset-0 bg-[#081b4d]/20 mix-blend-overlay" />
                        
                        <motion.div 
                           animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                           transition={{ repeat: Infinity, duration: 4 }}
                           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#b81c2f20] rounded-full blur-3xl pointer-events-none"
                        />
                        
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                           <div className="relative">
                              <div className="w-6 h-6 bg-[#b81c2f] rounded-full border-4 border-white shadow-2xl relative z-10" />
                              <div className="absolute inset-0 w-6 h-6 bg-[#b81c2f] rounded-full animate-ping" />
                           </div>
                        </div>
                     </div>
                     <div className="absolute bottom-12 right-12 bg-[#081b4d] text-white p-6 rounded-3xl shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-bottom-right">
                        <div className="text-3xl font-black">48.2m</div>
                        <div className="text-[10px] font-black tracking-widest uppercase opacity-50">AVG ARRIVAL</div>
                     </div>
                  </div>
               </motion.div>
            </div>
          </div>
        </section>

        {/* FAQS - ACCORDION */}
        <section className="py-32 bg-white relative">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="text-center space-y-6 mb-20"
            >
               <span className="text-[#b81c2f] text-[12px] font-black tracking-[4px] uppercase">KNOWLEDGE CENTER</span>
               <h2 className="text-[#081b4d] text-5xl md:text-7xl font-black tracking-tight">Expert Advice.</h2>
            </motion.div>

            <div className="space-y-6">
               {[
                 { q: "How soon can you arrive at my property?", a: "We guarantee a response within 60 minutes. Our tactical dispatch system identifies the closest technician to your location across DFW for immediate intervention." },
                 { q: "Will you work with my insurance company?", a: "Precisely. We handle 100% of the insurance documentation, providing high-fidelity digital reports directly to adjusters to ensure your claim is processed with zero friction." },
                 { q: "What should I do immediately after water damage?", a: "First, prioritize safety: shut off power if needed and isolate the water source. Call us immediately. Avoid using home vacuums; our industrial extractors are required to prevent deep-set mold." }
               ].map((faq, idx) => (
                 <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`rounded-2xl border transition-all duration-300 ${openFaq === idx ? 'bg-[#f3f2ff] border-[#081b4d20]' : 'bg-white border-slate-100'}`}
                 >
                    <button 
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-8 flex justify-between items-center text-left"
                    >
                       <h4 className="text-[#081b4d] text-xl font-black tracking-tight pr-8">{faq.q}</h4>
                       <motion.div 
                        animate={{ rotate: openFaq === idx ? 180 : 0 }}
                        className="text-[#b81c2f] shrink-0"
                       >
                          <ChevronDown size={28} />
                       </motion.div>
                    </button>
                    
                    <AnimatePresence>
                       {openFaq === idx && (
                         <motion.div 
                           initial={{ height: 0, opacity: 0 }}
                           animate={{ height: "auto", opacity: 1 }}
                           exit={{ height: 0, opacity: 0 }}
                           className="overflow-hidden"
                         >
                            <div className="px-8 pb-8 pt-0">
                               <div className="h-px bg-slate-200 mb-6" />
                               <p className="text-[#45464f] text-lg leading-relaxed font-medium">
                                  {faq.a}
                                </p>
                            </div>
                         </motion.div>
                       )}
                    </AnimatePresence>
                 </motion.div>
               ))}
            </div>
          </div>
        </section>

        {/* EMERGENCY HELP PORTAL */}
        <section className="py-32 bg-[#faf8ff] relative overflow-hidden">
          <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
             <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[60px] flex flex-col lg:flex-row overflow-hidden shadow-[0_100px_150px_-50px_rgba(8,27,77,0.25)] border border-slate-100"
             >
                <div className="bg-[#081b4d] text-white p-12 md:p-24 lg:w-5/12 flex flex-col justify-between gap-20">
                   <div className="space-y-8">
                      <h2 className="text-6xl font-black tracking-tighter leading-none">Request <br/> Elite Help.</h2>
                      <p className="text-[#8b9ad3] text-xl leading-relaxed">
                        Rapid-response restoration for high-value properties. Fill in the secure portal for immediate technical dispatch.
                      </p>
                      <ul className="space-y-6">
                         {[
                           "Direct Insurance Integration",
                           "Certified Technical Experts",
                           "Advanced Drying Technologies"
                         ].map((item, idx) => (
                           <motion.li 
                            key={idx} 
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 + idx * 0.1 }}
                            className="flex items-center gap-5 text-sm font-black tracking-widest uppercase"
                           >
                              <div className="w-6 h-6 bg-[#b81c2f] rounded-lg flex items-center justify-center">
                                 <CheckCircle2 size={14} className="text-white" />
                              </div>
                              {item}
                           </motion.li>
                         ))}
                      </ul>
                   </div>

                   <div className="pt-12 border-t border-white/10 space-y-4">
                       <span className="text-[#8b9ad3] text-[11px] font-black tracking-[4px] uppercase block">CRITICAL HOTLINE</span>
                       <div className="text-5xl font-black tracking-tighter text-[#ff535c] hover:scale-105 transition-transform cursor-pointer">
                          214 785 1130
                       </div>
                   </div>
                </div>

                <div className="p-12 md:p-24 lg:w-7/12 bg-white">
                   <form className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="space-y-3">
                            <label className="text-[11px] font-black text-[#081b4d] tracking-[3px] uppercase">IDENTITY</label>
                            <input type="text" placeholder="Your Name" className="w-full bg-slate-50 border-2 border-transparent focus:border-[#b81c2f] focus:bg-white p-6 rounded-2xl outline-none transition-all font-bold" />
                         </div>
                         <div className="space-y-3">
                            <label className="text-[11px] font-black text-[#081b4d] tracking-[3px] uppercase">SECURE PHONE</label>
                            <input type="text" placeholder="(214) 000-0000" className="w-full bg-slate-50 border-2 border-transparent focus:border-[#b81c2f] focus:bg-white p-6 rounded-2xl outline-none transition-all font-bold" />
                         </div>
                      </div>
                      <div className="space-y-3">
                         <label className="text-[11px] font-black text-[#081b4d] tracking-[3px] uppercase">SERVICE LOCATION</label>
                         <input type="text" placeholder="Street Address, City" className="w-full bg-slate-50 border-2 border-transparent focus:border-[#b81c2f] focus:bg-white p-6 rounded-2xl outline-none transition-all font-bold" />
                      </div>
                      <div className="space-y-3">
                         <label className="text-[11px] font-black text-[#081b4d] tracking-[3px] uppercase">URGENCY TYPE</label>
                         <div className="relative">
                            <select className="w-full bg-slate-50 border-2 border-transparent focus:border-[#b81c2f] focus:bg-white p-6 rounded-2xl outline-none transition-all appearance-none font-bold">
                               <option>Active Water Damage</option>
                               <option>Fire/Smoke Crisis</option>
                               <option>Mold Contamination</option>
                               <option>Post-Storm Recovery</option>
                            </select>
                            <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={24} />
                         </div>
                      </div>
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-[#b81c2f] hover:bg-[#a11828] text-white py-8 rounded-2xl font-black text-xl tracking-[4px] uppercase shadow-2xl shadow-red-900/20 transition-all"
                      >
                         INITIATE DISPATCH
                      </motion.button>
                   </form>
                </div>
             </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}