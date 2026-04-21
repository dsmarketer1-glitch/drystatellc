import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  History, 
  Heart, 
  Shield, 
  CheckCircle2,
  ArrowRight,
  Phone
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Assets
const imgAboutHero = "/assets/hero-premium.png"; 
const imgTeam = "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2574&auto=format&fit=crop"; // Trustworthy team image
const imgValues = "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2670&auto=format&fit=crop";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

const AboutUs = () => {
    const { scrollYProgress } = useScroll();
    const heroY = useTransform(scrollYProgress, [0, 0.4], [0, 300]);
    const heroScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.1]);

    return (
        <div className="bg-white min-h-screen flex flex-col pt-[92px]">
            <Header />
            
            <main className="flex-grow">
                {/* HERO SECTION */}
                <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#081b4d]">
                    <motion.div 
                        style={{ y: heroY, scale: heroScale }}
                        className="absolute inset-0 z-0"
                    >
                        <img 
                            src={imgAboutHero} 
                            className="w-full h-full object-cover opacity-60" 
                            alt="Background"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#081b4d]/80 via-transparent to-[#081b4d]" />
                    </motion.div>

                    <div className="container mx-auto px-6 relative z-10 text-center space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="space-y-4"
                        >
                            <span className="text-[#ff535c] text-[13px] font-black tracking-[8px] uppercase block mb-4">DRYSTATE LEGACY</span>
                            <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-extrabold leading-none tracking-tighter">
                                BEYOND <br/> RESTORATION.
                            </h1>
                        </motion.div>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="text-[#8b9ad3] text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed"
                        >
                            We are more than a cleanup crew. We are your dedicated regional partners in returning life to its natural state after crisis strikes.
                        </motion.p>
                    </div>
                </section>

                {/* OUR MISSION */}
                <section className="py-32 bg-white relative">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <motion.div 
                                variants={fadeInUp}
                                initial="initial"
                                whileInView="whileInView"
                                className="space-y-12"
                            >
                                <div className="space-y-6">
                                    <span className="text-[#b81c2f] text-[12px] font-black tracking-[4px] uppercase">OUR PURPOSE</span>
                                    <h2 className="text-[#081b4d] text-6xl font-black tracking-tight leading-none">Recovering Your <br/> peace of mind.</h2>
                                </div>
                                <p className="text-[#45464f] text-xl font-medium leading-relaxed">
                                    Founded in the heart of the DFW Metroplex, DryState was built on a simple principle: when disaster strikes, speed is only second to empathy. We combine cutting-edge structural science with a deeply local commitment to our neighbors.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <div className="w-12 h-12 bg-[#faf8ff] rounded-2xl flex items-center justify-center text-[#b81c2f]">
                                            <Target size={24} />
                                        </div>
                                        <h4 className="text-[#081b4d] text-lg font-black uppercase tracking-tight">Our Mission</h4>
                                        <p className="text-[#757680] font-medium italic">"To provide the most technically advanced and compassionate restoration service in Texas."</p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="w-12 h-12 bg-[#faf8ff] rounded-2xl flex items-center justify-center text-[#081b4d]">
                                            <Award size={24} />
                                        </div>
                                        <h4 className="text-[#081b4d] text-lg font-black uppercase tracking-tight">Our Vision</h4>
                                        <p className="text-[#757680] font-medium italic">"To be the gold standard of trust and excellence in post-disaster recovery."</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                className="relative rounded-[60px] overflow-hidden shadow-2xl aspect-[4/5]"
                            >
                                <img src={imgTeam} className="w-full h-full object-cover" alt="The Team" />
                                <div className="absolute inset-0 bg-[#081b4d]/20 mix-blend-overlay" />
                                <div className="absolute bottom-12 right-12 bg-white p-8 rounded-3xl shadow-2xl max-w-xs text-center space-y-2">
                                    <div className="text-4xl font-black text-[#081b4d]">15+</div>
                                    <div className="text-[10px] font-black tracking-[2px] uppercase text-[#757680]">Years of Combined Experience</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CORE VALUES - STICKY / PARALLAX FEED */}
                <section className="py-32 bg-[#081b4d] text-white">
                    <div className="container mx-auto px-6 space-y-24">
                        <motion.div 
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="whileInView"
                            className="text-center space-y-6"
                        >
                            <span className="text-[#ff535c] text-[12px] font-black tracking-[4px] uppercase">HOW WE OPERATE</span>
                            <h2 className="text-6xl font-black tracking-tight italic">Our Core Values</h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                { 
                                    title: "Relentless Speed", 
                                    desc: "Water waits for no one. Our hyper-local dispatch ensures we're on-site before the damage deepens.", 
                                    icon: History 
                                },
                                { 
                                    title: "Uncompromising Quality", 
                                    desc: "We use the latest thermal imaging and structural drying technologies to ensure total restoration.", 
                                    icon: Shield 
                                },
                                { 
                                    title: "Radical Transparency", 
                                    desc: "From the first assessment to final insurance filing, we keep you informed every step of the way.", 
                                    icon: Heart 
                                }
                            ].map((value, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.2 }}
                                    className="bg-white/5 border border-white/10 p-12 rounded-[40px] space-y-8 hover:bg-white/10 transition-all group"
                                >
                                    <div className="w-16 h-16 bg-[#ff535c] rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
                                        <value.icon size={32} />
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-black tracking-tight uppercase">{value.title}</h3>
                                        <p className="text-[#8b9ad3] text-lg leading-relaxed font-medium">
                                            {value.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* COMMUNITY IMPACT */}
                <section className="py-32 bg-[#faf8ff] relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="relative rounded-[60px] overflow-hidden shadow-2xl aspect-video lg:aspect-square"
                            >
                                <img src={imgValues} className="w-full h-full object-cover" alt="Impact" />
                                <div className="absolute inset-0 bg-[#081b4d]/40" />
                            </motion.div>

                            <motion.div 
                                variants={fadeInUp}
                                initial="initial"
                                whileInView="whileInView"
                                className="space-y-12"
                            >
                                <div className="space-y-6">
                                    <span className="text-[#b81c2f] text-[12px] font-black tracking-[4px] uppercase">OUR IMPACT</span>
                                    <h2 className="text-[#081b4d] text-6xl font-black leading-none tracking-tighter">Committed to <br/> The DFW Area.</h2>
                                    <p className="text-[#45464f] text-xl font-medium leading-relaxed">
                                        As a local business, we don't just work in DFW—we live here. Every project is a commitment to the health and safety of our community. 
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    {[
                                        "Supporting local first responders",
                                        "Certified environmentally safe practices",
                                        "DFW Chamber of Commerce members"
                                    ].map((point, idx) => (
                                        <div key={idx} className="flex items-center gap-4 text-[#081b4d] font-black text-xs tracking-[2px] uppercase">
                                            <CheckCircle2 size={24} className="text-[#b81c2f]" />
                                            {point}
                                        </div>
                                    ))}
                                </div>
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-[#081b4d] text-white px-10 py-5 rounded-2xl font-black text-[13px] tracking-[2px] uppercase shadow-2xl"
                                >
                                    Work With Us
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* EMERGENCY CALL TO ACTION */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6">
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-[#b81c2f] rounded-[60px] p-12 md:p-24 text-center text-white space-y-10 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="space-y-6 relative z-10">
                                <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Ready to Respond?</h2>
                                <p className="text-white/80 text-xl md:text-2xl max-w-2xl mx-auto font-medium">
                                    Disaster doesn't have a schedule. Neither do we. Our teams are always active and ready to move.
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-6 relative z-10">
                                <motion.a 
                                    href="tel:2147851130"
                                    whileHover={{ scale: 1.1 }}
                                    className="bg-white text-[#b81c2f] px-12 py-6 rounded-2xl font-black text-xl tracking-[4px] uppercase flex items-center gap-4 shadow-2xl"
                                >
                                    <Phone size={28} fill="currentColor" />
                                    214 785 1130
                                </motion.a>
                                <motion.div 
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-[#081b4d] text-white px-12 py-6 rounded-2xl font-black text-xl tracking-[4px] uppercase flex items-center gap-4 shadow-2xl cursor-pointer"
                                >
                                    Get Quote
                                    <ArrowRight size={28} />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AboutUs;
