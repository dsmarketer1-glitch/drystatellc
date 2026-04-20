import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const imgDfwMetroplexMap = "http://localhost:3845/assets/c6c735cdda4a02ae768aa64c8e34c5e51cd7f376.png";
const imgDarkThemedHighFidelityDigitalMapOfDallasFortWorthAreaWithStylizedGlowingRoutesAndNodes = "http://localhost:3845/assets/95e947834c2d72ba07d7b9f75c9020ad877dcc81.png";
const imgCloseUpOfAProfessionalRestorationTechnicianCheckingDigitalMoistureMeterReadingsOnAPristineWhiteWall = "http://localhost:3845/assets/b65e2cb536ecdc77dd95546e6e01f3c91bfe8034.png";
const imgContainer = "http://localhost:3845/assets/05b28ddf0261a1c369ea2db10185b9cad582e43d.svg";
const imgContainer1 = "http://localhost:3845/assets/8d8f2b7420a1a5290c5221f81b94b7bafe235ff9.svg";
const imgContainer2 = "http://localhost:3845/assets/1b9730beafde607d2b3f8c27ad4ad12690eb4c1d.svg";
const imgContainer3 = "http://localhost:3845/assets/fe2f3710945995a792b1ad9d201e3b96c7af6bbc.svg";
const imgContainer4 = "http://localhost:3845/assets/c5ef9c1bab6b822761e3886866ac812fbff47c56.svg";
const imgContainer5 = "http://localhost:3845/assets/008682ef0f291bc4e24422f08e6305109942f213.svg";
const imgContainer6 = "http://localhost:3845/assets/b89e323bc532ca136aa49279746f6735daaaf3ef.svg";
const imgIcon = "http://localhost:3845/assets/b7089985dc330d681968d8d36df691872dfda6ba.svg";
const imgIcon1 = "http://localhost:3845/assets/d628471822b02ed997017a72d6f89150e3696023.svg";
const imgContainer7 = "http://localhost:3845/assets/f316b0a380dbbc2ceeaeb46840b22666927565bf.svg";
const imgContainer8 = "http://localhost:3845/assets/fc155ab9619c5f9c0b9acd2dda59cd160575bf54.svg";
const imgSvg = "http://localhost:3845/assets/1baa8ee18bbe1b194307d481e020da23aee820ec.svg";
const imgContainer9 = "http://localhost:3845/assets/3526706e8324d80cdbfab8ff7c95a840be6cefd1.svg";
const imgContainer10 = "http://localhost:3845/assets/5153c680a17b2bac74841c17236899f814cad584.svg";

