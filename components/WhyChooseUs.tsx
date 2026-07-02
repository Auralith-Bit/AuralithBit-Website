
import React from 'react';
import { WHY_CHOOSE_US } from '../constants';
import { View } from '../types';

interface WhyChooseUsProps {
  onNavigate: (view: View) => void;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onNavigate }) => {
  return (
    <section className="py-10 xs:py-12 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-20 items-center">
          <div className="relative">
            <div className="rounded-xl xs:rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/id/1/800/800" alt="Team collaborating" className="w-full object-cover aspect-square" />
            </div>
            {/* Floating card - visible on tablet and up */}
            <div className="hidden sm:block absolute -bottom-4 xs:-bottom-6 sm:-bottom-10 -right-2 xs:-right-4 sm:-right-10 bg-white p-4 xs:p-5 sm:p-8 rounded-xl xs:rounded-2xl sm:rounded-3xl shadow-xl border border-slate-100 lg:max-w-xs">
              <p className="text-slate-800 font-bold text-[11px] xs:text-sm sm:text-base lg:text-lg mb-1.5 xs:mb-2">"Quality is never an accident; it is always the result of intelligent effort."</p>
              <div className="flex items-center gap-2 xs:gap-3">
                 <img className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 rounded-full" src="https://picsum.photos/id/11/100/100" alt="Director" />
                 <span className="text-[9px] xs:text-[10px] sm:text-xs text-slate-500">Director, AuralithBit</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 xs:space-y-8 lg:space-y-12 mt-6 xs:mt-8 lg:mt-0">
            <div>
              <h2 className="text-[10px] xs:text-xs sm:text-sm font-bold tracking-widest text-indigo-600 uppercase mb-1.5 xs:mb-2 sm:mb-4">Why AuralithBit?</h2>
              <h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3 xs:mb-4 sm:mb-6">Redefining Tech Education & Industry Delivery</h3>
              <p className="text-[11px] xs:text-sm sm:text-base lg:text-lg text-slate-600">We don't just follow trends; we set them. Our unique blend of production-grade services and intensive training creates a loop of continuous excellence.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
              {WHY_CHOOSE_US.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-3.5 xs:p-5 sm:p-8 bg-white border border-teal-500/30 rounded-xl sm:rounded-3xl group cursor-pointer hover:border-teal-500 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 flex flex-col"
                  onClick={() => onNavigate('about')}
                >
                  <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-lg xs:rounded-xl sm:rounded-2xl bg-white text-teal-600 flex items-center justify-center mb-3 xs:mb-4 sm:mb-6 shadow-sm group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 border border-slate-50">
                    {item.icon}
                  </div>
                  <h4 className="text-base xs:text-lg sm:text-xl font-bold text-slate-900 mb-1.5 xs:mb-2 sm:mb-3">{item.title}</h4>
                  <p className="text-slate-500 text-[11px] xs:text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
