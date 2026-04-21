import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Phone, 
  Zap, 
  CheckCircle2, 
  Navigation,
  Wind,
  Droplets,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Assets
const imgDfwMap = "/assets/77e3b453581d8650c52a5b2c006f86e161d047b4.png";
const imgDigitalMap = "/assets/fc7ba96934c0a5c525a036b42f09cef957ca3d83.png";
const imgTechnician = "/assets/hero-premium.png"; 

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

const ArlingtonDFW = () => {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow pt-[92px]">
        {/* HERO SECTION */}
        <section className="bg-[#081b4d] relative min-h-[90vh] flex items-center overflow-hidden">
          <motion.div 
            style={{ y: parallaxY }}
            className="absolute inset-0 z-0 opacity-40"
          >
            <img 
              src={imgDfwMap} 
              alt="DFW Metroplex Map" 
              className="w-full h-full object-cover mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081b4d] via-transparent to-[#081b4d]/60" />
          </motion.div>

          <div className="container mx-auto px-6 relative z-10 py-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl space-y-10"
            >
              <div className="inline-flex items-center gap-3 bg-[#b81c2f15] border border-[#b81c2f30] px-5 py-2.5 rounded-full backdrop-blur-md">
                <div className="w-2.5 h-2.5 rounded-full bg-[#b81c2f] animate-ping" />
                <span className="text-[11px] font-black text-[#ff535c] tracking-[3px] uppercase">
                  RAPID RESPONSE UNIT: ACTIVE
                </span>
              </div>

              <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-extrabold leading-[0.85] tracking-tighter">
                ARLINGTON <br/>
                <span className="text-[#8b9ad3]">STRATEGIC</span> <br/>
                <span className="text-[#8b9ad3]">RECOVERY.</span>
              </h1>

              <p className="text-[#8b9ad3] text-xl md:text-2xl max-w-2xl leading-relaxed font-medium">
                Premier water damage cleanup and restoration across the DFW heartland. 60-minute dispatch from our local Arlington hub.
              </p>

              <div className="flex flex-wrap gap-5 pt-6">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#b81c2f] hover:bg-[#a11828] text-white px-10 py-5 rounded-xl font-black text-[13px] tracking-[2px] uppercase shadow-2xl transition-all"
                >
                  View Coverage Map
                </motion.button>
                <a href="tel:2147851130" className="bg-[#213163] border-2 border-[#8b9ad3]/20 hover:bg-[#2c4184] text-white px-10 py-5 rounded-xl font-black text-[13px] tracking-[2px] uppercase flex items-center gap-3 transition-all">
                   <Phone size={18} />
                   Dispatch Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* COVERAGE MAP SECTION */}
        <section className="py-32 bg-[#f3f2ff]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div 
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                className="space-y-12"
              >
                <div className="space-y-6">
                  <span className="text-[#b81c2f] text-[12px] font-black tracking-[4px] uppercase">OPERATIONAL GRID</span>
                  <h2 className="text-[#081b4d] text-6xl md:text-7xl font-black leading-none tracking-tighter">
                    24/7 Elite <br/> Cleanup.
                  </h2>
                </div>

                <div className="space-y-8">
                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="bg-white p-8 rounded-3xl shadow-xl flex gap-6 border border-slate-100"
                  >
                    <div className="w-14 h-14 bg-[#081b4d] rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg">
                      <Navigation size={28} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-[#081b4d] text-2xl font-black">Arlington Central HQ</h3>
                      <p className="text-[#45464f] text-lg font-medium leading-relaxed">
                        Our strategic nerve center for Tarrant County, ensuring sub-hour response times citywide.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="bg-white p-8 rounded-3xl shadow-xl flex gap-6 border border-slate-100"
                  >
                    <div className="w-14 h-14 bg-[#b81c2f] rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg">
                      <Zap size={28} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-[#081b4d] text-2xl font-black">60-Minute Guarantee</h3>
                      <p className="text-[#45464f] text-lg font-medium leading-relaxed">
                        Water damage doesn't wait. Our localized grid system ensures a certified specialist is on-site in minutes.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-[#041749] rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(4,23,73,0.3)] relative aspect-square">
                  <img 
                    src={imgDigitalMap} 
                    className="w-full h-full object-cover opacity-60 mix-blend-screen"
                    alt="DFW Coverage Map"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041749] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div 
                      animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                      transition={{ repeat: Infinity, duration: 4 }}
                      className="w-48 h-48 bg-[#b81c2f] rounded-full blur-3xl" 
                    />
                    <div className="relative z-10 w-8 h-8 bg-[#b81c2f] border-4 border-white rounded-full shadow-2xl" />
                  </div>

                  <div className="absolute bottom-12 right-12 backdrop-blur-xl bg-white/10 px-6 py-3 rounded-2xl border border-white/20">
                     <span className="text-[11px] font-black text-white tracking-[3px] uppercase">STATUS: FULL COVERAGE</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* REGIONAL HUBS - IMPROVED MOBILE SPACING */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6 text-center space-y-20">
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="space-y-6 max-w-3xl mx-auto"
            >
              <h2 className="text-[#081b4d] text-6xl md:text-7xl font-black tracking-tight leading-none italic">Hyper-Local Response.</h2>
              <p className="text-[#45464f] text-xl font-medium">
                Optimized dispatch stations positioned for maximum speed across North Texas.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {[
                { name: "Dallas Elite", time: "42m", icon: MapPin },
                { name: "Fort Worth unit", time: "55m", icon: Navigation },
                { name: "Arlington Hub", time: "35m", icon: Zap },
                { name: "Irving Rapid", time: "28m", icon: Clock }
              ].map((hub, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-[#faf8ff] p-12 rounded-[40px] text-left space-y-8 border border-slate-50 shadow-sm hover:shadow-2xl hover:bg-white transition-all duration-500"
                >
                  <div className="w-16 h-16 bg-[#081b4d] text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-xl">
                    0{idx + 1}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-[#081b4d] text-3xl font-black tracking-tight">{hub.name}</h3>
                    <p className="text-[#757680] text-lg font-medium leading-relaxed">
                      Precision stationed experts ready for immediate structural intervention.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-[#b81c2f] font-black text-[12px] tracking-widest uppercase">
                    <hub.icon size={18} />
                    {hub.time} AVG RESPONSE
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* NEIGHBORHOODS & ZIP CODES */}
        <section className="py-32 bg-[#081b4d] relative overflow-hidden">
          <div className="absolute top-0 right-0 bottom-0 w-1/3 bg-white/5 skew-x-12 translate-x-20" />
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
              <motion.div 
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                className="lg:col-span-4 space-y-10"
              >
                <div className="space-y-6">
                   <span className="text-[#ff535c] text-[12px] font-black tracking-[4px] uppercase">REGIONAL DEPTH</span>
                   <h2 className="text-white text-6xl font-black leading-[0.9] tracking-tighter">Total North <br/> Texas <br/> Support.</h2>
                </div>
                <p className="text-[#8b9ad3] text-xl font-medium leading-relaxed">
                   From urban high-rises to suburban homes, we bring the same level of elite technical restoration to every zip code in the Metroplex.
                </p>
                <ul className="space-y-5">
                  {[
                    "Licensed Tarrant County Specialists",
                    "Certified Dallas County Response",
                    "Dedicated Denton & Collin Teams"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-white font-black text-[11px] tracking-[2px] uppercase">
                       <CheckCircle2 size={24} className="text-[#ff535c]" />
                       {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
                 {[
                   { title: "CENTRAL ZONES", zones: ["Richland Hills (76118)", "Hurst / Euless / Bedford", "North Richland Hills", "Haltom City", "Colleyville"] },
                   { title: "DALLAS METRO", zones: ["Preston Hollow (75220)", "Highland Park (75205)", "Lakewood (75214)", "Oak Lawn (75219)", "Deep Ellum / City Center"] },
                   { title: "WESTERN GRID", zones: ["Southlake (76092)", "Keller (76244)", "Grapevine (76051)", "Trophy Club", "Roanoke / Alliance"] }
                 ].map((col, idx) => (
                   <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="space-y-8"
                   >
                      <h4 className="border-b-2 border-[#ff535c]/30 text-[#ff535c] text-[11px] font-black tracking-[4px] uppercase mb-8 pb-4">{col.title}</h4>
                      <ul className="space-y-4 text-white/70 text-lg font-bold">
                         {col.zones.map((zone, zidx) => (
                           <li key={zidx} className="hover:text-white transition-colors cursor-default">{zone}</li>
                         ))}
                      </ul>
                   </motion.div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY LOCAL MATTERS - PARALLAX SIDE */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="order-2 lg:order-1 rounded-[56px] overflow-hidden shadow-[0_60px_120px_-30px_rgba(8,27,77,0.2)] group"
              >
                 <img 
                  src={imgTechnician} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-2000"
                  alt="Restoration Specialist"
                 />
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                className="order-1 lg:order-2 space-y-12"
              >
                <div className="space-y-6">
                  <span className="text-[#b81c2f] text-[12px] font-black tracking-[4px] uppercase">THE LOCAL ADVANTAGE</span>
                  <h2 className="text-[#081b4d] text-6xl md:text-7xl font-black tracking-tight leading-[0.9]">Seconds Save <br/> Structures.</h2>
                  <p className="text-[#45464f] text-xl font-medium leading-relaxed">
                    Tarrant County weather can change in an instant. Our Arlington-first dispatch means we're moving before the first drop starts doing real structural damage.
                  </p>
                </div>

                <div className="space-y-10">
                   {[
                     { 
                       title: "Texas Insurance Expertise", 
                       desc: "We understand Texas-specific claims compliance. Our data-rich reports are built for local insurance adjusters.",
                       icon: Wind
                     },
                     { 
                       title: "Hyper-Local Grid Dispatch", 
                       desc: "Eliminating middle-man call centers. Direct-to-technician alert systems from our local DFW hubs.",
                       icon: Navigation
                     }
                   ].map((item, idx) => (
                     <motion.div 
                      key={idx} 
                      whileHover={{ x: 10 }}
                      className="flex gap-8 group"
                     >
                        <div className="w-16 h-16 bg-[#faf8ff] rounded-2xl flex items-center justify-center text-[#081b4d] group-hover:bg-[#081b4d] group-hover:text-white transition-all shadow-sm">
                           <item.icon size={30} />
                        </div>
                        <div className="space-y-2">
                           <h4 className="text-[#081b4d] text-2xl font-black uppercase tracking-tight">{item.title}</h4>
                           <p className="text-[#757680] text-lg font-medium leading-relaxed">
                              {item.desc}
                           </p>
                        </div>
                     </motion.div>
                   ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* EMERGENCY DISPATCH PORTAL */}
        <section className="py-32 bg-[#081b4d]">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[60px] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2"
            >
              <div className="bg-[#213163] p-12 md:p-24 space-y-16 text-white flex flex-col justify-between">
                 <div className="space-y-6">
                    <h2 className="text-7xl font-black tracking-tighter leading-none italic">Secure <br/> Dispatch.</h2>
                    <p className="text-[#8b9ad3] text-xl font-medium leading-relaxed">
                       Immediate technical deployment for water, fire, or mold crisis. Our elite desk is ready for your entry.
                    </p>
                 </div>
                 
                 <div className="space-y-10">
                    <motion.div 
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-8"
                    >
                       <div className="w-20 h-20 bg-[#b81c2f] rounded-[28px] flex items-center justify-center text-white shadow-2xl">
                          <Phone size={36} fill="white" />
                       </div>
                       <div>
                          <span className="text-[#8b9ad3] text-[11px] font-black tracking-[4px] uppercase block mb-1">ELITE HOTLINE</span>
                          <div className="text-4xl font-black tracking-tighter">888.DRY.DFW.1</div>
                       </div>
                    </motion.div>
                    
                    <div className="flex items-center gap-8">
                       <div className="w-20 h-20 bg-white/5 rounded-[28px] flex items-center justify-center text-white border border-white/10">
                          <Clock size={36} />
                       </div>
                       <div>
                          <span className="text-[#8b9ad3] text-[11px] font-black tracking-[4px] uppercase block mb-1">AVAILABILITY</span>
                          <div className="text-3xl font-black tracking-tight uppercase">ALWAYS ACTIVE</div>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="p-12 md:p-24 bg-white">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                       <label className="text-[11px] font-black text-[#081b4d] tracking-[4px] uppercase">IDENTITY</label>
                       <input type="text" placeholder="Full Name" className="w-full bg-[#f8fafc] border-2 border-transparent focus:bg-white focus:border-[#b81c2f] p-6 rounded-2xl outline-none transition-all font-bold" />
                    </div>
                    <div className="space-y-3">
                       <label className="text-[11px] font-black text-[#081b4d] tracking-[4px] uppercase">CONTACT</label>
                       <input type="text" placeholder="(214) 000-0000" className="w-full bg-[#f8fafc] border-2 border-transparent focus:bg-white focus:border-[#b81c2f] p-6 rounded-2xl outline-none transition-all font-bold" />
                    </div>
                  </div>
                  <div className="space-y-3">
                     <label className="text-[11px] font-black text-[#081b4d] tracking-[4px] uppercase">DFW SERVICE ADDRESS</label>
                     <input type="text" placeholder="Street, City, Zip" className="w-full bg-[#f8fafc] border-2 border-transparent focus:bg-white focus:border-[#b81c2f] p-6 rounded-2xl outline-none transition-all font-bold" />
                  </div>
                  <div className="space-y-3">
                     <label className="text-[11px] font-black text-[#081b4d] tracking-[4px] uppercase">CRISIS TYPE</label>
                     <div className="relative">
                        <select className="w-full bg-[#f8fafc] border-2 border-transparent focus:bg-white focus:border-[#b81c2f] p-6 rounded-2xl outline-none transition-all appearance-none font-bold">
                           <option>Extreme Water Damage</option>
                           <option>Structural Fire / Smoke</option>
                           <option>Bio-Hazard / Mold</option>
                           <option>Catastrophic Storm</option>
                        </select>
                        <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-[#081b4d50]" />
                     </div>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#b81c2f] text-white p-8 rounded-2xl font-black text-xl tracking-[4px] uppercase shadow-2xl shadow-red-900/40 transition-all"
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
};

export default ArlingtonDFW;
