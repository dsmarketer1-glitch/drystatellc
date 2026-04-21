import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const restorationServices = [
        { name: "Content Cleaning and Packing", path: "/content-cleaning-and-packing" },
        { name: "Fire Damage Repairs", path: "/fire-damage-repairs" },
        { name: "Flood Damage Cleanup", path: "/flood-damage-cleanup" },
        { name: "Fire Damage Restoration", path: "/fire-damage-restoration" },
        { name: "Water Damage Restoration", path: "/water-damage-restoration" },
        { name: "Reconstruction Service", path: "/reconstruction-service" },
        { name: "Water Removal", path: "/water-removal" },
        { name: "Water Damage Repairs", path: "/water-damage-repairs" },
        { name: "Storm Damage Cleanup", path: "/storm-damage-cleanup" },
        { name: "Smoke Damage Cleanup", path: "/smoke-damage-cleanup" },
        { name: "Sewage Cleanup", path: "/sewage-cleanup" },
    ];

    const cleaningServices = [
        { name: "Air Duct Cleaning", path: "/air-duct-cleaning" },
        { name: "Carpet Cleaning", path: "/carpet-cleaning" },
        { name: "Tile & Grout Cleaning Services", path: "/tile-grout-cleaning-services" },
        { name: "Upholstery Cleaning Services", path: "/upholstery-cleaning-services" },
    ];

    const areasWeServe = [
        { name: "Richland Hills & All DFW", path: "/" },
        { name: "Arlington & All DFW", path: "/arlington-all-dfw-metroplex" },
    ];

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    return (
        <header 
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
                scrolled 
                ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
                : 'bg-white/80 backdrop-blur-sm py-4'
            }`}
        >
            <nav className="container mx-auto px-4 md:px-8 flex items-center justify-between">
                {/* Logo Section */}
                <Link to="/" className="relative z-[110] flex items-center group">
                    <img 
                        src="/assets/logo.png" 
                        alt="DryState Logo" 
                        className={`transition-all duration-500 object-contain object-left ${
                            scrolled ? 'h-[60px] md:h-[80px]' : 'h-[75px] md:h-[100px]'
                        } w-auto`}
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {[
                        { label: 'Restoration', items: restorationServices, id: 'restoration' },
                        { label: 'Cleaning', items: cleaningServices, id: 'cleaning' },
                        { label: 'Areas We Serve', items: areasWeServe, id: 'areas' }
                    ].map((menu) => (
                        <div 
                            key={menu.id}
                            className="relative"
                            onMouseEnter={() => setOpenDropdown(menu.id)}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <button className="flex items-center gap-1 text-[11px] font-black tracking-[1.5px] uppercase text-[#081b4d] hover:text-[#b81c2f] transition-colors py-4">
                                {menu.label}
                                <ChevronDown size={14} className={`transition-transform duration-300 ${openDropdown === menu.id ? 'rotate-180' : ''}`} />
                            </button>
                            
                            <AnimatePresence>
                                {openDropdown === menu.id && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full left-0 bg-white shadow-2xl rounded-xl py-4 w-64 border border-slate-100 overflow-hidden"
                                    >
                                        <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
                                            {menu.items.map((item, idx) => (
                                                <Link 
                                                    key={idx} 
                                                    to={item.path}
                                                    className="block px-6 py-2.5 text-[13px] font-medium text-slate-600 hover:text-white hover:bg-[#b81c2f] transition-all"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                    
                    <Link to="/about" className="text-[11px] font-black tracking-[1.5px] uppercase text-[#081b4d] hover:text-[#b81c2f] transition-colors">
                        About Us
                    </Link>
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-4 relative z-[110]">
                    <div className="hidden xl:flex flex-col items-end mr-4">
                        <span className="text-[9px] font-black text-[#b81c2f] tracking-[1px] uppercase">Emergency Response</span>
                        <a href="tel:2147851130" className="text-[17px] font-black text-[#081b4d]">214 785 1130</a>
                    </div>

                    <a 
                        href="tel:2147851130"
                        className="flex lg:hidden items-center gap-2 bg-[#b81c2f] text-white px-4 py-2.5 rounded-full font-black text-[12px] tracking-wider shadow-lg shadow-red-500/20 active:scale-95 transition-all"
                    >
                        <Phone size={14} fill="currentColor" />
                        CALL NOW
                    </a>

                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-[#081b4d] hover:bg-slate-100 rounded-lg transition-colors"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    <Link 
                        to="/get-quote"
                        className="hidden lg:flex bg-gradient-to-br from-[#081b4d] to-[#213163] text-white px-8 py-3.5 rounded-lg font-black text-[12px] tracking-[1.5px] uppercase shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                    >
                        Emergency Help
                    </Link>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 top-0 left-0 w-full h-screen bg-white z-[105] pt-[100px] overflow-y-auto px-6"
                    >
                        <div className="space-y-6 pb-20">
                            {[
                                { label: 'Restoration Services', items: restorationServices, id: 'mob-rest' },
                                { label: 'Cleaning Services', items: cleaningServices, id: 'mob-clean' },
                                { label: 'Areas We Serve', items: areasWeServe, id: 'mob-areas' }
                            ].map((menu) => (
                                <div key={menu.id} className="border-b border-slate-100 pb-4">
                                    <button 
                                        onClick={() => toggleDropdown(menu.id)}
                                        className="flex items-center justify-between w-full text-lg font-black text-[#081b4d] py-2 uppercase tracking-wide"
                                    >
                                        {menu.label}
                                        <ChevronDown size={20} className={`transition-transform ${openDropdown === menu.id ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {openDropdown === menu.id && (
                                            <motion.div 
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="space-y-3 py-4 pl-4 border-l-2 border-[#b81c2f]">
                                                    {menu.items.map((item, idx) => (
                                                        <Link 
                                                            key={idx} 
                                                            to={item.path} 
                                                            className="block text-slate-600 font-bold hover:text-[#b81c2f]"
                                                            onClick={() => setIsMenuOpen(false)}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                            
                            <Link 
                                to="/about" 
                                className="block text-lg font-black text-[#081b4d] py-2 uppercase tracking-wide"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About Us
                            </Link>

                            <div className="pt-10 space-y-6">
                                <div className="p-6 bg-slate-50 rounded-2xl flex items-center justify-between">
                                    <div>
                                        <span className="text-[10px] font-black text-[#b81c2f] tracking-[1.5px] uppercase">Ready to Respond</span>
                                        <div className="text-2xl font-black text-[#081b4d]">214 785 1130</div>
                                    </div>
                                    <a href="tel:2147851130" className="w-12 h-12 bg-[#b81c2f] text-white rounded-full flex items-center justify-center shadow-lg">
                                        <Phone size={20} fill="currentColor" />
                                    </a>
                                </div>
                                <button className="w-full bg-[#081b4d] text-white py-5 rounded-xl font-black tracking-[2px] uppercase">
                                    Instant Help Request
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
