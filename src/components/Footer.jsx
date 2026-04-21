import React from 'react';
import { Link } from 'react-router-dom';

const imgIcon9 = "/assets/e4a6b039c39cc74aa911a6f21c2aa8127547ff05.svg";
const imgIcon10 = "/assets/51bed875f516d7ac34f66e979316fc405aed7f46.svg";
const imgIcon11 = "/assets/46552a0c5be0a2e761f43191ab8b4a706113879d.svg";

const Footer = () => {
    return (
        <div className="bg-[#f8fafc] border-[rgba(226,232,240,0.2)] border-solid border-t content-stretch flex flex-col gap-[80px] items-start pb-[80px] pt-[81px] relative shrink-0 w-full" data-node-id="1:342" data-name="Footer">
            <div className="max-w-[1280px] mx-auto relative shrink-0 w-full" data-node-id="1:343" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[48px] gap-y-[48px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[inherit] px-[32px] relative size-full">
                    <div className="col-1 content-stretch flex flex-col gap-[22.8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-node-id="1:344" data-name="Container">
                        <div className="flex flex-col justify-center leading-[0] relative shrink-0 whitespace-nowrap" data-node-id="1:345">
                            <img src="/assets/logo.png" alt="DryState Logo" className="w-auto max-w-[400px] h-[90px] object-contain object-left transform scale-[2] translate-x-4 origin-left" />
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full pt-4" data-node-id="1:346" data-name="Container">
                            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-full" data-node-id="1:347">
                                <p className="leading-[22.75px] mb-0">Expert Water Damage Restoration and</p>
                                <p className="leading-[22.75px] mb-0">Emergency Cleanup services for the</p>
                                <p className="leading-[22.75px]">entire DFW Metroplex.</p>
                            </div>
                        </div>
                        <div className="content-stretch flex gap-[16px] h-[23.7px] items-start pt-[1.2px] relative shrink-0 w-full" data-node-id="1:348" data-name="Container">
                            <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-node-id="1:349" data-name="Container">
                                <div className="h-[19.5px] relative shrink-0 w-[17.5px]" data-node-id="1:350" data-name="Icon">
                                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon9} />
                                </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-node-id="1:351" data-name="Container">
                                <div className="h-[22.5px] relative shrink-0 w-[23.5px]" data-node-id="1:352" data-name="Icon">
                                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon10} />
                                </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-node-id="1:353" data-name="Container">
                                <div className="h-[18.942px] relative shrink-0 w-[15px]" data-node-id="1:354" data-name="Icon">
                                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon11} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[12.25px] relative row-1 self-start shrink-0" data-node-id="1:355" data-name="Container">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:356" data-name="Heading 5">
                            <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#172554] text-[14px] tracking-[1.4px] uppercase w-full" data-node-id="1:357">
                                <p className="leading-[20px]">OUR SERVICES</p>
                            </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:358" data-name="List">
                            <Link to="/water-damage-restoration" className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] hover:text-[#b81c2f] transition-colors text-[12px] w-full">
                                    <p className="leading-[16px]">Water Cleanup</p>
                                </div>
                            </Link>
                            <Link to="/mold-removal" className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] hover:text-[#b81c2f] transition-colors text-[12px] w-full">
                                    <p className="leading-[16px]">Mold Removal</p>
                                </div>
                            </Link>
                            <Link to="/fire-damage-restoration" className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] hover:text-[#b81c2f] transition-colors text-[12px] w-full">
                                    <p className="leading-[16px]">Fire Restoration</p>
                                </div>
                            </Link>
                            <Link to="/water-removal" className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] hover:text-[#b81c2f] transition-colors text-[12px] w-full">
                                    <p className="leading-[16px]">Emergency Drying</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-3 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[12.25px] relative row-1 self-start shrink-0" data-node-id="1:367" data-name="Container">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:368" data-name="Heading 5">
                            <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#172554] text-[14px] tracking-[1.4px] uppercase w-full" data-node-id="1:369">
                                <p className="leading-[20px]">HELPFUL INFO</p>
                            </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:370" data-name="List">
                            <Link to="/arlington-all-dfw-metroplex" className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] hover:text-[#b81c2f] transition-colors text-[12px] w-full">
                                    <p className="leading-[16px]">Arlington Service Area</p>
                                </div>
                            </Link>
                            <Link to="/about" className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] hover:text-[#b81c2f] transition-colors text-[12px] w-full">
                                    <p className="leading-[16px]">About DryState</p>
                                </div>
                            </Link>
                            <Link to="/" className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] hover:text-[#b81c2f] transition-colors text-[12px] w-full">
                                    <p className="leading-[16px]">Privacy Policy</p>
                                </div>
                            </Link>
                            <Link to="/" className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] hover:text-[#b81c2f] transition-colors text-[12px] w-full">
                                    <p className="leading-[16px]">Terms of Service</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-4 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[21.75px] relative row-1 self-start shrink-0" data-node-id="1:379" data-name="Container">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:380" data-name="Heading 5">
                            <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#172554] text-[14px] tracking-[1.4px] uppercase w-full" data-node-id="1:357">
                                <p className="leading-[20px]">LOCAL DFW OFFICE</p>
                            </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:382" data-name="Container">
                            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-full" data-node-id="1:383">
                                <p className="leading-[19.5px] mb-0">8400 Boulevard 26</p>
                                <p className="leading-[19.5px] mb-0">Richland Hills, TX 76180</p>
                                <p className="leading-[19.5px]">United States</p>
                            </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:384" data-name="Container">
                            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#b81c2f] text-[14px] w-full" data-node-id="1:385">
                                <p className="leading-[20px]">Open 24/7/365</p>
                            </div>
                        </div>
                        <div className="mt-4">
                             <a href="tel:2147851130" className="text-[20px] font-extrabold text-[#081b4d] hover:text-[#b81c2f] transition-colors">214 785 1130</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-[#e2e8f0] border-solid border-t max-w-[1280px] mx-auto relative shrink-0 w-full" data-node-id="1:386" data-name="HorizontalBorder">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pt-[33px] px-[32px] relative size-full">
                    <div className="relative shrink-0 w-full" data-node-id="1:387" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                            <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] tracking-[1px] uppercase w-full" data-node-id="1:388">
                                <p className="leading-[15px]">© 2024 DRYSTATE WATER RESTORATION. ALL RIGHTS RESERVED.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
