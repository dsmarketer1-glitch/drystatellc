import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const imgButton = "/assets/e4b2731a68bc6a772c595be2337564fbb1724fcf.svg";

const Header = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        { name: "Richland Hills & All DFW Metroplex", path: "/" },
        { name: "Arlington & All DFW Metroplex", path: "/arlington-all-dfw-metroplex" },
    ];

    const handleMouseEnter = (menu) => {
        if (window.innerWidth >= 1024) {
            setOpenDropdown(menu);
        }
    };

    const handleMouseLeave = () => {
        if (window.innerWidth >= 1024) {
            setOpenDropdown(null);
        }
    };

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    return (
        <div className="fixed backdrop-blur-[12px] bg-[rgba(248,250,252,0.95)] flex flex-col items-start left-0 shadow-lg top-0 w-full items-center z-[100] transition-all duration-300" data-node-id="1:389" data-name="Header - Top Navigation">
            <div className="content-stretch flex items-center justify-between max-w-[1536px] mx-auto pl-[32px] pr-[32.02px] py-[16px] relative shrink-0 w-full" data-node-id="1:390" data-name="Container">
                <Link to="/" className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:391" data-name="Link">
                    <div className="flex flex-col justify-center leading-[0] relative shrink-0 whitespace-nowrap" data-node-id="1:392">
                        <img src="/assets/logo.png" alt="DryState Logo" className="w-auto max-w-[200px] md:max-w-[300px] h-[40px] md:h-[60px] object-contain object-left transform md:scale-[1.8] md:translate-x-8 origin-left transition-all duration-300" />
                    </div>
                </Link>

                {/* Mobile Menu Toggle */}
                <button 
                    className="lg:hidden p-2 text-[#081b4d]"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="w-6 h-0.5 bg-current mb-1.5 transition-all"></div>
                    <div className="w-6 h-0.5 bg-current mb-1.5 transition-all"></div>
                    <div className="w-6 h-0.5 bg-current transition-all"></div>
                </button>

                {/* Navigation - Desktop */}
                <div className="hidden lg:flex items-center relative shrink-0 h-full" data-node-id="1:393" data-name="Nav">
                    {/* Restoration Services Dropdown */}
                    <div 
                        className="relative group h-full flex flex-col justify-center"
                        onMouseEnter={() => handleMouseEnter('restoration')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="cursor-pointer border-transparent hover:border-[#1e3a8a] border-b-2 border-solid content-stretch flex flex-col items-start pb-[6px] relative shrink-0 transition-all duration-200">
                            <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1e3a8a] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
                                <p className="leading-[16px]">RESTORATION SERVICES</p>
                            </div>
                        </div>
                        {openDropdown === 'restoration' && (
                            <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-4 w-64 border border-slate-100 animate-in fade-in slide-in-from-top-2 duration-200">
                                {restorationServices.map((service, index) => (
                                    <Link 
                                        key={index} 
                                        to={service.path}
                                        className="block px-6 py-2 text-[13px] font-medium text-slate-600 hover:text-[#b81c2f] hover:bg-slate-50 transition-colors"
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Cleaning Services Dropdown */}
                    <div 
                        className="relative group h-full flex flex-col justify-center pl-[32px]"
                        onMouseEnter={() => handleMouseEnter('cleaning')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="cursor-pointer border-transparent hover:border-[#1e3a8a] border-b-2 border-solid content-stretch flex flex-col items-start pb-[6px] relative shrink-0 transition-all duration-200">
                            <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#475569] hover:text-[#1e3a8a] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
                                <p className="leading-[16px]">CLEANING SERVICES</p>
                            </div>
                        </div>
                        {openDropdown === 'cleaning' && (
                            <div className="absolute top-full left-[32px] bg-white shadow-xl rounded-lg py-4 w-64 border border-slate-100 animate-in fade-in slide-in-from-top-2 duration-200">
                                {cleaningServices.map((service, index) => (
                                    <Link 
                                        key={index} 
                                        to={service.path}
                                        className="block px-6 py-2 text-[13px] font-medium text-slate-600 hover:text-[#b81c2f] hover:bg-slate-50 transition-colors"
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Areas We Serve Dropdown */}
                    <div 
                        className="relative group h-full flex flex-col justify-center pl-[32px]"
                        onMouseEnter={() => handleMouseEnter('areas')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="cursor-pointer border-transparent hover:border-[#1e3a8a] border-b-2 border-solid content-stretch flex flex-col items-start pb-[6px] relative shrink-0 transition-all duration-200">
                            <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#475569] hover:text-[#1e3a8a] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
                                <p className="leading-[16px]">AREAS WE SERVE</p>
                            </div>
                        </div>
                        {openDropdown === 'areas' && (
                            <div className="absolute top-full left-[32px] bg-white shadow-xl rounded-lg py-4 w-72 border border-slate-100 animate-in fade-in slide-in-from-top-2 duration-200">
                                {areasWeServe.map((service, index) => (
                                    <Link 
                                        key={index} 
                                        to={service.path}
                                        className="block px-6 py-2 text-[13px] font-medium text-slate-600 hover:text-[#b81c2f] hover:bg-slate-50 transition-colors"
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link to="/about" className="content-stretch flex flex-col items-start pl-[32px] relative shrink-0" data-node-id="1:402" data-name="Link:margin">
                        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#475569] hover:text-[#1e3a8a] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
                            <p className="leading-[16px]">ABOUT US</p>
                        </div>
                    </Link>
                </div>

                <div className="hidden lg:flex gap-[24px] items-center relative shrink-0" data-node-id="1:404" data-name="Container">
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] font-bold text-[#b81c2f] tracking-[1px] uppercase">Emergency Line</span>
                        <a href="tel:2147851130" className="text-[18px] font-bold text-[#081b4d] hover:text-[#b81c2f] transition-colors">214 785 1130</a>
                    </div>
                    <div className="bg-[#081b4d] hover:bg-[#b81c2f] cursor-pointer transition-all duration-300 content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative rounded-[6px] shrink-0 shadow-lg shadow-blue-900/20" data-node-id="1:407" data-name="Button">
                        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="1:408">
                            <p className="leading-[16px]">EMERGENCY HELP</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="lg:hidden w-full bg-white border-t border-slate-100 py-6 px-8 space-y-6 animate-in slide-in-from-top duration-300">
                    <div className="space-y-4">
                        <button 
                            className="flex items-center justify-between w-full text-[14px] font-bold text-[#1e3a8a] tracking-wider uppercase"
                            onClick={() => toggleDropdown('restoration')}
                        >
                            RESTORATION SERVICES
                            <span>{openDropdown === 'restoration' ? '−' : '+'}</span>
                        </button>
                        {openDropdown === 'restoration' && (
                            <div className="pl-4 space-y-3">
                                {restorationServices.map((service, index) => (
                                    <Link key={index} to={service.path} className="block text-[13px] text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="space-y-4">
                        <button 
                            className="flex items-center justify-between w-full text-[14px] font-bold text-[#475569] tracking-wider uppercase"
                            onClick={() => toggleDropdown('cleaning')}
                        >
                            CLEANING SERVICES
                            <span>{openDropdown === 'cleaning' ? '−' : '+'}</span>
                        </button>
                        {openDropdown === 'cleaning' && (
                            <div className="pl-4 space-y-3">
                                {cleaningServices.map((service, index) => (
                                    <Link key={index} to={service.path} className="block text-[13px] text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="space-y-4">
                        <button 
                            className="flex items-center justify-between w-full text-[14px] font-bold text-[#475569] tracking-wider uppercase"
                            onClick={() => toggleDropdown('areas')}
                        >
                            AREAS WE SERVE
                            <span>{openDropdown === 'areas' ? '−' : '+'}</span>
                        </button>
                        {openDropdown === 'areas' && (
                            <div className="pl-4 space-y-3">
                                {areasWeServe.map((service, index) => (
                                    <Link key={index} to={service.path} className="block text-[13px] text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link to="/about" className="block text-[14px] font-bold text-[#475569] tracking-wider uppercase" onClick={() => setIsMenuOpen(false)}>
                        ABOUT US
                    </Link>

                    <div className="pt-6 border-t border-slate-100 flex flex-col gap-4">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-[#b81c2f] tracking-[1px] uppercase">Emergency Line</span>
                            <a href="tel:2147851130" className="text-[20px] font-extrabold text-[#081b4d]">214 785 1130</a>
                        </div>
                        <div className="bg-[#b81c2f] text-white py-4 rounded-lg font-bold text-center tracking-widest text-[14px] uppercase" onClick={() => setIsMenuOpen(false)}>
                            EMERGENCY HELP
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
