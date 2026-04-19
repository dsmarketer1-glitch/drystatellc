import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { serviceData } from '../data/serviceData';

// Shared Assets (reused from homepage)
const imgIcon = "/assets/8f136fdbb0fe6911b4d8b2ed6df9aa5281ae88e9.svg";
const imgIcon1 = "/assets/79bf564654c5473995bcb6ac6fcd11fea129b91b.svg";
const imgIcon2 = "/assets/1db6ed24f5add73d0c084682d505095da5b8ed03.svg";
const imgContainer = "/assets/65a5f8ed61e79f86d9d22bd63cde33a9605b8f9f.svg";
const imgContainer3 = "/assets/005ed49f91c45f00fadf5274404f7a971104cfaf.svg";
const imgContainer4 = "/assets/6ef15f60ea964ff064dfc8a371d8b3163fa94e12.svg";
const imgContainer5 = "/assets/339011e3d3901e4315b1bb3986bd638433e41c91.svg";

export default function ServicePage() {
  const { serviceId } = useParams();
  const data = serviceData[serviceId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!data) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="content-stretch flex flex-col items-start pb-[18.25px] relative size-full pt-[100px] bg-white">
      <Header />
      
      {/* Main Content */}
      <div className="h-auto relative shrink-0 w-full" data-name="Main">
        
        {/* Hero Section */}
        <div className="relative content-stretch flex items-center justify-center left-0 min-h-[600px] overflow-clip py-[120px] right-0">
          <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center">
            <div className="flex-[1_0_0] min-h-px opacity-20 relative w-full">
              <img alt={data.title} className="absolute inset-0 h-full w-full object-cover grayscale" src={data.heroImage} />
            </div>
            <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(35.7362deg, rgb(250, 248, 255) 0%, rgba(250, 248, 255, 0.9) 50%, rgba(250, 248, 255, 0) 100%)" }} />
          </div>
          <div className="flex-[1_0_0] gap-x-[32px] gap-y-[32px] grid grid-cols-12 max-w-[1280px] mx-auto px-[32px] relative w-full">
            <div className="col-[1/span_9] flex flex-col gap-[32px] items-start">
              <div className="bg-[#ebedff] border border-[rgba(197,198,208,0.3)] border-solid flex gap-[12px] items-center px-[17px] py-[7px] rounded-[12px]">
                <div className="bg-[#b81c2f] rounded-[12px] size-[8px]" />
                <div className="font-['Public_Sans:Bold',sans-serif] font-bold text-[#45464f] text-[10px] tracking-[2px] uppercase">
                    24/7 EXPERT {data.category || 'RESTORATION'}
                </div>
              </div>
              <h1 className="font-['Manrope:ExtraBold',sans-serif] font-extrabold text-[#081b4d] text-[80px] tracking-[-4px] leading-tight">
                {data.titlePrefix} <br/>
                <span className="text-[#b81c2f]">{data.titleHighlight}</span>
              </h1>
              <p className="font-['Inter:Light',sans-serif] font-light text-[#45464f] text-[20px] max-w-[700px] leading-relaxed">
                {data.description}
              </p>
              <div className="flex gap-[16px] pt-[16px]">
                <a href="tel:2147851130" className="bg-[#081b4d] hover:bg-[#b81c2f] transition-all px-[40px] py-[17px] rounded-[6px] text-white font-bold text-[14px] tracking-[1.4px] uppercase">
                  CALL 214-785-1130
                </a>
                <button className="border border-[rgba(197,198,208,0.5)] px-[41px] py-[17px] rounded-[6px] text-[#081b4d] font-bold text-[14px] tracking-[1.4px] uppercase">
                  GET FREE ESTIMATE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-[#f3f2ff] py-[128px]">
          <div className="max-w-[1280px] mx-auto px-[32px] flex flex-col gap-[80px]">
            <div className="flex items-end justify-between">
              <div className="max-w-[672px] flex flex-col gap-[16px]">
                <span className="font-['Public_Sans:Bold',sans-serif] font-bold text-[#b81c2f] text-[12px] tracking-[3.6px] uppercase">
                  HOW WE HELP YOU
                </span>
                <h2 className="font-['Manrope:Bold',sans-serif] font-bold text-[#081b4d] text-[48px] tracking-[-1.2px]">
                  {data.processTitle}
                </h2>
              </div>
              <div className="border-[#b81c2f] border-l-2 pl-[26px] py-[8px] max-w-[448px]">
                <p className="font-['Inter:Italic',sans-serif] italic text-[#45464f] text-[16px] leading-relaxed">
                  {data.processDescription}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-[4px] bg-[rgba(197,198,208,0.1)] rounded-[8px] overflow-hidden shadow-sm">
              {data.processSteps.map((step, idx) => (
                <div key={idx} className="bg-white p-[48px] flex flex-col gap-[16px]">
                  <img src={imgIcon} alt={step.title} className="w-[25px] h-[25px]" />
                  <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-[#041749] text-[24px] mt-4">
                    {step.title}
                  </h3>
                  <p className="font-['Inter:Regular',sans-serif] text-[#45464f] text-[16px] leading-relaxed">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us / Signs Section */}
        <div className="py-[128px] bg-white">
          <div className="max-w-[1280px] mx-auto px-[32px] grid grid-cols-2 gap-[80px] items-center">
            <div className="relative rounded-[24px] overflow-hidden shadow-2xl">
                <img src={data.secondaryImage} alt="Professional Team" className="w-full h-full object-cover min-h-[500px]" />
                <div className="absolute inset-0 bg-[#081b4d]/20 mix-blend-saturation" />
            </div>
            <div className="flex flex-col gap-[32px]">
              <span className="font-['Public_Sans:Bold',sans-serif] font-bold text-[#b81c2f] text-[12px] tracking-[3.6px] uppercase">
                WHY CHOOSE DRYSTATE
              </span>
              <h2 className="font-['Manrope:Bold',sans-serif] font-bold text-[#081b4d] text-[48px] tracking-[-1.2px] leading-tight">
                {data.whyTitle}
              </h2>
              <div className="flex flex-col gap-[24px]">
                {data.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-[16px]">
                    <div className="bg-[#f3f2ff] p-3 rounded-lg h-fit">
                      <img src={imgContainer5} alt="Check" className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#081b4d] text-[18px]">{benefit.title}</h4>
                      <p className="text-[#45464f] text-[14px] leading-relaxed mt-1">{benefit.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-[128px] bg-[#faf8ff]">
          <div className="max-w-[896px] mx-auto px-[32px] flex flex-col gap-[24px]">
            <div className="text-center flex flex-col gap-4">
              <span className="font-['Public_Sans:Bold',sans-serif] font-bold text-[#b81c2f] text-[12px] tracking-[3.6px] uppercase">
                COMMON QUESTIONS
              </span>
              <h2 className="font-['Manrope:ExtraBold',sans-serif] font-extrabold text-[#081b4d] text-[48px] tracking-[-2.4px]">
                Frequently Asked {data.titleHighlight} Questions
              </h2>
            </div>
            <div className="flex flex-col gap-[16px] mt-10">
              {data.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-[rgba(197,198,208,0.1)] p-[33px] rounded-[8px] shadow-sm">
                  <div className="flex justify-between items-center cursor-pointer">
                    <h4 className="font-['Manrope:Bold',sans-serif] font-bold text-[#081b4d] text-[20px]">
                      {faq.question}
                    </h4>
                    <img src={imgContainer} alt="Expand" className="w-3 h-2 transform rotate-180" />
                  </div>
                  <div className="mt-[25px] pt-[25px] border-t border-slate-100">
                    <p className="font-['Inter:Regular',sans-serif] text-[#45464f] text-[16px] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="bg-[#081b4d] py-[80px] text-center text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col items-center gap-6">
                <h2 className="text-[48px] font-extrabold tracking-tight">Need Immediate {data.titleHighlight} Help?</h2>
                <p className="text-[#8b9ad3] text-[20px] max-w-[600px]">Our expert team is on standby 24/7. We reach any DFW location within 60 minutes.</p>
                <div className="mt-8 flex gap-6">
                    <a href="tel:2147851130" className="bg-[#b81c2f] px-12 py-5 rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-red-900/40">
                        CALL 214-785-1130
                    </a>
                </div>
            </div>
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent" />
        </div>

      </div>

      <Footer />
    </div>
  );
}