const ArlingtonDFW = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-[92px]">
        {/* HERO SECTION */}
        <section className="bg-[#081b4d] relative min-h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={imgDfwMetroplexMap} 
              alt="DFW Metroplex Map" 
              className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081b4d] to-transparent via-[#081b4d]/40" />
          </div>

          <div className="container mx-auto px-6 relative z-10 py-20">
            <div className="max-w-4xl space-y-8">
              <div className="inline-flex items-center gap-3 bg-[#b81c2f]/10 border border-[#b81c2f]/20 px-4 py-2 rounded-full">
                <div className="w-2 h-2 rounded-full bg-[#b81c2f] animate-ping" />
                <span className="text-[10px] font-bold text-[#b81c2f] tracking-[2px] uppercase">
                  RAPID RESPONSE ACTIVE
                </span>
              </div>

              <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-tight">
                Strategic <br/>
                <span className="text-[#8b9ad3]">Response:</span> <br/>
                <span className="text-[#8b9ad3]">Your Local Team</span>
              </h1>

              <p className="text-[#8b9ad3] text-lg md:text-xl max-w-2xl leading-relaxed">
                When water damage strikes, every minute counts. DryState provides professional water cleanup and restoration across DFW, with local teams ready to arrive at your door within 60 minutes.
              </p>

              <div className="flex flex-wrap gap-4 pt-6">
                <button className="bg-[#b81c2f] hover:bg-[#a11828] text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-xl">
                  View Coverage Map
                </button>
                <a href="tel:2147851130" className="bg-[#213163] border border-[#8b9ad3]/20 hover:bg-[#2c4184] text-white px-8 py-4 rounded-md font-bold text-lg transition-all">
                   Immediate Dispatch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* COVERAGE MAP SECTION */}
        <section className="py-32 bg-[#f3f2ff]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-[#b81c2f] text-[12px] font-black tracking-[3px] uppercase">METROPLEX ARCHITECTURE</span>
                  <h2 className="text-[#081b4d] text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                    Expert Water Cleanup. <br/> Available 24/7.
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-white border-l-4 border-[#081b4d] p-8 rounded-xl shadow-sm">
                    <h3 className="text-[#081b4d] text-xl font-bold mb-2">Richland Hills HQ</h3>
                    <p className="text-[#757680] leading-relaxed">
                      Our main headquarters serves as the central nervous system for our DFW restoration efforts.
                    </p>
                  </div>
                  <div className="bg-white border-l-4 border-[#b81c2f] p-8 rounded-xl shadow-sm">
                    <h3 className="text-[#081b4d] text-xl font-bold mb-2">60-Minute Response</h3>
                    <p className="text-[#757680] leading-relaxed">
                      We know water damage is an emergency. Our local grid ensures a certified specialist is at your home in under an hour.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="bg-[#041749] rounded-[40px] overflow-hidden shadow-2xl relative aspect-square md:aspect-auto md:h-[600px]">
                  <img 
                    src={imgDarkThemedHighFidelityDigitalMapOfDallasFortWorthAreaWithStylizedGlowingRoutesAndNodes} 
                    className="w-full h-full object-cover opacity-60"
                    alt="DFW Coverage Map"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041749] via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-20 h-20 bg-[#b81c2f]/20 rounded-full animate-ping flex items-center justify-center">
                      <div className="w-12 h-12 bg-[#b81c2f] border-4 border-white rounded-full shadow-2xl" />
                    </div>
                  </div>

                  <div className="absolute bottom-8 right-8 backdrop-blur-md bg-white/90 px-4 py-2 rounded-lg border border-white/20">
                     <span className="text-[10px] font-black text-[#081b4d] tracking-widest uppercase">OPERATIONAL STATUS: ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REGIONAL HUBS */}
        <section className="py-32 bg-[#faf8ff]">
          <div className="container mx-auto px-6 text-center space-y-16">
            <div className="space-y-4 max-w-2xl mx-auto">
              <h2 className="text-[#081b4d] text-4xl md:text-5xl font-extrabold tracking-tight">Fast Water Damage Help</h2>
              <p className="text-[#757680] text-lg">
                Our restoration experts are stationed throughout the DFW area to ensure the fastest response times for your home or business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Dallas Response", time: "45MIN", icon: imgContainer1 },
                { name: "Fort Worth Division", time: "52MIN", icon: imgContainer3 },
                { name: "Arlington Hub", time: "38MIN", icon: imgContainer4 },
                { name: "Irving Rapid", time: "29MIN", icon: imgContainer5 }
              ].map((hub, idx) => (
                <div key={idx} className="bg-[#f3f2ff] p-10 rounded-2xl text-left space-y-6 group hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-[#213163] rounded-lg flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                    {idx + 1}
                  </div>
                  <h3 className="text-[#081b4d] text-2xl font-bold">{hub.name}</h3>
                  <p className="text-[#757680] text-sm leading-relaxed">
                    Our restoration experts are stationed throughout the DFW area to ensure the fastest response times.
                  </p>
                  <div className="flex items-center gap-2 text-[#b81c2f] font-bold text-[10px] tracking-wider uppercase">
                    <span className="w-2 h-2 rounded-full bg-[#b81c2f]" />
                    {hub.time} AVERAGE ARRIVAL
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEIGHBORHOODS & ZIP CODES */}
        <section className="py-32 bg-[#e3e7ff] relative overflow-hidden">
          <div className="absolute top-0 right-0 bottom-0 w-1/3 bg-[#081b4d]/5" />
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-4 space-y-8">
                <h2 className="text-[#081b4d] text-4xl md:text-5xl font-black leading-tight">Reliable Flood Cleanup</h2>
                <p className="text-[#45464f] text-lg leading-relaxed">
                   From minor leaks to major floods, we serve homeowners and businesses across the entire North Texas region with professional restoration services.
                </p>
                <ul className="space-y-4">
                  {[
                    "Fully Licensed in Tarrant County",
                    "Accredited in Dallas County",
                    "Rapid Response for Denton & Collin"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[#081b4d] font-bold">
                       <span className="w-5 h-5 rounded-full bg-[#081b4d] flex items-center justify-center text-white text-[10px]">✓</span>
                       {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                   <h4 className="border-b border-[#b81c2f]/20 text-[#b81c2f] text-[10px] font-black tracking-widest uppercase mb-6 pb-2">CENTRAL ZONES</h4>
                   <ul className="space-y-2 text-[#45464f] text-sm">
                      <li>Richland Hills (76118, 76180)</li>
                      <li>Hurst / Euless / Bedford</li>
                      <li>North Richland Hills</li>
                      <li>Haltom City</li>
                      <li>Colleyville</li>
                   </ul>
                </div>
                <div>
                   <h4 className="border-b border-[#b81c2f]/20 text-[#b81c2f] text-[10px] font-black tracking-widest uppercase mb-6 pb-2">DALLAS PROPER</h4>
                   <ul className="space-y-2 text-[#45464f] text-sm">
                      <li>Preston Hollow (75220)</li>
                      <li>Highland Park (75205)</li>
                      <li>Lakewood (75214)</li>
                      <li>Oak Lawn (75219)</li>
                      <li>Deep Ellum</li>
                   </ul>
                </div>
                <div>
                   <h4 className="border-b border-[#b81c2f]/20 text-[#b81c2f] text-[10px] font-black tracking-widest uppercase mb-6 pb-2">THE WEST SIDE</h4>
                   <ul className="space-y-2 text-[#45464f] text-sm">
                      <li>Southlake (76092)</li>
                      <li>Keller (76244)</li>
                      <li>Grapevine (76051)</li>
                      <li>Trophy Club</li>
                      <li>Roanoke</li>
                   </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY LOCAL MATTERS */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl">
                 <img 
                  src={imgCloseUpOfAProfessionalRestorationTechnicianCheckingDigitalMoistureMeterReadingsOnAPristineWhiteWall} 
                  className="w-full h-full object-cover"
                  alt="Restoration Specialist"
                 />
              </div>

              <div className="order-1 lg:order-2 space-y-8">
                <div className="space-y-4">
                  <span className="text-[#b81c2f] text-[12px] font-black tracking-[3px] uppercase">THE LOCAL ADVANTAGE</span>
                  <h2 className="text-[#081b4d] text-4xl md:text-5xl font-extrabold leading-tight">Quick Action Saves Your Home</h2>
                  <p className="text-[#757680] text-lg leading-relaxed">
                    In North Texas, a small leak can turn into a major flood in minutes. DryState's local presence means we get there faster to stop the damage and start the drying process immediately.
                  </p>
                </div>

                <div className="space-y-8">
                   <div className="flex gap-6">
                      <div className="w-12 h-12 bg-[#f3f2ff] rounded-xl flex items-center justify-center shrink-0">
                         <span className="text-xl">📄</span>
                      </div>
                      <div className="space-y-2">
                         <h4 className="text-[#081b4d] font-bold">Local Insurance Expertise</h4>
                         <p className="text-[#757680] text-sm leading-relaxed">
                            We speak the language of Texas insurance adjusters. Our documentation is tailored for local compliance and faster claim approval.
                         </p>
                      </div>
                   </div>
                   <div className="flex gap-6">
                      <div className="w-12 h-12 bg-[#f3f2ff] rounded-xl flex items-center justify-center shrink-0">
                         <span className="text-xl">⚡</span>
                      </div>
                      <div className="space-y-2">
                         <h4 className="text-[#081b4d] font-bold">Hyper-Local Dispatch</h4>
                         <p className="text-[#757680] text-sm leading-relaxed">
                            No call centers. Direct-to-technician dispatch from our Richland Hills and Irving hubs.
                         </p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EMERGENCY DISPATCH PORTAL */}
        <section className="py-32 bg-[#081b4d]">
          <div className="container mx-auto px-6">
            <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-[#213163] p-12 md:p-20 space-y-10 text-white">
                 <h2 className="text-5xl md:text-6xl font-black tracking-tighter">Get Help <br/> Now.</h2>
                 <p className="text-[#8b9ad3] text-lg leading-relaxed">
                    Don't wait for water damage to get worse. Submit your details for an immediate restoration assessment. Our DFW team will respond within minutes.
                 </p>
                 <div className="space-y-8">
                    <div className="flex items-center gap-6">
                       <div className="w-14 h-14 bg-[#b81c2f] rounded-2xl flex items-center justify-center text-white text-2xl">
                          📞
                       </div>
                       <div>
                          <span className="text-[#8b9ad3] text-[10px] font-black tracking-[2px] uppercase">PRIORITY LINE</span>
                          <div className="text-2xl md:text-3xl font-bold tracking-tight">888.DRY.DFW.1</div>
                       </div>
                    </div>
                    <div className="flex items-center gap-6">
                       <div className="w-14 h-14 bg-[#354477] rounded-2xl flex items-center justify-center text-white text-2xl">
                          ⏰
                       </div>
                       <div>
                          <span className="text-[#8b9ad3] text-[10px] font-black tracking-[2px] uppercase">DISPATCH CLOCK</span>
                          <div className="text-2xl md:text-3xl font-bold tracking-tight">Always Active 24/7</div>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="p-12 md:p-20 bg-white">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-[#081b4d] tracking-widest uppercase">FULL NAME</label>
                       <input type="text" placeholder="Enter name" className="w-full bg-[#ebedff] border-transparent focus:bg-white focus:border-[#b81c2f] p-4 rounded-lg outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-[#081b4d] tracking-widest uppercase">PHONE NUMBER</label>
                       <input type="text" placeholder="Enter mobile" className="w-full bg-[#ebedff] border-transparent focus:bg-white focus:border-[#b81c2f] p-4 rounded-lg outline-none transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-[#081b4d] tracking-widest uppercase">DFW SERVICE ADDRESS</label>
                     <input type="text" placeholder="Address, City, Zip" className="w-full bg-[#ebedff] border-transparent focus:bg-white focus:border-[#b81c2f] p-4 rounded-lg outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-[#081b4d] tracking-widest uppercase">DAMAGE TYPE</label>
                     <select className="w-full bg-[#ebedff] border-transparent focus:bg-white focus:border-[#b81c2f] p-4 rounded-lg outline-none transition-all appearance-none">
                        <option>Water Damage / Flood</option>
                        <option>Fire / Smoke</option>
                        <option>Mold Remediation</option>
                        <option>Storm Damage</option>
                     </select>
                  </div>
                  <button className="w-full bg-[#b81c2f] hover:bg-[#a11828] text-white p-6 rounded-lg font-bold text-xl transition-all shadow-xl shadow-[#b81c2f]/20">
                    Initiate Rapid Response
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ArlingtonDFW;
